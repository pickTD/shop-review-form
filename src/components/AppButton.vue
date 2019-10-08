<template>
  <button
    class="app-button"
    :class="{'app-button--disabled': disabled}"
    @click="handleClick"
  >
    {{label}}
  </button>
</template>

<script>

export default {
  name: 'AppButton',
  props: {
    label: { type: String, required: true },
    handleClick: { type: Function, required: true },
    disabled: { type: Boolean, required: true },
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  display: inline-block;
  width: 21.5rem;
  height: 3rem;
  border: 1px solid #D9D9D9;
  border-radius: .5rem;
  outline: none;
  text-decoration: none;
  background:#FFF;
  color: #000;
  font-weight: 700;
  font-size: .875rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;

  &--disabled {
    color: #FFF;
    background: #C4C4C4;
    cursor: not-allowed;
  }
}
</style>
