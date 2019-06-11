## Checkbox 复选框

### 基本用法

<div class="demo-block">
<div>
  <tj-checkbox v-model="status">同意用户协议</tj-checkbox>
  <tj-checkbox class="ml_15" v-model="status" :size="20">{{status}}</tj-checkbox>
</div>
<div class="mt_15">
  <tj-checkbox shape="square" v-model="status2">同意用户协议</tj-checkbox>
  <tj-checkbox class="ml_15" shape="square" v-model="status2" :size="20">{{status}}</tj-checkbox>
</div>

<script>
export default {
  data() {
    return {
      status: false,
      status2: false,
      status3: true
    }
  }
}
</script>
</div>

::: demo
```html
<tj-checkbox v-model="status">同意用户协议</tj-checkbox>
<tj-checkbox class="ml_15" v-model="status" :size="20">{{status}}</tj-checkbox>
<tj-checkbox shape="square" v-model="status2">同意用户协议</tj-checkbox>
<tj-checkbox class="ml_15" shape="square" v-model="status2" :size="20">{{status}}</tj-checkbox>

<script>
export default {
  data() {
    return {
      status: false,
      status2: false
    }
  }
}
</script>
```
:::

<div class="demo-block">
<tj-checkbox v-model="status3" disabled>同意用户协议</tj-checkbox>
</div>

::: demo
```html
<tj-checkbox v-model="status3" disabled>同意用户协议</tj-checkbox>
```
:::


### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 显示状态 | boolean | | false |
| size | 容器尺寸 | number | | 14 |
| shape | 图标形状 | string |	circle，square | circle |
| disabled | 是否禁用 | boolean | | false |