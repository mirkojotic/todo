<template>
    <ul class="list-reset flex justify-center">
        <li class="hover:cursor-pointer mr-6">
            <router-link
                to="/todos/all"
                class="text-blue hover:text-blue-darker">
                All</router-link>
        </li>
        <li class="hover:cursor-pointer mr-6">
            <router-link
                to="/todos/todo"
                class="text-blue hover:text-blue-darker">
                TODOs</router-link>
        </li>
        <li class="hover:cursor-pointer mr-6">
            <router-link
                to="/todos/done"
                class="text-blue hover:text-blue-darker">
                Done
            </router-link>
        </li>
    </ul>
</template>
<script>
import '@/assets/styles/main.css'
export default {
  name: 'FilterTodos'
}
</script>
