<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 safe-area-inset-bottom">
    <div class="flex items-center justify-around px-2 py-2">
      <router-link
        to="/"
        class="flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-200"
        :class="isActive('/') ? 'text-ridder-teal' : 'text-gray-400'"
      >
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="text-xs font-medium">钱包</span>
        <div v-if="isActive('/')" class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-ridder-teal rounded-full"></div>
      </router-link>
      
      <router-link
        to="/profile"
        class="flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-200"
        :class="isActive('/profile') ? 'text-ridder-teal' : 'text-gray-400'"
      >
        <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span class="text-xs font-medium">资料</span>
        <div v-if="isActive('/profile')" class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-ridder-teal rounded-full"></div>
      </router-link>
      
      <div class="flex flex-col items-center justify-center px-4 py-2">
        <div class="w-12 h-12 bg-gradient-ridder rounded-full flex items-center justify-center text-white mb-1 shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <span class="text-xs font-medium text-gray-400">统计</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
.safe-area-inset-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>

