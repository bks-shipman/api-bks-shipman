import prisma from "../../prisma/client.js";

export const getCrewing = async (req, res) => {
    try {
        const data = await prisma.crewing.findFirst();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createOrUpdateCrewing = async (req, res) => {
    const { email, phone, phone_code } = req.body;

    if (!email || !phone || !phone_code) {
        return res.status(400).json({ message: `Kolom ${!email ? "Email" : !phone ? "Nomor Telepon" : "Kode Telepon"} harus diisi` });
    }

    const existing = await prisma.crewing.findFirst();

    const data = existing
        ? await prisma.crewing.update({
            where: { id: existing.id },
            data: { email, phone, phone_code }
        })
        : await prisma.crewing.create({
            data: { email, phone, phone_code }
        });

    res.status(201).json({ message: "Crewing berhasil disimpan", data });
};
