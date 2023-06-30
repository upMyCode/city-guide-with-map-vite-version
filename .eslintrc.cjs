module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'airbnb',
    'prettier',
    'airbnb-typescript',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: 'path/to/folder',

        // Multiple tsconfigs (Useful for monorepos)

        // use a glob pattern
        project: 'packages/*/tsconfig.json',

        // use an array
        project: [
          'packages/module-a/tsconfig.json',
          'packages/module-b/tsconfig.json',
        ],

        // use an array of glob patterns
        project: ['packages/*/tsconfig.json', 'other-packages/*/tsconfig.json'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'simple-import-sort',
    '@typescript-eslint',
    'import',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'default-param-last': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unsafe-any': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowAny: true },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
