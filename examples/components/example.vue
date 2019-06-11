<template>
  <section class="example">
    <div class="example-wrap">
      <div class="inner">
        <iframe :src="path" frameborder="0" class="iframe"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../../examples/router";
const URL = "https://myronyang.github.io/tjui-example/#";
export default {
  data() {
    return {
      path: URL
    };
  },
  mounted() {
    router.beforeEach((to, from, next) => {
      let catalog = to.path;
      router.options.routes.forEach(route => {
        if (to.path === route.path && route.label === "开发指南") {
          catalog = "/"
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
