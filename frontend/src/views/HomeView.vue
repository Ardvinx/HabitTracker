<script setup lang="ts">
import HabitItem from '@/components/HabitItem.vue'
import { useTodoListStore } from '@/stores/todoList'
import { onMounted } from 'vue'

let todoList = useTodoListStore()

onMounted(() => {
  todoList.debugInitItems()
})
</script>

<template>
  <div class="card flex justify-center w-full">
    <ul class="w-full max-w-[700px] flex flex-col gap-5">
      <HabitItem v-for="item in todoList.items" :item="item" />
    </ul>
  </div>
</template>
