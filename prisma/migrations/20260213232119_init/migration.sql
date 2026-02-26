/*
  Warnings:

  - Added the required column `country` to the `Vessel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imo` to the `Vessel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Vessel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vessel" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "imo" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
