import { createApp } from 'vue'
import Demo from '../../../components/Demo.vue'
import '@unocss/reset/tailwind.css'

// prepare the messages object from the yaml language files
// const messages = Object.fromEntries(
//   Object.entries(
//     import.meta.glob<{ default: any }>('../../../lang/*.y(a)?ml', { eager: true }))
//     .map(([key, value]) => {
//       const yaml = key.endsWith('.yaml')
//       return [key.slice(14, yaml ? -5 : -4), value.default]
//     }),
// )

// console.log('messages', messages)

createApp(Demo).mount('#app')
