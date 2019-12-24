<template>
  <section class="example-wrap">
    <div class="example-box" :style="{backgroundImage: 'url('+wrapImage+')'}">
      <div class="example-inner">
        <iframe :src="path" frameborder="0" class="iframe"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
const URL = "http://tjdemo.glinsunai.com/#";
export default {
  data() {
    return {
      path: URL,
      wrapImage: require("@/assets/image/phoneWrap.png")
    };
  },
  mounted() {
    router.beforeEach((to, from, next) => {
      let catalog = to.path.replace("/docs", "");

      const routes = router.options.routes[1].children;
      routes.forEach(route => {
        if (to.path.search(route.path) > -1 && route.label === "开发指南") {
          catalog = "/";
        }
      });
      this.path = URL + catalog;
      next();
    });
  }
};
</script>
