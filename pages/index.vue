<template>
  <div class="container mx-auto px-8">
    <h1 class="text-6xl">Todo Hero!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores rerum
      quam? Ullam culpa exercitationem numquam nemo voluptatem pariatur
      provident quo aperiam in. Quisquam atque molestias eius quasi autem
      perspiciatis?
    </p>

    <ul class="pt-10 space-y-2 list-disc">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="text-lg font-semibold hover:bg-green-100"
        @click="removeTodo(todo)"
      >
        {{ todo.text }}
      </li>
    </ul>

    <div v-if="todosCount" class="text-sm mt-5">TOTAL: {{ todosCount }}</div>

    <form @submit.prevent>
      <input
        id="todo"
        v-model="todoValue"
        class="border-2 border-solid mt-5 p-2 rounded-lg"
        type="text"
        name="todo"
        placeholder="Your new Todo"
        required
      />
      <button
        class="p-2 bg-gray-400 rounded-lg"
        :disabled="isDisabled"
        @click="addTodo"
      >
        Add Todo
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      todoValue: '',
    }
  },
  computed: {
    isDisabled() {
      return this.todoValue === ''
    },
    ...mapGetters({
      todos: 'todos/todos',
      todosCount: 'todos/todosCount',
    }),
  },
  methods: {
    addTodo() {
      this.$store.dispatch('todos/addTodo', this.todoValue)
      this.todoValue = ''
    },
    ...mapActions({
      removeTodo: 'todos/removeTodo',
    }),
  },
}
</script>

<style></style>
