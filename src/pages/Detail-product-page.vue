<template>
    <div class="detail">
        <div class="detail-img">
            <img :src="getDetail.image" alt="">
        </div>
        <div class="detail-content">
            <h1>{{ getDetail.title}}</h1>
            <h2>{{ getDetail.category }}</h2>
            <h3>{{ getDetail.description }}</h3>
            <div class="price">
                <h4>{{ getDetail.price}}$</h4>
                <button @click="addBasket">Корзина
                    <span></span>
                    <img src="../assets/img/shopping-bag.svg" alt="">
                </button>
            </div>
        </div>
    </div>
    <contacts-component></contacts-component>
</template>

<script>
import contactsComponent from '@/components/contacts-component.vue'
export default {
  components: { contactsComponent },
    computed:{
        getDetail(){
            return this.$store.getters.getDetail
        }

    },
    methods:{
        addBasket(){
            const basket = this.$store.getters.getBasket
            basket.push(this.getDetail)
            this.$store.dispatch('addBasket',basket)
        }
    },
    created(){
        this.$store.dispatch('detailReq',this.$route.params.id)
    }

}
</script>

<style lang="scss" scoped>
@import url('../assets/css/detail-style/detail');
</style>