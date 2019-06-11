<template>
  <div class="tj-checker" :style="style">
    <div class="tj-checker__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tj-checker",
  componentName: "TJChecker",
  props: {
    value: {},
    gutter: Number,
    round: {
      type: String,
      default: "3px"
    },
    disabled: Boolean,
    type: {
      type: String,
      default: "radio",
      validator(value) {
        return (
          ["radio", "checkbox"].indexOf(value) > -1
        );
      }
    },
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return (
          ["small", "normal", "large"].indexOf(value) > -1
        );
      }
    }
  },
  data() {
    return {
      style: {}
    };
  },

  created() {
    if (this.gutter) {
      this.style.marginLeft = `-${this.gutter / 2}px`;
      this.style.marginRight = this.style.marginLeft;
    }

    if (this.type === "checkbox") {
      this.checkboxs = [];
    }

    this.$on("change", value => {
      this.$emit("input", value);
    });
  }
};
</script>
