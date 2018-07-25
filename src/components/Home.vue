    <template id="home">
    <!-- 注意：组件只能有一个根元素，所以我们包装到这个div中 -->
    <div>
        <h1>$state:{{$store.state.message}}</h1>
        <h1>state:{{state.message}}</h1>
        <h1>tool:{{$store.getters.doneTodos}}</h1>
        <p>toolcounts:{{$store.getters.doneTodosCount}}</p>
        <button @click="$store.commit('setMessageAction','hahha')">setMessageActio</button>
        <button @click="$store.commit('clearMessageAction')">clearMessageAction</button>
        {{count}}
        <h2>{{message}}</h2>
        <router-link to="/home/homechildren1">登录</router-link>
        <router-link to="/home/user/2">用户1</router-link>
        <router-link to="/home/reg">注册</router-link>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
// var store = {
//   debug: true,
//   state: {
//     message: 'Hello!'
//   },
//   setMessageAction (newValue) {
//     if (this.debug) console.log('setMessageAction triggered with', newValue)
//     this.state.message = newValue
//   },
//   clearMessageAction () {
//     if (this.debug) console.log('clearMessageAction triggered')
//     this.state.message = ''
//   }
// }
export default {
  // state
  data () {
    return {
      message: 'd',
      count: 0,
      state: this.$store.state
    }
  },
  // actions
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
