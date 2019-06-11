# Checker 选择器

Checker 是更加灵活的选择组件，可以自定义需要的布局样式。

### 基础用法
<div class="demo-block mt_15">
<p class="mb_10">已选择: {{checker}}</p>
<tj-checker v-model="checker" :gutter="20">
  <tj-checker-item :label="1">备选项</tj-checker-item>
  <tj-checker-item :label="2">备选项</tj-checker-item>
  <tj-checker-item :label="3">备选项</tj-checker-item>
</tj-checker>

<script>
export default {
  data() {
    return {
      checker: 1,
      checker2: [],
      checker3: 2
    }
  }
}
</script>
</div>

::: demo
```html
<tj-checker v-model="checker" :gutter="20">
  <tj-checker-item :label="1">备选项</tj-checker-item>
  <tj-checker-item :label="2">备选项</tj-checker-item>
  <tj-checker-item :label="3">备选项</tj-checker-item>
</tj-checker>

<script>
export default {
  data() {
    return {
      checker: 1,
      checker2: [],
      checker3: 2
    }
  }
}
</script>
```
:::

### 选项类型

可选择多选，单选两种类型。

<div class="demo-block">
  <p class="mb_10">已选择: {{checker2}}</p>
  <tj-checker v-model="checker2" type="checkbox" :gutter="20">
    <tj-checker-item :label="1">备选项</tj-checker-item>
    <tj-checker-item :label="2">备选项</tj-checker-item>
    <tj-checker-item :label="3">备选项</tj-checker-item>
  </tj-checker>
</div>

::: demo
```html
<tj-checker v-model="checker2" type="checkbox" :gutter="20">
  <tj-checker-item :label="1">备选项</tj-checker-item>
  <tj-checker-item :label="2">备选项</tj-checker-item>
  <tj-checker-item :label="3">备选项</tj-checker-item>
</tj-checker>
```
:::

### 选项尺寸

支持small, normal, large三种尺寸，默认为normal。

<div class="demo-block mt_15">
  <p class="mb_10">已选择: {{checker3}}</p>
  <tj-checker v-model="checker3" :gutter="10" size="small" round="25px">
    <tj-checker-item :label="1">备选项</tj-checker-item>
    <tj-checker-item :label="2">备选项</tj-checker-item>
    <tj-checker-item :label="3">备选项</tj-checker-item>
    <tj-checker-item :label="4">备选项</tj-checker-item>
    <tj-checker-item :label="5">备选项</tj-checker-item>
  </tj-checker>
  <tj-checker class="mt_10" v-model="checker3" :gutter="10" size="large" round="25px">
    <tj-checker-item :label="1">备选项</tj-checker-item>
    <tj-checker-item :label="2">备选项</tj-checker-item>
    <tj-checker-item :label="3">备选项</tj-checker-item>
  </tj-checker>
</div>

::: demo
```html
<tj-checker v-model="checker3" :gutter="10" size="small" round="25px">
  <tj-checker-item :label="1">备选项</tj-checker-item>
  <tj-checker-item :label="2">备选项</tj-checker-item>
  <tj-checker-item :label="3">备选项</tj-checker-item>
  <tj-checker-item :label="4">备选项</tj-checker-item>
  <tj-checker-item :label="5">备选项</tj-checker-item>
</tj-checker>
```
:::

### Checker Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 选中的label值 | string, number | | |
| gutter | 间距 | number | | |
| round | 圆角 | boolean, number | | 3px |
| disabled | 是否禁用 | boolean | | true |
| type | 选择类型 | string | radio, checkbox | radio |
| size | 尺寸 | string | small, normal, large | normal |

### CheckerItem Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| label | 选选传出值 | number, string, object | | |