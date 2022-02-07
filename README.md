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
