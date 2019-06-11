<template>
  <div class="tj-tabs-item" v-show="active && this.$slots.default" :id="`pane-${name}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tj-tabs-item",
  componentName: "TJTabsItem",
  props: {
    label: String,
    name: [String, Number]
  },

  mounted() {
    this.$parent.addPanes(this);
  },

  computed: {
    active() {
      return this.$parent.currentName === this.name;
    }
  }
};
</script>
