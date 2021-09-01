import axios from 'axios';

const state = {
    products: [],
    product: {},
    cart: []
};

const getters = {
    allProducts: state => state.products,
    productItem: state => state.product,
    cart: state => state.cart
};

const actions = {
    async getProducts({ commit, dispatch }) {
        const response = await axios.get("https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products")
        commit('setProducts', response.data)
        dispatch('getProducts')
    },
    async getProduct({ commit }, id) {
        let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
        const response = await axios.get(url, { params: { id: id } })
        commit("setProduct", response.data[0]);
    },
    addToCart({ commit, getters }, payload) {
        let cart = getters.cart
        let data = payload.product
        data["quantity"] = payload.quantity
        cart.push(data)
        commit("setCart", cart)
    },
    removeFromCart({ commit, getters }, id) {
        let cart = []
        if (id) {
            for (let index = 0; index < getters.cart.length; index++) {
                const element = getters.cart[index];
                if (element.id !== id) {
                    cart.push(element)
                }
            }
        }
        commit("setCart", cart)
    }
};

const mutations = {
    setProducts: (state, Products) => state.products = Products,
    setProduct: (state, Product) => state.product = Product,
    setCart: (state, ProductArray) => state.cart = ProductArray
};

export default {
    state,
    getters,
    actions,
    mutations
}