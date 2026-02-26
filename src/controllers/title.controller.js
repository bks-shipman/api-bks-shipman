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
    const { title, title2, subtitle, type, tag } = req.body;
    if (!title || !type) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : "Tipe"} wajib diisi` });
    }

    const data = await prisma.title.create({ data: { title, title2, subtitle, type, tag } });
    res.json({ message: "Title dibuat", data });
};

export const updateTitle = async (req, res) => {
    const { id } = req.params;
    const { title, title2, subtitle, type, tag } = req.body;
    if (!title || !type) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : "Tipe"} wajib diisi` });
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
