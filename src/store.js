import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reviews: [],
    reviewIsComposing: {
      composing: false,
      shopId: 0,
    },
  },
  mutations: {
    setData(state, data) {
      state.reviews = data;
    },
    setComposingState(state, value) {
      state.reviewIsComposing.composing = value;
    },
    setComposingShop(state, value) {
      state.reviewIsComposing.shopId = value;
    },
    updateReviews(state, value) {
      state.reviews = [...state.reviews, value];
    },
  },
  actions: {
    setComposingStateAction({ commit }, { composing, shopId }) {
      commit('setComposingState', composing);
      commit('setComposingShop', shopId);
    },
    updateReviewsAction({ commit }, value) {
      commit('updateReviews', value);
      commit('setComposingState', false);
    },
  },
});
