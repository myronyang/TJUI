## Rate 评分

### 基础用法
<div class="demo-block">
  <div>
    <tj-rate v-model="rate"></tj-rate> 
    <span class="ml_10">评分 {{rate}}</span>
  </div>
  <div class="mt_10">
    <tj-rate v-model="rate1" :max="10"></tj-rate> 
    <span class="ml_10">评分 {{rate1}}</span>
  </div>

  <script>
    export default {
      data() {
        return {
          rate: 3,
          rate1: 3,
          rate2: 3,
        }
      }
    }
  </script>
</div>

::: demo
```html
<div>
  <tj-rate v-model="rate"></tj-rate> 
  <span class="ml_10">评分 {{rate}}</span>
</div>
<div class="mt_10">
  <tj-rate v-model="rate1" disabled :max="10"></tj-rate> 
  <span class="ml_10">评分 {{rate1}}</span>
</div>

<script>
  export default {
    data() {
      return {
        rate: 3,
        rate1: 3
      }
    }
  }
</script>
```
:::

### 禁用状态
<div class="demo-block">
  <tj-rate v-model="rate2" disabled></tj-rate> 
</div>

::: demo
```html
<tj-rate v-model="rate2" disabled></tj-rate> 
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 分数 | number | | 1 |
| disabled | 禁用 | boolean | | |
| max | 最大评分 | number | | 5 |
| size | 容器尺寸 | number | | 20 |

### Events
| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| change | 点击时触发 | rate: Number |
