import { objectType, arg, extendType } from 'nexus'

export const Vehicles = objectType({
  name: 'Vehicles',
  definition(t) {
    t.model.id()
    t.model.created_at()
    t.model.update_at()
    t.model.status()
    t.model.name()
    t.model.description()
    t.model.license_plate()
    t.model.passenger_capacity()
    t.model.routes()
    t.model.route_id()
    t.model.Pos()
  },
})

export const vehiclesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.vehicles()
    t.field('findFirstVehicles', {
      type: 'Vehicles',
      args: {
        where: 'VehiclesWhereInput',
        orderBy: arg({ type: 'VehiclesOrderByInput' }),
        cursor: 'VehiclesWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.vehicles.findFirst(args as any)
      },
    })
    t.crud.vehicles({ filtering: true, ordering: true })
    t.field('vehiclesCount', {
      type: 'Int',
      args: {
        where: 'VehiclesWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.vehicles.count(args as any)
      },
    })
  },
})

export const vehiclesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneVehicles()
    t.crud.updateOneVehicles()
    t.crud.upsertOneVehicles()
    t.crud.deleteOneVehicles()
    t.crud.updateManyVehicles()
    t.crud.deleteManyVehicles()
  },
})
