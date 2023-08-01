module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'next/core-web-vitals',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['warn'],
    'linebreak-style': ['error', 'unix'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'off',
    'no-useless-escape': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'no-param-reassign': ['warn', { props: true, ignorePropertyModificationsFor: ['state'] }],
    curly: ['error', 'multi-line'],
    'generator-star-spacing': 'off',
    'prefer-promise-reject-errors': 'off',
  },
};
