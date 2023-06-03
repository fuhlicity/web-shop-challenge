import Vuex from 'vuex';

const store = new Vuex.Store({
  modules: {
    store: {
      namespaced: true,
      state: {
        bShowCart: false,
      },
      mutations: {
        setShowCart(state, bValue) {
          state.bShowCart = bValue;
        },
      },
    },
  },
});

export default store;
