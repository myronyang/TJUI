## Header 顶部导航栏

### 基本用法

<div class="demo-block bg_gray">
  <tj-header title="header"></tj-header>
</div>

::: demo
```html
<tj-header title="header"></tj-header>
```
:::

### 样式设置
<div class="demo-block bg_gray">
  <tj-header title="title" color="#fff" background="#9c27b0"></tj-header>
</div>

::: demo
```html
<tj-header title="title" color="#fff" background="#9c27b0"></tj-header>
```
:::

### 插槽事件
<div class="demo-block bg_gray">
<tj-header title="title" :return-back="returnBack">
  <span slot="right" class="tj-icon tj-weizhi"></span>
</tj-header>

<script>
export default {
  methods: {
    returnBack() {
      this.$toast("点击返回");
    }
  }
}
</script>
</div>

::: demo
```html
<tj-header title="title" :return-back="returnBack">
  <span slot="right" class="tj-icon tj-weizhi"></span>
</tj-header>

<script>
export default {
  methods: {
    returnBack() {
      this.$toast("点击返回");
    }
  }
}
</script>
```
:::

<div class="demo-block table-wrap">

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| title | 标题名称 | string | | |
| color | 文字颜色 | string | | |
| background | 背景颜色 | string | | |
| fixed | 固定在页面顶部 | boolean | | false |
| return-back | 返回按钮事件 | function | | |

</div>