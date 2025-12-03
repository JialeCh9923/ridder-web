<template>
  <div class="flex items-center space-x-3">
    <!-- Logo Icon -->
    <div class="relative w-12 h-12 flex items-center justify-center">
      <svg 
        class="w-full h-full animate-float" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Upper knot pattern (dark blue) - Geometric intertwined design -->
        <path
          d="M30 25 L45 20 L60 25 L55 40 L70 45 L55 55 L45 45 L30 50 L35 35 Z"
          fill="#1e3a5f"
          opacity="0.9"
          class="animate-pulse-slow"
        />
        <path
          d="M25 30 L40 35 L35 50 L50 55 L35 65 L25 55 L20 40 Z"
          fill="#1e3a5f"
          opacity="0.7"
        />
        
        <!-- Lower knot pattern (teal) - Intertwined with upper -->
        <path
          d="M20 60 L40 55 L50 70 L70 65 L60 80 L40 75 L25 70 L30 60 Z"
          fill="#14b8a6"
          opacity="0.9"
          class="animate-pulse-slow"
          style="animation-delay: 0.5s;"
        />
        <path
          d="M35 65 L55 60 L65 75 L75 70 L65 85 L50 80 L40 70 Z"
          fill="#14b8a6"
          opacity="0.7"
        />
      </svg>
    </div>
    
    <!-- Brand Text -->
    <div class="flex flex-col">
      <h1 class="logo-text text-3xl tracking-tight">
        <span class="logo-rid">RID</span><span class="logo-der">DER</span>
      </h1>
      <p class="text-xs text-ridder-grey font-semibold -mt-1 tracking-wider">TRADER GROUP</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(2deg);
  }
}
</style>

