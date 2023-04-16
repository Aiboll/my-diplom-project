<template>
    <BannerComponents></BannerComponents>
    <div class="products">
        <router-link :to="{name:'detail', params: {id: item.id}}" v-for="item of getProducts" :key="item.id">
            <img :src="item.image" alt="">
            <h1>{{item.title}}</h1>
            <h2> {{item.description}}</h2>
            <h3> {{item.price}}$</h3>
        </router-link>
    </div>
    <button class="more" @click="moreProduct"  >больше товара </button>

    <info-componet></info-componet>
    <contacts-component></contacts-component>
</template>

<script>
import infoComponet from '@/components/info-componet.vue'
import contactsComponent from '@/components/contacts-component.vue'
import BannerComponents from '@/components/Banner-components.vue'
export default {
    components: { infoComponet, contactsComponent,BannerComponents },
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