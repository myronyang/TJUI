<template>
  <section class="sidebar" id="sidebar">
    <ul class="sidebar-links">
      <li v-for="item in sidebars">
        <div class="sidebar-group">
          <p class="sidebar-heading">
            <span>{{item.name}}</span>
          </p>
          <ul class="sidebar-group-items">
            <li v-for="child in item.childrens" @click="handleClick">
              <router-link class="sidebar-link" :to="child.path">{{child.name}}</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import router from "../../examples/router";
const FIRST_LEVEL = [
  { name: "开发指南" },
  { name: "基础组件" },
  { name: "表单组件" },
  { name: "反馈组件" },
  { name: "展示组件" },
  { name: "导航组件" }
];
export default {
  computed: {
    sidebars() {
      const routes = router.options.routes;
      FIRST_LEVEL.forEach(level => {
        level.childrens = [];
        routes.forEach(route => {
          if (level.name === route.label) {
            level.childrens.push(route)
          }
        });
      });
      return FIRST_LEVEL;
    }
  },
  methods: {
    handleClick() {
      console.log(999);
      
      const $ele = document.querySelector("#sidebar");
      $ele.classList.remove("open");
    }
  },
};
</script>

<style>
</style>
