'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://easy-mock.com/mock/5b597512727da942772da921/libshop"'
  // BASE_API: '"https://chiun.guo/libshop"'
})
