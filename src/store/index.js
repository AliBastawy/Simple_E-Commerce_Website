import { createStore } from 'vuex'
import Product from "./modules/Product"
import User from "./modules/User"

export default createStore({
  modules: {
    Product,
    User
  }
})
