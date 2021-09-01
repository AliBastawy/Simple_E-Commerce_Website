<template>
  <div class="login">
    <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="">
    <form>
      <label for="Email">Email Address</label>
      <input type="email" name="Email">
      <small> We'll never share your e-mail </small>
      <label for="Password">Password</label>
      <input type="password" name="Password">
      <input type="checkbox">
      <label>Check me</label>
    </form>
    <button @click="this.getUser">Login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Login",
  methods: {
    ...mapActions(['getUser'])
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(128, 128, 128, 0.33);
  border-radius: 7px;
  padding: 10px;
  box-shadow: 5px 7px 8px grey;

  img{
    width: 150px;
    font-size: 150px;
    padding: 25px;
    display: block;
    margin: 0 auto;
  }
  label:not(:last-of-type) {
    display: block;
    margin-bottom: 6px;
    text-align: left;
  }
  input[type="password"], input[type="email"] {
    display: block;
    margin-bottom: 15px;
    width: 300px;
    padding: 7px;
  }
  input[type="email"] {
    margin: 0;
  }
  input[type="checkbox"]{
    margin-right: 5px;
  }
  input:focus {
    background-color: #cce5ff;
    outline-color: #00bcd4;
  }
  button {
    background-color: #42b983;
    color: white;
    padding: 9px 14px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: block;
    margin: 10px 0;
    width: 100%;
  }
  small {
    margin-bottom: 15px;
    display: block;
  }
}
</style>
