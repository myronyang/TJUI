<script>
export default {
  name: "tj-row",
  componentName: "TJRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    column: Boolean,
    gutter: Number,
    flex: Boolean,
    to: String
  },

  computed: {
    style() {
      const ret = {};

      if (this.flex) {
        ret.display = "flex";
      }

      if (this.column) {
        ret.display = "flex";
        ret.flexFlow = "column";
      }

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },

  methods: {
    handleClick() {
      if (this.to) {
        this.$router.push(this.to);
      } else {
        this.$emit("click");
      }
    }
  },

  render(h) {
    let inner = {}

    if (this.gutter) {
      inner = (
        <div class="tj-row__inner" style={this.style}>
          {this.$slots.default}
        </div>
      )
    }

    return (
      <div
        class="tj-row"
        style={this.gutter? {} : this.style}
        on-click={() => {
          if (this.to) {
            this.$router.push(this.to);
          } else {
            this.$emit("click");
          }
        }}
      >
        { this.gutter ? [inner] : this.$slots.default }
      </div>
    );
  }
};
</script>
