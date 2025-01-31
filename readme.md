# Dream.mf Starter Project - React - Complete

This is the complete starter project from the [Dream.mf](https://www.getdreamu.io) to get you start with Dream.mf, NX Workspaces, Rspack, and React. This project is intended to be used as a starting point for your own projects.

# Getting Started

First we need to install the project dependencies:

```bash
pnpm install
```

Next, lets ensure the stack builds:

```bash
pnpm nx run-many -t build
```

Lastly we can run the entire stack:

```bash
npx nx run-many -t serve --watch
```

You should be able to view the following urls:
- [Host] http://localhost:3000/
- [Remote - Sample] http://localhost:3010/remoteEntry.js
- [Remote - About] http://localhost:3011/remoteEntry.js

## Running a single project

With this workspace, you can run the `about` project using the following commands:

```bash
npx nx run about:build
npx nx run about:serve
```

## Running using vs code extension

With this workspace, comes with various extensions to help you get started faster, one of which is the [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console). Within it you will find a project view, select the `about` project and click `Build` and `Serve`.