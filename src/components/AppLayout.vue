<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 -z-10">
      <!-- Base Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-ridder-blue/3 via-white to-ridder-teal/3 dark:from-ridder-blue/20 dark:via-gray-900 dark:to-ridder-teal/20"></div>
      
      <!-- Animated Gradient Orbs -->
      <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow" style="background: radial-gradient(circle, rgba(30, 58, 95, 0.4) 0%, transparent 70%);"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow-reverse" style="background: radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 70%);"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 animate-float-particle" style="background: radial-gradient(circle, rgba(30, 58, 95, 0.3) 0%, transparent 70%);"></div>
      
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <!-- Animated Lines -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-ridder-blue/20 to-transparent animate-line-sweep"></div>
        <div class="absolute top-40 right-0 w-px h-full bg-gradient-to-b from-transparent via-ridder-teal/20 to-transparent animate-line-sweep-delayed"></div>
      </div>
    </div>
    
    <!-- Content Layer -->
    <div class="relative z-10">
      <!-- Desktop Navigation -->
      <NavBar class="hidden md:block" />
      
      <!-- Mobile Header -->
      <div class="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center justify-between px-4 py-3">
          <Logo :width="80" :height="80" />
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-ridder rounded-full flex items-center justify-center text-white text-xs font-bold">
              {{ userInitials }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="pb-20 md:pb-8">
        <slot />
      </div>
      
      <!-- Mobile Bottom Navigation -->
      <MobileBottomNav v-if="showMobileNav" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import NavBar from './NavBar.vue'
import Logo from './Logo.vue'
import MobileBottomNav from './MobileBottomNav.vue'

const route = useRoute()
const authStore = useAuthStore()
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

// Ensure theme is applied correctly on mount
onMounted(() => {
  // Double-check that dark class matches theme
  if (typeof document !== 'undefined') {
    const hasDarkClass = document.documentElement.classList.contains('dark')
    if (theme.value === 'light' && hasDarkClass) {
      document.documentElement.classList.remove('dark')
    } else if (theme.value === 'dark' && !hasDarkClass) {
      document.documentElement.classList.add('dark')
    }
  }
})

const userInitials = computed(() => {
  const name = authStore.user?.name || 'U'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const showMobileNav = computed(() => {
  return authStore.isAuthenticated && route.name !== 'Login'
})
</script>

