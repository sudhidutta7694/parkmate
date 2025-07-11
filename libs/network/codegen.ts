import type { CodegenConfig } from '@graphql-codegen/cli'
const documentsPattern = '**/*.graphql'

const plugins = [
  'typescript',
  'typescript-operations',
  'named-operations-object',
  'typed-document-node',
]

const config: CodegenConfig = {
  overwrite: true,
  schema: '../../apps/api/src/schema.gql',
  //   watch: true,
  documents: documentsPattern,
  generates: {
    './src/graphql/generated.tsx': {
      documents: `./src/${documentsPattern}`,
      plugins,
    },
  },
}

export default config
