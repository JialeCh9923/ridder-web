<template>
  <div class="flex items-center gap-6">
    <!-- Endless Knot Logo -->
    <svg :width="width" :height="height" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="flex-shrink-0">
      <!-- Top Section - Dark Blue -->
      <g>
        <!-- Top center diamond -->
        <path d="M80 15 L95 30 L80 45 L65 30 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Top left diamond -->
        <path d="M50 30 L65 45 L50 60 L35 45 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Top right diamond -->
        <path d="M110 30 L125 45 L110 60 L95 45 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Far left diamond -->
        <path d="M20 45 L35 60 L20 75 L5 60 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Far right diamond -->
        <path d="M140 45 L155 60 L140 75 L125 60 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Middle left diamond -->
        <path d="M35 60 L50 75 L35 90 L20 75 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Center diamond -->
        <path d="M65 60 L80 75 L65 90 L50 75 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Middle right diamond -->
        <path d="M95 60 L110 75 L95 90 L80 75 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />

        <!-- Far right middle diamond -->
        <path d="M125 60 L140 75 L125 90 L110 75 Z" fill="#0A5278" stroke="#0A5278" stroke-width="1.5" />
      </g>

      <!-- Bottom Section - Teal/Turquoise -->
      <g>
        <!-- Far left bottom diamond -->
        <path d="M20 85 L35 100 L20 115 L5 100 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Lower left diamond -->
        <path d="M35 70 L50 85 L35 100 L20 85 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Center left diamond -->
        <path d="M50 85 L65 100 L50 115 L35 100 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Center diamond -->
        <path d="M65 70 L80 85 L65 100 L50 85 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Center main diamond -->
        <path d="M80 85 L95 100 L80 115 L65 100 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Center right diamond -->
        <path d="M95 70 L110 85 L95 100 L80 85 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Lower right diamond -->
        <path d="M110 85 L125 100 L110 115 L95 100 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Far right bottom diamond -->
        <path d="M125 70 L140 85 L125 100 L110 85 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Far far right diamond -->
        <path d="M140 85 L155 100 L140 115 L125 100 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Bottom center diamond -->
        <path d="M80 115 L95 130 L80 145 L65 130 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Bottom left diamond -->
        <path d="M50 100 L65 115 L50 130 L35 115 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />

        <!-- Bottom right diamond -->
        <path d="M110 100 L125 115 L110 130 L95 115 Z" fill="#14A89C" stroke="#14A89C" stroke-width="1.5" />
      </g>
    </svg>

    <!-- Text Section -->
    <div v-if="showText" class="flex flex-col">
      <h1 class="ridder-title" :style="{ fontSize: titleSize }">
        RIDDER
      </h1>
      <div class="h-0.5 bg-gray-300 my-1"></div>
      <p class="ridder-subtitle" :style="{ fontSize: subtitleSize }">
        TRADER GROUP
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  width: { type: Number, default: 160 },
  height: { type: Number, default: 160 },
  showText: { type: Boolean, default: true }
})

// Calculate text sizes proportionally based on logo size
// Base size is 160px logo with 4.5rem title and 1.125rem subtitle
const sizeRatio = computed(() => props.width / 160)

const titleSize = computed(() => {
  return `${4.5 * sizeRatio.value}rem`
})

const subtitleSize = computed(() => {
  return `${1.125 * sizeRatio.value}rem`
})
</script>

<style scoped>
.ridder-title {
  font-weight: 900;
  color: #0A5278;
  line-height: 1;
  letter-spacing: -0.02em;
  font-family: Arial, sans-serif;
}

.ridder-subtitle {
  font-weight: 700;
  color: #14A89C;
  letter-spacing: 0.25em;
  font-family: Arial, sans-serif;
}
</style>