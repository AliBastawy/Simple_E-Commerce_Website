<template>
    <div class="container">
        <div v-for="item in cart" :key="item" class="unitProduct">
            <img :src=item.imageUrl alt="">
            <p> {{item.name}} </p>
            <div class="price">
                <p> Unit Price </p>
                <p> ${{ item.price }} </p>
            </div>
            <div class="price">
                <p> Total Price </p>
                <p> ${{ item.price * item.quantity }} </p>
            </div>
            <div class="price">
                <p> Quantity </p>
                <p> {{ item.quantity }} </p>
            </div>
        </div>
        <div class="total"> 
            <span> Total </span>
            <span> {{ total }} </span>
        </div>
        <button @click="onCheckOut">Check Out</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Cart",
    data() {
        return {
            total: 0
        }
    },
    methods: {
        ...mapActions(['getProduct', 'getProducts', "getProductArray", 'removeFromCart']),
        totalCalc() {
            this.total = this.cart.reduce((a,b) => a + (b.price * b.quantity), 0)
        },
        onCheckOut() {
            setTimeout(() => {
                this.removeFromCart()
                alert("Purchase successful!");
                this.$router.push('/')
            }, 1000)
        }
    },
    computed: {
        ...mapGetters(['productItem', 'allProducts', 'getAddedProducts', "cart"]),
    },
    mounted() {
        this.totalCalc()
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.unitProduct {
    display: flex;
    border: 1px solid rgba(128, 128, 128, 40%);
    align-items: center;
    width: 500px;
    padding: 15px 20px;
    img {
        height: 80px;
    }
    img + p {
        margin: 0 60px;
    }
    .price {
        text-align: center;
    }
    .price p {
        margin: 0 10px 20px;
    }
}
.total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d3d3d391;
    width: 500px;
    padding: 15px 20px;
    border: 1px solid;
}
</style>