<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <img src="../../assets/images/tabbar/home.png" slot="item-icon" />
        <img src="../../assets/images/tabbar/home_active.png" slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/category" activeColor="#ff5777">
        <img src="../../assets/images/tabbar/category.png" slot="item-icon" />
        <img src="../../assets/images/tabbar/category_active.png" slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
       <tab-bar-item path="/cart" activeColor="#ff5777">
        <img src="../../assets/images/tabbar/cart.png" slot="item-icon" />
        <img src="../../assets/images/tabbar/cart_active.png" slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/profile" activeColor="#ff5777">
        <img src="../../assets/images/tabbar/profile.png" slot="item-icon" />
        <img src="../../assets/images/tabbar/profile_active.png" slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
  name:'maintabbar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>

</style>