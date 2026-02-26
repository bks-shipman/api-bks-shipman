import prisma from "../../prisma/client.js";
import { deleteImage, upload } from "../middleware/cloudinary.js";

export const getCaptain = async (req, res) => {
    try {
        const data = await prisma.captain.findFirst();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createOrUpdateCaptain = async (req, res) => {
    try {
        const { name, quote, photo } = req.body;
        const photoFile = req.file;

        if (!name || !quote) {
            return res.status(400).json({
                message: `Kolom ${!name ? "Nama" : "Quote"} wajib diisi`,
            });
        }

        const existing = await prisma.captain.findFirst({
            orderBy: { id: "asc" },
        });

        let fotoUrl = existing?.photo || null;

        // =============================
        // 1️⃣ Jika upload file baru
        // =============================
        if (photoFile) {
            // Hapus foto lama jika ada
            if (existing?.photo) {
                try {
                    const publicId = existing.photo.split("/").pop().split(".")[0];
                    const publicFolder = existing.photo.split("/").slice(-2, -1)[0];

                    await deleteImage(publicId, publicFolder);
                } catch (err) {
                    console.warn("Gagal hapus foto lama:", err.message);
                }
            }

            const uploadResult = await upload(photoFile, "captain");
            fotoUrl = uploadResult.url;
        }

        // =============================
        // 2️⃣ Jika kirim string photo (tanpa upload)
        // =============================
        else if (photo && typeof photo === "string" && photo.trim() !== "") {
            fotoUrl = photo;
        }

        // =============================
        // 3️⃣ Jika create pertama kali & tidak ada foto
        // =============================
        if (!existing && !fotoUrl) {
            return res.status(400).json({
                message: "Foto wajib diisi",
            });
        }

        const data = existing
            ? await prisma.captain.update({
                where: { id: existing.id },
                data: {
                    name,
                    quote,
                    photo: fotoUrl,
                },
            })
            : await prisma.captain.create({
                data: {
                    name,
                    quote,
                    photo: fotoUrl,
                },
            });

        res.json({
            message: "Kapten berhasil disimpan",
            captain: data,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
