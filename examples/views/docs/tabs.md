## Tabs 标签页

### 基础用法

<div class="demo-block">
  <tj-tabs v-model="tabs" class="mt_10">
    <tj-tabs-item
      :name="i"
      :label="'tab' + i"
      v-for="(t, i) in 3"
      :key="i"
    >tab{{i}} content</tj-tabs-item>
  </tj-tabs>

  <script>
    export default {
      data() {
        return {
          tabs: 0,
          tabs2: 0,
          tabs3: 1,
        }
      }
    }
  </script>
</div>

::: demo
```html
<tj-tabs v-model="tabs" class="mt_10">
  <tj-tabs-item
    :name="i"
    :label="'tab' + i"
    v-for="(t, i) in 3"
    :key="i"
  >tab{{i}} content</tj-tabs-item>
</tj-tabs>

<script>
  export default {
    data() {
      return {
        tabs: 0,
      }
    }
  }
</script>
```
:::

### 横向滚动

标签按自身宽度浮动排列，超出部分横向滚动

<div class="demo-block">
  <tj-tabs v-model="tabs2" more class="mt_10">
    <tj-tabs-item
      :name="i"
      :label="'tab' + i"
      v-for="(t, i) in 3"
      :key="i"
    >tab{{i}} content</tj-tabs-item>
  </tj-tabs>
  <tj-tabs v-model="tabs3" more class="mt_10">
    <tj-tabs-item
      :name="i"
      :label="'tab' + i"
      v-for="(t, i) in 9"
      :key="i"
    >tab{{i}} content</tj-tabs-item>
  </tj-tabs>
</div>

::: demo
```html
<tj-tabs v-model="tabs2" more class="mt_10">
  <tj-tabs-item
    :name="i"
    :label="'tab' + i"
    v-for="(t, i) in 3"
    :key="i"
  >tab{{i}} content</tj-tabs-item>
</tj-tabs>
<tj-tabs v-model="tabs3" more class="mt_10">
  <tj-tabs-item
    :name="i"
    :label="'tab' + i"
    v-for="(t, i) in 9"
    :key="i"
  >tab{{i}} content</tj-tabs-item>
</tj-tabs>

<script>
  export default {
    data() {
      return {
        tabs2: 0,
        tabs3: 1,
      }
    }
  }
</script>
```
:::

### Tabs Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 绑定值，选中选项卡的 name | string | | |
| more | 是否浮动布局超出部分横向滚动 | boolean | | false |

</div>

### TabsItem Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| label | 选项卡标题 | string | | |
| name | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string | | |

</div>

### Tabs Events
<div class="demo-block table-wrap">

| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| tab-click | tab 被选中时触发 | tab: VueComponent, event |

</div>