<template>
  <button
    class="tj-button"
    :class="['tj-button--' + size, 'tj-button--' + type, {
      'is-plain': plain,
      'is-disabled': disabled,
    }]"
    :style="{borderRadius:roundSty}"
    :disabled="disabled"
    @click="handleClick"
  >
    <label class="text">
      <slot></slot>
    </label>
  </button>
</template>

<script>
export default {
  name: "tj-button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: [Boolean, String],
      default: false
    },
    plain: Boolean,
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "danger", "primary", "success"].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return (
          ["mini", "small", "normal", "middle", "large"].indexOf(value) > -1
        );
      }
    }
  },

  computed: {
    roundSty() {
      if (!this.round) {
        return 
      }
      return typeof this.round === 'string'? this.round: '25px'
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
