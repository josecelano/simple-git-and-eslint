# SimpleGit and ESlint

This repo helps to reproduce an issue commented on the [Simple Git](https://github.com/steveukx/git-js) repo.

More info: <https://github.com/steveukx/git-js/issues/324#issuecomment-1031689894>

Package versions:

- typescript: 4.5.5
- eslint: 8.8.0
- simple-git: 3.1.1

## Install

```console
git clone git@github.com:josecelano/simple-git-and-eslint.git
cd simple-git-and-eslint
yarn install
```

## Reproduce

```console
yarn lint
```

The import statement:

```typescript
import simpleGit, {SimpleGit} from 'simple-git'
```

You should see:

```
SimpleGit not found in 'simple-git'  import/named
```

Solution:

```typescript
import {SimpleGit} from 'simple-git/typings/simple-git.d'
import simpleGit from 'simple-git'
```

I have not been able to reproduce the problem. THe original problem was found on [this](https://github.com/Nautilus-Cyberneering/git-queue) repo.

## How to fix

I could fix the problem by adding a new plugin to the ESlint configuration:

```
"plugin:import/typescript"
```

Full .eslintrc.json:

```json
{
  "plugins": ["jest", "@typescript-eslint"],
  "extends": ["plugin:github/recommended", "plugin:jest/recommended", "plugin:import/typescript"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "project": "**/tsconfig.eslintrc.json"
  },
  "rules": {
    "camelcase": "off",
    "eslint-comments/no-use": "off",
    "filenames/match-regex": [2, "^[a-z_-].+$", true],
    "i18n-text/no-en": "off",
    "import/no-namespace": "off",
    "no-unused-vars": "off",
    "semi": "off",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {"accessibility": "no-public"}
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {"allowExpressions": true}
    ]
  },
  "env": {
    "node": true,
    "es6": true,
    "jest/globals": true
  }
}
```
