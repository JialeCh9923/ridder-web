<template>
  <nav class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center animate-fade-in-left hover:opacity-80 transition-opacity">
            <Logo />
          </router-link>
        </div>
        
        <div class="flex items-center space-x-1">
          <router-link
            to="/"
            class="px-6 py-3 text-ridder-grey hover:text-ridder-teal font-semibold transition-all duration-300 relative group"
            active-class="text-ridder-teal"
          >
            钱包
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-ridder-teal group-hover:w-full transition-all duration-300"></span>
            <span v-if="$route.name === 'Wallet'" class="absolute bottom-0 left-0 w-full h-0.5 bg-ridder-teal"></span>
          </router-link>
          <router-link
            to="/profile"
            class="px-6 py-3 text-ridder-grey hover:text-ridder-teal font-semibold transition-all duration-300 relative group"
            active-class="text-ridder-teal"
          >
            资料
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-ridder-teal group-hover:w-full transition-all duration-300"></span>
            <span v-if="$route.name === 'Profile'" class="absolute bottom-0 left-0 w-full h-0.5 bg-ridder-teal"></span>
          </router-link>
          <div class="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-ridder rounded-full flex items-center justify-center text-white text-sm font-bold">
                {{ userInitials }}
              </div>
              <span class="text-sm font-medium text-ridder-grey">{{ authStore.user?.name }}</span>
            </div>
            <button
              @click="handleLogout"
              class="btn-secondary text-sm py-2 px-4"
            >
              登出
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Logo from '@/components/Logo.vue'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const userInitials = computed(() => {
  const name = authStore.user?.name || 'U'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

