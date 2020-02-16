<template>
  <div>
    <div class="tab-bar">
      <slot>
        <tab-bar-item></tab-bar-item>
      </slot>
    </div>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name:'tabbar',
  components:{
    TabBarItem
  }
}
</script>
<style scoped>
.tab-bar{
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f6f6f6;
  box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
}
</style>