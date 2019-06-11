## Search 搜索框

### 基本用法

search 事件在用户点击键盘上的 搜索/回车 按钮触发。

- Tips: 在 van-search 外层增加 form 标签，并且 action 不为空，即可在 IOS 弹出的输入法中显示搜索按钮


<div class="demo-block mt_15">
<form action="/">
  <tj-search v-model="searchName" @keyup.enter.native="search"></tj-search>
</form>

<script>
export default {
  data() {
    return {
      searchName: ""
    }
  },
  methods: {
    search() {
      this.$toast(this.searchName);
    }
  }
}
</script>
</div>

::: demo
```html
<form action="/">
  <tj-search v-model="searchName" @keyup.enter.native="search"></tj-search>
</form>

<script>
export default {
  data() {
    return {
      searchName: ""
    }
  },
  methods: {
    search() {
      this.$toast(this.searchName);
    }
  }
}
</script>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| v-model | 搜索结果绑定值 | string | | |
| cancel-text | 取消按钮文字 | string | | |
| placeholder | 搜索框占位内容 | string | | 搜索 |
| autofocus | 自动聚焦 | boolean | | false |

### Events
| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| cancel | 点击取消按钮触发 | |