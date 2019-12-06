<template>
  <div class="back-top" v-show="visible">
    <i class="tj-icon tj-top" @click="handleScroll(0, 300)"></i>
  </div>
</template>

<script>
export default {
  name: "gx-back-top",
  data() {
    return {
      visible: false
    };
  },

  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        this.visible = window.scrollY > window.innerHeight / 3;
      },
      false
    );
  },

  methods: {
    handleScroll(y, duration) {
      const initialY =
        document.documentElement.scrollTop || document.body.scrollTop;
      const baseY = (initialY + y) * 0.5;
      const difference = initialY - baseY;
      const startTime = performance.now();

      const step = () => {
        let normalizedTime = (performance.now() - startTime) / duration;
        if (normalizedTime > 1) normalizedTime = 1;

        window.scrollTo(
          0,
          baseY + difference * Math.cos(normalizedTime * Math.PI)
        );
        if (normalizedTime < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }
};
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: 2%;
  bottom: 6%;
  z-index: 98;
  .tj-icon {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
      color: #fff;
      border-color: #9c27b0;
      background: #9c27b0;
    }
  }
}
</style>