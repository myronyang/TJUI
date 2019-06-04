<script>
export default {
  name: "tj-col",
  componentName: "TJCol",
  props: {
    span: {
      type: Number,
      default: 12
    },
    tag: {
      type: String,
      default: "div"
    },
    offset: Number,
    pull: Number,
    push: Number,
    align: String,
    width: String,
    vertical: Boolean,
    to: String
  },

  computed: {
    parent() {
      let parent = this.$parent;

      while (parent && parent.$options.componentName !== "TJRow") {
        parent = parent.$parent;
      }

      return {
        gutter: parent ? parent.gutter : 0,
        flex: parent.flex
      };
    }
  },

  render(h) {
    let style = {};

    if (this.parent.gutter) {
      style.paddingLeft = this.parent.gutter / 2 + "px";
      style.paddingRight = style.paddingLeft;
    }

    if (this.parent.flex && !this.width) {
      style.flex = 1;
    } else {
      style.flex = `0 0 ${this.width}`;
    }

    if (this.align) {
      style.textAlign = this.align;
    }

    return h(
      this.tag,
      {
        class: [
          "tj-col",
          this.parent.flex ? "" : `tj-col-${this.span}`,
          this.vertical ? "is-vertical" : ""
        ],
        style,
        on: {
          click: ev => {
            if (this.to) {
              this.$router.push(this.to);
            } else {
              this.$emit("click", ev);
            }
          }
        }
      },
      this.$slots.default
    );
  }
};
</script>