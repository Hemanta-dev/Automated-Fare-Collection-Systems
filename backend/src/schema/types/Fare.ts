import { objectType, arg, extendType } from 'nexus'

export const Fare = objectType({
  name: 'Fare',
  definition(t) {
    t.model.id()
    t.model.created_at()
    t.model.update_at()
    t.model.current_fare()
    t.model.pervious_fare()
  },
})

export const fareQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.fare()
    t.field('findFirstFare', {
      type: 'Fare',
      args: {
        where: 'FareWhereInput',
        orderBy: arg({ type: 'FareOrderByInput' }),
        cursor: 'FareWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.fare.findFirst(args as any)
      },
    })
    t.crud.fares({ filtering: true, ordering: true })
    t.field('faresCount', {
      type: 'Int',
      args: {
        where: 'FareWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.fare.count(args as any)
      },
    })
  },
})

export const fareMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFare()
    t.crud.updateOneFare()
    t.crud.upsertOneFare()
    t.crud.deleteOneFare()
    t.crud.updateManyFare()
    t.crud.deleteManyFare()
  },
})
