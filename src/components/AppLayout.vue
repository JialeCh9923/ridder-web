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
          <div class="flex items-center space-x-2 relative">
            <!-- User Avatar Button -->
            <button
              ref="avatarButtonRef"
              @click="toggleDropdown"
              class="w-8 h-8 bg-gradient-ridder rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform focus:outline-none"
            >
              {{ userInitials }}
            </button>
            
            <!-- Dropdown Menu -->
            <div
              v-if="showDropdown"
              ref="dropdownRef"
              class="absolute right-0 top-11 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
            >
              <!-- User Info -->
              <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ authStore.user?.name }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ authStore.user?.brokerLevel }}</p>
              </div>
              
              <!-- Logout Button -->
              <button
                @click="handleLogoutClick"
                class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
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
      
      <!-- Main Content -->
      <div class="pb-20 md:pb-8">
        <slot />
      </div>
      
      <!-- Mobile Bottom Navigation -->
      <MobileBottomNav v-if="showMobileNav" />
      
      <!-- Scroll to Top Button (Mobile Only) -->
      <button
        v-if="showScrollTop && showMobileNav"
        @click="scrollToTop"
        class="md:hidden fixed bottom-24 right-4 w-12 h-12 bg-gradient-ridder rounded-full shadow-lg flex items-center justify-center text-white z-40 hover:scale-110 active:scale-95 transition-all duration-300 animate-fade-in"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import NavBar from './NavBar.vue'
import Logo from './Logo.vue'
import MobileBottomNav from './MobileBottomNav.vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const showDropdown = ref(false)
const showLogoutConfirm = ref(false)
const dropdownRef = ref(null)
const avatarButtonRef = ref(null)
const scrollY = ref(0)
const scrollThreshold = 300 // Show button after scrolling 300px

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
  
  // Handle click outside dropdown
  document.addEventListener('click', handleClickOutside)
  
  // Handle scroll event
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Initial scroll position
  scrollY.value = window.scrollY || window.pageYOffset
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})

const handleClickOutside = (event) => {
  if (showDropdown.value) {
    const dropdown = dropdownRef.value
    const avatarButton = avatarButtonRef.value
    if (dropdown && !dropdown.contains(event.target) && avatarButton && !avatarButton.contains(event.target)) {
      closeDropdown()
    }
  }
}

const userInitials = computed(() => {
  const name = authStore.user?.name || 'U'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const showMobileNav = computed(() => {
  return authStore.isAuthenticated && route.name !== 'Login'
})

const showScrollTop = computed(() => {
  return scrollY.value > scrollThreshold
})

const handleScroll = () => {
  scrollY.value = window.scrollY || window.pageYOffset
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

const handleLogoutClick = () => {
  closeDropdown()
  showLogoutConfirm.value = true
}

const confirmLogout = () => {
  showLogoutConfirm.value = false
  authStore.logout()
  router.push('/login')
}
</script>

