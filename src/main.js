import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
axios.defaults.baseURL = "http://123.207.32.32:8000";
axios.defaults.timeout = 5000;
// axios({
//   url:"http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   console.log(res)
// })
axios.all([axios({
  url:'/home/multidata'
}), axios({
  url:'/home/data',
  params:{
    type:'sell',
    page:5
  }
})]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))