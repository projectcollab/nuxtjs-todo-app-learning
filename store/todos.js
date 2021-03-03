export const state = () => ({
  list: [],
})

// synchronous
export const mutations = {
  add(state, text) {
    state.list.push({
      text,
    })
  },
  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
}

// asynchronous
export const actions = {
  addTodo: ({ commit }, text) => {
    commit('add', text)
  },
  removeTodo: ({ commit }, todo) => {
    commit('remove', todo)
  },
}

export const getters = {
  todosCount: (state) => {
    return state.list.length
  },
  todos: (state) => {
    return state.list
  },
}
