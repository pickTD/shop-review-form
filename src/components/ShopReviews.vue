<template>
  <div class="shop-reviews">
    <div class="shop-reviews__header">
      <h3 class="shop-reviews__title">Отзывы магазина</h3>
      <AppButton
        :label="'Написать отзыв'"
        :disabled="false"
        :handleClick="composeReview"
      />
    </div>
    <ShopReview
      v-for="review in filteredReviews"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { get } from 'lodash';
import AppButton from './AppButton.vue';
import ShopReview from './ShopReview.vue';

export default {
  name: 'ShopReviews',
  components: {
    ShopReview,
    AppButton,
  },
  computed: {
    ...mapState(['reviews', 'reviewIsComposing']),
    shopId() {
      return get(this.reviewIsComposing, 'shopId', null);
    },
    filteredReviews() {
      return this.reviews
        .filter(r => r.shopId === this.shopId)
        .sort((a, b) => b.rating - a.rating);
    },
  },
  methods: {
    ...mapActions(['setComposingStateAction']),
    composeReview() {
      this.setComposingStateAction({
        composing: true,
        shopId: this.shopId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-reviews {
  width: 23.5rem;
  padding: 0 2rem 2rem 1rem;
  background: #F8F8F8;

  &__header {
    position: relative;
    padding: 2rem 0 1.5rem;

    &::after {
      display: block;
      position: relative;
      top: 1.5rem;
      content: '';
      width: 21.625rem;
      height: 0;
      border-bottom: 1px solid #D9D9D9;
    }
  }

  &__title {
    margin-bottom: 1.75rem;
    text-align: left;
    font-weight: 700;
    font-size: .875rem;
    color: #F56A3F;
  }
}
</style>
