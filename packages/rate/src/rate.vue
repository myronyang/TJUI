<template>
  <div class="tj-rate">
    <span
      class="tj-icon"
      :style="{fontSize: size + 'px'}"
      :class="classNames[index]"
      v-for="(item, index) in max"
      @click="handleClick(item, index)"
    ></span>
  </div>
</template>

<script>
const RATE_NAMA = ["tj-pingfen", "tj-pingfenshoucang-"];
export default {
  name: "tj-rate",
  props: {
    value: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 5
    },
    size: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      classNames: []
    };
  },
  created() {
    for (let i = 0; i < this.max; i++) {
      this.classNames.push(RATE_NAMA[i < this.value ? 1 : 0]);
    }
  },
  methods: {
    handleClick(item, index) {
      if (this.disabled) return;
      for (let i = 0; i < this.max; i++) {
        this.classNames.splice(i, 1, RATE_NAMA[i <= index ? 1 : 0]);
      }
      this.$emit("input", index + 1);
      this.$emit("change", index + 1);
    }
  }
};
</script>

