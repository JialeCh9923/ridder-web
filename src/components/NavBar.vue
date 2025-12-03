<template>
  <nav class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-md sticky top-0 z-50 border-b dark:border-gray-800" style="border-color: rgba(30, 58, 95, 0.1);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center hover:opacity-80 transition-opacity duration-300 group">
            <Logo :width="80" :height="80" />
          </router-link>
        </div>
        
        <!-- Navigation Links -->
        <div class="flex items-center space-x-2">
          <router-link
            to="/"
            class="nav-link px-6 py-3 font-semibold transition-all duration-300 relative group"
            :class="$route.name === 'Wallet' ? 'nav-link-active' : 'nav-link-inactive'"
          >
            <span class="relative z-10">钱包</span>
            <span v-if="$route.name === 'Wallet'" class="nav-link-indicator"></span>
            <span class="nav-link-hover"></span>
          </router-link>
          
          <router-link
            to="/profile"
            class="nav-link px-6 py-3 font-semibold transition-all duration-300 relative group"
            :class="$route.name === 'Profile' ? 'nav-link-active' : 'nav-link-inactive'"
          >
            <span class="relative z-10">资料</span>
            <span v-if="$route.name === 'Profile'" class="nav-link-indicator"></span>
            <span class="nav-link-hover"></span>
          </router-link>
          
          <!-- User Profile Section -->
          <div class="flex items-center space-x-4 ml-8 pl-8 border-l dark:border-gray-700" style="border-color: rgba(30, 58, 95, 0.15);">
            <!-- Theme Switcher -->
            <ThemeSwitcher />
            
            <div class="flex items-center space-x-3 group cursor-pointer">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                {{ userInitials }}
              </div>
              <div class="hidden md:block">
                <span class="text-sm font-semibold block dark:text-gray-100" style="color: #1e3a5f;">{{ authStore.user?.name }}</span>
                <span class="text-xs font-medium dark:text-ridder-teal-light" style="color: #14b8a6;">{{ authStore.user?.brokerLevel }}</span>
              </div>
            </div>
            <button
              @click="handleLogout"
              class="logout-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-md transform hover:scale-105 active:scale-95 border-2"
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
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

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

<style scoped>
.nav-link {
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
}

.nav-link-active {
  color: #1e3a5f;
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.08), rgba(20, 184, 166, 0.08));
}

.dark .nav-link-active {
  color: #5eead4;
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.2), rgba(20, 184, 166, 0.2));
}

.nav-link-inactive {
  color: #6b7280;
}

.dark .nav-link-inactive {
  color: #9ca3af;
}

.nav-link-inactive:hover {
  color: #1e3a5f;
  background: rgba(30, 58, 95, 0.05);
}

.dark .nav-link-inactive:hover {
  color: #5eead4;
  background: rgba(30, 58, 95, 0.15);
}

.nav-link-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);
  animation: slideIn 0.3s ease-out;
}

.nav-link-hover {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 3px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);
  transition: transform 0.3s ease-out;
}

.nav-link-inactive:hover .nav-link-hover {
  transform: translateX(-50%) scaleX(1);
}

.logout-btn {
  background-color: rgba(30, 58, 95, 0.05);
  color: #1e3a5f;
  border-color: rgba(30, 58, 95, 0.2);
}

.dark .logout-btn {
  background-color: rgba(30, 58, 95, 0.2);
  color: #e5e7eb;
  border-color: rgba(20, 184, 166, 0.3);
}

.logout-btn:hover {
  background-color: rgba(30, 58, 95, 0.1);
  border-color: rgba(30, 58, 95, 0.3);
}

.dark .logout-btn:hover {
  background-color: rgba(30, 58, 95, 0.3);
  border-color: rgba(20, 184, 166, 0.5);
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 60%;
    opacity: 1;
  }
}
</style>

