<template>
  <div>
    <h1>home</h1>

    <button @click="add">++++</button>
    <button @click="updatename">---</button>
    <h2>{{$store.getters.more32age}}</h2>
    <h3>{{$store.getters.more32agelen}}</h3>
    <h3>{{$store.getters.moreohter(20)}}</h3>
    <h2>{{$store.state.a.name}}</h2>
  </div>
  
</template>

<script>

export default {
  name:'home',
  components:{
  },
  methods:{
    add(){
      this.$store.commit('add')
    },
    updatename(){
      this.$store.commit('updatename','aiyuanyuan')
    }
  }
}
</script>
<style scoped>

</style>