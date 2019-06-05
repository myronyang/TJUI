<template>
  <div class="tj-loading">
    <span class="tj-loading__spinners" :style="style">
      <i class="tj-loading__spinner" v-for="(item,i) in balde" :key="i"></i>
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
    }
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
        height: value
      };
    }
  }
};
</script>