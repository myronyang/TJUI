## Collapse 折叠面板

### 基础用法
<div class="demo-block bg_gray mt_15">
<tj-collapse title="车辆订单" v-model="collapse">
  <tj-row flex v-for="(t, i) in 4" :key="i">
    <tj-col>订单号</tj-col>
    <tj-col align="right" class="gray">12312312413</tj-col>
  </tj-row>
</tj-collapse>

<script>
export default {
  data() {
    return {
      collapse: true,
    }
  }
}
</script>
</div>

::: demo
```html
<tj-collapse title="车辆订单" v-model="collapse">
  <tj-row flex v-for="(t, i) in 4" :key="i">
    <tj-col>订单号</tj-col>
    <tj-col align="right" class="gray">12312312413</tj-col>
  </tj-row>
</tj-collapse>

<script>
export default {
  data() {
    return {
      collapse: true,
    }
  }
}
</script>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 当前激活的面板 | boolean | | true |
| title | 标题名称 | string | | |

### Events
| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| change | 折叠状态更改的时候触发 | |

