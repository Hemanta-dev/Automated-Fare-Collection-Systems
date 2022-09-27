import { objectType, arg, extendType } from 'nexus'

export const Cards = objectType({
  name: 'Cards',
  definition(t) {
    t.model.id()
    t.model.created_at()
    t.model.update_at()
    t.model.status()
    t.model.card_serial_id()
    t.model.current_balance()
    t.model.previous_balance()
    t.model.user()
    t.model.user_id()
    t.model.History()
    t.model._count()
  },
})

export const cardsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cards()
    t.field('findFirstCards', {
      type: 'Cards',
      args: {
        where: 'CardsWhereInput',
        orderBy: arg({ type: 'CardsOrderByInput' }),
        cursor: 'CardsWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cards.findFirst(args as any)
      },
    })
    t.crud.cards({ filtering: true, ordering: true })
    t.field('cardsCount', {
      type: 'Int',
      args: {
        where: 'CardsWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cards.count(args as any)
      },
    })
  },
})

export const cardsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCards()
    t.crud.updateOneCards()
    t.crud.upsertOneCards()
    t.crud.deleteOneCards()
    t.crud.updateManyCards()
    t.crud.deleteManyCards()
  },
})
