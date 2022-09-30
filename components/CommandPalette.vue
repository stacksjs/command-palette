<script setup lang="ts">
const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
  // More projects...
]
const recent = [projects[0]]
const quickActions = [
  { name: 'Add new file...', icon: 'i-heroicons-document-plus', shortcut: 'N', url: '#' },
  { name: 'Add new folder...', icon: 'i-heroicons-folder-plus', shortcut: 'F', url: '#' },
  { name: 'Add hashtag...', icon: 'i-heroicons-hashtag', shortcut: 'H', url: '#' },
  { name: 'Add label...', icon: 'i-heroicons-tag', shortcut: 'L', url: '#' },
]

const open = ref(true)
const query = ref('')
const filteredProjects = computed(() =>
  query.value === ''
    ? []
    : projects.filter((project) => {
      return project.name.toLowerCase().includes(query.value.toLowerCase())
    }),
)

function onSelect(item: any) {
  window.location = item.url
}
</script>

<template>
  <div
    class="relative z-10"
    role="dialog"
    aria-modal="true"
  >
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="open"
        class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
      />
    </transition>

    <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="open"
          class="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
        >
          <div class="relative">
            <!-- Heroicon name: mini/magnifying-glass -->
            <i class="i-heroicons-outline-magnifying-glass pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
            >
          </div>

          <!-- Default state, show/hide based on command palette state. -->
          <ul class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto">
            <li class="p-2">
              <h2 class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500">
                Recent searches
              </h2>
              <ul class="text-sm text-gray-700">
                <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2 hover:bg-indigo-600 hover:text-white">
                  <!-- Active: "text-white", Not Active: "text-gray-400" -->
                  <i class="i-heroicons-outline-folder h-6 w-6 flex-none text-gray-400 hover:text-white" />
                  <span class="ml-3 flex-auto truncate">Workflow Inc. / Website Redesign</span>
                  <!-- Not Active: "hidden" -->
                  <span class="ml-3 hidden flex-none text-indigo-100">Jump to...</span>
                </li>
              </ul>
            </li>
            <li class="p-2">
              <h2 class="sr-only">
                Quick actions
              </h2>
              <ul class="text-sm text-gray-700">
                <!-- Active: "bg-indigo-600 text-white" -->
                <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                  <!-- Active: "text-white", Not Active: "text-gray-400" -->
                  <i class="i-heroicons-outline-document-plus h-6 w-6 flex-none text-gray-400" />
                  <span class="ml-3 flex-auto truncate">Add new file...</span>
                  <!-- Active: "text-indigo-100", Not Active: "text-gray-400" -->
                  <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">N</kbd></span>
                </li>
                <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                  <i class="i-heroicons-outline-folder-plus h-6 w-6 flex-none text-gray-400" />
                  <span class="ml-3 flex-auto truncate">Add new folder...</span>
                  <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
                </li>
                <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                  <!-- Heroicon name: outline/hashtag -->
                  <i class="i-heroicons-outline-hashtag h-6 w-6 flex-none text-gray-400" />
                  <span class="ml-3 flex-auto truncate">Add hashtag...</span>
                  <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">H</kbd></span>
                </li>
                <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                  <!-- Heroicon name: outline/tag -->
                  <i class="i-heroicons-outline-tag h-6 w-6 flex-none text-gray-400" />
                  <span class="ml-3 flex-auto truncate">Add label...</span>
                  <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">L</kbd></span>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Results, show/hide based on command palette state. -->
          <ul class="max-h-96 overflow-y-auto p-2 text-sm text-gray-700">
            <!-- Active: "bg-indigo-600 text-white" -->
            <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
              <!-- Active: "text-white", Not Active: "text-gray-400" -->
              <i class="i-heroicons-outline-folder h-6 w-6 flex-none text-gray-400" />
              <span class="ml-3 flex-auto truncate">Workflow Inc. / Website Redesign</span>
              <!-- Not Active: "hidden" -->
              <span class="ml-3 hidden flex-none text-indigo-100">Jump to...</span>
            </li>
          </ul>

          <!-- Empty state, show/hide based on command palette state. -->
          <div class="py-14 px-6 text-center sm:px-14">
            <i class="i-heroicons-outline-folder mx-auto h-6 w-6 text-gray-400" />
            <p class="mt-4 text-sm text-gray-900">
              We couldn't find any projects with that term. Please try again.
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
