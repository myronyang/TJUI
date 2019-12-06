## Popup 弹出层

Popup 组件支持bottom、left、top、right、center五种位置，默认值为bottom。

### 基本用法

<div class="demo-block">
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible = true">bottom</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible1 = true">left</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible2 = true">top</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible3 = true">right</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible4 = true">center</tj-button>

<tj-popup position="bottom" v-model="visible">bottom content</tj-popup>
<tj-popup position="left" v-model="visible1">left content</tj-popup>
<tj-popup position="top" v-model="visible2">top content</tj-popup>
<tj-popup position="right" v-model="visible3"><p>right content</p><tj-button class="mt_15" size="large" round="3px" @click="visible3 = false">关闭</tj-button></tj-popup>
<tj-popup position="center" v-model="visible4" :modal-fade="false">center content</tj-popup>

<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
    }
  }
}
</script>
</div>

::: demo
```html
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible = true">bottom</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible1 = true">left</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible2 = true">top</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible3 = true">right</tj-button>
<tj-button plain size="small" round="3px" class="mr_10 mt_10" @click="visible4 = true">center</tj-button>

<tj-popup position="bottom" v-model="visible">bottom content</tj-popup>
<tj-popup position="left" v-model="visible1">left content</tj-popup>
<tj-popup position="top" v-model="visible2">top content</tj-popup>
<tj-popup position="right" v-model="visible3"><p>right content</p><tj-button class="mt_15" size="large" round="3px" @click="visible3 = false">关闭</tj-button></tj-popup>
<tj-popup position="top" v-model="visible4">center content</tj-popup>

<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
    }
  }
}
</script>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| modal | 是否显示遮罩层 | boolean | | false |
| closeOnClickModal | 是否可以通过点击 modal 层来关闭 popup | boolean | | true |
| position | popup 的位置 | number | bottom、left、top、right、center | bottom |