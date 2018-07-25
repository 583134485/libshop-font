<template>
    <div class="login-container">
        <el-form>
            <el-form-item label="用户名">
                <el-input v-model="form.name"
                          placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"
                          placeholder="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('login' + this.form.name + this.form.password)
    }
  }
}
</script>
