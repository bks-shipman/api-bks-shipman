import prisma from "../../prisma/client.js";

// Ambil semua status halaman (untuk Navbar/Landing Page)
export const getPageConfigs = async (req, res) => {
    try {
        const data = await prisma.pageConfig.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update atau Buat status halaman (untuk Toggle di Dashboard)
export const updatePageStatus = async (req, res) => {
    const { key } = req.params;
    const { isActive } = req.body;

    if (isActive === undefined) {
        return res.status(400).json({ message: "Status isActive wajib dikirim" });
    }

    try {
        // Menggunakan upsert agar jika key belum ada di DB, otomatis dibuatkan
        const data = await prisma.pageConfig.upsert({
            where: { key: key },
            update: { isActive },
            create: {
                key: key,
                isActive: isActive
            }
        });

        res.json({ message: `Status halaman ${key} diperbarui`, data });
    } catch (error) {
        res.status(400).json({ message: "Key halaman tidak valid (Gunakan Nama yang sesuai)" });
    }
};

// Ambil status satu halaman spesifik (Opsional)
export const getPageStatusByKey = async (req, res) => {
    const { key } = req.params;
    try {
        const data = await prisma.pageConfig.findUnique({
            where: { key: key },
        });

        if (!data) {
            return res.status(404).json({ message: "Konfigurasi halaman tidak ditemukan" });
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};