<p align="center"><img src=".github/art/social.png" alt="Social Card of Stacks"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# Command Palettes

Command Palettes, similar to kbar, are often used within applications. This library is to help create a custom & performant command palette for your application. Useful functions & headless components included.

🤖 **Zero-config, by design** <br>
🎨 **Built-in animations** <br>
🧙🏼‍♀️ **Fully customizable components** <br>
✨ **Highly performant** <br>

> _The simple way to to use & design `⌘-k` command palettes._

## Get Started

It's incredibly easy to get started with this Command Palette stack. Simply install either of the following packages, dependent on whether you want to use framework agnostic Web Components or Vue components.

```bash
npm install @stacksjs/command-palette-elements
npm install @stacksjs/command-palette-vue
```

## 🤖 Usage

<details>
<summary>Web Component usage</summary>

```html
<html>
  <body>
    <command-palette></command-palette>
    <script src="command-palette.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>Vue 2 & 3 usage</summary>

```vue
<script setup lang="ts">
import CommandPalette from '@stacksjs/command-palette-vue'
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
import { isDark, toggleDark } from 'command-palette-fx'

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
[npm-version-src]: https://img.shields.io/npm/v/@stacksjs/command-palette-vue?style=flat-square
[npm-version-href]: https://npmjs.com/package/@stacksjs/command-palette-vue

<!-- [npm-downloads-src]: https://img.shields.io/npm/dm/@stacksjs/command-palette-vue?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@stacksjs/command-palette-vue -->

[github-actions-src]: https://img.shields.io/github/workflow/status/ow3org/command-palette/CI/main?style=flat-square
[github-actions-href]: https://github.com/ow3org/command-palette/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/ow3org/command-palette/main?style=flat-square
[codecov-href]: https://codecov.io/gh/ow3org/command-palette -->
