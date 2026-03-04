import prisma from "../../prisma/client.js";

export const getVision = async (req, res) => {
    const data = await prisma.vision.findFirst();
    res.json(data);
};

export const createOrUpdateVision = async (req, res) => {
    const { description, description_en } = req.body;

    if (!description || !description_en) {
        return res.status(400).json({ message: "Deskripsi visi dan deskripsi visi (EN) wajib diisi" });
    }

    const existing = await prisma.vision.findFirst();

    const data = existing
        ? await prisma.vision.update({
            where: { id: existing.id },
            data: { description, description_en },
        })
        : await prisma.vision.create({
            data: { description, description_en },
        });

    res.json({
        message: "Visi berhasil disimpan",
        vision: data,
    });
};
