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
    const { title, positions, requirements } = req.body;
    const photo = req.file;

    if (!title || !positions || !requirements || !photo) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : !positions ? "Posisi" : !requirements ? "Persyaratan" : "Foto"} wajib diisi` });
    }

    const cloudinaryPhoto = await upload(photo, "careers");
    const data = await prisma.career.create({ data: { title, positions, requirements, photo: cloudinaryPhoto.secure_url } });
    res.json({ message: "Career dibuat", data });
};

export const updateCareer = async (req, res) => {
    const { id } = req.params;
    const { title, positions, requirements, photo } = req.body;
    const photoFile = req.file;
    if (!title || !positions || !requirements) {
        return res.status(400).json({ message: `Kolom ${!title ? "Judul" : !positions ? "Posisi" : "Persyaratan"} wajib diisi` });
    }
    const career = await prisma.career.findUnique({
        where: { id: Number(id) },
    });

    if (!career) {
        return res.status(400).json({ message: "Career tidak ditemukan" });
    }

    let fotoUrl = career.photo;
    if (photoFile) {
        const publicId = career.photo.split("/").pop().split(".")[0];
        const publicFolder = career.photo.split("/").slice(-2, -1)[0];

        await deleteImage(publicId, publicFolder);

        const uploadResult = await upload(photoFile, publicFolder);
        fotoUrl = uploadResult.url;
    } else if (photo && typeof photo === "string" && photo.trim() !== "") {
        fotoUrl = photo;
    } else if (!career.photo) {
        return res.status(400).json({ message: "Foto wajib diisi" });
    }

    const data = await prisma.career.update({
        where: { id: Number(id) },
        data: { title, positions, requirements, photo: fotoUrl },
    });

    res.json({ message: "Career diperbarui", data });
};

export const deleteCareer = async (req, res) => {
    for (const careerId of req.body.id) {
        const career = await prisma.career.findUnique({
            where: { id: Number(careerId) },
        });
        if (career) {
            const publicId = career.photo.split("/").pop().split(".")[0];
            const publicFolder = career.photo.split("/").slice(-2, -1)[0];
            await deleteImage(publicId, publicFolder);
        }
    }
    await prisma.career.deleteMany({ where: { id: { in: req.body.id.map(Number) } } });
    res.json({ message: "Career dihapus" });
};
