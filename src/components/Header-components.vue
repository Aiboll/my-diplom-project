<template>
  <header>
    <div class="logo">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="">
        </router-link>
    </div>
    <div class="search">
        <input type="text" placeholder="Введите адрес доставки">
    </div>
    <div class="call">
      <img src="../assets/img/1234.svg" alt="">
      <div class="call-text">
        <h1>Контакты:</h1>
        <p><a href="/">+7 (917) 510-57-59</a></p>
        
      </div>
        <router-link to="/basket" >
          <button>корзина
            <span></span>
            {{  getBasket.length}}
          </button>
        </router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed:{
    getBasket(){
      return this.$store.getters.getBasket
    }
  }


}
</script>

<style lang="scss" scoped >
@import url('../assets/css/header-style');
</style>