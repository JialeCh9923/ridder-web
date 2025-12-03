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
                <span class="text-sm font-semibold block dark:text-gray-100">{{ authStore.user?.name }}</span>
                <span class="text-xs font-medium dark:text-ridder-teal-light" >{{ authStore.user?.brokerLevel }}</span>
              </div>
            </div>
            <button
              @click="handleLogoutClick"
              class="logout-btn px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-md transform hover:scale-105 active:scale-95 border-2"
            >
              登出
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Logout Confirmation Modal -->
    <Teleport to="body">
      <div
        v-if="showLogoutConfirm"
        class="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-[100] p-4"
        @click.self="showLogoutConfirm = false"
      >
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">确认登出</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">您确定要登出吗？</p>
          <div class="flex space-x-3">
            <button
              @click="showLogoutConfirm = false"
              class="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              取消
            </button>
            <button
              @click="confirmLogout"
              class="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 dark:bg-red-500 rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
            >
              确认登出
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Logo from '@/components/Logo.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const showLogoutConfirm = ref(false)

const userInitials = computed(() => {
  const name = authStore.user?.name || 'U'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const handleLogoutClick = () => {
  showLogoutConfirm.value = true
}

const confirmLogout = () => {
  showLogoutConfirm.value = false
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

