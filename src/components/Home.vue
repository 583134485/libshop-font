    <template id="home">
        <!-- 注意：组件只能有一个根元素，所以我们包装到这个div中 -->
        <div>
            <!-- <h2>{{message}}</h2>  -->
            <router-link to="/home/homechildren1">登录</router-link>
            <router-link to="/home/user/2">用户1</router-link>
            <router-link to="/home/reg">注册</router-link>
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
        </div>
    </template>
