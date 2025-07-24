<script setup lang="ts">
import { Checkbox } from 'primevue'
import type { TodoItem } from '@/types/todoItem'
import type { PropType } from 'vue'
import { Button } from 'primevue'

const props = defineProps({
  item: {
    type: Object as PropType<TodoItem>,
    required: true,
  },
})

const emit = defineEmits(['removeItem'])
</script>

<template>
  <div
    class="flex py-2 px-3 w-full bg-primary-700 rounded-lg gap-4 items-center justify-between group"
  >
    <div class="flex items-center gap-3">
      <Checkbox v-model="props.item.checked" binary />
      <p>{{ props.item.label }}</p>
    </div>
    <Button
      class="invisible group-hover:visible"
      icon="pi pi-times"
      severity="danger"
      rounded
      outlined
      size="small"
      @click="emit('removeItem')"
    />
  </div>
</template>
