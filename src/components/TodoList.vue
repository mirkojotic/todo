<template>
    <div>
        <div v-for="todo in todos" :key="todo.uuid" class="max-w-sm rounded overflow-hidden shadow-md m-1">
            <todo-list-item :todo="todo" />
        </div>
    </div>
</template>
<script>
import TodoListItem from '@/components/TodoListItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  props: ['todos']
}
</script>
