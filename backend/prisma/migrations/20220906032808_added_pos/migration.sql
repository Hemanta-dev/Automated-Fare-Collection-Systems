-- CreateTable
CREATE TABLE "Pos" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'active',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "vehicle_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pos.vehicle_id_unique" ON "Pos"("vehicle_id");

-- AddForeignKey
ALTER TABLE "Pos" ADD FOREIGN KEY ("vehicle_id") REFERENCES "Vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
