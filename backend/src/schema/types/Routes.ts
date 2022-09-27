import { objectType, arg, extendType } from 'nexus'

export const Routes = objectType({
  name: 'Routes',
  definition(t) {
    t.model.id()
    t.model.created_at()
    t.model.update_at()
    t.model.status()
    t.model.name()
    t.model.description()
    t.model.location_name_start()
    t.model.location_name_end()
    t.model.location_gps_start()
    t.model.location_gps_end()
    t.model.total_distance()
    t.model.Vehicles()
    t.model._count()
  },
})

export const routesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.routes()
    t.field('findFirstRoutes', {
      type: 'Routes',
      args: {
        where: 'RoutesWhereInput',
        orderBy: arg({ type: 'RoutesOrderByInput' }),
        cursor: 'RoutesWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.routes.findFirst(args as any)
      },
    })
    t.crud.routes({ filtering: true, ordering: true })
    t.field('routesCount', {
      type: 'Int',
      args: {
        where: 'RoutesWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.routes.count(args as any)
      },
    })
  },
})

export const routesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneRoutes()
    t.crud.updateOneRoutes()
    t.crud.upsertOneRoutes()
    t.crud.deleteOneRoutes()
    t.crud.updateManyRoutes()
    t.crud.deleteManyRoutes()
  },
})
