import { PrismaClient, Fare } from '@prisma/client'

import { Chance } from 'chance'
import { fake } from 'faker'

const chance = new Chance()

main()
async function main() {
  const prisma = new PrismaClient()

  // fare
  const addManyFare = await prisma.fare.createMany({
    data: [
      {
        current_fare: 40,
        pervious_fare: 35,
      },
      {
        current_fare: 35,
        pervious_fare: 30,
      },
      {
        current_fare: 30,
        pervious_fare: 25,
      },
      {
        current_fare: 25,
        pervious_fare: 20,
      },
      {
        current_fare: 20,
        pervious_fare: 15,
      },
      {
        current_fare: 15,
        pervious_fare: 10,
      },
    ],
  })

  // User added
  const users = await prisma.users.createMany({
    data: [
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
      {
        name: chance.name(),
        email: chance.email(),
      },
    ],
  })

  //vehicle
  const vehicle = await prisma.vehicles.createMany({
    data: [
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
      {
        name: chance.name(),
        description: chance.sentence(),
        license_plate: chance.cpf(),
        passenger_capacity: chance.integer({ min: 10, max: 20 }),
      },
    ],
  })

  //Cards
  const cards = await prisma.cards.createMany({
    data: [
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
      {
        card_serial_id: `${chance.string({
          length: 5,
          pool: 'ABCDE1234',
        })}-${chance.natural({
          min: 1,
          max: 20,
        })}`,
        current_balance: chance.floating({ min: 500, max: 1000 }),
        previous_balance: chance.floating({ min: 0, max: 500 }),
      },
    ],
  })

  // Routes
  const routes = await prisma.routes.create({
    data: {
      location_gps_start: chance.coordinates(),
      location_gps_end: chance.coordinates(),
      total_distance: chance.natural({ min: 1, max: 20 }),
      location_name_end: chance.address(),
      location_name_start: chance.address(),
      name: chance.sentence({
        words: 3,
      }),
    },
  })

  await prisma.$disconnect()
}
