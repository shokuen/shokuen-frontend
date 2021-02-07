module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    // TypeScriptのファイルをimportできるようにする
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    }
  },
  rules: {
    // TypeScriptのファイルをimportできるようにする
    'import/extensions': [
      2,
      {
        '.ts': 'never',
        '.tsx': 'never',
        '.js': 'never',
        '.jsx': 'never'
      }
    ],

    // JSXの引数のフォワーディングを許可する
    'react/jsx-props-no-spreading': 'off',

    // TypeScriptのファイルでJSXを書けるようにする
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.ts', '.tsx', '.js', '.jsx'] }
    ],

    // 末尾の要素のカンマをつけない（ESLintのデフォルト）
    'comma-dangle': ['error', 'never'],

    // devDependenciesのimportの許可
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'], // Storybookのimportを許可
        optionalDependencies: false
      }
    ],

    /*
     * ESLintのルールをTypeScript ESLintのルールで上書き
     */

    // importがエラーになることの回避
    // 例えば "import React, { FC } from "react"" したときの ""React" was used before it was defined"
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // 型やinterfaceが解決できないことの回避
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    /*
     * Next.js用の設定
     */

    // next/linkを利用した場合の、子要素のanchorにhrefプロパティを設定しないことによるエラーの回避
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: [/* "noHref", */ 'invalidHref', 'preferButton']
      }
    ]
  }
};
