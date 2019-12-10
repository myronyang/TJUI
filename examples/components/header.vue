<template>
  <header class="header">
    <div class="clearfix">
      <router-link class="fl_left" to="/">
        <img class="logo" src="../assets/image/logo@2x.png" width="25" />
        <span class="text">TJUI</span>
      </router-link>
      <div class="fl_right">
        <img
          v-if="!openStatus"
          src="https://website.didiglobal.com/dist/media/menu.3f7d9019.svg"
          width="23"
          @click="handleToggle"
        />
        <img
          v-else
          src="https://website.didiglobal.com/dist/media/close1.027a5639.svg"
          width="16"
          @click="handleToggle"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./logo";
export default {
  data() {
    return {
      openStatus: false
    };
  },
  methods: {
    handleToggle() {
      const $ele = document.querySelector("#sidebar"),
        className = $ele.getAttribute("class");

      if (className === "sidebar-wrap") {
        $ele.classList.add("open");
        this.openStatus = true;
      } else {
        $ele.classList.remove("open");
        this.openStatus = false;
      }
    }
  },
  watch: {
    $route() {
      this.openStatus = false;
      window.scrollTo(0, 0);
    }
  },
  components: {
    "tj-logo": Logo
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: none;
}
@media screen and (max-width: 745px) {
  .header {
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    z-index: 98;
    height: 45px;
    line-height: 45px;
    background: #fff;
    box-shadow: 0 8px 12px #ebedf0;
    .clearfix {
      padding: 0 15px;
    }
    .fl_left {
      .logo {
        position: relative;
        top: 5px;
      }
      .text {
        color: #000;
        margin-left: 3px;
        font-size: 22px;
        margin-left: -1px;
      }
    }
    .fl_right {
      img {
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>
