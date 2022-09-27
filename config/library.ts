/**
 * Your component & function library variables.
 *
 * These values may be updated at any time, but if you update
 * the "library name," it will create a new npm package for
 * future releases. Read more in its documentation:
 */

import type { Author, Contributors, Hosts, LanguageCode, LibraryName, LibraryOptions, LicenseType, OrganizationName, Repository, StackName } from 'stacks'

const libraryName: LibraryName = 'command-palette'
const organizationName: OrganizationName = '@ow3'
const stackName: StackName = organizationName ? `${organizationName}/${libraryName}` : libraryName
const repository: Repository = 'ow3org/command-palette'
const host: Hosts = 'netlify'

const license: LicenseType = 'MIT'
const author: Author = 'Chris Breuer'
const contributors: Contributors = ['Chris Breuer <chris@ow3.org>']
const defaultLanguage: LanguageCode = 'en'

const componentsLibrary: LibraryOptions = {
  name: `${stackName}-vue`,
  description: 'Build a custom command palette using Vue components & composables—with ease.',
  keywords: ['component', 'k-bar', 'library', 'vue', 'vite', 'typescript', 'javascript', 'composables', 'headless'],
}

const webComponentsLibrary: LibraryOptions = {
  name: `${stackName}-elements`,
  description: 'Build a custom command palette using Web Components & composables—with ease.',
  keywords: ['custom-elements', 'web-components', 'library', 'framework-agnostic', 'typescript', 'javascript'],
}

const functionsLibrary: LibraryOptions = {
  name: `${stackName}-fx`,
  description: 'Your function library description.',
  keywords: ['functions', 'composables', 'library', 'typescript', 'javascript'],
  shouldBuildIife: false,
  shouldGenerateSourcemap: false,
}

export { defaultLanguage, license, author, contributors, organizationName, libraryName, host, stackName, repository, componentsLibrary, functionsLibrary, webComponentsLibrary }
