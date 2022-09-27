-- CreateTable
CREATE TABLE "Fare" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "current_fare" DOUBLE PRECISION NOT NULL,
    "pervious_fare" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routes" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'active',
    "name" TEXT,
    "description" TEXT,
    "location_name_start" TEXT NOT NULL,
    "location_name_end" TEXT NOT NULL,
    "location_gps_start" TEXT NOT NULL,
    "location_gps_end" TEXT NOT NULL,
    "total_distance" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'active',
    "name" TEXT,
    "description" TEXT,
    "license_plate" TEXT NOT NULL,
    "passenger_capacity" INTEGER NOT NULL,
    "route_id" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'active',
    "userType" TEXT NOT NULL DEFAULT E'passenger',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cards" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'active',
    "card_serial_id" TEXT NOT NULL,
    "current_balance" DOUBLE PRECISION NOT NULL,
    "previous_balance" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles.license_plate_unique" ON "Vehicles"("license_plate");

-- CreateIndex
CREATE UNIQUE INDEX "Users.email_unique" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cards.card_serial_id_unique" ON "Cards"("card_serial_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cards.user_id_unique" ON "Cards"("user_id");

-- AddForeignKey
ALTER TABLE "Cards" ADD FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD FOREIGN KEY ("route_id") REFERENCES "Routes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
