<template>
  <div class="search-wrap" ref="searchWrap" v-if="copyVisible">
    <tj-logo color="#999" />
    <div class="tj-icon tj-guanbi" @click="handleClose"></div>
    <div class="search-container ani animated bounceInDown" :class="{'active': resultStatus}">
      <div class="search-top-list">
        <ul :style="{transform: `translate(0, -${moveSpace}px)`}">
          <li v-for="(item, index) in routers" :key="index">
            <span
              @mouseover="handleMouseover()"
              @mouseout="handleMouseout"
              @click="goDetailPage(item)"
            >{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="search-content">
        <div class="content-left">
          <i class="tj-icon tj-search" @click="handleSearch"></i>
        </div>
        <div class="content-right">
          <input
            type="search"
            v-model="searchName"
            class="btn-serch"
            placeholder="请输入要搜索的组件名称"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>
      <search-result :items="resultList" />
    </div>
  </div>
</template>

<script>
import router from "@/router";
import logo from "@/components/logo";
import searchResult from "./result";
export default {
  props: {
    visible: Boolean
  },
  data() {
    return {
      copyVisible: this.visible,
      interval: {},
      searchName: "",
      resultList: [],
      resultStatus: false,
      moveSpace: 0
    };
  },

  computed: {
    routers() {
      return router.options.routes[1].children;
    }
  },

  methods: {
    setInterval() {
      const ulh = (this.routers.length - 7) * 70;
      this.interval = setInterval(() => {
        this.moveSpace++;
        if (this.moveSpace >= ulh) {
          this.moveSpace = 0;
        }
      }, 40);
    },

    goDetailPage(item) {
      this.copyVisible = false;
      this.$router.push(item.path);
    },

    handleMouseover() {
      clearInterval(this.interval);
    },

    handleMouseout() {
      this.setInterval();
    },

    handleClose() {
      this.copyVisible = false;
      this.resultStatus = false;
      this.moveSpace = 0;
      this.searchName = "";
      clearInterval(this.interval);
    },

    handleSearch() {
      this.resultStatus = true;
      const _items = [...this.routers];
      const _name = this.searchName.toLowerCase();

      this.resultList = _items.filter(item => {
        return item.name.toLowerCase().indexOf(_name) > -1;
      });
    }
  },

  watch: {
    visible(val) {
      this.copyVisible = val;
      if (val) {
        this.setInterval();
      }
    },

    copyVisible(val) {
      this.$emit("update:visible", this.copyVisible);
      this.$nextTick(() => {
        if (val) {
          const node = document.querySelector("#app");
          node.appendChild(this.$refs.searchWrap);
        }
      });
    }
  },

  components: {
    searchResult,
    "tj-logo": logo
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>