<template>
    <div class="items">
        <img :src=product.imageUrl alt="">
        <span>{{ product.name }}</span>
        <router-link 
            type="button" 
            class="btn"
            :to='"/details/"+product.id'
        > Details </router-link>
    </div>
</template>

<script>
export default {
    name: "Items",
    data() {
        return {
            productTest: {}
        }
    },
    props: {
        product: Object
    },
    methods: {
        showProduct() {
            this.$router.push({ name: 'Product' })
        }
    },
    created() {
        this.productTest = this.product
    }
}
</script>

<style lang="scss" scoped>
.items {
    background-color: #fff;
    margin: 0 10px 10px;
    border: 1px solid rgba(128, 128, 128, 0.33);
    border-radius: 7px;

    img{
        width: 100%;
    }
    span {
        text-align: left;
        display: block;
        margin: 0 0 0 15px;
    }
}
.btn {
  color: white;
  background-color: #42b983;
  padding: 9px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: block;
  margin: 10px 7px;
  text-decoration: none;
  width: fit-content;
}
</style>