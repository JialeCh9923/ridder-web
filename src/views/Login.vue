<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden md:px-4 md:py-12">
    <!-- Enhanced Animated Background -->
    <div class="absolute inset-0">
      <!-- Base Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-ridder-blue/5 via-white to-ridder-teal/5 dark:from-ridder-blue/20 dark:via-gray-900 dark:to-ridder-teal/20"></div>
      
      <!-- Animated Orbs -->
      <div class="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 animate-float-slow" style="background: radial-gradient(circle, rgba(30, 58, 95, 0.4) 0%, transparent 70%);"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 animate-float-slow-reverse" style="background: radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 70%);"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
    </div>
    
    <!-- Success Animation Overlay -->
    <transition name="success-fade">
      <div  v-if="showSuccess" class="fixed inset-0 z-50 flex items-center justify-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
        <div class="text-center animate-scale-in">
          <div class="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
            <svg class="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" stroke-opacity="0.4" class="checkmark-circle" />
              <path d="M7 12.5L10.5 16L17 9.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-4xl font-bold mb-2" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            登录成功！
          </h2>
          <p class="text-ridder-grey dark:text-gray-400 text-sm md:text-base">正在跳转...</p>
        </div>
      </div>
    </transition>
    
    <!-- Desktop Login Card -->
    <div class="hidden md:block max-w-md w-full relative z-10 animate-fade-in-up">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 backdrop-blur-sm">
        <!-- Logo Section -->
        <div class="text-center mb-6 animate-fade-in-down">
          <div class="flex justify-center mb-4 ">
            <Logo :width="100" :height="100" />
          </div>
          <h1 class="text-2xl font-bold mb-1" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            经纪人平台登录
          </h1>
          <p class="text-sm text-ridder-grey dark:text-gray-400 font-medium">Broker Program Login</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-1.5 animate-slide-in-right" style="animation-delay: 0.3s;">
            <label for="email" class="block text-sm font-semibold mb-1.5 dark:text-gray-300" style="color: #1e3a5f;">
              邮箱 / Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="login-input w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-600"
                placeholder="请输入您的邮箱"
                style="border-color: rgba(30, 58, 95, 0.2);"
              />
            </div>
          </div>

          <div class="space-y-1.5 animate-slide-in-right" style="animation-delay: 0.4s;">
            <label for="password" class="block text-sm font-semibold mb-1.5 dark:text-gray-300" style="color: #1e3a5f;">
              密码 / Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                class="login-input w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-600"
                placeholder="请输入您的密码"
                style="border-color: rgba(30, 58, 95, 0.2);"
              />
            </div>
          </div>

          <div 
            v-if="error" 
            class="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-xl text-sm animate-scale-in flex items-center space-x-2"
          >
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ error }}</span>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="login-btn w-full py-4 rounded-xl text-white font-bold text-base shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
            style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              登录中...
            </span>
            <span v-else class="flex items-center justify-center space-x-2">
              <span>登录 / Login</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </form>

        <div class="mt-5 text-center">
          <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg" style="background: rgba(30, 58, 95, 0.05);">
            <svg class="w-4 h-4" style="color: #14b8a6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-xs text-ridder-grey">演示账户：任意邮箱和密码即可登录</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Fullscreen Login -->
    <div class="md:hidden w-full h-screen flex flex-col justify-center relative z-10 px-6 py-6 animate-fade-in-up">
      <!-- Mobile Logo and Form Section -->
      <div class="flex flex-col flex-1 justify-center">
        <!-- Mobile Logo Section -->
        <div class="text-center mb-6">
          <div class="flex justify-center mb-12">
            <Logo :width="120" :height="120" />
          </div>
          <h1 class="text-2xl font-bold mb-1" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            经纪人平台登录
          </h1>
          <p class="text-sm text-ridder-grey dark:text-gray-400 font-medium">Broker Program Login</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="space-y-1.5">
          <label for="email-mobile" class="block text-sm font-semibold mb-1.5 dark:text-gray-300" style="color: #1e3a5f;">
            邮箱 / Email
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              id="email-mobile"
              v-model="email"
              type="email"
              required
              class="login-input w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none text-base bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-600"
              placeholder="请输入您的邮箱"
              style="border-color: rgba(30, 58, 95, 0.2);"
            />
          </div>
        </div>

        <div class="space-y-1.5">
          <label for="password-mobile" class="block text-sm font-semibold mb-1.5 text-ridder-blue dark:text-gray-300">
            密码 / Password
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-ridder-blue dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              id="password-mobile"
              v-model="password"
              type="password"
              required
              class="login-input w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none text-base bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-600"
              placeholder="请输入您的密码"
            />
          </div>
        </div>

        <div 
          v-if="error" 
          class="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm animate-scale-in flex items-start space-x-2"
        >
          <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ error }}</span>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="login-btn w-full py-4 rounded-xl text-white font-bold text-base shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 touch-manipulation"
          style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);"
        >
          <span v-if="loading" class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            登录中...
          </span>
          <span v-else class="flex items-center justify-center space-x-2">
            <span>登录 / Login</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </form>
      </div>

      <div class="mt-5 text-center">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-ridder-blue/5 dark:bg-ridder-blue/20">
          <svg class="w-4 h-4 text-ridder-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-xs text-ridder-grey dark:text-gray-400">演示账户：任意邮箱和密码即可登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Logo from '@/components/Logo.vue'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const showSuccess = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    await authStore.login({
      email: email.value,
      password: password.value
    })
    
    // Show success animation
    showSuccess.value = true
    
    // Wait for animation, then navigate
    setTimeout(() => {
      router.push('/')
    }, 1500)
  } catch (err) {
    error.value = '登录失败，请检查您的凭据'
    loading.value = false
  }
}
</script>

<style scoped>
.login-input:focus {
  border-color: #14b8a6 !important;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
  transform: translateY(-1px);
}

.dark .login-input:focus {
  border-color: #5eead4 !important;
  box-shadow: 0 0 0 3px rgba(94, 234, 212, 0.2);
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(30, 58, 95, 0.3);
}

.login-btn:active:not(:disabled) {
  transform: scale(0.98);
}

.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Success Animation */
.success-fade-enter-active {
  transition: opacity 0.3s ease;
}

.success-fade-leave-active {
  transition: opacity 0.3s ease;
}

.success-fade-enter-from,
.success-fade-leave-to {
  opacity: 0;
}

.checkmark-circle {
  opacity: 0;
  animation: circleFadeIn 0.4s ease-out 0.2s forwards;
}

@keyframes circleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.checkmark-path {
  stroke: white;
  stroke-dasharray: 16;
  stroke-dashoffset: 16;
  animation: checkmarkDraw 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}

@keyframes checkmarkDraw {
  0% {
    stroke-dashoffset: 16;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .login-input {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}
</style>

