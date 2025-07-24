<script setup lang="ts">
import HabitItem from '@/components/HabitItem.vue'
import { useTodoListStore } from '@/stores/todoList'
import { onMounted } from 'vue'
import { Button } from 'primevue'

let todoList = useTodoListStore()

onMounted(() => {
  // TODO remove once mocking is not needed
  if (todoList.items.length === 0) {
    todoList.debugInitItems()
  }
})
</script>

<template>
  <div class="card flex justify-center w-full">
    <div class="w-full max-w-[700px] flex flex-col gap-5">
      <HabitItem
        v-for="item in todoList.items"
        :item="item"
        @remove-item="todoList.removeItem(item)"
      />
      <Button label="Add item" @click="todoList.addItem()" />
    </div>
  </div>
</template>
