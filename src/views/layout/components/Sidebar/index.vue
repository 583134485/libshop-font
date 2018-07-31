<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item  v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    routes() {
      console.log('route:')
      console.log('route:' + this.$router.options.routes[5].path + this.$router.options.routes[5].name)
      return this.$router.options.routes
    },
    sidebar() {
      return this.$store.getters.sidebar
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
