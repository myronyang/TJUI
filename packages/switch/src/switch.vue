<template>
  <label class="tj-switch">
    <input
      class="tj-switch__input"
      :disabled="disabled"
      @change="$emit('change', currentValue)"
      type="checkbox"
      v-model="currentValue"
    >
    <span class="tj-switch__core"></span>
    <div class="tj-switch__label">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: "tj-switch",
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>