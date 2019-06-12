<template>
  <div class="tj-collapse">
    <div class="tj-collapse__head" @click="handleClick">
      <div class="tj-collapse__title">
        <span>{{title}}</span>
      </div>
      <div class="tj-collapse__btn">
        <i class="tj-icon" :class="visible? 'tj-top' : 'tj-bottom'"></i>
      </div>
    </div>
    <transition name="move">
      <div class="tj-collapse__main" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "tj-collapse",
  props: {
    title: String,
    value: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      visible: this.value
    };
  },

  methods: {
    handleClick() {
      this.visible = !this.visible;
      this.$emit("change");
      this.$emit("input", this.visible);
    }
  },

  watch: {
    value(value) {
      this.visible = value;
    }
  }
};
</script>
