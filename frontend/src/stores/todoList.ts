import type { TodoItem } from '@/types/todoItem'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoListStore = defineStore('todoList', () => {
  const date = ref<Date>(new Date())
  const items = ref<TodoItem[]>([])

  const debugInitItems = () => {
    items.value.push({ checked: false, label: 'Brush teeth' })
    items.value.push({ checked: false, label: 'Do laundry' })
    items.value.push({ checked: false, label: 'Practice coding' })
    items.value.push({ checked: false, label: 'Work on HabitPilot' })
  }

  return { date, items, debugInitItems }
})
