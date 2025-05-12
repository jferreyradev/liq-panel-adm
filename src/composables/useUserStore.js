import { reactive, toRefs } from 'vue'

const state = reactive({
  user: {
    name: '',
    isLoggedIn: false,
  },
})

export function useUserStore() {
  const { user } = toRefs(state)

  function login(name) {
    user.value.name = name
    user.value.isLoggedIn = true
  }

  function logout() {
    user.value.name = ''
    user.value.isLoggedIn = false
  }

  return {
    user,
    login,
    logout,
  }
}
