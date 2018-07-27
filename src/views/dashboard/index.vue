<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name:{{$store.getters.getUser}}</div> -->
     <div class="dashboard-text">name:{{name}}</div>
    <!-- <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div> -->
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  computed: {
    name () {
    //   console.log('getUser')
    //   console.log('getUser' + this.$store.getters.getUser)
      return this.$store.getters.getUser
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
