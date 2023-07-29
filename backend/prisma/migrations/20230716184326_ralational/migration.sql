/*
  Warnings:

  - Added the required column `userId` to the `EndPoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EndPoint" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EndPoint" ADD CONSTRAINT "EndPoint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
