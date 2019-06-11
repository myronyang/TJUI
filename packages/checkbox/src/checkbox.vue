<template>
  <div
    class="tj-checkbox"
    :class="{'is-disabled': disabled, 'is-active': status }"
    :style="{fontSize: `${size}px`}"
    @click.stop="handleClick"
  >
    <i
      v-if="shape === 'circle'"
      class="tj-icon"
      :class="status ? 'tj-CheckFilled' : 'tj-Check'"
      :style="{fontSize: `${size + 2}px`}"
    ></i>
    <i
      v-else
      class="tj-icon"
      :class="status ? 'tj-check' : 'tj-cc-check-square'"
      :style="{fontSize: `${size + 2}px`}"
    ></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tj-checkbox",
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "circle"
    },
    size: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
      status: this.value
    };
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.status = !this.status;
      this.$emit("input", this.status);
      this.$emit("click");
    }
  },
  watch: {
    value(val) {
      this.status = val;
    }
  }
};
</script>

