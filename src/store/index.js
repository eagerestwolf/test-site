import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSideNavigationOpen: false,
  },
  mutations: {
    toggleSideNavigation(state) {
      state.isSideNavigationOpen = !state.isSideNavigationOpen;
    },
  },
  actions: {
  },
  modules: {
  },
});
