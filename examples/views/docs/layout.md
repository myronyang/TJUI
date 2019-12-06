## Layout布局

Layout tj-row和tj-col两个组件组合来进行行列布局。

::: demo
```js
import { Row, Col } from 'taojinui'
Vue.use(Row).use(Col)
```
:::

### 浮动布局
Layout 组件提供了12列栅格，通过在Col上添加span属性设置列所占的宽度百分比。

::: demo
```html
<tj-row>
  <tj-col :span="4">COL</tj-col>
  <tj-col :span="4">COL</tj-col>
  <tj-col :span="4">COL</tj-col>
  <tj-col :span="4">COL</tj-col>
  <tj-col :span="4">COL</tj-col>
</tj-row>
```
:::

### flex布局
将Layout设置为flex布局，自动平铺，且可定义单个col宽度。
<div class="demo-block">
  <tj-row flex :gutter="15">
    <tj-col style="background: #d3dce6">
      <div>COL</div>
      <div>COL</div>
    </tj-col>
    <tj-col style="background: #e5e9f2" vertical width="100px">COL</tj-col>
    <tj-col style="background: #d3dce6" align="center">COL</tj-col>
  </tj-row>
</div>

::: demo
```html
<tj-row flex :gutter="15">
  <tj-col>
    <div>COL</div>
    <div>COL</div>
  </tj-col>
  <tj-col vertical width="20px">COL</tj-col>
  <tj-col align="center">COL</tj-col>
</tj-row>
```
:::

### 垂直布局

<div class="demo-block">
  <tj-row column>
    <tj-col style="background: #d3dce6">
      <div>COL</div>
      <div>COL</div>
    </tj-col>
    <tj-col style="background: #e5e9f2" vertical width="100px">COL</tj-col>
    <tj-col style="background: #d3dce6" align="center">COL</tj-col>
  </tj-row>
</div>

::: demo
```html
<tj-row column>
  <tj-col>
    <div>COL</div>
    <div>COL</div>
  </tj-col>
  <tj-col vertical width="100px">COL</tj-col>
  <tj-col align="center">COL</tj-col>
</tj-row>
```
:::

### Row Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | | 0 |
| flex | 是否flex布局 | boolean | | false |
| column | 是否垂直布局 | boolean | | false |

### Col Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽度，当为flex布局时生效 | string | | |
| vertical | 是否垂直剧中 | boolean | | false |
| align | 水平浮动 | sting | left, center, right | false |
| to | vue路由跳转 | sting | | |