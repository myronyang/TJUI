<template>
  <section class="example-wrap">
    <div class="example-box">
      <div class="example-inner">
        <iframe :src="path" frameborder="0" class="iframe"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
const URL = "https://myronyang.github.io/tjui-example/#";
export default {
  data() {
    return {
      path: URL
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

<style>
</style>
