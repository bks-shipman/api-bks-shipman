import prisma from "../../prisma/client.js";
import { deleteImage, upload } from "../middleware/cloudinary.js";

export const getExhibitions = async (req, res) => {
    try {
        const data = await prisma.exhibition.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createExhibition = async (req, res) => {
    const photo = req.file;
    const { description, description_en, date, name, name_en } = req.body;
    if (!photo || !description || !description_en || !date || !name || !name_en) {
        return res.status(400).json({ message: `Kolom ${!photo ? "Foto" : !description ? "Deskripsi" : !description_en ? "Deskripsi (EN)" : !date ? "Tanggal Acara" : !name ? "Nama" : "Nama (EN)"} harus diisi` });
    }
    const cloudinaryPhoto = await upload(photo, "exhibitions");

    const data = await prisma.exhibition.create({
        data: { name, name_en, photo: cloudinaryPhoto.url, description, description_en, date: new Date(date).toISOString() }
    });

    res.json({ message: "Exhibition dibuat", data });
};

export const updateExhibition = async (req, res) => {
    const { id } = req.params;
    const photoFile = req.file; // file upload
    const { description, description_en, date, name, name_en, photo } = req.body;

    const existing = await prisma.exhibition.findUnique({
        where: { id: Number(id) },
    });

    if (!existing) {
        return res.status(400).json({ message: "Exhibition tidak ditemukan" });
    }

    if (!description || !description_en || !date || !name || !name_en) {
        return res.status(400).json({ message: `Kolom ${!description ? "Deskripsi" : !description_en ? "Deskripsi (EN)" : !date ? "Tanggal Acara" : !name ? "Nama" : "Nama (EN)"} harus diisi` });
    }

    let fotoUrl = existing.photo;

    // =============================
    // 1️⃣ Jika upload file baru
    // =============================
    if (photoFile) {
        const publicId = existing.photo.split("/").pop().split(".")[0];
        const publicFolder = existing.photo.split("/").slice(-2, -1)[0];

        await deleteImage(publicId, publicFolder);


        const uploadResult = await upload(photoFile, publicFolder);
        fotoUrl = uploadResult.url;
    }

    // =============================
    // 2️⃣ Jika kirim link string
    // =============================
    else if (photo && typeof photo === "string" && photo.trim() !== "") {
        fotoUrl = photo;
    }

    const data = await prisma.exhibition.update({
        where: { id: Number(id) },
        data: { name, name_en, photo: fotoUrl, description, description_en, date: new Date(date).toISOString() }
    });

    res.json({ message: "Exhibition diperbarui", data });
};

export const deleteExhibition = async (req, res) => {
    for (const exhibitionId of req.body.id) {
        const exhibition = await prisma.exhibition.findUnique({
            where: { id: Number(exhibitionId) },
        });
        if (exhibition) {
            const publicId = exhibition.photo.split("/").pop().split(".")[0];
            const publicFolder = exhibition.photo.split("/").slice(-2, -1)[0];
            await deleteImage(publicId, publicFolder);
        }
    }
    await prisma.exhibition.deleteMany({ where: { id: { in: req.body.id.map(Number) } } });
    res.json({ message: "Exhibition dihapus" });
};
