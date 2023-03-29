<template>
  <header-components></header-components>
  <BannerComponents></BannerComponents>
  <router-view/>
</template>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  background: #403C3B;
  a{
    text-decoration: none;
  }
  div{
    box-sizing: border-box;
  }
}



</style>

<script>
  import HeaderComponents from "./components/Header-components.vue";
  import BannerComponents from "./components/Banner-components.vue"
  export default{
    components:{
      HeaderComponents,
      BannerComponents
    }
  }

</script>