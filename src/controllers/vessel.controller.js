import prisma from "../../prisma/client.js";
import { deleteImage, upload } from "../middleware/cloudinary.js";

export const getVessels = async (req, res) => {
    try {
        const data = await prisma.vessel.findMany({
            include: {
                vesselType: true,
            },
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createVessel = async (req, res) => {
    const photo = req.file;
    const { name, description, vesselTypeId } = req.body;

    if (!photo || !name || !description || !vesselTypeId) {
        return res.status(400).json({ message: `Kolom ${!photo ? "Foto" : !name ? "Nama" : !description ? "Deskripsi" : "Tipe Kapal"} harus diisi` });
    }
    const cloudinaryPhoto = await upload(photo, "vessels");

    const vesselType = await prisma.vesselType.findUnique({
        where: { id: Number(vesselTypeId) },
    });

    if (!vesselType) {
        return res.status(400).json({ message: "Tipe kapal tidak ditemukan" });
    }

    const vessel = await prisma.vessel.create({
        data: {
            name,
            description,
            photo: cloudinaryPhoto.url,
            vesselTypeId: Number(vesselType.id),
        },
    });

    res.status(201).json({
        message: "Vessel berhasil dibuat",
        vessel,
    });
};

export const updateVessel = async (req, res) => {
    const { id } = req.params;
    const photo = req.file;
    const { name, description, vesselTypeId } = req.body;

    const existing = await prisma.vessel.findUnique({
        where: { id: Number(id) },
    });

    if (!existing) {
        return res.status(404).json({ message: "Vessel tidak ditemukan" });
    }

    if (!photo || !name || !description || !vesselTypeId) {
        return res.status(400).json({ message: `Kolom ${!photo ? "Foto" : !name ? "Nama" : !description ? "Deskripsi" : "Tipe Kapal"} harus diisi` });
    }

    let fotoUrl;
    const publicId = existing.photo.split("/").pop().split(".")[0];
    const publicFolder = existing.photo.split("/").slice(-2, -1)[0];
    if (photo) {
        await deleteImage(publicId, publicFolder);
        const uploadResult = await upload(photo, publicFolder);

        fotoUrl = uploadResult.url;
    } else if (typeof photo === "string" && photo.trim() !== "") {
        fotoUrl = photo;
    } else {
        fotoUrl = existing.photo;
    }

    const updated = await prisma.vessel.update({
        where: { id: Number(id) },
        data: {
            name,
            description,
            photo: fotoUrl,
            vesselTypeId: Number(vesselTypeId),
        },
    });

    res.json({
        message: "Vessel berhasil diperbarui",
        vessel: updated,
    });
};

export const deleteVessel = async (req, res) => {
    for (const vesselId of req.body.id) {
        const vessel = await prisma.vessel.findUnique({
            where: { id: Number(vesselId) },
        });
        if (vessel) {
            const publicId = vessel.photo.split("/").pop().split(".")[0];
            const publicFolder = vessel.photo.split("/").slice(-2, -1)[0];
            await deleteImage(publicId, publicFolder);
        }
    }
    await prisma.exhibition.deleteMany({ where: { id: { in: req.body.id.map(Number) } } });
    res.json({ message: "Vessel dihapus" });
};
