import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../api/login'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: true,
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    message: 'Hello!',
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    user:
      { id: 1, name: 'Guo', done: true }
  },
  mutations: {
    setMessageAction (state, string) {
      if (this.debug) console.log('setMessageAction triggered with', string)
      this.state.message = string
    },
    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.message = ''
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    }
  },
  actions: {
    // { commit, state } 不写会产生 undefined
    Login ({ commit, state }, userInfo) {
      // console.log(typeof (userInfo))
      // console.log(typeof (userInfo.password))
      // console.log('usernmae=' + userInfo.name + userInfo.password)
      const username = userInfo.name.trim()
      const password = userInfo.password.trim()
      return new Promise((resolve, reject) => {
        login(username, password).then(response => {
          var data = response.data
          console.log('reopnse' + response)
          console.log('typeof response=' + typeof (response))
          console.log('data.name:' + data.name)
          resolve()
        }).catch(error => {
          console.log('store catch error ' + error)
          reject(error)
        })
      })
    },
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar ({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }, // Getter 也可以接受其他 getter 作为第二个参数：
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getUser: state => {
      console.log('name:' + state.user.name)
      return state.user.name
    }
  }

})
export default store
