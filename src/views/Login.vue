<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 animated-bg opacity-5"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-ridder-teal rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
    <div class="absolute bottom-20 right-10 w-72 h-72 bg-ridder-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
    
    <div class="max-w-md w-full relative z-10 animate-fade-in-up">
      <div class="card backdrop-blur-sm bg-white/95 border-2 border-gray-100">
        <!-- Logo Section -->
        <div class="text-center mb-8 animate-fade-in-down">
          <Logo class="justify-center mb-4" />
          <p class="text-sm text-ridder-grey mt-4 font-medium">经纪人平台登录</p>
          <p class="text-xs text-gray-400 mt-1">Broker Program Login</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6 animate-fade-in-up" style="animation-delay: 0.2s;">
          <div class="space-y-2 animate-slide-in-right" style="animation-delay: 0.3s;">
            <label for="email" class="block text-sm font-semibold text-ridder-grey">
              邮箱 / Email
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="input-field"
              placeholder="请输入您的邮箱"
            />
          </div>

          <div class="space-y-2 animate-slide-in-right" style="animation-delay: 0.4s;">
            <label for="password" class="block text-sm font-semibold text-ridder-grey">
              密码 / Password
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="input-field"
              placeholder="请输入您的密码"
            />
          </div>

          <div 
            v-if="error" 
            class="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm animate-scale-in"
          >
            {{ error }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style="animation-delay: 0.5s;"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              登录中...
            </span>
            <span v-else>登录 / Login</span>
          </button>
        </form>

        <div class="mt-6 text-center text-xs text-gray-400 animate-fade-in" style="animation-delay: 0.6s;">
          <p>演示账户：任意邮箱和密码即可登录</p>
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

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    await authStore.login({
      email: email.value,
      password: password.value
    })
    router.push('/')
  } catch (err) {
    error.value = '登录失败，请检查您的凭据'
  } finally {
    loading.value = false
  }
}
</script>

