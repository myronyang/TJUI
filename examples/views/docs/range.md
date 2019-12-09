## Range 滑块

体验demo请将浏览器调成手机浏览模式。

### 基础用法
<div class="demo-block mt_15">
<div v-for="item in cells" :title="item.title" :label="'value:' + item.value">
  <p>{{item.title}}：{{item.value}}</p>
  <tj-range v-model="item.value">
    <div class="mr_10" slot="start" v-if="item.start">{{ item.start }}</div>
    <div class="ml_10" slot="end" v-if="item.end">{{ item.end }}</div>
  </tj-range>
</div>

<script>
  export default {
    data() {
      return {
        cells: [
          {
            title: "默认",
            value: 0
          },
          {
            title: "预设 value",
            value: 20
          },
          {
            title: "左右文字",
            value: 0,
            start: "0",
            end: "100"
          }
        ],
        range: {
          title: "定义步长",
          value: 40,
          step: 10,
          barHeight: 10,
          max: 70,
          min: 30,
          start: "30",
          end: "70",
          showList: true
        },
        range2: 20
      }
    }
  }
</script>
</div>

::: demo
```html
<div v-for="item in cells" :title="item.title" :label="'value:' + item.value">
  <p>{{item.title}}：{{item.value}}</p>
  <tj-range v-model="item.value">
    <div class="mr_10" slot="start" v-if="item.start">{{ item.start }}</div>
    <div class="ml_10" slot="end" v-if="item.end">{{ item.end }}</div>
  </tj-range>
</div>

<script>
  export default {
    data() {
      return {
        cells: [
          {
            title: "默认",
            value: 0
          },
          {
            title: "预设 value",
            value: 20
          },
          {
            title: "左右文字",
            value: 0,
            start: "0",
            end: "100"
          }
        ]
      }
    }
  }
</script>
```
:::

### 步长范围
<div class="demo-block mt_15">
<tj-range
  v-model="range.value"
  showList
  :min="range.min || 0"
  :max="range.max || 100"
  :step="range.step || 1"
  :bar-height="range.barHeight || 1"
  :disabled="range.disabled"
>
  <div class="mr_10" slot="start" v-if="range.start">{{ range.start }}</div>
  <div class="ml_10" slot="end" v-if="range.end">{{ range.end }}</div>
</tj-range>
</div>

::: demo
```html
<tj-range
  v-model="range.value"
  showList
  :min="range.min || 0"
  :max="range.max || 100"
  :step="range.step || 1"
  :bar-height="range.barHeight || 1"
  :disabled="range.disabled"
>
  <div slot="start" v-if="range.start">{{ range.start }}</div>
  <div slot="end" v-if="range.end">{{ range.end }}</div>
</tj-range>

<script>
  export default {
    data() {
      return {
        range: {
          title: "定义步长",
          value: 40,
          step: 10,
          barHeight: 10,
          max: 70,
          min: 30,
          start: "30",
          end: "70",
          showList: true
        }
      }
    }
  }
</script>
```
:::

### 禁用
<div class="demo-block mt_15">
<tj-range v-model="range2" disabled></tj-range>
</div>

::: demo
```html
<tj-range v-model="range2" disabled></tj-range>
<script>
  export default {
    data() {
      return {
        range2: 20
      }
    }
  }
</script>
```
:::

### Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 绑定值 | number | | 0 |
| disabled | 禁用 | boolean | | false |
| min | 最小值 | number | | 0 |
| max | 最大值 | number | | 100 |
| step | 步长 | number | | 1 |
| barHeight | 容器高度 | number | | 2 |

</div>

### Slots
<div class="demo-block table-wrap">

| 参数 | 说明 |
| ----- | ----- |
| start | 开始文字 |
| end | 结束文字 |

</div>