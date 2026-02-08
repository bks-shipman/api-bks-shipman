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
    const { description, date } = req.body;
    if (!photo || !description || !date) {
        return res.status(400).json({ message: `Kolom ${!photo ? "Foto" : !description ? "Deskripsi" : "Tanggal Acara"} harus diisi` });
    }
    const cloudinaryPhoto = await upload(photo, "exhibitions");

    const data = await prisma.exhibition.create({
        data: { photo: cloudinaryPhoto.url, description, date: new Date(date).toISOString() }
    });

    res.json({ message: "Exhibition dibuat", data });
};

export const updateExhibition = async (req, res) => {
    const { id } = req.params;
    const photo = req.file;
    const { description, date } = req.body;

    const exhibition = await prisma.exhibition.findUnique({
        where: { id: Number(id) },
    });

    if (!exhibition) {
        return res.status(400).json({ message: "Exhibition tidak ditemukan" });
    }

    if (!photo || !description || !date) {
        return res.status(400).json({ message: `Kolom ${!photo ? "Foto" : !description ? "Deskripsi" : "Tanggal Acara"} harus diisi` });
    }

    let fotoUrl;
    const publicId = exhibition.photo.split("/").pop().split(".")[0];
    const publicFolder = exhibition.photo.split("/").slice(-2, -1)[0];
    if (photo) {
        await deleteImage(publicId, publicFolder);
        const uploadResult = await upload(photo, publicFolder);

        fotoUrl = uploadResult.url;
    } else if (typeof photo === "string" && photo.trim() !== "") {
        fotoUrl = photo;
    } else {
        fotoUrl = exhibition.photo;
    }

    const data = await prisma.exhibition.update({
        where: { id: Number(id) },
        data: { photo: fotoUrl, description, date: new Date(date).toISOString() }
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
