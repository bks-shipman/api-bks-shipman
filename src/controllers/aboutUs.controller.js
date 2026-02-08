import prisma from "../../prisma/client.js";

export const getAboutUs = async (req, res) => {
    try {
        const data = await prisma.aboutUs.findFirst();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createOrUpdateAboutUs = async (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ message: "Deskripsi harus diisi" });
    }

    const existing = await prisma.aboutUs.findFirst();

    const data = existing
        ? await prisma.aboutUs.update({
            where: { id: existing.id },
            data: { description },
        })
        : await prisma.aboutUs.create({
            data: { description },
        });

    res.status(200).json({
        message: "About Us berhasil disimpan",
        aboutUs: data,
    });
};
