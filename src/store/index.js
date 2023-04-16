import { createStore } from "vuex";
export default createStore({
    state:{
        products:[],
        detail:'',
        basket:[]
    },
    getters:{ 
        getProducts: state => state.products,
        getDetail: state => state.detail,
        getBasket: state => state.basket
    },
    mutations:{
        SET_PRODUCTS (state, data){
            state.products = data
        },
        SET_DETAIL(state,data){
            state.detail = data

        },
        SET_BASKET(state,data){
            state.basket = data
        }
    },
    actions:{ 
            productsReq({commit},counter){
            fetch(`https://fakestoreapi.com/products?limit=${counter}`)
            .then(res=>res.json())
            .then(json=> {
                commit('SET_PRODUCTS',json)
            })
        },
        detailReq({commit},id){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> {
                commit('SET_DETAIL',json)
            })
        },
        addBasket({commit},data){
            commit('SET_BASKET',data)
        },
        order( _,data){
            fetch('http://localhost:3000/orders',{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })}
    },


})