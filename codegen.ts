import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

const schemaUrl =
  `${dotenv.config().parsed?.NEXT_PUBLIC_URL_LOCAL}/graphql` || '';

const config: CodegenConfig = {
  overwrite: true,
  schema: schemaUrl,
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
