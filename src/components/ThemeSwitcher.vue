<template>
  <button
    @click="handleToggle"
    class="theme-switcher relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ridder-teal"
    :class="theme === 'dark' ? 'bg-ridder-teal' : 'bg-gray-300'"
    aria-label="Toggle theme"
  >
    <span
      class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center"
      :class="theme === 'dark' ? 'translate-x-6' : 'translate-x-0'"
    >
      <!-- Sun Icon -->
      <svg
        v-if="theme === 'light'"
        class="w-3.5 h-3.5 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- Moon Icon -->
      <svg
        v-else
        class="w-3.5 h-3.5 "
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </span>
  </button>
</template>

<script setup>
import { nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const handleToggle = async () => {
  themeStore.toggleTheme()
  // Ensure DOM updates after theme change
  await nextTick()
  
  // Force verification multiple times to ensure dark class is properly set/removed
  if (typeof document !== 'undefined') {
    const htmlElement = document.documentElement
    const currentTheme = theme.value
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const hasDarkClass = htmlElement.classList.contains('dark')
      
      if (currentTheme === 'light' && hasDarkClass) {
        // Force remove dark class
        htmlElement.classList.remove('dark')
        // Also use className manipulation as backup
        const classes = htmlElement.className.split(/\s+/).filter(c => c !== 'dark').join(' ')
        htmlElement.className = classes || ''
      } else if (currentTheme === 'dark' && !hasDarkClass) {
        // Force add dark class
        htmlElement.classList.add('dark')
      }
      
      // Final check after a short delay
      setTimeout(() => {
        const finalCheck = htmlElement.classList.contains('dark')
        if (currentTheme === 'light' && finalCheck) {
          htmlElement.classList.remove('dark')
          htmlElement.className = htmlElement.className.replace(/\bdark\b/g, '').trim()
        }
      }, 50)
    })
  }
}
</script>

<style scoped>
.theme-switcher {
  min-width: 3rem;
}
</style>

