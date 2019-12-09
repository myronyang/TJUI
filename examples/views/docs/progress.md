## Progress 进度条

### 基础用法
支持success、warninge、exception三种样式，默认为基本样式。
<div class="demo-block mt_15">
<tj-progress class="mt_10" :percentage="75"></tj-progress>
<tj-progress class="mt_10" :percentage="75" status="success"></tj-progress>
<tj-progress class="mt_10" :percentage="75" status="warning"></tj-progress>
<tj-progress class="mt_10" :percentage="75" status="exception"></tj-progress>
</div>

::: demo
```html
<tj-progress class="mt_10" :percentage="75"></tj-progress>
<tj-progress class="mt_10" :percentage="75" status="success"></tj-progress>
<tj-progress class="mt_10" :percentage="75" status="warning"></tj-progress>
<tj-progress class="mt_10" :percentage="75" status="exception"></tj-progress>
```
:::

### 环形进度条
支持line、circle两种状态，默认为line。在环形进度条中，还可以通过 width 属性来设置其大小。
<div class="demo-block mt_15">
<div  class="mb_10">
  <tj-progress type="circle" :percentage="75"></tj-progress>
</div>
<tj-progress class="mr_10" type="circle" :percentage="75" :width="80" status="success"></tj-progress>
<tj-progress class="mr_10" type="circle" :percentage="75" :width="65" status="warning"></tj-progress>
<tj-progress class="mr_10" type="circle" :percentage="75" :width="50" status="exception"></tj-progress>
</div>

::: demo
```html
<div  class="mb_10">
  <tj-progress type="circle" :percentage="75"></tj-progress>
</div>
<tj-progress class="mr_10" type="circle" :percentage="75" :width="80" status="success"></tj-progress>
<tj-progress class="mr_10" type="circle" :percentage="75" :width="65" status="warning"></tj-progress>
<tj-progress class="mr_10" type="circle" :percentage="75" :width="50" status="exception"></tj-progress>
```
:::


### 线条宽度
<div class="demo-block mt_15">
<tj-progress class="mt_10" :percentage="15" :stroke-width="10"></tj-progress>
<tj-progress class="mt_10" :percentage="35" status="success" :stroke-width="15"></tj-progress>
<tj-progress class="mt_10 mr_10" type="circle" :percentage="75" :width="80" :stroke-width="2"></tj-progress>
<tj-progress class="mt_10 mr_10" type="circle" :percentage="75" :width="80" status="success" :stroke-width="5"></tj-progress>
<tj-progress class="mt_10 mr_10" type="circle" :percentage="75" :width="80" status="warning" :stroke-width="10"></tj-progress>
</div>

::: demo
```html
<tj-progress class="mt_10" :percentage="15" :stroke-width="10"></tj-progress>
<tj-progress class="mt_10" :percentage="35" status="success" :stroke-width="15"></tj-progress>
<tj-progress class="mt_10 mr_10" type="circle" :percentage="75" :width="80" :stroke-width="2"></tj-progress>
<tj-progress class="mt_10 mr_10" type="circle" :percentage="75" :width="80" status="success" :stroke-width="5"></tj-progress>
<tj-progress class="mt_10 mr_10" type="circle" :percentage="75" :width="80" status="warning" :stroke-width="10"></tj-progress>
```
:::

### 内置文字
当type为line才有效，当为circle时文字隐藏。
<div class="demo-block mt_15">
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="15"></tj-progress>
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="30" status="success"></tj-progress>
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="45" status="warning"></tj-progress>
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="60" status="exception"></tj-progress>
</div>

::: demo
```html
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="15"></tj-progress>
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="30" status="success"></tj-progress>
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="45" status="warning"></tj-progress>
<tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="60" status="exception"></tj-progress>
```
:::

### Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| percentage | 百分比 | number | 0-100 | 0 |
| type | 进度条类型 | string | line，circle | line |
| stroke-width | 进度条的宽度 | number | | 3 |
| text-inside	 | 进度条显示文字内置 | boolean | | false |
| status | 进度条当前状态 | string | success，exception，warning | |
| width | 环形进度条画布宽度 | number | | 126 |
| show-text | 是否显示文字 | boolean | | true |

</div>