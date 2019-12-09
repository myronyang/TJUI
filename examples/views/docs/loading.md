## Loading 加载动画

单独或配合其他组件（LoadMore, Indicator）使用。

### 加载尺寸

<div class="demo-block mt_15 mb_15">
  <tj-loading :size="18"></tj-loading>
  <tj-loading class="ml_15"></tj-loading>
  <tj-loading class="ml_15" :size="32"></tj-loading>
</div>

::: demo
```html
<tj-loading :size="18"></tj-loading>
<tj-loading class="ml_15"></tj-loading>
<tj-loading class="ml_15" :size="32"></tj-loading>
```
:::

### 加载类型

<div class="demo-block mt_15 mb_15">
  <tj-loading :size="18" type="circular"></tj-loading>
  <tj-loading class="ml_15" type="circular"></tj-loading>
  <tj-loading class="ml_15" color="#9c27b0" :size="32" type="circular"></tj-loading>
</div>

::: demo
```html
<tj-loading :size="18" type="circular"></tj-loading>
<tj-loading class="ml_15" type="circular"></tj-loading>
<tj-loading class="ml_15" color="#9c27b0" :size="32" type="circular"></tj-loading>
```
:::

### 加载文字

<div class="demo-block mt_15 mb_15">
  <tj-loading type="circular" color="#9c27b0">加载中</tj-loading>
  <tj-loading class="ml_15" color="#9c27b0">加载中</tj-loading>
</div>

::: demo
```html
<tj-loading type="circular">加载中</tj-loading>
<tj-loading class="ml_15">加载中</tj-loading>
```
:::


### Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| size | 容器尺寸 | number | | 24 |
| color | 颜色 | string | | |
| type | 图标类型 | string | spinner, circular | spinner |

</div>