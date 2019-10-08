<template>
  <div id="app">
    <transition mode="out-in">
      <component :is="current"></component>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ShopReviews from './components/ShopReviews.vue';
import ShopReviewCreate from './components/ShopReviewCreate.vue';
import data from './helpers/data';

export default {
  name: 'App',
  components: {
    ShopReviews,
    ShopReviewCreate,
  },
  computed: {
    ...mapState(['reviewIsComposing']),
    current() {
      return this.reviewIsComposing.composing ? 'ShopReviewCreate' : 'ShopReviews';
    },
  },
  methods: {
    ...mapMutations(['setData']),
  },
  mounted() {
    this.setData(data);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}

.v-enter-active,
.v-leave-active {
  transition: all .2s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
