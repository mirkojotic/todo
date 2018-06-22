<template>
    <div class="flex p-3">
        <div @click="edit = true" class="w-3/4 text-left self-center">
            <input
                v-if="edit && todo.status === 'todo'"
                :value="todo.text"
                @keyup.esc="edit = false"
                @keyup.enter="finishEditing"
                autofocus
                class="shadow appearance-none border rounded w-full py-1 text-grey-darker leading-tight" />
            <span v-else>{{ todo.text }}</span>
        </div>
        <div class="w-1/4 pl-2">
            <button
                @click="removeTodo(todo)"
                class="bg-red hover:bg-red-dark text-white py-1 px-3 rounded w-1/2">
                <icon name="trash" />
            </button>
            <button
                v-if="todo.status === 'todo'"
                @click="toggleStatus(todo)"
                class="bg-green hover:bg-green-dark text-white py-1 px-3 rounded w-1/2">
                <icon name="check-square" />
            </button>
            <!--
            <button
                v-else
                @click="toggleStatus(todo)"
                class="bg-red hover:bg-red-dark text-white py-1 px-3 rounded mr-1 ml-2">
                TODO
            </button>
            -->
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['todo'],
  data () {
    return {
      edit: false
    }
  },
  methods: {
    ...mapActions(['toggleStatus', 'editTodo', 'removeTodo']),
    finishEditing (event) {
      this.editTodo({ ...this.todo, text: event.target.value })
      this.edit = false
    }
  }
}
</script>
