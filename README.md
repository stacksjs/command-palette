<p align="center"><img src=".github/art/social.png" alt="Social Card of Stacks"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# Command Palette Stack

Command Palettes, similar to k-bar, are often used within applications. This library is to help ease the pain of creating a custom command palette for your application. Highly configurable functions & headless components included.

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

pnpm artisan dev # starts one of the dev servers (components, functions, pages, or docs)
pnpm artisan dev:components # starts local playground dev server
pnpm artisan dev:pages # starts local pages dev server
pnpm artisan dev:docs # starts local docs dev server

pnpm artisan make:component HelloWorld
pnpm artisan make:function hello-world
pnpm artisan make:page hello-world
pnpm artisan make:lang en
pnpm artisan make:stack hello-world

pnpm artisan stub # stubs all the libraries
pnpm artisan stub:components # stubs the component library
pnpm artisan stub:functions # stubs the function library
pnpm artisan stub:pages # stubs the pages

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
pnpm artisan build:components # builds Vue 2 & 3 compatible libraries


# when building for Vercel, Netlify, and more
pnpm artisan deploy:docs

# creates a server to be deployed into any VPS
pnpm artisan server:functions # wip
pnpm artisan server:pages # wip

pnpm artisan example # select the example to run (follow CLI prompts)

# test your stack
pnpm artisan test # runs test suite
pnpm artisan test:unit # runs unit tests
pnpm artisan test:e2e # runs e2e tests
pnpm artisan test:coverage # runs test coverage
pnpm artisan test:types # runs typecheck
```

</details>

Read more here about the Stacks CLI in the documentation.

## 📚 Utilizing the Built Libraries

Because we optimize toward the development of easily reusable & composable component & function libraries, our primary intention is to always _keep it simple, yet configurable._

By default, Stacks realizes whether your Stack includes components, functions, and/or pages. Based on that determination, Stacks builds your outputs.

The UI libraries that automatically get built are a Web Component (Custom Elements) & Vue Component library.

<details>
<summary>Custom Element usage</summary>

```bash
npm install my-awesome-library
```

After you installed your Stacks generated library, you can use a "Custom Element" (Web Component) in the following way:

```html
<html>
  <body>
    <hello-world name="Jane Doe"></hello-world>
    <script src="my-awesome-library.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>Vue 2 & 3 usage</summary>

```bash
npm install my-awesome-library
```

After you installed your Stacks generated library, you can use your Vue Components in the following way:

```vue
<script setup lang="ts">
import HelloWorld from 'my-awesome-library'
</script>

<template>
  <HelloWorld name="J Doe" />
</template>
```
</details>

_A function library may also be automatically generated._

<details>
<summary>Functions usage</summary>

```bash
npm install hello-world-library
```

After you installed your Stacks generated library, you can use your functions in the following way:

```ts
import { count, increment } from 'hello-world-library'

console.log('count is', count)

increment()

console.log('increased count is', count)
```
</details>

You may view this framework as an incredibly "useful set of frames" to assist in efficiently bootstrapping, designing, and managing component & function libraries—using industry best-practices, to reach one of the broadest user bases possible.

## 🚙 Roadmap

Part of the Stacks ecosystem are the following first-party supported stacks:

- [Table](https://github.com/ow3org/table-stack) (Q3 - Data tables with ease)
- [K-Bar](https://github.com/ow3org/k-bar) (Q3 - `cmd + k` for the web)
- [Date Picker](https://github.com/ow3org/date-picker-stack) (Q3 - Beautiful, modern date picker)
- [File Manager](https://github.com/ow3org/file-manager-stack) (Q3 - Build your own file manager—like Dropbox or Google Drive)
- [Image](https://github.com/ow3org/image-stack) (Q3 - Modern image experience)
- [Video](https://github.com/ow3org/video-stack) (Q3 - Modern video experience)
- [Audio](https://github.com/ow3org/audio-stack) (Q3 - Modern audio experience)
- [Web3](https://github.com/ow3org/web3-stack) (Q3 - Solana support, cross-chain core _Ethereum & Cardano drivers coming._)
  - [Wallets](https://github.com/ow3org/wallets) (Q3 - Wallet Authentication)
  - [NFT](https://github.com/ow3org/nft-stack) (Q3 - NFTs, Candy Machine mechanisms, and more.)
  - [DeFi](https://github.com/ow3org/defi-stack) (Q4 - Cross-chain DeFi engine, including staking support)
  - [DAO](https://github.com/ow3org/dao-stack) (Q4 - Powerful toolkit for DAO governance)

These stacks make great examples. Find more awesome Stacks [here](https://github.com/ow3org/awesome-stacks).

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/ow3org/stacks/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/ow3org/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@ow3/hello-world-vue?style=flat-square
[npm-version-href]: https://npmjs.com/package/@ow3/hello-world-vue

[npm-downloads-src]: https://img.shields.io/npm/dm/@ow3/hello-world-vue?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@ow3/hello-world-vue

[github-actions-src]: https://img.shields.io/github/workflow/status/ow3org/stacks/CI/main?style=flat-square
[github-actions-href]: https://github.com/ow3org/stacks/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/ow3org/stacks/main?style=flat-square
[codecov-href]: https://codecov.io/gh/ow3org/stacks -->
