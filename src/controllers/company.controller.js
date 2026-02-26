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
    const { name, email, address, phone, phone_code, gmapsUrl, linkedin, facebook, instagram, tiktok } = req.body;

    if (!name || !email || !address || !phone || !phone_code) {
        return res.status(400).json({ message: `Kolom ${!name ? "Nama" : !email ? "Email" : !address ? "Alamat" : !phone ? "Nomor Telepon" : "Kode Telepon"} harus diisi` });
    }

    const existing = await prisma.company.findFirst();

    const data = existing
        ? await prisma.company.update({
            where: { id: existing.id },
            data: { name, email, address, phone, phone_code, gmapsUrl, linkedin, facebook, instagram, tiktok }
        })
        : await prisma.company.create({
            data: { name, email, address, phone, phone_code, gmapsUrl, linkedin, facebook, instagram, tiktok }
        });

    res.status(201).json({ message: "Company berhasil disimpan", data });
};
