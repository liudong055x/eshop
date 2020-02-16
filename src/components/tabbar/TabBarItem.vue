<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" >
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot  name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle" > 
      <slot name="item-text" ></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'tabbaritem',
  props:{
      path:String,
      activeColor:{
        type:String,
        default:'#666'
      }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      if(this.$route.fullPath != this.path){
        this.$router.replace(this.path)
      }
    }
  }
}
</script>
<style  scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
.tab-bar-item div{
  line-height: 24px;
  font-size: 14px;
}

</style>