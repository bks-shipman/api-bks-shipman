-- CreateEnum
CREATE TYPE "PageKey" AS ENUM ('HERO', 'SERVICES', 'ABOUTUS', 'VESSELS', 'EXHIBITIONS', 'CAREERS', 'VM', 'GALLERY', 'COREVALUES', 'CERTIFICATES');

-- CreateTable
CREATE TABLE "PageConfig" (
    "id" SERIAL NOT NULL,
    "key" "PageKey" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PageConfig_key_key" ON "PageConfig"("key");
