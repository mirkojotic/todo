import * as types from './mutation-types'

export default {
  addTodo (context, text) {
    const todo = {
      uuid: Math.random().toString(36).substring(7),
      text,
      status: 'todo'
    }
    context.commit(types.ADD_TODO, todo)
  },
  removeTodo (context, todo) {
    context.commit(types.REMOVE_TODO, todo)
  },
  editTodo (context, todo) {
    context.commit(types.EDIT_TODO, todo)
  },
  toggleStatus (context, todo) {
    context.commit(types.TOGGLE, todo)
  }
}
