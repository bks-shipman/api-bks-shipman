import prisma from "../../prisma/client.js";

export const getTitles = async (req, res) => {
    try {
        const data = await prisma.title.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTitle = async (req, res) => {
    const { title, title_en, title2, title2_en, subtitle, subtitle_en, type, tag, tag_en } = req.body;
    if (!title || !type || !title_en) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : !title_en ? "Judul (EN)" : "Tipe"} wajib diisi` });
    }

    const data = await prisma.title.create({ data: { title, title_en, title2, title2_en, subtitle, subtitle_en, type, tag, tag_en } });
    res.json({ message: "Title dibuat", data });
};

export const updateTitle = async (req, res) => {
    const { id } = req.params;
    const { title, title_en, type } = req.body;
    if (!title || !type || !title_en) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : !title_en ? "Judul (EN)" : "Tipe"} wajib diisi` });
    }
    const titleData = await prisma.title.findUnique({
        where: { id: Number(id) },
    });

    if (!titleData) {
        return res.status(400).json({ message: "Title tidak ditemukan" });
    }

    const data = await prisma.title.update({
        where: { id: Number(id) },
        data: req.body
    });

    res.json({ message: "Title diperbarui", data });
};

export const deleteTitle = async (req, res) => {
    await prisma.title.deleteMany({
        where: { id: { in: req.body.id.map(Number) } }
    });

    res.json({ message: "Title dihapus" });
};
