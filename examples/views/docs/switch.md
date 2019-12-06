## Switch 开关

### 基础用法
<div class="demo-block">
  <tj-switch v-model="checked">{{checked}}</tj-switch>

  <script>
    export default {
      data() {
        return {
          checked: true,
          checked1: false
        }
      }
    }
  </script>
</div>

::: demo
```html
<tj-switch v-model="checked">开关</tj-switch>

<script>
  export default {
    data() {
      return {
        checked: true,
      }
    }
  }
</script>
```
:::

### 禁用状态
<div class="demo-block">
  <tj-switch v-model="checked1" disabled></tj-switch>
</div>

::: demo
```html
<tj-switch v-model="checked1" disabled></tj-switch>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 绑定值 | Boolean | | |
| disabled | 禁用 | Boolean | | |
| color | 颜色 | string | | |

### Events
| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| change | 切换时触发 | checked: Boolean |

### Slots
| 参数 | 说明 |
| ----- | ----- |
| value | 显示的 HTML 内容 |