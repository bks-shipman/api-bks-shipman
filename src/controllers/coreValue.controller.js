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
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Layanan wajib diisi" });
    }

    const data = await prisma.coreValue.create({ data: { title } });
    res.json({ message: "Core Value dibuat", data });
};

export const updateCoreValue = async (req, res) => {
    const { id } = req.params;

    const data = await prisma.coreValue.update({
        where: { id: Number(id) },
        data: req.body
    });

    res.json({ message: "Core Value diperbarui", data });
};

export const deleteCoreValue = async (req, res) => {
    await prisma.coreValue.deleteMany({
        where: { id: { in: req.body.id.map(Number) } }
    });

    res.json({ message: "Core Value dihapus" });
};
