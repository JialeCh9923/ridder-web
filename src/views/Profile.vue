<template>
  <AppLayout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-10">
      <!-- Modern Professional Header -->
      <div class="mb-6 md:mb-12 animate-fade-in-down">
        <div class="flex items-center justify-between mb-4 md:mb-6">
          <div class="flex-1">
            <h1 class="text-2xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">
              <span class="">会员资料</span>
            </h1>
            <p class="text-ridder-grey dark:text-gray-400 text-xs md:text-base font-medium">Member Profile</p>
          </div>
          <div class="hidden md:flex items-center space-x-3 px-5 py-2.5 bg-white dark:bg-gray-800 rounded-xl border shadow-sm dark:border-gray-700" style="border-color: rgba(20, 184, 166, 0.3); background: linear-gradient(to right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.05));">
            <div class="w-2.5 h-2.5 rounded-full animate-pulse" style="background-color: #14b8a6;"></div>
            <span class="text-sm font-semibold  dark:text-gray-200">已验证账户</span>
          </div>
          <!-- Mobile Status Badge -->
          <div class="md:hidden flex items-center space-x-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg border shadow-sm dark:border-gray-700" style="border-color: rgba(20, 184, 166, 0.3); background: linear-gradient(to right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.05));">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background-color: #14b8a6;"></div>
            <span class="text-xs font-semibold  dark:text-gray-200">已验证</span>
          </div>
        </div>
      </div>

      <!-- Modern Profile Header Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mb-6 md:mb-8 p-5 md:p-10 animate-fade-in-up" style="animation-delay: 0.1s;">
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-10">
          <div class="relative">
            <div class="w-28 h-28 md:w-36 md:h-36 rounded-2xl flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-xl border-4 border-white" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
              {{ userInitials }}
            </div>
            <div class="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-10 h-10 md:w-14 md:h-14 rounded-xl border-4 border-white flex items-center justify-center shadow-lg" style="background-color: #14b8a6;">
              <svg class="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center md:text-left w-full">
            <h2 class="text-2xl md:text-4xl font-bold  dark:text-ridder-teal-light mb-2 md:mb-3">{{ authStore.user?.name }}</h2>
            <p class="text-ridder-grey dark:text-gray-400 mb-4 md:mb-6 flex items-center justify-center md:justify-start text-sm md:text-base">
              <svg class="w-4 h-4 md:w-5 md:h-5 mr-2  dark:text-ridder-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="break-all">{{ authStore.user?.email }}</span>
            </p>
            <div class="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              <span class="inline-block px-4 md:px-6 py-2 md:py-2.5 text-white rounded-lg text-xs md:text-sm font-bold shadow-md" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                {{ authStore.user?.brokerLevel }}
              </span>
              <span class="inline-block px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold border-2 bg-ridder-teal/10 dark:bg-ridder-teal/20 text-ridder-teal dark:text-ridder-teal-light border-ridder-teal/30 dark:border-ridder-teal/40">
                已验证账户
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Account & Financial Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <!-- Account Information -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 animate-slide-in-left" style="animation-delay: 0.2s;">
          <div class="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 class="text-lg md:text-2xl font-bold  dark:text-ridder-teal-light mb-0.5 md:mb-1">账户信息</h3>
              <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">Account Information</p>
            </div>
            <div class="w-8 md:w-10 h-1 rounded-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);"></div>
          </div>
          <div class="space-y-3 md:space-y-4">
            <div class="flex items-center p-4 md:p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700 active:border-ridder-blue/30 active:shadow-md transition-all duration-300 touch-manipulation">
              <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0" style="background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.1));">
                <svg class="w-6 h-6 md:w-7 md:h-7  dark:text-ridder-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium mb-1 md:mb-1.5 uppercase tracking-wide">会员ID</p>
                <span class="font-bold text-lg md:text-xl  dark:text-ridder-teal-light tabular-nums break-all">#{{ authStore.user?.id || 'N/A' }}</span>
              </div>
            </div>
            <div class="flex items-center p-4 md:p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700 active:border-ridder-blue/30 active:shadow-md transition-all duration-300 touch-manipulation">
              <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0" style="background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.1));">
                <svg class="w-6 h-6 md:w-7 md:h-7  dark:text-ridder-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium mb-1 md:mb-1.5 uppercase tracking-wide">经纪人等级</p>
                <span class="font-bold text-lg md:text-xl  dark:text-ridder-teal-light">{{ authStore.user?.brokerLevel || 'N/A' }}</span>
              </div>
            </div>
            <div class="flex items-center p-4 md:p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700 active:border-ridder-blue/30 active:shadow-md transition-all duration-300 touch-manipulation">
              <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0" style="background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.1));">
                <svg class="w-6 h-6 md:w-7 md:h-7  dark:text-ridder-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium mb-1 md:mb-1.5 uppercase tracking-wide">注册日期</p>
                <span class="font-bold text-lg md:text-xl  dark:text-ridder-teal-light">2024-01-15</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Overview -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 animate-slide-in-right" style="animation-delay: 0.2s;">
          <div class="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 class="text-lg md:text-2xl font-bold  dark:text-ridder-teal-light mb-0.5 md:mb-1">财务概览</h3>
              <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">Financial Overview</p>
            </div>
            <div class="w-8 md:w-10 h-1 rounded-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);"></div>
          </div>
          <div class="space-y-3 md:space-y-4">
            <div class="financial-card flex items-center p-4 md:p-6 rounded-xl border-2 active:shadow-lg transition-all duration-300 touch-manipulation" style="background: linear-gradient(to bottom right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.08)); border-color: rgba(30, 58, 95, 0.2);">
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mr-4 md:mr-5 shadow-md flex-shrink-0" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium mb-1.5 md:mb-2 uppercase tracking-wide">账户余额</p>
                <span class="font-bold text-xl md:text-3xl  dark:text-ridder-teal-light tabular-nums break-all">${{ formatCurrency(authStore.user?.accountBalance || 0) }}</span>
              </div>
            </div>
            <div class="financial-card flex items-center p-4 md:p-6 rounded-xl border-2 active:shadow-lg transition-all duration-300 touch-manipulation dark:border-gray-700" style="background: linear-gradient(to bottom right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.08)); border-color: rgba(30, 58, 95, 0.2);">
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mr-4 md:mr-5 shadow-md flex-shrink-0" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium mb-1.5 md:mb-2 uppercase tracking-wide">本月收益</p>
                <span class="font-bold text-xl md:text-3xl  dark:text-ridder-teal-light tabular-nums break-all">${{ formatCurrency(authStore.user?.monthlyProfit || 0) }}</span>
              </div>
            </div>
            <div class="financial-card flex items-center p-4 md:p-6 rounded-xl border-2 active:shadow-lg transition-all duration-300 touch-manipulation dark:border-gray-700" style="background: linear-gradient(to bottom right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.08)); border-color: rgba(30, 58, 95, 0.2);">
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mr-4 md:mr-5 shadow-md flex-shrink-0" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium mb-1.5 md:mb-2 uppercase tracking-wide">累计佣金</p>
                <span class="font-bold text-xl md:text-3xl  dark:text-ridder-teal-light tabular-nums break-all">${{ formatCurrency(authStore.user?.totalCommission || 0) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Broker Benefits -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <div class="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-100 dark:border-gray-700">
          <div>
            <h3 class="text-lg md:text-2xl font-bold  dark:text-ridder-teal-light mb-0.5 md:mb-1">经纪人等级详情</h3>
            <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">Broker Level Benefits</p>
          </div>
          <div class="w-10 md:w-12 h-1 rounded-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div 
            v-for="(benefit, index) in brokerBenefits" 
            :key="benefit.title" 
            class="p-4 md:p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700 active:border-ridder-blue/30 active:shadow-lg transition-all duration-300 touch-manipulation"
          >
            <div class="flex items-start space-x-3 md:space-x-4">
              <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-bold text-base md:text-lg mb-1.5 md:mb-2  dark:text-ridder-teal-light">{{ benefit.title }}</h4>
                <p class="text-xs md:text-sm text-ridder-grey dark:text-gray-400 leading-relaxed">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import AppLayout from '@/components/AppLayout.vue'

const authStore = useAuthStore()
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const userInitials = computed(() => {
  const name = authStore.user?.name || 'U'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US').format(value)
}

const brokerBenefits = [
  {
    title: '手数佣金',
    description: '每标准手可获得 $12 美元交易佣金分配'
  },
  {
    title: '分红佣金',
    description: '可获取团队盈利总额的 6% 作为分红佣金'
  },
  {
    title: '合约佣金',
    description: '新账户建仓可获得 1.2% 合约佣金奖励'
  },
  {
    title: '领导级别奖',
    description: '可获取下级同级账户总利润的领导级别分红'
  },
  {
    title: '加权分红',
    description: '每 200,000 新增业绩为 1 权份，最高获取 10 份'
  },
  {
    title: '团队管理',
    description: '可管理下级经纪人团队，享受团队业绩分红'
  }
]
</script>

<style scoped>
.financial-card:hover {
  border-color: rgba(20, 184, 166, 0.4) !important;
}

.financial-card:active {
  border-color: rgba(20, 184, 166, 0.4) !important;
  transform: scale(0.98);
}

.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

@media (max-width: 768px) {
  .financial-card {
    min-height: 80px;
  }
}
</style>
