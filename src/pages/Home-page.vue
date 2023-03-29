<template>
    <div class="products">
        <router-link to="/" v-for="item of getProducts" :key="item.id">
            <img :src="item.image" alt="">
            <h3>adsasdas</h3>
            <h4>asdasdas</h4>
        </router-link>
    </div>
    <button class="more" @click="moreProduct" ></button>
</template>

<script>

export default {
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
    methods:{
        moreProduct(){
            this.counter+=4
            this.$store.dispatch('productsReq',this.counter)

        }
    },
    created(){
        this.$store.dispatch('productsReq',this.counter)
    }

}

</script>

<style lang="scss" scoped>
@import url('../assets/css/homepageStyle/home-style');
</style>