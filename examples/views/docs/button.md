## Button 按钮

### 按钮类型
支持default、primary、danger、success三种类型，默认为default。

<div class="demo-block">
  <tj-button class="mr_5">default</tj-button>
  <tj-button type="danger" class="mr_5">danger</tj-button>
  <tj-button type="success" class="mr_5">success</tj-button>
  <tj-button type="primary" class="mr_5">primary</tj-button>
<div>

::: demo
```html
<tj-button>default</tj-button>
<tj-button type="danger" plain>danger</tj-button>
<tj-button type="success" class="mr_5">success</tj-button>
<tj-button type="primary" plain>primary</tj-button>
```
:::

### 朴素按钮
<div class="demo-block">
  <tj-button plain>default</tj-button>
  <tj-button class="ml_5" type="danger" plain>danger</tj-button>
  <tj-button class="ml_5" type="success" plain>success</tj-button>
  <tj-button class="ml_5" type="primary" plain>primary</tj-button>
<div>

::: demo
```html
<tj-button>default</tj-button>
<tj-button type="danger" plain>danger</tj-button>
<tj-button type="success" plain>success</tj-button>
<tj-button type="primary" plain>primary</tj-button>
```
:::

### 按钮尺寸

支持mini、small、normal、middle、large五种种尺寸，默认为normal。

<div class="demo-block">
  <div>
    <tj-button size="mini" class="mr_5">mini</tj-button>
    <tj-button size="small" class="mr_5">small</tj-button>
    <tj-button size="normal" class="mr_5">normal</tj-button>
  </div>
  <div class="mt_10 mb_10 text_c">
    <tj-button size="middle" class="mr_5">middle</tj-button>
  </div>
  <tj-button size="large" class="mr_5">large</tj-button>
<div>

::: demo
```html
<div>
  <tj-button size="mini" class="mr_5">mini</tj-button>
  <tj-button size="small" class="mr_5">small</tj-button>
  <tj-button size="normal" class="mr_5">normal</tj-button>
</div>
<div class="mt_10 mb_10 text_c">
  <tj-button size="middle" class="mr_5">middle</tj-button>
</div>
<tj-button size="large" class="mr_5">large</tj-button>
```
:::

### 禁用圆角
<div class="demo-block">
  <tj-button class="mr_10" disabled round>default</tj-button>
  <tj-button class="mr_10" type="danger" disabled round="5px">danger</tj-button>
  <tj-button type="success" disabled round="5px" plain>success</tj-button>
<div>

::: demo
```html
<tj-button disabled>default</tj-button>
<tj-button type="danger" disabled>danger</tj-button>
<tj-button type="success" disabled round="5px" plain>success</tj-button>
```
:::

### Props
<div class="demo-block table-wrap">

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | 是否禁用 | boolean |  | false |
| round | 按钮圆角 | boolean, string | 自定义 | 3px |
| type | 类型 | string | default, primary, danger, success| default |
| size | 尺寸 | string | mini, small, normal, middle, large | normal |
| plain | 是否朴素按钮 | boolean | | false |

</div>