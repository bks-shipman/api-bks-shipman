import prisma from "../../prisma/client.js";

export const getLandingPageData = async (req, res) => {
    try {
        const [
            captain,
            company,
            vision,
            missions,
            coreValues,
            services,
            titleHero,
            titleServices,
            titleVM,
            titleGallery,
            titleCoreValues,
            exhibitions,
            vessels,
            aboutUs,
        ] = await Promise.all([
            prisma.captain.findFirst(),
            prisma.company.findFirst(),
            prisma.vision.findFirst(),
            prisma.mission.findFirst(),
            prisma.coreValue.findMany({ orderBy: { id: "asc" } }),
            prisma.service.findMany({ orderBy: { id: "asc" } }),
            prisma.title.findFirst({ where: { type: "HERO" } }),
            prisma.title.findFirst({ where: { type: "SERVICES" } }),
            prisma.title.findFirst({ where: { type: "VM" } }),
            prisma.title.findFirst({ where: { type: "GALLERY" } }),
            prisma.title.findFirst({ where: { type: "COREVALUES" } }),
            prisma.exhibition.findMany({
                orderBy: { date: "desc" },
            }),
            prisma.vessel.findMany({   // ⬅️ tambah ini
                orderBy: { createdAt: "desc" },
            }),
            prisma.aboutUs.findFirst(),
        ]);

        const exhibitionGallery = exhibitions.map(item => ({
            id: item.id,
            type: "exhibition",
            name: item.name,
            photo: item.photo,
            createdAt: item.createdAt,
        }));

        const vesselGallery = vessels.map(item => ({
            id: item.id,
            type: "vessel",
            name: item.name,
            photo: item.photo,
            createdAt: item.createdAt,
        }));

        const gallery = [...exhibitionGallery, ...vesselGallery]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        const vesselsCount = vessels.length;
        const exhibitionsCount = exhibitions.length;

        res.json({
            captain,
            company,
            vision,
            missions,
            coreValues,
            services,
            titleHero,
            titleServices,
            titleVM,
            titleGallery,
            titleCoreValues,
            gallery,
            vesselsCount,
            exhibitionsCount,
            aboutUs,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data landing page",
        });
    }
};


export const getAboutUsData = async (req, res) => {
    try {
        const [
            titles,
            aboutUs,
        ] = await Promise.all([
            prisma.title.findFirst({
                where: { type: "ABOUTUS" },
            }),
            prisma.aboutUs.findFirst(),
        ]);

        res.json({
            titles,
            aboutUs,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data about us",
        });
    }
};

export const getVesselData = async (req, res) => {
    try {
        const [
            titles,
            vessels,
        ] = await Promise.all([
            prisma.title.findFirst({
                where: { type: "VESSELS" },
            }),
            prisma.vessel.findMany({
                include: {
                    vesselType: {
                        select: { name: true },
                    },
                },
                orderBy: { name: "asc" },
            }),
        ]);

        res.json({
            titles,
            vessels,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data vessel",
        });
    }
};

export const getExhibitionData = async (req, res) => {
    try {
        const [
            titles,
            exhibitions,
        ] = await Promise.all([
            prisma.title.findFirst({
                where: { type: "EXHIBITIONS" },
            }),
            prisma.exhibition.findMany({
                orderBy: { date: "desc" },
            }),
        ]);

        res.json({
            titles,
            exhibitions,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data exhibition",
        });
    }
};


export const getCareerData = async (req, res) => {
    try {
        const [
            titles,
            career,
            phone,
            phoneCode,
            email,
        ] = await Promise.all([
            prisma.title.findFirst({
                where: { type: "CAREERS" },
            }),
            prisma.career.findMany({
                orderBy: { createdAt: "desc" },
            }),
            prisma.crewing.findFirst().then(crewing => crewing ? crewing.phone : null),
            prisma.crewing.findFirst().then(crewing => crewing ? crewing.phone_code : null),
            prisma.crewing.findFirst().then(crewing => crewing ? crewing.email : null),
        ]);

        res.json({
            titles,
            career,
            phone,
            phoneCode,
            address
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data career",
        });
    }
};

export const getFooterData = async (req, res) => {
    try {
        const [
            company,
        ] = await Promise.all([
            prisma.company.findFirst(),
        ]);

        res.json({
            company,

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data footer",
        });
    }
};

