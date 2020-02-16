import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moudelA = {
  state:{
    name:'yuanyuan'
  },
  mutations:{
    updatename(state,paylod){
      state.name = paylod;
    }
  },
  actions:{},
  getters:{}
}
export default new Vuex.Store({
  state: {
    counter:1000,
    player:[
      {name:'kobe',age:41,sex:'man'},
      {name:'james',age:34,sex:'man'},
      {name:'weide',age:38,sex:'man'}
    ]
  },
  mutations: {
    //方法
    add(state){
      state.counter++
    },
    dec(state){
      state.counter--
    }
  },
  actions: {
  },
  modules: {
    a:moudelA
  },
  getters:{
    more32age(state){
      return state.player.filter(s => s.age > 35)
    },
    more32agelen(state,getters){
      return getters.more32age.length;
    },
    moreohter(state){
      return function(age){

        return state.player.filter(s => s.age > age);
      }
    }
  }
})
