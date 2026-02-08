import prisma from "../../prisma/client.js";

export const getServices = async (req, res) => {
    try {
        const data = await prisma.service.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createService = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : "Deskripsi"} wajib diisi` });
    }

    const data = await prisma.service.create({ data: { title, description } });
    res.json({ message: "Service dibuat", data });
};

export const updateService = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : "Deskripsi"} wajib diisi` });
    }
    const service = await prisma.service.findUnique({
        where: { id: Number(id) },
    });

    if (!service) {
        return res.status(400).json({ message: "Service tidak ditemukan" });
    }

    const data = await prisma.service.update({
        where: { id: Number(id) },
        data: req.body
    });

    res.json({ message: "Service diperbarui", data });
};

export const deleteService = async (req, res) => {
    await prisma.service.deleteMany({
        where: { id: { in: req.body.id.map(Number) } }
    });

    res.json({ message: "Service dihapus" });
};
