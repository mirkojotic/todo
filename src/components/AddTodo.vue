<template>
    <form class="max-w-sm rounded overflow-hidden shadow-md m-1 flex p-3">
        <input
            type="text" v-model="text"
            class="shadow appearance-none border rounded w-full py-1 text-grey-darker leading-tight w-3/4" />
        <button
            @click="createTodo"
            class="bg-blue hover:bg-blue-dark text-white py-1 px-3 rounded w-1/4 mr-1 ml-2">
            CREATE
        </button>
    </form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions([ 'addTodo' ]),
    createTodo (evt) {
      evt.preventDefault()
      this.addTodo(this.text)
      this.text = ''
    }
  }
}
</script>
