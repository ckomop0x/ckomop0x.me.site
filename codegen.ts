import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://ckme-prod.webtime.dev/graphql',
  documents: 'src/queries/**/*.gql.ts',
  generates: {
    'src/queries/types/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
