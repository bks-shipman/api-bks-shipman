import prisma from "../../prisma/client.js";

export const getCompany = async (req, res) => {
    try {
        const data = await prisma.company.findFirst();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createOrUpdateCompany = async (req, res) => {
    const { name, address, gmapsUrl, linkedin, facebook, instagram, tiktok } = req.body;

    if (!name || !address) {
        return res.status(400).json({ message: `Kolom ${!name ? "Nama" : !address ? "Alamat" : "GMaps URL"} harus diisi` });
    }

    const existing = await prisma.company.findFirst();

    const data = existing
        ? await prisma.company.update({
            where: { id: existing.id },
            data: { name, address, gmapsUrl, linkedin, facebook, instagram, tiktok }
        })
        : await prisma.company.create({
            data: { name, address, gmapsUrl, linkedin, facebook, instagram, tiktok }
        });

    res.status(201).json({ message: "Company berhasil disimpan", data });
};
