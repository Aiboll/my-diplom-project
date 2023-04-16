<template>
  <div class="promo">
    <div class="promo-top">
      <h1>АКЦИИ</h1>
    </div> 
    <div class="products">
        <router-link :to="{name:'detail', params: {id: item.id}}" v-for="item of getProducts" :key="item.id">
            <img :src="item.image" alt="">
            <h3>{{getProducts.title}}name</h3>
            <h4> {{}}</h4>
        </router-link>
    </div> 
  </div>
  <span></span>
<contacts-component/>
</template>

<script>
import ContactsComponent from '@/components/contacts-component.vue'

export default {
    components: {  ContactsComponent},
    data(){
        return {
            counter:8
        }
    },
    computed:{
        getProducts() {
            return this.$store.getters.getProducts  
        }
     

    },

}

</script>


<style lang="scss" scoped>
@import url('../assets/css/promo-page-style/promo');
</style>
BannerComponents