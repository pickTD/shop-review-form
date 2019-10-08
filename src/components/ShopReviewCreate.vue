<template>
  <div class="shop-review-create">
    <div class="shop-review-create__header">
      <div
        class="shop-review-create__back"
        @click="back"
      >
        <svg
          class="shop-rating__star"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- eslint-disable-next-line -->
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41421 10L10.7071 16.2929L9.29289 17.7071L0.585785 9L9.29289 0.292892L10.7071 1.70711L4.41421 8H19V10H4.41421Z" fill="black"/>
        </svg>
      </div>
      <h3 class="shop-review-create__title">Оценить</h3>
      <AppRating
        class="shop-review-create__rating"
        :size="36"
        mutable
        @setRating="setRating"
      />
    </div>
    <input
      class="shop-review-create__input"
      type="text"
      placeholder="Укажите ваш никнейм"
      v-model="name"
    >
    <textarea
      class="shop-review-create__textarea"
      cols="30"
      rows="7"
      placeholder="Расскажите, что можно улучшить?"
      v-model="content"
    >
    </textarea>
    <span
      class="shop-review-create__chars-restriction"
      v-if="this.content.length < 20"
    >
      Минимум 20 символов
    </span>
    <AppButton
      class="shop-review-create__submit"
      :label="'Отправить'"
      :disabled="!isFormValid"
      :handleClick="commitReview"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { uniqueId } from 'lodash';
import dayjs from 'dayjs';
import AppButton from './AppButton.vue';
import AppRating from './AppRating.vue';

export default {
  name: 'ShopReviewCreate',
  components: {
    AppRating,
    AppButton,
  },
  data() {
    return {
      name: '',
      content: '',
      rating: null,
    };
  },
  computed: {
    ...mapState(['reviewIsComposing']),
    isFormValid() {
      return this.rating && this.content.length >= 20;
    },
  },
  methods: {
    ...mapActions(['updateReviewsAction']),
    ...mapMutations(['setComposingState']),
    back() {
      this.setComposingState(false);
    },
    setRating(r) {
      this.rating = r;
    },
    commitReview() {
      if (this.isFormValid) {
        this.updateReviewsAction({
          shopId: this.reviewIsComposing.shopId,
          id: uniqueId('review_'),
          name: this.name || 'Anonymous',
          date: dayjs().format('DD.MM.YYYY'),
          rating: this.rating,
          content: this.content,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-review-create {
  position: relative;
  width: 23.5rem;
  padding: 0 2rem 0 1rem;
  background: #F8F8F8;

  &__header {
    position: relative;
    padding: 2rem 0 1rem;
  }

  &__back {
    position: absolute;
    top: 1.75rem;
    cursor: pointer;
  }

  &__title {
    margin-bottom: 1.25rem;
    font-weight: 700;
    font-size: .875rem;
    text-align: center;
    color: #000000;
  }

  &__rating {
    width: 12.25rem;
    margin: 0 auto;
  }

  &__input,
  &__textarea {
    width: 21.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    font-family: inherit;
    font-size: .875rem;
    background: #FFFFFF;
    outline: none;
    border: 1px solid #D9D9D9;
    border-radius: .5rem;

    &::placeholder {
      color: #C4C4C4;
    }
  }

  &__input {
    height: 3rem;
  }

  &__textarea {
    height: 10rem;
    resize: none;
    overflow: auto;
  }

  &__chars-restriction {
    position: absolute;
    top: 20rem;
    right: 2rem;
    font-size: .75rem;
    color: #FF6969;
  }

  &__submit {
    margin-bottom: 5.125rem;
  }
}
</style>
