<template>
  <AppLayout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-10">
      <!-- Modern Professional Header -->
      <div class="mb-6 md:mb-12 animate-fade-in-down">
        <div class="flex items-center justify-between mb-4 md:mb-6">
          <div class="flex-1">
            <h1 class="text-2xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">
              <span class="text-ridder-blue">欢迎回来</span>,
              <span class="text-ridder-blue">{{ authStore.user?.name }}</span>
            </h1>
            <p class="text-ridder-grey dark:text-gray-400 text-xs md:text-base font-medium">您的经纪人钱包概览</p>
          </div>
          <div class="hidden md:flex items-center space-x-3 px-5 py-2.5 bg-white dark:bg-gray-800 rounded-xl border shadow-sm dark:border-gray-700"
            style="border-color: rgba(20, 184, 166, 0.3); background: linear-gradient(to right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.05));">
            <div class="w-2.5 h-2.5 rounded-full animate-pulse" style="background-color: #14b8a6;"></div>
            <span class="text-sm font-semibold text-ridder-blue dark:text-gray-200">在线</span>
          </div>
          <!-- Mobile Status Badge -->
          <div class="md:hidden flex items-center space-x-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg border shadow-sm dark:border-gray-700"
            style="border-color: rgba(20, 184, 166, 0.3); background: linear-gradient(to right, rgba(30, 58, 95, 0.05), rgba(20, 184, 166, 0.05));">
            <div class="w-2 h-2 rounded-full animate-pulse" style="background-color: #14b8a6;"></div>
            <span class="text-xs font-semibold text-ridder-blue dark:text-gray-200">在线</span>
          </div>
        </div>
      </div>

      <!-- Modern Balance Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
        <!-- Account Balance Card -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 transform active:scale-[0.98] transition-all duration-300 animate-fade-in-up touch-manipulation"
          style="animation-delay: 0.1s;">
          <div class="flex items-center justify-between mb-4 md:mb-6">
            <p class="text-ridder-grey dark:text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-wide">账户余额</p>
            <div
              class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
              style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-2xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight tabular-nums break-all"
            style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            ${{ formatCurrency(authStore.user?.accountBalance || 0) }}</p>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 rounded-full" style="background-color: #14b8a6;"></div>
            <p class="text-ridder-grey dark:text-gray-400 text-xs font-medium">总资产</p>
          </div>
        </div>

        <!-- Monthly Profit Card -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 transform active:scale-[0.98] transition-all duration-300 animate-fade-in-up touch-manipulation"
          style="animation-delay: 0.2s;">
          <div class="flex items-center justify-between mb-4 md:mb-6">
            <p class="text-ridder-grey dark:text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-wide">本月收益</p>
            <div
              class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
              style="background: linear-gradient(135deg, #14b8a6 0%, #1e3a5f 100%);">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <p class="text-2xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight tabular-nums break-all text-ridder-teal dark:text-ridder-teal-light">${{ formatCurrency(authStore.user?.monthlyProfit || 0) }}</p>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-ridder-teal dark:text-ridder-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <p class="text-xs font-semibold text-ridder-teal dark:text-ridder-teal-light">+12.5% 本月</p>
          </div>
        </div>

        <!-- Total Commission Card -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 transform active:scale-[0.98] transition-all duration-300 animate-fade-in-up touch-manipulation"
          style="animation-delay: 0.3s;">
          <div class="flex items-center justify-between mb-4 md:mb-6">
            <p class="text-ridder-grey dark:text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-wide">累计佣金</p>
            <div
              class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
              style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <p class="text-2xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight tabular-nums break-all"
            style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            ${{ formatCurrency(authStore.user?.totalCommission || 0) }}</p>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 rounded-full" style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
            </div>
            <p class="text-ridder-grey dark:text-gray-400 text-xs font-medium">历史总计</p>
          </div>
        </div>
      </div>

      <!-- Modern Broker Program Details Table -->
      <div
        class="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 mb-8 animate-fade-in-up"
        style="animation-delay: 0.4s;">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-ridder-blue dark:text-ridder-teal-light mb-1">经纪人计划详情</h2>
            <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">Broker Program Details</p>
          </div>
          <div class="w-10 h-1 rounded-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);">
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 dark:border-gray-700"
                style="background: linear-gradient(to right, rgba(30, 58, 95, 0.08), rgba(20, 184, 166, 0.1), rgba(30, 58, 95, 0.08)); border-color: rgba(30, 58, 95, 0.2);">
                <th class="px-6 py-4 text-left text-xs font-bold text-ridder-grey dark:text-gray-400 uppercase tracking-wider">昵称</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-ridder-grey dark:text-gray-400 uppercase tracking-wider">USD</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-ridder-grey dark:text-gray-400 uppercase tracking-wider">MTS</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-ridder-grey dark:text-gray-400 uppercase tracking-wider">手数/每月</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-ridder-grey dark:text-gray-400 uppercase tracking-wider">预计收益/每月</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-ridder-grey dark:text-gray-400 uppercase tracking-wider">年收益/USD</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-ridder-grey dark:text-gray-400 uppercase tracking-wider">托管类别</th>
              </tr>
            </thead>
            <tbody class="divide-y dark:divide-gray-700" style="border-color: rgba(30, 58, 95, 0.1);">
              <tr v-for="(plan, index) in brokerPlans" :key="plan.name"
                class="table-row hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group">
                <td class="px-6 py-5 whitespace-nowrap">
                  <span class="font-bold text-xl text-ridder-blue dark:text-ridder-teal-light">
                    {{ plan.name }}
                  </span>
                </td>
                <td class="px-6 py-5 whitespace-nowrap">
                  <span class="font-semibold text-ridder-grey dark:text-gray-300 tabular-nums">${{ formatCurrency(plan.usd) }}</span>
                </td>
                <td class="px-6 py-5 whitespace-nowrap">
                  <span class="font-semibold text-ridder-grey dark:text-gray-300 tabular-nums">${{ formatCurrency(plan.mts) }}</span>
                </td>
                <td class="px-6 py-5 whitespace-nowrap text-ridder-grey dark:text-gray-300">{{ plan.lots }}</td>
                <td class="px-6 py-5 whitespace-nowrap">
                  <span class="font-semibold text-ridder-teal dark:text-ridder-teal-light">{{ plan.monthlyReturn }}</span>
                </td>
                <td class="px-6 py-5 whitespace-nowrap font-semibold text-ridder-grey dark:text-gray-300">{{ plan.yearlyReturn }}</td>
                <td class="px-6 py-5 whitespace-nowrap">
                  <span v-if="plan.category" class="px-4 py-2 text-xs font-bold rounded-lg" :class="plan.badgeClass"
                    :style="plan.name === 'RD10' ? 'background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);' : ''">
                    {{ plan.category }}
                  </span>
                  <span v-else class="text-ridder-grey/50 dark:text-gray-500">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Mobile Broker Program Cards -->
      <div class="md:hidden space-y-4 mb-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-lg font-bold text-ridder-blue dark:text-ridder-teal-light mb-0.5">经纪人计划详情</h2>
            <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">Broker Program Details</p>
          </div>
        </div>
        <div v-for="plan in brokerPlans" :key="plan.name"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 animate-fade-in-up touch-manipulation">
          <div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
            <span class="font-bold text-lg text-ridder-blue dark:text-ridder-teal-light">{{ plan.name }}</span>
            <span v-if="plan.category" class="px-3 py-1.5 text-xs font-bold rounded-lg" :class="plan.badgeClass"
              :style="plan.name === 'RD10' ? 'background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);' : ''">
              {{ plan.category }}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-ridder-grey dark:text-gray-400 text-xs">USD:</span>
              <p class="font-semibold text-ridder-blue dark:text-ridder-teal-light mt-1 text-base tabular-nums">${{ formatCurrency(plan.usd) }}</p>
            </div>
            <div>
              <span class="text-ridder-grey dark:text-gray-400 text-xs">MTS:</span>
              <p class="font-semibold text-ridder-blue dark:text-ridder-teal-light mt-1 text-base tabular-nums">${{ formatCurrency(plan.mts) }}</p>
            </div>
            <div>
              <span class="text-ridder-grey dark:text-gray-400 text-xs">手数/每月:</span>
              <p class="font-semibold text-ridder-grey dark:text-gray-300 mt-1 text-base">{{ plan.lots }}</p>
            </div>
            <div>
              <span class="text-ridder-grey dark:text-gray-400 text-xs">预计收益/每月:</span>
              <p class="font-semibold text-ridder-teal dark:text-ridder-teal-light mt-1 text-base">{{ plan.monthlyReturn }}</p>
            </div>
            <div class="col-span-2">
              <span class="text-ridder-grey dark:text-gray-400 text-xs">年收益/USD:</span>
              <p class="font-semibold text-ridder-grey dark:text-gray-300 mt-1 text-base">{{ plan.yearlyReturn }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Commission Structure -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <!-- Lot Commission -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 animate-slide-in-left"
          style="animation-delay: 0.6s;">
          <div class="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 class="text-lg md:text-2xl font-bold text-ridder-blue dark:text-ridder-teal-light mb-0.5 md:mb-1">手数佣金结算</h3>
              <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">Lot Commission Settlement</p>
            </div>
            <div class="w-8 md:w-10 h-1 rounded-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);">
            </div>
          </div>
          <div class="space-y-3 md:space-y-4">
            <div v-for="(level, index) in commissionLevels" :key="level.name"
              class="commission-card flex justify-between items-center p-4 md:p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 border-gray-100 dark:border-gray-700 active:shadow-md transition-all duration-300 touch-manipulation">
              <div class="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                <div
                  class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                  <span class="text-white font-bold text-xs md:text-sm">{{ level.name }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-bold text-base md:text-lg text-ridder-blue dark:text-ridder-teal-light">{{ level.name }}</p>
                  <p class="text-xs text-ridder-grey dark:text-gray-400 truncate">{{ level.fullName }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
                <span class="text-xl md:text-2xl font-bold tabular-nums text-ridder-teal dark:text-ridder-teal-light">${{ level.commission }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Profit Sharing -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 animate-slide-in-right"
          style="animation-delay: 0.6s;">
          <div class="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 class="text-lg md:text-2xl font-bold text-ridder-blue dark:text-ridder-teal-light mb-0.5 md:mb-1">分红佣金</h3>
              <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">Profit Sharing Commission</p>
            </div>
            <div class="w-8 md:w-10 h-1 rounded-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);">
            </div>
          </div>
          <div class="space-y-3 md:space-y-4">
            <div v-for="(level, index) in profitSharingLevels" :key="level.name"
              class="commission-card flex justify-between items-center p-4 md:p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 border-gray-100 dark:border-gray-700 active:shadow-md transition-all duration-300 touch-manipulation">
              <div class="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                <div
                  class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
                  <span class="text-white font-bold text-xs md:text-sm">{{ level.name }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-bold text-base md:text-lg text-ridder-blue dark:text-ridder-teal-light">{{ level.name }}</p>
                  <p class="text-xs text-ridder-grey dark:text-gray-400 truncate">{{ level.fullName }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
                <span class="text-xl md:text-2xl font-bold text-ridder-teal dark:text-ridder-teal-light">{{ level.percentage }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern AI Profit Distribution -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 animate-fade-in-up"
        style="animation-delay: 0.8s;">
        <div class="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-100 dark:border-gray-700">
          <div>
            <h3 class="text-lg md:text-2xl font-bold text-ridder-blue dark:text-ridder-teal-light mb-0.5 md:mb-1">人工智能收益分红配比例</h3>
            <p class="text-xs text-ridder-grey dark:text-gray-400 font-medium">AI Profit Distribution Ratio</p>
          </div>
          <div class="w-10 md:w-12 h-1 rounded-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #14b8a6 100%);">
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div
            class="text-center p-5 md:p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border-2 border-gray-100 dark:border-gray-700 active:border-ridder-blue/30 active:shadow-lg transition-all duration-300 transform active:scale-95 touch-manipulation"
            style="background: linear-gradient(to bottom right, rgba(20, 184, 166, 0.08), rgba(30, 58, 95, 0.1)); border-color: rgba(20, 184, 166, 0.3);">
            <div
              class="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg"
              style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
              <p class="text-xl md:text-xl font-bold text-white">10%</p>
            </div>
            <p class="text-sm font-bold mb-1 text-ridder-blue dark:text-ridder-teal-light">集团</p>
            <p class="text-xs text-ridder-grey/60 dark:text-gray-400">Group</p>
          </div>
          <div
            class="text-center p-5 md:p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border-2 border-gray-100 dark:border-gray-700 active:shadow-lg transition-all duration-300 transform active:scale-95 touch-manipulation"
            style="background: linear-gradient(to bottom right, rgba(20, 184, 166, 0.08), rgba(30, 58, 95, 0.1)); border-color: rgba(20, 184, 166, 0.3);">
            <div
              class="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg"
              style="background: linear-gradient(135deg, #14b8a6 0%, #1e3a5f 100%);">
              <p class="text-xl md:text-xl font-bold text-white">20%</p>
            </div>
            <p class="text-sm font-bold mb-1 text-ridder-teal dark:text-ridder-teal-light">奖励</p>
            <p class="text-xs text-ridder-grey/60 dark:text-gray-400">Reward</p>
          </div>
          <div
            class="text-center p-5 md:p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border-2 border-gray-100 dark:border-gray-700 active:shadow-lg transition-all duration-300 transform active:scale-95 touch-manipulation"
            style="background: linear-gradient(to bottom right, rgba(30, 58, 95, 0.1), rgba(20, 184, 166, 0.12)); border-color: rgba(20, 184, 166, 0.3);">
            <div
              class="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg"
              style="background: linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%);">
              <p class="text-xl md:text-xl font-bold text-white">70%</p>
            </div>
            <p class="text-sm font-bold mb-1 text-ridder-teal dark:text-ridder-teal-light">会员</p>
            <p class="text-xs text-ridder-grey/60 dark:text-gray-400">Member</p>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import AppLayout from '@/components/AppLayout.vue'

const authStore = useAuthStore()
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const formatCurrency = (value) => {
  if (typeof value === 'string' && value.includes('-')) {
    return value
  }
  return new Intl.NumberFormat('en-US').format(value)
}

const brokerPlans = [
  {
    name: 'RD1',
    usd: 1500,
    mts: 1000,
    lots: '1.0-6.0',
    monthlyReturn: '5%-12%',
    yearlyReturn: '$600-$1,440',
    category: '基础资管区',
    badgeClass: 'bg-ridder-blue/10 text-ridder-blue border border-ridder-blue/20'
  },
  {
    name: 'RD3',
    usd: 4500,
    mts: 3000,
    lots: '1.0-6.0',
    monthlyReturn: '5%-12%',
    yearlyReturn: '$1,800-$4,320',
    category: '',
    badgeClass: ''
  },
  {
    name: 'RD5',
    usd: 7500,
    mts: 5000,
    lots: '3.0-8.0',
    monthlyReturn: '8%-16%',
    yearlyReturn: '$4,800-$9,600',
    category: '高级资管区',
    badgeClass: 'bg-ridder-blue/10 text-ridder-blue border border-ridder-blue/20'
  },
  {
    name: 'RD10',
    usd: 15000,
    mts: 10000,
    lots: '6.0-20.0',
    monthlyReturn: '8%-16%',
    yearlyReturn: '$9,600-$19,200',
    category: '特等资管区',
    badgeClass: 'text-white border-0'
  }
]

const commissionLevels = [
  { name: 'IB', fullName: 'Introducing Broker', commission: 4 },
  { name: 'TIB', fullName: 'Traders Introducing Broker', commission: 6 },
  { name: 'BIB', fullName: 'Basic Introducing Broker', commission: 8 },
  { name: 'MIB', fullName: 'Master Introducing Broker', commission: 12 }
]

const profitSharingLevels = [
  { name: 'TIB', fullName: 'Traders Introducing Broker', percentage: 2 },
  { name: 'BIB', fullName: 'Basic Introducing Broker', percentage: 4 },
  { name: 'MIB', fullName: 'Master Introducing Broker', percentage: 6 }
]
</script>

<style scoped>
.commission-card:hover {
  border-color: rgba(20, 184, 166, 0.4) !important;
}

.commission-card:active {
  border-color: rgba(20, 184, 166, 0.4) !important;
  transform: scale(0.98);
}

.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

@media (max-width: 768px) {
  .commission-card {
    min-height: 70px;
  }
}
</style>
