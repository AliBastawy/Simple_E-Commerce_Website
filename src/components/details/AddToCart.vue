<template>
    <div class="cartBlock">
        <div class="col-3">
            <label class="sr-only" for="inlineFormInputName2">Quantity</label>
            <input type="number" v-model="quantity" class="form-control mb-2 mr-sm-2" />
        </div>
        <button v-if="!this.isInCardProp" @click.stop="addToCart({ product, quantity })">Add To Cart</button>
        <button v-else @click.stop="removeFromCart(product.id)">Remove From Cart</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddToCart",
    props: ['product'],
    data() {
        return {
            isInCardProp: false,
            quantity: 1,
        }
    },
    computed:{ 
        cart() {
            console.log(this.isInCart(this.product.id))
            return this.$store.getters.cart
        },
    },
    methods: {
        ...mapActions(['addToCart', 'removeFromCart']),
        isInCart(id) {
            for (let index = 0; index < this.$store.getters.cart.length; index++) {
                const element = this.$store.getters.cart[index];
                if (element.id === id) {
                    this.isInCardProp = true
                    return true;
                }
            }
            this.isInCardProp = false;
            return false;
        },
    },
    watch: {
        product(val) {
            this.isInCardProp = this.isInCart(val.id);
        },
        cart() {
            this.isInCardProp = this.isInCart(this.product.id);
        },
        quantity(val) {
            if (val <= 0) 
                this.quantity = 1
        }
    },
}
</script>

<style scoped lang='scss'>
div.cartBlock {
    display: flex;
    align-items: center;

    input {
        outline-color: #00bcd4;
        border: 1px solid #00bcd4;
        width: 150px;
        height: 35px;
    }
    button {
        color: white;
        background-color: #42b983;
        padding: 10px 50px;
        width: 250px;
        border: none;
        cursor: pointer;
        margin: 10px 7px;
    }
}
</style>