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
    const { description, description_en } = req.body;

    if (!description || !description_en) {
        return res.status(400).json({ message: "Deskripsi misi dan deskripsi misi (EN) wajib diisi" });
    }

    const existing = await prisma.mission.findFirst();

    const data = existing
        ? await prisma.mission.update({
            where: { id: existing.id },
            data: { description, description_en },
        })
        : await prisma.mission.create({
            data: { description, description_en },
        });

    res.json({
        message: "Misi berhasil disimpan",
        mission: data,
    });
};
