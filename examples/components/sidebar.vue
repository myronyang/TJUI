<template>
  <section class="sidebar-wrap" id="sidebar">
    <router-link class="sidebar-logo" to="/">
      <tj-logo v-if="!searchVisible" />
    </router-link>
    <ul class="sidebar-links">
      <li v-for="(item, index) in sidebars" :key="index">
        <div class="sidebar-group">
          <p class="sidebar-head">
            <span>{{item.name}}</span>
          </p>
          <ul class="sidebar-group-items">
            <li v-for="(child, ids) in item.childrens" :key="ids" @click="handleClick">
              <router-link class="sidebar-link" :to="child.path">{{child.name}}</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="sidebar-icons">
      <div class="icon-place"></div>
      <div class="icons-inner">
        <a class="tj-icon tj-github" href="https://github.com/myronyang/TJUI" target="_blank"></a>
        <a class="tj-icon tj-blog" href="https://myronyang.github.io/blog" target="_blank"></a>
        <a class="tj-icon tj-fangdajing" href="javascript:;" @click="searchVisible = true"></a>
      </div>
    </div>
    <tj-search :visible.sync="searchVisible" />
  </section>
</template>

<script>
import router from "@/router";
import logo from "@/components/logo";
import search from "../components/search/index";

const FIRST_LEVEL = [
  { name: "开发指南" },
  { name: "基础组件" },
  { name: "表单组件" },
  { name: "反馈组件" },
  { name: "展示组件" },
  { name: "导航组件" }
];
export default {
  data() {
    return {
      searchVisible: false
    }
  },
  computed: {
    sidebars() {
      const routes = router.options.routes[1].children;
      FIRST_LEVEL.forEach(level => { 
        level.childrens = [];
        routes.forEach(route => {
          if (level.name === route.label) {
            level.childrens.push(route);
          }
        });
      });
      return FIRST_LEVEL;
    }
  },
  methods: {
    handleClick() {
      const $ele = document.querySelector("#sidebar");
      $ele.classList.remove("open");
    }
  },
  components: {
    "tj-logo": logo,
    'tj-search': search
  }
};
</script>