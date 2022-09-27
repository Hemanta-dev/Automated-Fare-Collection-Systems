-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "gps_coordinate_start" TEXT NOT NULL,
    "gps_coordinate_end" TEXT NOT NULL,
    "distance_traveled" INTEGER NOT NULL,
    "card_id" TEXT NOT NULL,
    "current_card_balance" INTEGER NOT NULL,
    "current_fare" INTEGER NOT NULL,
    "total_cost" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD FOREIGN KEY ("card_id") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
