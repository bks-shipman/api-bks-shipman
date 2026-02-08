import prisma from "../../prisma/client.js";

export const getVesselTypes = async (req, res) => {
    try {
        const data = await prisma.vesselType.findMany({
            orderBy: { name: "asc" },
            include: {
                vessels: true
            }
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createVesselType = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Nama tipe vessel harus diisi" });
    }

    try {
        const vesselType = await prisma.vesselType.create({
            data: { name },
        });

        res.status(201).json({
            message: "Vessel type berhasil dibuat",
            vesselType,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateVesselType = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Nama tipe vessel harus diisi" });
    }

    const existing = await prisma.vesselType.findUnique({
        where: { id: Number(id) },
    });

    if (!existing) {
        return res.status(404).json({ message: "Vessel type tidak ditemukan" });
    }

    const updated = await prisma.vesselType.update({
        where: { id: Number(id) },
        data: { name },
    });

    res.json({
        message: "Vessel type berhasil diperbarui",
        vesselType: updated,
    });
};

export const deleteVesselType = async (req, res) => {
    const { id } = req.params;

    const used = await prisma.vessel.count({
        where: {
            vesselTypeId: Number(id),
        },
    })

    if (used > 0) {
        return res.status(400).json({
            message: "Vessel type masih digunakan oleh vessel",
        });
    }

    await prisma.vesselType.delete({
        where: { id: Number(id) },
    });

    res.json({ message: "Vessel type berhasil dihapus" });
};
