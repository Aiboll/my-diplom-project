<template>
  <header-components></header-components> 
  <router-view/>
  <footer-components></footer-components>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,900;1,700&display=swap');
*{
  padding: 0;
  margin: 0;
  background: #403C3B;
  font-family: 'Nunito', sans-serif;
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
  import footerComponents from "./components/footer-components.vue";
  export default{
    components:{
      HeaderComponents,
      footerComponents,
    }
  }

</script>