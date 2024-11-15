import { FlatCompat } from '@eslint/eslintrc';
import handlebarlabs from 'eslint-config-handlebarlabs';

const compat = new FlatCompat();

export default [
  ...compat.extends('handlebarlabs'),
  {
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
    },
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-curly-newline': 'off',
    },
  },
];
module.exports = {
    parser: '@babel/eslint-parser',
    extends: ['handlebarlabs', 'plugin:react/recommended'],
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      requireConfigFile: false,
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  