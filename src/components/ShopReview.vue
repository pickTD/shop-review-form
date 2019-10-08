<template>
  <article class="shop-review">
    <div class="shop-review__row">
      <h4 class="shop-review__name">{{name}}</h4>
      <span class="shop-review__date">{{date}}</span>
    </div>
    <AppRating class="shop-review__rating" :rating="rating" :size="24" :mutable="false"/>
    <p class="shop-review__content">{{content}}</p>
  </article>
</template>

<script>
import { get } from 'lodash';
import AppRating from './AppRating.vue';

export default {
  name: 'ShopReview',
  components: {
    AppRating,
  },
  props: {
    review: { type: Object, required: true },
  },
  computed: {
    name() {
      return get(this.review, 'name', '');
    },
    date() {
      return get(this.review, 'date', null);
    },
    rating() {
      return get(this.review, 'rating', 0);
    },
    content() {
      return get(this.review, 'content', '');
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-review {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 8rem;
  max-width: 23.5rem;
  padding: 1.5rem 0 1rem;

  &::after {
    position: relative;
    top: 1rem;
    content: '';
    width: 21.625rem;
    height: 0;
    border-bottom: 1px solid #D9D9D9;
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    font-weight: 700;
    font-size: .875rem;
    line-height: .8125rem;
  }

  &__date {
    font-size: .6875rem;
    line-height: .8125rem;
    color: #A79595;
  }

  &__rating {
    margin: 1rem 0 .5rem;
  }

  &__content {
    font-size: .6875rem;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
