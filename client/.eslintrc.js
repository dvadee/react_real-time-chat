module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    browser: true,
    jquery: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['babel', 'jest'],
  rules: {
    quotes: ['error', 'single'],
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': 'error',
    'linebreak-style': ['warn', 'windows'],
  },
};
