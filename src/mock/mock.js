import Mock from 'mockjs'

const user = {
  name: 'guo',
  password: '123456'
}
console.log('type of user:' + typeof (user))
// 登录相关
Mock.mock(/\/user\/login/, 'post', user)
