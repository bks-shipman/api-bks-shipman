import prisma from "../../prisma/client.js";
import { deleteImage, upload } from "../middleware/cloudinary.js";

export const getPartner = async (req, res) => {
    try {
        const data = await prisma.partner.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPartner = async (req, res) => {
    const photo = req.file;
    const { name } = req.body;
    if (!photo || !name) {
        return res.status(400).json({ message: `Kolom ${!photo ? "Foto" : "Nama"} harus diisi` });
    }
    const cloudinaryPhoto = await upload(photo, "partners");

    const data = await prisma.partner.create({
        data: { name, photo: cloudinaryPhoto.url }
    });

    res.json({ message: "Partner dibuat", data });
};

export const updatePartner = async (req, res) => {
    const { id } = req.params;
    const photoFile = req.file; // file upload
    const { name, photo } = req.body;

    const existing = await prisma.partner.findUnique({
        where: { id: Number(id) },
    });

    if (!existing) {
        return res.status(400).json({ message: "Partner tidak ditemukan" });
    }

    if (!name) {
        return res.status(400).json({ message: `Kolom Nama harus diisi` });
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

    const data = await prisma.partner.update({
        where: { id: Number(id) },
        data: { name, photo: fotoUrl }
    });

    res.json({ message: "Partner diperbarui", data });
};

export const deletePartner = async (req, res) => {
    for (const partnerId of req.body.id) {
        const partner = await prisma.partner.findUnique({
            where: { id: Number(partnerId) },
        });
        if (partner) {
            const publicId = partner.photo.split("/").pop().split(".")[0];
            const publicFolder = partner.photo.split("/").slice(-2, -1)[0];
            await deleteImage(publicId, publicFolder);
        }
    }
    await prisma.partner.deleteMany({ where: { id: { in: req.body.id.map(Number) } } });
    res.json({ message: "Partner dihapus" });
};
