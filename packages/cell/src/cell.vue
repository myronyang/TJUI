<template>
  <div class="tj-cell">
    <router-link class="tj-cell__inner" :to="to">
      <div class="tj-cell__icon" v-if="icon">
        <span class="tj-icon" :class="icon"></span>
      </div>
      <div class="tj-cell__title">{{title}}</div>
      <div
        class="tj-cell__value"
        v-if="value"
        :class="{'is-gray': isFirst}"
        @click="handleClick($event)"
      >{{value}}</div>
      <div class="tj-cell__solt" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="tj-cell__right tj-icon tj-right1" v-if="!noIcon" @click="handleClick($event)"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tj-cell",
  props: {
    icon: String,
    title: String,
    value: [String, Number],
    to: {
      type: String,
      default: ""
    },
    noIcon: Boolean
  },

  data() {
    return {
      isFirst: true
    };
  },

  methods: {
    handleClick(e) {
      e.stopPropagation();
      this.$emit("click");
    }
  },

  watch: {
    value(val) {
      if (val) this.isFirst = false;
    }
  }
};
</script>

