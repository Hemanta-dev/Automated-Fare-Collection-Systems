import { objectType, arg, extendType } from 'nexus'

export const Users = objectType({
  name: 'Users',
  definition(t) {
    t.model.id()
    t.model.created_at()
    t.model.update_at()
    t.model.status()
    t.model.userType()
    t.model.name()
    t.model.email()
    t.model.Cards()
  },
})

export const usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.users()
    t.field('findFirstUsers', {
      type: 'Users',
      args: {
        where: 'UsersWhereInput',
        orderBy: arg({ type: 'UsersOrderByInput' }),
        cursor: 'UsersWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.users.findFirst(args as any)
      },
    })
    t.crud.users({ filtering: true, ordering: true })
    t.field('usersCount', {
      type: 'Int',
      args: {
        where: 'UsersWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.users.count(args as any)
      },
    })
  },
})

export const usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUsers()
    t.crud.updateOneUsers()
    t.crud.upsertOneUsers()
    t.crud.deleteOneUsers()
    t.crud.updateManyUsers()
    t.crud.deleteManyUsers()
  },
})
