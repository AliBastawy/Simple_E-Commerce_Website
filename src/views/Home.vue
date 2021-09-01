<template>
  <div class="home">
    <div class="container">
      <Items :product=product :key="product.id" v-for="product in allProducts" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Items from '@/components/Items.vue'
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'Home',
  data() {
    return {
      Products: []
    }
  },
  methods: {
    ...mapActions(['getProducts']),
  },
  computed: mapGetters(['allProducts']),
  created() {
    this.getProducts()
  },
  components: {
    Items
  },
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
}
</style>