<template>
  <div
    class="tj-panel"
    :style="{padding: padding + 'px'}"
    :class="['tj-panel--' + type, {
    'is-round': round,
    'is-gutter': gutter,
    'is-shadow': shadow,
  }]"
  >
    <div class="tj-panel__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tj-panel",
  props: {
    round: Boolean,
    padding: {
      type: Number,
      default: 15
    },
    shadow: Boolean,
    type: {
      type: String,
      default: "light",
      validator(value) {
        return ["dark", "light", "plain"].indexOf(value) > -1;
      }
    },
    gutter: {
      type: Number,
      default: 0
    }
  }
};
</script>
