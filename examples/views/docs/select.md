## Select 选择器

### 基本用法

<div class="demo-block mt_15 mb_15">
<tj-button plain round="3px" size="small" @click="visible = true">选择{{value}}</tj-button>

<tj-select 
  title="默认" 
  v-model="value"
  :visible.sync="visible" 
  :options="options">
</tj-select>

<script>
export default {
  data() {
    return {
      visible: false,
      value: "选项3",
      options: ["选项1", "选项2", "选项3", "选项4", "选项5"],
      visible2: false,
      value2: 2,
      options2: [],
      visible3: false,
      value3: [],
      options3: []
    }
  },
  mounted() {
    for(var i = 0; i < 5; i++) {
      this.options2.push({
        id: i,
        name: "选项" + i
      })
      this.value3.push({
        id: i,
        name: "选项" + i
      })

      var children = []

      for(var j = 0; j < 5; j++) {

        var childrens = []
        for(var k = 0; k < 5; k++) {
          childrens.push({
            id: k,
            name: "第三列" + k
          })
        }

        children.push({
          id: j,
          name: "第二列" + j,
          children: childrens
        })
      }

      this.options3.push({
        id: i,
        name: "第一列" + i,
        children: children
      })
    }
  }
}
</script>
</div>

::: demo
```html
<tj-button plain round="3px" size="small" @click="visible = true">选择{{value}}</tj-button>

<tj-select 
  title="默认" 
  v-model="value"
  :visible.sync="visible" 
  :options="options">
</tj-select>

<script>
export default {
  data() {
    return {
      visible: false,
      value: "选项3",
      options: ["选项1", "选项2", "选项3", "选项4", "选项5"],
      visible2: false,
      value2: 2,
      options2: [],
      visible3: false,
      value3: [],
      options3: []
    }
  },
  mounted() {
    for(var i = 0; i < 5; i++) {
      this.options2.push({
        id: i,
        name: "选项" + i
      })
      this.value3.push({
        id: i,
        name: "选项" + i
      })

      var children = []

      for(var j = 0; j < 5; j++) {

        var childrens = []
        for(var k = 0; k < 5; k++) {
          childrens.push({
            id: k,
            name: "第三列" + k
          })
        }

        children.push({
          id: j,
          name: "第二列" + j,
          children: childrens
        })
      }

      this.options3.push({
        id: i,
        name: "第一列" + i,
        children: children
      })
    }
  }
}
</script>
```
:::


### 选项对象

value-key 为对象中文字对应的 key。

select-key 为 v-model 中展示的 key，为空默认整个对象。

<div class="demo-block mt_15 mb_15">
<tj-button plain round="3px" size="small" @click="visible2 = true">选择{{value2}}</tj-button>
<tj-select 
  title="选项对象" 
  v-model="value2"
  :visible.sync="visible2" 
  value-key="name"
  select-key="id"
  :options="options2">
</tj-select>
</div>

::: demo
```html
<tj-select 
  title="选项对象" 
  v-model="value2"
  :visible.sync="visible2" 
  value-key="name"
  select-key="id"
  :options="options2">
</tj-select>
```
:::


### 多列联动

对象子集列表 key 需为 children。

<div class="demo-block mt_15 mb_15">
<tj-button plain round="3px" size="small" @click="visible3 = true">{{value3[0].name}}{{value3[1].name}}{{value3[2].name}}</tj-button>
<tj-select 
  title="多列联动" 
  v-model="value3"
  :visible.sync="visible3" 
  value-key="name"
  :item-count="3"
  :options="options3">
</tj-select>
</div>

::: demo
```html
<tj-select 
  title="多列联动" 
  v-model="value3"
  :visible.sync="visible3" 
  value-key="name"
  :item-count="3"
  :options="options3">
</tj-select>
```
:::

### Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| title | 标题 | string | | |
| v-model | 选中值 | | | |
| visible | 显示状态 | boolean | | false |
| options | 列表数组 | array | | |
| valueKey | 对象中文字对应的key | string | | |
| selectKey | 选中对象显示对应的key | string | | |
| itemCount | 显示的列数 | number | | 1 |

</div>

### Events
<div class="demo-block table-wrap">

| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| confirm | 点击确认触发 | |
| cancel | 点击取消触发 | |
| change | 滑动选项时触发 | picker, values |

</div>