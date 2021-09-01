import router from '../../router'
import axios from "axios"

const state = {
    userApi: {}
};

const getters = {
    user: state => state.userApi
};

const actions = {
    async getUser({ commit }) {
        const response = await axios.get('https://randomuser.me/api/')
        let userApi = {
            name: response.data.results[0].name.first,
            email: response.data.results[0].email,
            uid: response.data.results[0].login.uuid,
            picture: response.data.results[0].picture.thumbnail
        }
        router.push('/')
        commit('setUser', userApi)
    },
};

const mutations = {
    setUser: (state, userApi) => state.userApi = userApi
};

export default {
    state,
    getters,
    actions,
    mutations
}