import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import { useThemeStore } from './stores/theme'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize theme FIRST (before mounting) to prevent flash
const themeStore = useThemeStore()
// Theme is already applied when store is created, but ensure it's correct
themeStore.initTheme()

// Initialize auth state
const authStore = useAuthStore()
authStore.initAuth()

app.mount('#app')

