import prisma from "../../prisma/client.js";

export const getVision = async (req, res) => {
    const data = await prisma.vision.findFirst();
    res.json(data);
};

export const createOrUpdateVision = async (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ message: "Deskripsi visi wajib diisi" });
    }

    const existing = await prisma.vision.findFirst();

    const data = existing
        ? await prisma.vision.update({
            where: { id: existing.id },
            data: { description },
        })
        : await prisma.vision.create({
            data: { description },
        });

    res.json({
        message: "Visi berhasil disimpan",
        vision: data,
    });
};
