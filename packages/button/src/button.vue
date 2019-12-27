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
    },
    to: String,
    url: String
  },

  computed: {
    roundSty() {
      if (!this.round) {
        return;
      }
      return typeof this.round === "string" ? this.round : "25px";
    }
  },

  methods: {
    handleClick(evt) {
      if (this.to) {
        this.$router.push(this.to);
      }
      if (this.url) {
        window.location.href = this.url;
      }
      this.$emit("click", evt);
    }
  },

  render(h) {
    const classStr = [
      "tj-button",
      "tj-button--" + this.size,
      "tj-button--" + this.type,
      {
        "is-plain": this.plain,
        "is-disabled": this.disabled
      }
    ];
    return (
      <button class={classStr} style={{ borderRadius: this.roundSty }}>
        <label
          class="text"
          on-click={ev => {
            this.handleClick(ev);
          }}
        >
          {this.$slots.default}
        </label>
      </button>
    );
  }
};
</script>
