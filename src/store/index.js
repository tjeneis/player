import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: undefined,
  },
  getters: {
    username(state) {
      return state.username;
    },
  },
  actions: {
    setUsername({ commit }, username) {
      commit('setUsername', username);
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
});
