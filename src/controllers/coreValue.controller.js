import prisma from "../../prisma/client.js";

export const getCoreValues = async (req, res) => {
    try {
        const data = await prisma.coreValue.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCoreValue = async (req, res) => {
    const { title, title_en } = req.body;
    if (!title || !title_en) {
        return res.status(400).json({ message: "Layanan dan layanan (EN) wajib diisi" });
    }

    const data = await prisma.coreValue.create({ data: { title, title_en } });
    res.json({ message: "Core Value dibuat", data });
};

export const updateCoreValue = async (req, res) => {
    const { id } = req.params;
    const { title, title_en } = req.body;

    if (!title || !title_en) {
        return res.status(400).json({ message: "Layanan dan layanan (EN) wajib diisi" });
    }

    const data = await prisma.coreValue.update({
        where: { id: Number(id) },
        data: { title, title_en },
    });

    res.json({ message: "Core Value diperbarui", data });
};

export const deleteCoreValue = async (req, res) => {
    const { id } = req.params;

    await prisma.coreValue.delete({
        where: { id: Number(id) },
    });

    res.json({ message: "Core Value berhasil dihapus" });
};
