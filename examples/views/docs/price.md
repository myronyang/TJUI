## Price 价格

Price 组件默认价格每三位隔开。

<div class="demo-block mt_15">
<tj-price :value="2300"></tj-price>
<tj-price class="ml_15" :value="2300" :size="22"></tj-price>
<tj-price class="ml_15" :value="233" :size="28" decimal></tj-price>
</div>

::: demo
```html
<tj-price :value="2300"></tj-price>
<tj-price class="ml_15" :value="2300" :size="22"></tj-price>
<tj-price class="ml_15" :value="233" :size="28" decimal></tj-price>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| size | 容器尺寸 | number | | 16 |
| decimal | 是否保留两位小数 | boolean | | false |