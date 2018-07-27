<template>
    <div class="login-container">
        <el-form class="login-form" autocomplete="on" :model="form" :rules="loginRules" ref="loginForm" label-position="left">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"
                          placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password"
                          placeholder="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading"
                           @click="checkform">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('username'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('password Error'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '1',
        password: '1'
      },
      loginRules: {
        name: [{ message: 'message name', validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    onSubmit () {
      console.log('login' + this.form.name + typeof (this.form.name) + this.form.password)
    },
    checkform (e) {
      console.log('login' + this.form.name + typeof (this.form.name) + this.form.password)
      console.log('type of:' + typeof (this.form))
      //   console.log('login' + this.form.name + this.form.password)
      //   if (this.form.name && this.form.password) {
      //     return true
      //   }
      //   if (!this.form.name) {
      //     console.log('name error')
      //   }
      //   if (!this.form.password) {
      //     console.log('password error')
      //   }
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.form).then(() => {
            this.loading = false
            this.$router.push({path: '/'})
          }).catch((error) => {
            console.log(' login vue error ' + error)
            this.loading = false
            this.$router.push({path: '/404'})
          })
        } else {
          console.log('error')
          return false
        }
      })
    //   e.preventDefault()
    }
  }
}
</script>
