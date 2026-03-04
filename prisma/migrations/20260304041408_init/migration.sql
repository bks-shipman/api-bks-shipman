-- AlterTable
ALTER TABLE "AboutUs" ADD COLUMN     "description_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Captain" ADD COLUMN     "quote_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Career" ADD COLUMN     "positions_en" TEXT NOT NULL DEFAULT 'english',
ADD COLUMN     "requirements_en" TEXT NOT NULL DEFAULT 'english',
ADD COLUMN     "title_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "CoreValue" ADD COLUMN     "title_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Exhibition" ADD COLUMN     "description_en" TEXT NOT NULL DEFAULT 'english',
ADD COLUMN     "name_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Mission" ADD COLUMN     "description_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "description_en" TEXT NOT NULL DEFAULT 'english',
ADD COLUMN     "title_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Title" ADD COLUMN     "subtitle_en" TEXT,
ADD COLUMN     "tag_en" TEXT,
ADD COLUMN     "title2_en" TEXT,
ADD COLUMN     "title_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Vessel" ADD COLUMN     "description_en" TEXT NOT NULL DEFAULT 'english';

-- AlterTable
ALTER TABLE "Vision" ADD COLUMN     "description_en" TEXT NOT NULL DEFAULT 'english';
