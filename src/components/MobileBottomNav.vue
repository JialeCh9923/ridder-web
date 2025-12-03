<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom">
    <!-- Background with blur -->
    <div class="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 shadow-2xl"></div>
    
    <!-- Navigation Items -->
    <div class="relative flex items-center justify-around px-2 py-3">
      <router-link
        to="/"
        class="nav-item flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all duration-300 relative group"
        :class="isActive('/') ? 'nav-item-active' : 'nav-item-inactive'"
      >
        <div class="relative">
          <svg class="w-6 h-6 mb-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <div v-if="isActive('/')" class="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse" style="background-color: #14b8a6;"></div>
        </div>
        <span class="text-xs font-semibold transition-all duration-300">钱包</span>
      </router-link>
      
      <router-link
        to="/profile"
        class="nav-item flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all duration-300 relative group"
        :class="isActive('/profile') ? 'nav-item-active' : 'nav-item-inactive'"
      >
        <div class="relative">
          <svg class="w-6 h-6 mb-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div v-if="isActive('/profile')" class="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse" style="background-color: #14b8a6;"></div>
        </div>
        <span class="text-xs font-semibold transition-all duration-300">资料</span>
      </router-link>
      
      <div class="flex flex-col items-center justify-center px-5 py-2">
        <ThemeSwitcher />
        <span class="text-xs font-semibold mt-1 dark:text-gray-300" style="color: #1e3a5f;">主题</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
.safe-area-inset-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}

.nav-item {
  position: relative;
}

.nav-item-active {
  color: #1e3a5f;
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.1));
  transform: translateY(-4px);
}

.dark .nav-item-active {
  color: #5eead4;
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.2), rgba(20, 184, 166, 0.2));
}

.nav-item-active svg {
  transform: scale(1.1);
  color: #1e3a5f;
}

.dark .nav-item-active svg {
  color: #5eead4;
}

.nav-item-active span {
  color: #1e3a5f;
  font-weight: 700;
}

.dark .nav-item-active span {
  color: #5eead4;
}

.nav-item-inactive {
  color: #9ca3af;
}

.dark .nav-item-inactive {
  color: #6b7280;
}

.nav-item-inactive:hover {
  color: #1e3a5f;
  background: rgba(30, 58, 95, 0.05);
  transform: translateY(-2px);
}

.dark .nav-item-inactive:hover {
  color: #5eead4;
  background: rgba(30, 58, 95, 0.15);
}

.nav-item-inactive:hover svg {
  transform: scale(1.05);
}

.nav-item-inactive span {
  color: #9ca3af;
}

.dark .nav-item-inactive span {
  color: #6b7280;
}

.nav-item-inactive:hover span {
  color: #1e3a5f;
}

.dark .nav-item-inactive:hover span {
  color: #5eead4;
}
</style>

