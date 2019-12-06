<template>
  <div class="serach-result">
    <div class="title">搜索结果</div>
    <ul class="result-lists" v-if="dataList[0] && dataList[0].length > 0">
      <li class="result-list" v-for="(item, index) in dataList[currentPage]" :key="index">
        <span @click="$parent.goDetailPage(item)">{{item.name}}</span>
      </li>
    </ul>
    <p class="not-searching" v-else>未搜索到相关内容</p>
    <div class="pagination" v-if="dataList.length > 1">
      <span class="iconfont glin-left1" @click="handlePagePrev"></span>
      <span
        class="item"
        :class="{'active': currentPage === index}"
        v-for="(item, index) in dataList"
        :key="index"
        @click="currentChange(index)"
      >{{index + 1}}</span>
      <span class="iconfont glin-right1" @click="handlePageNext"></span>
    </div>
  </div>
</template>

<script>
const PROPORTION = 6;
export default {
  props: {
    items: Array
  },

  data() {
    return {
      dataList: [],
      currentPage: 0
    };
  },

  methods: {
    setSliceArray() {
      let num = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (i % PROPORTION == 0 && i != 0) {
          this.dataList.push(this.items.slice(num, i));
          num = i;
        }
        if (i + 1 == this.items.length) {
          this.dataList.push(this.items.slice(num, i + 1));
        }
      }
    },

    currentChange(index) {
      this.currentPage = index;
    },

    handlePagePrev() {
      const { currentPage, dataList } = this;
      if (currentPage > 0) {
        this.currentPage--;
      }
    },

    handlePageNext() {
      const { currentPage, dataList } = this;
      if (currentPage < dataList.length  - 1) {
        this.currentPage++;
      }
    }
  },

  watch: {
    items(val) {
      this.dataList = [];
      this.currentPage = 0;
      this.setSliceArray();
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>