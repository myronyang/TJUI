<template>
  <transition name="tj-indicator">
    <div class="tj-indicator" v-show="visible">
      <div class="tj-indicator__wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <tj-loading :size="24"></tj-loading>
        <span class="tj-indicator__text" v-show="text">{{ text }}</span>
      </div>
      <div class="tj-indicator__mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script type="text/babel">
export default {
  name: "tj-indicator",
  props: {
    text: String,
    spinnerType: {
      type: String,
      default: "snake"
    }
  },
  data() {
    return {
      visible: false
    };
  },

  computed: {
    convertedSpinnerType() {
      switch (this.spinnerType) {
        case "double-bounce":
          return 1;
        case "triple-bounce":
          return 2;
        case "fading-circle":
          return 3;
        default:
          return 0;
      }
    }
  }
};
</script>