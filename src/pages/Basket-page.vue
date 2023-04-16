<template>
    <div class="basket">
        <span></span>
        <router-link to="/"> <h1> к выбору блюда</h1></router-link>
        <div class="basket-length">
            <span></span>
            <h1> корзина</h1>
        </div>
        <div class="basket-products" v-for="item of getBasket" :key='item.id'>
            <div class="basket-products">
                <div class="basket-product-img">
                <img :src="item.image " alt="">
                </div>
                <div class="basket-product-info">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </div>
                <div class="basket-product-price">
                    <h2> {{ item.price }}$</h2>
                </div>
            </div>
            <div class="basket-list-line"></div>
        </div>
        

    </div>
</template>

<script>
export default {
    data(){
        return{
            fullname:'',
            address:'',
            email:'',
            phone:''
        }
    },
    computed:{
        getBasket(){
            return this.$store.getters.getBasket
        }
    },
    methods:{
        order(){
            this.$store.dispatch('order',this.getBasket)
        }
    } 
}
</script>

<style lang="scss" scoped>
@import url('../assets/css/basket-style/basket-style');
</style>