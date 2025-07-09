<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="p-5">
      <div class="flex flex-row items-center justify-between gap-10">
        <RouterLink to="/">
          <h1 class="text-4xl font-bitcount font-light">
            <span>Habit</span><span class="text-gray-500">Pilot</span>
          </h1>
        </RouterLink>
        <nav>
          <RouterLink class="font-inter text-gray-300" to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>
