<template>
  <div
    class="tj-checker-item"
    :class="['tj-checker-item--' + parent.size, {
      'tj-checker-item__active': active,
    }]"
    :style="style"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tj-checker-item",
  componentName: "TJCheckerItem",
  props: {
    label: [Number, String, Object]
  },
  data() {
    return {
      style: {},
      active: false
    };
  },

  computed: {
    parent() {
      let parent = this.$parent;

      while (parent && parent.$options.componentName !== "TJChecker") {
        parent = parent.$parent;
      }

      return {
        gutter: parent ? parent.gutter : 0,
        value: parent.value,
        round: parent.round,
        size: parent.size,
        type: parent.type,
        checkboxs: parent.checkboxs,
        disabled: parent.disabled
      };
    }
  },

  created() {
    this.style.borderRadius = this.parent.round;

    if (this.parent.gutter) {
      this.style.marginLeft = this.parent.gutter / 2 + "px";
      this.style.marginRight = this.style.marginLeft;
    }

    if (this.parent.value === this.label) {
      this.active = true;
    }
  },

  methods: {
    handleClick() {
      if (this.parent.disabled) return;
      this.$nextTick(() => {
        const childrens = this.$parent.$children;
        const checkboxs = this.parent.checkboxs;

        this._l(childrens, children => {
          if (children.$options.componentName) {
            if (this.parent.type === "radio") {
              children.active = this._uid === children._uid ? true : false;
            } else if (this._uid === children._uid) {
              this.active = !this.active;
              if (this.active) {
                checkboxs.push(this.label);
              } else {
                checkboxs.splice(checkboxs.indexOf(this.label), 1);
              }
            }
          }
        });

        this.$parent.$emit("change", this.parent.type === "radio" ? this.label : checkboxs);
      });
    }
  }
};
</script>
