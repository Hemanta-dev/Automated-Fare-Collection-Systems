import { objectType, arg, extendType } from 'nexus'

export const Pos = objectType({
  name: 'Pos',
  definition(t) {
    t.model.id()
    t.model.created_at()
    t.model.update_at()
    t.model.status()
    t.model.name()
    t.model.description()
    t.model.vehicle()
    t.model.vehicle_id()
  },
})

export const posQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pos()
    t.field('findFirstPos', {
      type: 'Pos',
      args: {
        where: 'PosWhereInput',
        orderBy: arg({ type: 'PosOrderByInput' }),
        cursor: 'PosWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.pos.findFirst(args as any)
      },
    })
    t.crud.pos({ filtering: true, ordering: true })
    t.field('posCount', {
      type: 'Int',
      args: {
        where: 'PosWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.pos.count(args as any)
      },
    })
  },
})

export const posMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePos()
    t.crud.updateOnePos()
    t.crud.upsertOnePos()
    t.crud.deleteOnePos()
    t.crud.updateManyPos()
    t.crud.deleteManyPos()
  },
})
