<template>
  <transition name="tj-toast-pop">
    <div
      class="tj-toast"
      v-show="visible"
      :class="customClass"
      :style="{ 'padding': iconClass === '' ? '10px' : '10px 15px' }"
    >
      <i class="tj-toast__icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span
        class="tj-toast__text"
        :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }"
      >{{message}}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
export default {
  props: {
    message: String,
    className: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "middle"
    },
    iconClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    customClass() {
      var classes = [];
      switch (this.position) {
        case "top":
          classes.push("is-placetop");
          break;
        case "bottom":
          classes.push("is-placebottom");
          break;
        default:
          classes.push("is-placemiddle");
      }
      classes.push(this.className);
      return classes.join(" ");
    }
  }
};
</script>