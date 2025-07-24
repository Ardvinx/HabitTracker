import type { TodoItem } from '@/types/todoItem'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoListStore = defineStore('todoList', () => {
  const date = ref<Date>(new Date())
  const items = ref<TodoItem[]>([])

  const generateId = () => {
    if (crypto.randomUUID) {
      return crypto.randomUUID()
    }

    // Fallback for older browsers
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  const debugInitItems = () => {
    items.value.push({ id: generateId(), checked: false, label: 'Brush teeth' })
    items.value.push({ id: generateId(), checked: false, label: 'Do laundry' })
    items.value.push({ id: generateId(), checked: false, label: 'Practice coding' })
    items.value.push({ id: generateId(), checked: false, label: 'Work on HabitPilot' })
  }

  const addItem = () => {
    items.value.push({ id: generateId(), checked: false, label: '' })
  }

  const removeItem = (itemToRemove: TodoItem) => {
    items.value = items.value.filter((item) => item.id !== itemToRemove.id)
  }

  return { date, items, debugInitItems, addItem, removeItem }
})
