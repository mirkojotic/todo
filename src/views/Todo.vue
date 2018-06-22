<template>
  <div class="w-1/3 mr-auto ml-auto">
    <filter-todos />
    <add-todo />
    <todo-list :todos="todos" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import FilterTodos from '@/components/FilterTodos.vue'
import '@/assets/styles/main.css'
export default {
  name: 'todo',
  components: {
    TodoList,
    AddTodo,
    FilterTodos
  },
  mounted () {
    if (!this.$route.params.filter) {
      this.$router.push(`/todos/${this.filter}`)
    }
    // const filter = this.$route.params.filter
    // console.log(filter)
    // if (filter) {
    //   console.log(`${filter} should not be undefined!`)
    //   this.filter = filter
    // }
  },
  data () {
    return {
      filter: 'all' // ALL|TODO|DONE
    }
  },
  computed: {
    todos () {
      let todos = this.$store.state.todos
      if (this.filter !== 'all') {
        todos = todos.filter(todo => todo.status === this.filter)
      }
      return todos
    }
  },
  watch: {
    '$route.params.filter': function (filter) {
      this.filter = filter
    }
  }
}
</script>
