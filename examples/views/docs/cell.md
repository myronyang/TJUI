## Cell 单元格

单元格，可用作展示列表信息、链接或者表单等。

<div class="demo-block bg_gray">
  <tj-cell title="首付比例" value="30%"></tj-cell>
  <tj-cell class="mt_10" icon="tj-weizhi" title="首付比例">
    <span class="green">总支出的30%</span>
  </tj-cell>
  <tj-cell class="mt_10" icon="tj-dianhua1" title="验证码">
    <tj-button size="mini" class="green">获取验证码</tj-button>
  </tj-cell>
</div>

::: demo
```html
<tj-cell title="首付比例" value="30%"></tj-cell>
<tj-cell class="mt_10" icon="tj-weizhi" title="首付比例">
  <span class="green">总支出的30%</span>
</tj-cell>
<tj-cell class="mt_10" icon="tj-dianhua1" title="验证码">
  <tj-button size="mini" class="green">获取验证码</tj-button>
</tj-cell>
```
:::


### Props
<div class="demo-block table-wrap">

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| icon | 图标iconfont | string | | |
| title | 标题 | string | | |
| value | 备注 | string/number | | |

</div>

### Slots
<div class="demo-block table-wrap">

| 参数      | 说明          |
|---------- |-------------- |
| default | 自定义备注 |

</div>