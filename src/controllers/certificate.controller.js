import prisma from "../../prisma/client.js";
import { deleteImage, upload2 } from "../middleware/cloudinary.js";

export const getCertificates = async (req, res) => {
    try {
        const certificates = await prisma.certificate.findMany();
        res.json({ certificates });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCertificate = async (req, res) => {
    const file = req.file;
    const { name } = req.body;

    if (!file || !name) {
        return res.status(400).json({ message: `Kolom ${!file ? "File" : !name ? "Nama" : "Deskripsi"} harus diisi` });
    }
    const cloudinaryPhoto = await upload2(file, "certificates");


    const certificate = await prisma.certificate.create({
        data: {
            name,
            file: cloudinaryPhoto.url,
        },
    });

    res.status(201).json({
        message: "Certificate berhasil dibuat",
        certificate,
    });
};

export const updateCertificate = async (req, res) => {
    const { id } = req.params;
    const newFile = req.file; // file upload
    const { name, file } = req.body;

    const existing = await prisma.certificate.findUnique({
        where: { id: Number(id) },
    });

    if (!existing) {
        return res.status(404).json({ message: "Certificate tidak ditemukan" });
    }

    // VALIDASI TANPA FOTO
    if (!name) {
        return res.status(400).json({
            message: "Nama harus diisi",
        });
    }

    let fotoUrl = existing.file;

    // =============================
    // 1️⃣ Jika upload file baru
    // =============================
    if (newFile) {
        const publicId = existing.file.split("/").pop().split(".")[0];
        const publicFolder = existing.file.split("/").slice(-2, -1)[0];

        await deleteImage(publicId, publicFolder);


        const uploadResult = await upload2(newFile, publicFolder);
        fotoUrl = uploadResult.url;
    }

    // =============================
    // 2️⃣ Jika kirim link string
    // =============================
    else if (file && typeof file === "string" && file.trim() !== "") {
        fotoUrl = file;
    }

    // =============================
    // 3️⃣ Jika tidak kirim apa-apa
    // =============================
    // tetap pakai existing.photo (sudah default)

    const updated = await prisma.certificate.update({
        where: { id: Number(id) },
        data: {
            name,
            file: fotoUrl,
        },
    });

    res.json({
        message: "Certificate berhasil diperbarui",
        certificate: updated,
    });
};

export const deleteCertificate = async (req, res) => {
    for (const certificateId of req.body.id) {
        const certificate = await prisma.certificate.findUnique({
            where: { id: Number(certificateId) },
        });
        if (certificate) {
            const publicId = certificate.file.split("/").pop().split(".")[0];
            const publicFolder = certificate.file.split("/").slice(-2, -1)[0];
            await deleteImage(publicId, publicFolder);
        }
    }
    await prisma.certificate.deleteMany({ where: { id: { in: req.body.id.map(Number) } } });
    res.json({ message: "Certificate dihapus" });
};
