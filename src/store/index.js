import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editingTodoUuid: '',
    todos: [
      { uuid: 'x3ifdajklka', text: 'Do laundry', status: 'todo' },
      { uuid: 'ifdaljl2492', text: 'Do work', status: 'todo' },
      { uuid: 'nbjghdkl24l', text: 'Do fun', status: 'done' }
    ]
  },
  mutations: {
    [types.ADD_TODO] (state, todo) {
      state.todos.push(todo)
    },
    [types.REMOVE_TODO] (state, todo) {
      state.todos = state.todos.filter(t => t.uuid !== todo.uuid)
    },
    [types.EDIT_TODO] (state, todo) {
      console.log(todo)
      const todos = state.todos.reduce((acc, t) => {
        if (t.uuid !== todo.uuid) {
          acc.push(t)
        } else {
          acc.push(todo)
        }
        return acc
      }, [])
      console.log(todos)
      state.todos = todos
    },
    [types.TOGGLE] (state, todo) {
      const _todo = state.todos.find(t => t.uuid === todo.uuid)
      if (todo.status === 'todo') {
        _todo.status = 'done'
      } else {
        _todo.status = 'todo'
      }
    }
  },
  actions
})
