/*
  Warnings:

  - You are about to drop the column `description` on the `Career` table. All the data in the column will be lost.
  - Added the required column `positions` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requirements` to the `Career` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Career" DROP COLUMN "description",
ADD COLUMN     "positions" TEXT NOT NULL,
ADD COLUMN     "requirements" TEXT NOT NULL;
