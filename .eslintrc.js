module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // 'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    "no-unused-vars": "off",
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    curly: 'error',
    // '@typescript-eslint/no-unused-vars': 'warn', // Imports of interfaces throw this.
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 'off', 
    "react/react-in-jsx-scope": "off",
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  node: {
    net: 'empty',
  },
  ignorePatterns: ['node_modules/', 'src/registerServiceWorker.ts'],
};
