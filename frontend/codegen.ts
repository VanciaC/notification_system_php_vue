import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://backend:8000/graphql',
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    'src/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo',
      ],
      config: {
        vueCompositionApiImportFrom: 'vue',
      },
    },
  },
}

export default config