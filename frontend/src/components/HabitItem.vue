<script setup lang="ts">
import { Checkbox } from 'primevue'
import type { TodoItem } from '@/types/todoItem'
import type { PropType } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<TodoItem>,
    required: true,
  },
})
</script>

<template>
  <div class="flex p-3 w-full bg-primary-700 rounded-lg gap-4 items-center">
    <Checkbox v-model="props.item.checked" binary />
    <p>{{ props.item.label }}</p>
  </div>
</template>
