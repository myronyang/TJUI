

<script>
export default {
  name: "tj-tabs",
  componentName: "TJTabs",
  props: {
    value: [String, Number],
    more: Boolean,
  },

  data() {
    return {
      currentName: this.value,
      panes: []
    };
  },

  methods: {
    handleTabClick(tab, tabName, event) {
      this.setCurrentName(tabName);
      this.$emit("tab-click", tab, event);
    },

    setCurrentName(name) {
      this.currentName = name;
      this.$emit("input", name);
    },

    addPanes(item) {
      this.panes.push(item);
    }
  },

  watch: {
    value(val) {
      this.currentName = val;
    }
  },

  render(h) {
    const tabs = this._l(this.panes, (pane, index) => {
      let tabName = pane.name || pane.index || index;
      const tabindex = pane.active ? 0 : -1;
      return (
        <tj-col
          class={{"tj-tabs__item": true, active: pane.active}}
          id={tabindex}
          data-index={tabindex}
          on-click={ev => {
            this.handleTabClick(pane, tabName, ev);
          }}
        >
          <span class="tj-tabs__label">{pane.label}</span>
        </tj-col>
      );
    });

    const header = (
      <div class="tj-tabs__header">
        <tj-row flex class={{"tj-tabs__more": this.more }}>{tabs}</tj-row>
      </div>
    );

    const panels = <div class={{
      "tj-tabs__content": true
    }}>{this.$slots.default}</div>;

    return (
      <div
        class={{
          "tj-tabs": true
        }}
      >
        {[header, panels]}
      </div>
    );
  }
};
</script>
