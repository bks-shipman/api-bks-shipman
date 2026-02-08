import prisma from "../../prisma/client.js";

export const getMission = async (req, res) => {
    try {
        const data = await prisma.mission.findFirst();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createOrUpdateMission = async (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ message: "Deskripsi misi wajib diisi" });
    }

    const existing = await prisma.mission.findFirst();

    const data = existing
        ? await prisma.mission.update({
            where: { id: existing.id },
            data: { description },
        })
        : await prisma.mission.create({
            data: { description },
        });

    res.json({
        message: "Misi berhasil disimpan",
        mission: data,
    });
};
