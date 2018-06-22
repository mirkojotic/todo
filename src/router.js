import Vue from 'vue'
import Router from 'vue-router'
import Todo from './views/Todo.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todos/:filter',
      name: 'todo',
      component: Todo
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
