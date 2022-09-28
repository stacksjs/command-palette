<p align="center"><img src=".github/art/social.png" alt="Social Card of Stacks"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# Command Palettes

Command Palettes, similar to kbar, are often used within applications. This library is to help create a custom & performant command palette for your application. Useful functions & headless components included.

**🤖 Zero-config, by design**
**🎨 Built-in animations**
**🧙🏼‍♀️ Fully customizable components**
**✨ Highly performant**

> _The simple way to to use & design `⌘-k` command palettes._

## Get Started

It's incredibly easy to get started with this Command Palette stack. Simply run either of the following commands in your terminal, based on whether you want to use framework agnostic Web Components or Vue components.

```bash
npm install @ow3/command-palette-vue
npm install @ow3/command-palette-elements
```

## 🤖 Usage

The following list is of some of the most common ways to interact with the Stacks API. Meet the Artisan Toolkit:

```bash
pnpm artisan install # installs all dependencies
pnpm artisan dev # starts one of the dev servers (components, functions, pages, or docs)
pnpm artisan build # follow CLI prompts to select which library (or server) to build
pnpm artisan commit # follow CLI prompts for committing changes
pnpm artisan release # creates the releases for the stack & consequently, publishes them to npm

pnpm artisan make:component HelloWorld # bootstraps a HelloWorld component
pnpm artisan make:function HelloWorld # bootstraps a HelloWorld function
pnpm artisan make:page hello-world # bootstraps a HelloWorld page (https://127.0.0.1/hello-world)

pnpm artisan help
```

<details>
<summary>View the complete Stacks Artisan Toolkit</summary>

```bash
pnpm artisan install # or `pnpm i`
pnpm artisan fresh # fresh reinstall of all deps

pnpm artisan dev # starts one of the dev servers (components, functions, or docs)
pnpm artisan dev:components # starts local playground dev server
pnpm artisan dev:docs # starts local docs dev server

pnpm artisan make:component HelloWorld
pnpm artisan make:function hello-world

pnpm artisan stub # stubs all the libraries
pnpm artisan stub:components # stubs the component library
pnpm artisan stub:functions # stubs the function library

pnpm artisan lint # runs linter
pnpm artisan lint:fix # runs linter and fixes issues

pnpm artisan commit # follow CLI prompts for committing staged changes
pnpm artisan release # creates the releases for the stack & triggers the Release Action (workflow)
pnpm artisan changelog # generates CHANGELOG.md

# building for production (e.g. npm)
pnpm artisan build # select a specific build (follow CLI prompts)
pnpm artisan build:components # builds component libraries
pnpm artisan build:functions # builds function library
pnpm artisan build:web-components # builds framework agnostic Web Component library (i.e. Custom Elements)

# when building for Vercel, Netlify, and more
pnpm artisan deploy:docs

# creates a server to be deployed into any VPS
pnpm artisan server:functions # wip

pnpm artisan example # select the example to run (follow CLI prompts)

# test your stack
pnpm artisan test # runs test suite
pnpm artisan test:unit # runs unit tests
pnpm artisan test:e2e # runs e2e tests
pnpm artisan test:coverage # runs test coverage
pnpm artisan test:types # runs typecheck
```

</details>

## 📚 Utilizing the Built Libraries

Because Command Palette is created with reusability & composability in mind, our primary intention is to always _keep it simple, yet configurable._ Read more here about the Stacks CLI in the documentation.

<details>
<summary>Web Component usage</summary>

```html
<html>
  <body>
    <command-palette name="Jane Doe"></command-palette>
    <script src="command-palette.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>Vue 2 & 3 usage</summary>

```vue
<script setup lang="ts">
import CommandPalette from '@ow3/command-palette-vue'
</script>

<template>
  <CommandPalette />
</template>
```
</details>

You're developing your own command palette components and simply want to reuse the functions/composables?

<details>
<summary>Functions usage</summary>

```bash
npm install command-palette-fx
```

After you installed the command-palette library, you can then make of functions in the following way:

```ts
import { isDark } from 'command-palette-fx'

console.log('is dark mode?', isDark)
```
</details>

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/ow3org/command-palette/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/ow3org/command-palette/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@ow3/hello-world-vue?style=flat-square
[npm-version-href]: https://npmjs.com/package/@ow3/hello-world-vue

<!-- [npm-downloads-src]: https://img.shields.io/npm/dm/@ow3/hello-world-vue?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@ow3/hello-world-vue -->

[github-actions-src]: https://img.shields.io/github/workflow/status/ow3org/command-palette/CI/main?style=flat-square
[github-actions-href]: https://github.com/ow3org/command-palette/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/ow3org/command-palette/main?style=flat-square
[codecov-href]: https://codecov.io/gh/ow3org/command-palette -->
