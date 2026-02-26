import prisma from "../../prisma/client.js";

export const getCareers = async (req, res) => {
    try {
        const data = await prisma.career.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCareer = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : "Deskripsi"} wajib diisi` });
    }

    const data = await prisma.career.create({ data: { title, description } });
    res.json({ message: "Career dibuat", data });
};

export const updateCareer = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : "Deskripsi"} wajib diisi` });
    }
    const career = await prisma.career.findUnique({
        where: { id: Number(id) },
    });

    if (!career) {
        return res.status(400).json({ message: "Career tidak ditemukan" });
    }

    const data = await prisma.career.update({
        where: { id: Number(id) },
        data: req.body
    });

    res.json({ message: "Career diperbarui", data });
};

export const deleteCareer = async (req, res) => {
    await prisma.career.deleteMany({
        where: { id: { in: req.body.id.map(Number) } }
    });

    res.json({ message: "Career dihapus" });
};
