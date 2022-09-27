import { objectType, arg, extendType } from 'nexus'

export const History = objectType({
  name: 'History',
  definition(t) {
    t.model.id()
    t.model.create_at()
    t.model.update_at()
    t.model.gps_coordinate_start()
    t.model.gps_coordinate_end()
    t.model.distance_traveled()
    t.model.card()
    t.model.card_id()
    t.model.current_card_balance()
    t.model.current_fare()
    t.model.total_cost()
  },
})

export const historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.history()
    t.field('findFirstHistory', {
      type: 'History',
      args: {
        where: 'HistoryWhereInput',
        orderBy: arg({ type: 'HistoryOrderByInput' }),
        cursor: 'HistoryWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.history.findFirst(args as any)
      },
    })
    t.crud.histories({ filtering: true, ordering: true })
    t.field('historiesCount', {
      type: 'Int',
      args: {
        where: 'HistoryWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.history.count(args as any)
      },
    })
  },
})

export const historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneHistory()
    t.crud.updateOneHistory()
    t.crud.upsertOneHistory()
    t.crud.deleteOneHistory()
    t.crud.updateManyHistory()
    t.crud.deleteManyHistory()
  },
})
