<template>
  <header class="tj-header" :class="fixed ? 'tj-header--fixed' : ''" :style="styleObj">
    <div class="tj-header__left">
      <i class="tj-icon tj-left1" @click="goBack"></i>
      <slot name="left"></slot>
    </div>
    <div class="tj-header__center">
      <span class="tj-header__title" v-text="title"></span>
    </div>
    <div class="tj-header__right">
      <div class="tj-header__inner">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "tj-header",
  props: {
    title: String,
    color: String,
    background: String,
    fixed: {
      type: Boolean,
      default: false
    },
    returnBack: Function
  },

  computed: {
    styleObj() {
      return {
        color: this.color,
        background: this.background
      };
    }
  },

  methods: {
    goBack() {
      if (this.returnBack) {
        this.returnBack();
      } else {
        this.$router.back(-1);
      }
    }
  }
};
</script>