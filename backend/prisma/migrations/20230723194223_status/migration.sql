-- CreateTable
CREATE TABLE "EndPointStatus" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idEndPoint" TEXT NOT NULL,

    CONSTRAINT "EndPointStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EndPointStatus" ADD CONSTRAINT "EndPointStatus_idEndPoint_fkey" FOREIGN KEY ("idEndPoint") REFERENCES "EndPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
