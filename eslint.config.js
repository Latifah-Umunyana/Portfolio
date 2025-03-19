import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  }),
  {
    files: ['.next/**/*'],
    rules: {
      'react/no-find-dom-node': 'off', 
    },
  },
]

export default eslintConfig