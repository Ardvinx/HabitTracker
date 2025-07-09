<script setup lang="ts">
import HabitItem from '@/components/HabitItem.vue'
</script>

<template>
  <div class="card flex justify-center w-full">
    <ul class="w-full max-w-[700px] flex flex-col gap-2">
      <HabitItem v-for="n in 5" />
    </ul>
  </div>
</template>
