import { createStore } from "vuex";
export default createStore({
    state:{
        products:[]
    },
    getters:{ 
        getProducts: state => state.products
    },
    mutations:{
        SET_PRODUCTS (state, data){
            state.products = data
        }
    },
    actions:{
        productsReq({commit},counter){
            fetch(`https://fakestoreapi.com/products?limit=${counter}`)
            .then(res=>res.json())
            .then(json=> {
                commit('SET_PRODUCTS',json)
            })
        }
    },

})