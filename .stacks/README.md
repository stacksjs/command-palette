# @stacksjs/framework

This package contains the "core" logic of the framework/monorepo setup, e.g. the build logic (excluding the IDE setup).

## βοΈ Features

The ultimate goal of this framework, Stacks, is to _help you_ create a component and/or function library. Stacks is a toolkit of composables, methods, and other goodies required to build optimized libraries. A highly optimized build process that automatically generates `.mjs` & `.cjs` library distributions for you, including its TypeScript types.

Other included core features are:

- β‘οΈ Vite plugins to build the component library
- πΒ Blazing fast, empowered by a beautiful DX
- π£Β Tiny foot-print in production builds
- π¬ Fully-typed TypeScript definitions
- π³ Treeshaking for Vue & Web Components
- π¨ Optimized UnoCSS build for Vue & Web Components _(defaults to Tailwind CSS utility classes)_
- π§πΌββοΈ Unified way to access hundreds of [icon sets](https://icon-sets.iconify.design)
 β [Icons in Pure CSS](https://antfu.me/posts/icons-in-pure-css)

And all of this in a zero-config, yet configurable, way.

## π€ Usage

If you want to use Stacks outside of this framework, install it as a dev dependency:

```bash
pnpm i -D @stacksjs/framework
```

Now, you can use it in your project:

```js
import {
  Stacks,
  atomicCssEngine,
  autoImports,
  components,
  createApp,
  defineConfig,
  defineTestConfig,
  inspect,
  resolve,
  uiEngine
} from '@stacksjs/framework'

// you are now free to use any of the imported methods
```

Learn more in the docs.

## π§ͺ Testing

```bash
pnpm test
```

## π Changelog

Please see our [releases](https://github.com/stacksjs/vue-components-library-starter/releases) page for more information on what has changed recently.

## πͺπΌ Contributing

Please see [CONTRIBUTING](../../.github/CONTRIBUTING.md) for details.

## π Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/openweblabs/web-components-library-starter/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## π License

The MIT License (MIT). Please see [LICENSE](../../LICENSE.md) for more information.

Made with β€οΈ
