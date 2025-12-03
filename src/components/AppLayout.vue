<template>
  <div class="min-h-screen bg-gradient-to-br from-ridder-blue/5 via-white to-ridder-teal/5">
    <!-- Desktop Navigation -->
    <NavBar class="hidden md:block" />
    
    <!-- Mobile Header -->
    <div class="md:hidden bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div class="flex items-center justify-between px-4 py-3">
        <Logo />
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
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import NavBar from './NavBar.vue'
import Logo from './Logo.vue'
import MobileBottomNav from './MobileBottomNav.vue'

const route = useRoute()
const authStore = useAuthStore()

const userInitials = computed(() => {
  const name = authStore.user?.name || 'U'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const showMobileNav = computed(() => {
  return authStore.isAuthenticated && route.name !== 'Login'
})
</script>

