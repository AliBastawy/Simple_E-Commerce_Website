<template>
  <div v-if="this.$route.path !== '/login'" id="nav">
    <router-link to="/">E-Commerce</router-link>
    <router-link data-testId='Login' v-if="!user.picture" to="/login">Login</router-link>
    <div @click="showCart" class="user" v-else>
      <img :src=this.$store.getters.user.picture alt="">
      <i class="fas fa-shopping-cart"></i>
      <i class="fas fa-gifts"></i>
    </div>
  </div>
  <router-view />
</template>

<script>
import {  mapGetters } from 'vuex';

export default {
  name: "App",
  computed: mapGetters(['user']),
  data() {
    return {
      loggedin: false,
    }
  },
  methods: {
    showCart() {
      this.$router.push('/cart')
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 12px 20px;
  background-color: #42b983;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
  .user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img {
    border-radius: 50%;
    border: 3px solid white;
  }
  i {
      font-size: 26px;
      margin-left: 5px;
  }
}
</style>
