<template>
  <div class="tj-search-wrap">
    <div class="tj-searchbar">
      <div class="tj_search-inner">
        <i class="tj-icon tj-search"></i>
        <input
          ref="input"
          type="search"
          v-model="currentValue"
          :placeholder="placeholder"
          @click="visible = true"
        >
      </div>
      <a
        class="tj-searchbar-cancel"
        v-show="visible"
        @click="handleCancel"
        v-text="cancelText"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "tj-search",
  props: {
    value: String,
    placeholder: {
      default: "搜索"
    },
    cancelText: {
      default: "取消"
    },
    autofocus: Boolean
  },

  data() {
    return {
      visible: false,
      currentValue: ""
    };
  },

  mounted() {
    this.autofocus && this.$refs.input.focus();
  },

  methods: {
    handleCancel() {
      this.visible = false;
      this.currentValue = '';
      this.$emit("cancel");
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit("input", val);
      this.$emit("event-input");
    }
  }
};
</script>
