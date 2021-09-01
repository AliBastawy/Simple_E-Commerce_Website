<template>
    <div class="container">
        <div class="image">
            <img :src=productItem.imageUrl alt="">
        </div>
        <div class="description">
            <h1>{{ productItem.name }}</h1>
            <p>{{ productItem.content }}</p>
            <p> Price </p>
            <p> ${{ productItem.price }} </p>
            <AddToCart v-if="this.$store.getters.user.uid" :product=productItem />
            <p v-else> You Must Login First </p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddToCart from "./AddToCart.vue"

export default {
    name: "Product",
    components: {AddToCart},
    computed: {
        ...mapGetters(['productItem', 'user']),
    },
    methods: {
        ...mapActions(['getProduct']),
    },
    mounted() {
      this.getProduct(this.$route.params.idProduct)
    },
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    padding: 13px;

    div.image {
        width: 50%;
        margin-right: 12px;

        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
    div.description {
        width: 50%;
        h1 {
            margin: 0;
        }
        h1 + p {
            font-size: 14px;
        }
        p:not(:first-of-type) {
            font-size: 18px;
        }
    }
}
</style>