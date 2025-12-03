<template>
  <AppLayout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <!-- Modern Professional Header -->
      <div class="mb-10 md:mb-12 animate-fade-in-down">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
              <span class="text-ridder-blue">会员资料</span>
            </h1>
            <p class="text-ridder-grey text-sm md:text-base font-medium">Member Profile</p>
          </div>
          <div class="hidden md:flex items-center space-x-3 px-5 py-2.5 bg-white rounded-xl border border-ridder-blue/20 shadow-sm">
            <div class="w-2.5 h-2.5 rounded-full animate-pulse" style="background-color: #1e3a5f;"></div>
            <span class="text-sm font-semibold text-ridder-blue">已验证账户</span>
          </div>
        </div>
      </div>

      <!-- Modern Profile Header Card -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 mb-8 p-8 md:p-10 animate-fade-in-up" style="animation-delay: 0.1s;">
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          <div class="relative">
            <div class="w-36 h-36 rounded-2xl flex items-center justify-center text-white text-5xl font-bold shadow-xl border-4 border-white" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
              {{ userInitials }}
            </div>
            <div class="absolute -bottom-2 -right-2 w-14 h-14 rounded-xl border-4 border-white flex items-center justify-center shadow-lg" style="background-color: #14b8a6;">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center md:text-left w-full">
            <h2 class="text-3xl md:text-4xl font-bold text-ridder-blue mb-3">{{ authStore.user?.name }}</h2>
            <p class="text-ridder-grey mb-6 flex items-center justify-center md:justify-start text-base">
              <svg class="w-5 h-5 mr-2.5 text-ridder-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ authStore.user?.email }}
            </p>
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="inline-block px-6 py-2.5 text-white rounded-lg text-sm font-bold shadow-md" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                {{ authStore.user?.brokerLevel }}
              </span>
              <span class="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold border-2" style="background-color: rgba(20, 184, 166, 0.1); color: #14b8a6; border-color: rgba(20, 184, 166, 0.3);">
                已验证账户
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Account & Financial Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- Account Information -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 animate-slide-in-left" style="animation-delay: 0.2s;">
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-ridder-blue mb-1">账户信息</h3>
              <p class="text-xs text-ridder-grey font-medium">Account Information</p>
            </div>
            <div class="w-10 h-1 rounded-full" style="background-color: #1e3a5f;"></div>
          </div>
          <div class="space-y-4">
            <div class="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-ridder-blue/30 hover:shadow-md transition-all duration-300 group">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-colors group-hover:scale-110" style="background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.1));">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" style="color: #1e3a5f;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-xs text-ridder-grey font-medium mb-1.5 uppercase tracking-wide">会员ID</p>
                <span class="font-bold text-xl text-ridder-blue">#{{ authStore.user?.id || 'N/A' }}</span>
              </div>
            </div>
            <div class="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-ridder-blue/30 hover:shadow-md transition-all duration-300 group">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-colors group-hover:scale-110" style="background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.1));">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" style="color: #1e3a5f;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-xs text-ridder-grey font-medium mb-1.5 uppercase tracking-wide">经纪人等级</p>
                <span class="font-bold text-xl text-ridder-blue">{{ authStore.user?.brokerLevel || 'N/A' }}</span>
              </div>
            </div>
            <div class="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-ridder-blue/30 hover:shadow-md transition-all duration-300 group">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-colors group-hover:scale-110" style="background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.1));">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" style="color: #1e3a5f;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-xs text-ridder-grey font-medium mb-1.5 uppercase tracking-wide">注册日期</p>
                <span class="font-bold text-xl text-ridder-blue">2024-01-15</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Overview -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 animate-slide-in-right" style="animation-delay: 0.2s;">
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-ridder-blue mb-1">财务概览</h3>
              <p class="text-xs text-ridder-grey font-medium">Financial Overview</p>
            </div>
            <div class="w-10 h-1 rounded-full" style="background-color: #1e3a5f;"></div>
          </div>
          <div class="space-y-4">
            <div class="financial-card flex items-center p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 group" style="background: linear-gradient(to bottom right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.08)); border-color: rgba(30, 58, 95, 0.2);">
              <div class="w-16 h-16 rounded-xl flex items-center justify-center mr-5 shadow-md group-hover:scale-110 transition-transform" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-xs text-ridder-grey font-medium mb-2 uppercase tracking-wide">账户余额</p>
                <span class="font-bold text-2xl md:text-3xl text-ridder-blue">${{ formatCurrency(authStore.user?.accountBalance || 0) }}</span>
              </div>
            </div>
            <div class="financial-card flex items-center p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 group" style="background: linear-gradient(to bottom right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.08)); border-color: rgba(30, 58, 95, 0.2);">
              <div class="w-16 h-16 rounded-xl flex items-center justify-center mr-5 shadow-md group-hover:scale-110 transition-transform" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-xs text-ridder-grey font-medium mb-2 uppercase tracking-wide">本月收益</p>
                <span class="font-bold text-2xl md:text-3xl text-ridder-blue">${{ formatCurrency(authStore.user?.monthlyProfit || 0) }}</span>
              </div>
            </div>
            <div class="financial-card flex items-center p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 group" style="background: linear-gradient(to bottom right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.08)); border-color: rgba(30, 58, 95, 0.2);">
              <div class="w-16 h-16 rounded-xl flex items-center justify-center mr-5 shadow-md group-hover:scale-110 transition-transform" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-xs text-ridder-grey font-medium mb-2 uppercase tracking-wide">累计佣金</p>
                <span class="font-bold text-2xl md:text-3xl text-ridder-blue">${{ formatCurrency(authStore.user?.totalCommission || 0) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Broker Benefits -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <div>
            <h3 class="text-xl md:text-2xl font-bold text-ridder-blue mb-1">经纪人等级详情</h3>
            <p class="text-xs text-ridder-grey font-medium">Broker Level Benefits</p>
          </div>
          <div class="w-12 h-1 rounded-full" style="background-color: #1e3a5f;"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div 
            v-for="(benefit, index) in brokerBenefits" 
            :key="benefit.title" 
            class="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-ridder-blue/30 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="flex items-start space-x-4">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md" style="background-color: #1e3a5f;">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-2 text-ridder-blue">{{ benefit.title }}</h4>
                <p class="text-sm text-ridder-grey leading-relaxed">{{ benefit.description }}</p>
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
import { useAuthStore } from '@/stores/auth'
import AppLayout from '@/components/AppLayout.vue'

const authStore = useAuthStore()

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
  border-color: rgba(30, 58, 95, 0.4) !important;
}
</style>
