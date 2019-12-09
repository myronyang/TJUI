## Panel 面板

Panel 组件支持dark、light、plain三种样式，默认为light。

## 基本用法

<div class="demo-block mt_15" :class="{'bg_gray': type==='light'}">
  <tj-panel round :type="type">
    <div class="f16 f_bold mb_10">title</div>
    <div>this is content this is content this is content this is content</div>
    <tj-row flex class="mt_10 text_c">
      <tj-col>
        <div class="f16 f_bold">9990</div>
        <div class="gray mt_10">首付</div>
      </tj-col>
      <tj-col>
        <div class="f16 f_bold">1234</div>
        <div class="gray mt_10">月供</div>
      </tj-col>
    </tj-row>
  </tj-panel>

  <tj-checker class="mt_15" v-model="type" :gutter="20">
    <tj-checker-item label="light">light</tj-checker-item>
    <tj-checker-item label="dark">dark</tj-checker-item>
    <tj-checker-item label="plain">plain</tj-checker-item>
  </tj-checker>

  <script>
  export default {
    data() {
      return {
        type: "light"
      }
    }
  }
  </script>
</div>

::: demo
```html
  <tj-panel round :type="type">
    <div class="f16 f_bold mb_10">title</div>
    <div>this is content this is content this is content this is content</div>
    <tj-row flex class="mt_10 text_c">
      <tj-col>
        <div class="f16 f_bold">9990</div>
        <div class="gray mt_10">首付</div>
      </tj-col>
      <tj-col>
        <div class="f16 f_bold">1234</div>
        <div class="gray mt_10">月供</div>
      </tj-col>
    </tj-row>
  </tj-panel>

  <tj-checker class="mt_15" v-model="type" :gutter="20">
    <tj-checker-item label="light">light</tj-checker-item>
    <tj-checker-item label="dark">dark</tj-checker-item>
    <tj-checker-item label="plain">plain</tj-checker-item>
  </tj-checker>

  <script>
  export default {
    data() {
      return {
        type: "light"
      }
    }
  }
  </script>
```
:::

## 样式设置

<div class="demo-block mt_15">
  <tj-panel type="plain" :padding="5" shadow :gutter="10">
    <div class="f16 f_bold mb_10">title</div>
    <div>this is content this is content this is content this is content</div>
    <tj-row flex class="mt_10 text_c">
      <tj-col>
        <div class="f16 f_bold">9990</div>
        <div class="gray mt_10">首付</div>
      </tj-col>
      <tj-col>
        <div class="f16 f_bold">1234</div>
        <div class="gray mt_10">月供</div>
      </tj-col>
    </tj-row>
  </tj-panel>
</div>

::: demo
```html
  <tj-panel type="plain" :padding="5" shadow>
    <div class="f16 f_bold mb_10">title</div>
    <div>this is content this is content this is content this is content</div>
    <tj-row flex class="mt_10 text_c">
      <tj-col>
        <div class="f16 f_bold">9990</div>
        <div class="gray mt_10">首付</div>
      </tj-col>
      <tj-col>
        <div class="f16 f_bold">1234</div>
        <div class="gray mt_10">月供</div>
      </tj-col>
    </tj-row>
  </tj-panel>
```
:::

### Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| round | 是否显示圆角 | boolean | | false |
| shadow | 是否显示阴影 | boolean | | false |
| padding | 容器内间距 | number | | 15 |
| type | 容器样式 | string | dark、light、plain | light |
| gutter | 对外间距（margin） | number | | 0 |

</div>