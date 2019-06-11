<template>
  <div class="tj-loading">
    <span v-if="type === 'spinner'" class="tj-loading__spinners" :style="style">
      <i class="tj-loading__spinner" v-for="(item,i) in balde" :key="i"></i>
    </span>
    <svg v-else class="tj-loading__circular" :style="style" viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
    <span class="tj-loading__text" :style="textStyle">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "tj-loading",
  props: {
    size: {
      type: Number,
      default: 24
    },
    type: {
      type: String,
      default: "spinner"
    },
    color: String,
  },
  data() {
    return {
      balde: 12
    };
  },
  computed: {
    style() {
      if (!this.size) {
        return;
      }
      const value = `${this.size}px`;
      return {
        width: value,
        height: value,
        color: this.color
      };
    },
    textStyle() {
      return {
        lineHeight: `${this.size}px`,
        color: this.color
      }
    }
  }
};
</script>