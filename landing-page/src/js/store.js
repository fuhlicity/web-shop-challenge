import Vuex from 'vuex';

const store = new Vuex.Store({
  modules: {
    store: {
      namespaced: true,
      state: {
        bShowCart: false,
        bShowSearch: false
      },
      mutations: {
        setShowCart(state, bValue) {
          state.bShowCart = bValue;
        },
        setShowSearch(state, bValue) {
          state.bShowSearch = bValue;
        },
      },
    },
  },
});

export default store;