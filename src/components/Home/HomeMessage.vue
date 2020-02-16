<template>
  <div class="hello">
    <h1>{{$route.query.age}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloMessage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
