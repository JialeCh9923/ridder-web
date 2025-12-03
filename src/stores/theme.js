import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // Get initial theme from localStorage - default to light theme
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme')
    // Default to 'light' theme, only use saved preference if it's valid
    // If saved value is invalid or doesn't exist, default to 'light'
    if (saved === 'dark' || saved === 'light') {
      return saved
    }
    // Clear invalid theme from localStorage
    if (saved) {
      localStorage.removeItem('theme')
    }
    return 'light'
  }
  
  const initialTheme = getInitialTheme()
  const theme = ref(initialTheme)

  // Apply theme to document
  function applyTheme(newTheme) {
    // Validate theme value
    if (newTheme !== 'light' && newTheme !== 'dark') {
      newTheme = 'light'
    }
    
    theme.value = newTheme
    
    if (typeof document !== 'undefined') {
      const htmlElement = document.documentElement
      
      if (newTheme === 'light') {
        // For light theme: aggressively remove dark class
        // Method 1: classList.remove
        htmlElement.classList.remove('dark')
        
        // Method 2: Direct className manipulation (more reliable)
        const currentClass = htmlElement.getAttribute('class') || ''
        const cleanedClass = currentClass
          .split(/\s+/)
          .filter(cls => cls !== 'dark' && cls.trim() !== '')
          .join(' ')
        
        if (cleanedClass !== currentClass) {
          if (cleanedClass) {
            htmlElement.setAttribute('class', cleanedClass)
          } else {
            htmlElement.removeAttribute('class')
          }
        }
        
        // Method 3: Final verification
        if (htmlElement.classList.contains('dark')) {
          htmlElement.classList.remove('dark')
        }
      } else {
        // For dark theme: ensure dark class is present
        if (!htmlElement.classList.contains('dark')) {
          htmlElement.classList.add('dark')
        }
      }
    }
    
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  // Toggle between light and dark
  function toggleTheme() {
    const currentTheme = theme.value
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    
    // Apply the new theme
    applyTheme(newTheme)
    
    // Force verification after a short delay to ensure DOM is updated
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        const htmlElement = document.documentElement
        const hasDarkClass = htmlElement.classList.contains('dark')
        
        if (newTheme === 'light' && hasDarkClass) {
          // Force remove dark class if it's still there
          htmlElement.classList.remove('dark')
          htmlElement.className = htmlElement.className.replace(/\bdark\b/g, '').trim()
        } else if (newTheme === 'dark' && !hasDarkClass) {
          // Force add dark class if it's missing
          htmlElement.classList.add('dark')
        }
      }, 10)
    }
  }

  // Initialize theme on store creation
  function initTheme() {
    applyTheme(theme.value)
  }

  // Apply theme immediately when store is created (synchronously before Vue mounts)
  // This prevents flash of wrong theme
  // IMPORTANT: Ensure dark class is removed if theme is light
  if (typeof document !== 'undefined') {
    // Force remove dark class first to ensure clean state
    const htmlElement = document.documentElement
    htmlElement.classList.remove('dark')
    
    // Then apply the correct theme
    applyTheme(initialTheme)
    
    // Double-check: if light theme, ensure dark class is definitely removed
    if (initialTheme === 'light') {
      htmlElement.classList.remove('dark')
    }
  }

  // Watch for system preference changes
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      // Only auto-apply if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
  }

  return {
    theme,
    toggleTheme,
    initTheme,
    applyTheme
  }
})

