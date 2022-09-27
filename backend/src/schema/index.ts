import * as NexusSchema from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import * as types from './types'
import { join } from 'path'
// import { cwd } from 'process'
export default NexusSchema.makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    typegen: join(
      __dirname,
      '../../node_modules/@types/nexus-typegen/index.d.ts',
    ),
  },
  // outputs: {
  //   typegen: join(cwd(), './generated/', 'nexus-typegen.ts'),
  //   schema: join(cwd(), './generated/', 'schema.graphql'),
  // },

  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve('.prisma/client/index.d.ts'),
        alias: 'prisma',
      },
    ],
  },
})
