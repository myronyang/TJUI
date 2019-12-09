## RecycleList 滚动列表

可回收的滚动列表，始终将 DOM 的数量控制在一个很低的范围。

### 注意事项

- 首先要实现无限滚动，必须保证要有一个固定高度的父容器元素包裹组件。

- 需要将未加载的图片用样式固定住避免高度计算错误。

- 内部的实现依赖 Promise，所以你需要引入 Promise polyfill 来做兼容。

### 基本用法

<div class="demo-block mt_15" style="height: 400px">
<tj-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
  <template slot="item" slot-scope="{ data }">
    <tj-row flex class="mt_15" :gutter="15" @click="handleClick(data)">
      <tj-col width="48px">
        <img width="100%" :src="data.avatar">
      </tj-col>
      <tj-col class="bubble">
        <p>{{ data.msg }}</p>
        <div class="meta">
          <time class="posted-date">{{ data.time }}</time>
        </div>
      </tj-col>
    </tj-row>
  </template>
</tj-recycle-list>

<script>
export default {
  data() {
    return {
      size: 50,
      offset: 100
    }
  },
  methods: {
    onFetch() {
      let items = []
      return new Promise((resolve) => {
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 50; i++) {
            items.push({
              id: i,
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
              msg: 'name' + i,
              time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
            })
          }
          resolve(items)
        }, 1000)
      })
    },
    handleClick(data) {
      console.log('Item:' + data)
    }
  }
}
</script>
</div>

::: demo
```html
<tj-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
  <template slot="item" slot-scope="{ data }">
    <tj-row flex class="mt_15" :gutter="15" @click="handleClick(data)">
      <tj-col width="48px">
        <img width="100%" :src="data.avatar">
      </tj-col>
      <tj-col class="bubble">
        <p>{{ data.msg }}</p>
        <div class="meta">
          <time class="posted-date">{{ data.time }}</time>
        </div>
      </tj-col>
    </tj-row>
  </template>
</tj-recycle-list>

<script>
export default {
  data() {
    return {
      size: 50,
      offset: 100
    }
  },
  methods: {
    onFetch() {
      let items = []
      return new Promise((resolve) => {
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 50; i++) {
            items.push({
              id: i,
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
              msg: 'name' + i,
              time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
            })
          }
          resolve(items)
        }, 1000)
      })
    },
    handleClick(data) {
      console.log('Item:' + data)
    }
  }
}
</script>
```
:::

### Props
<div class="demo-block table-wrap">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| infinite | 是否无限滚动模式 | boolean | | false |
| size | 一次加载的数据量 | number | | 20 |
| offset | 底部拉取更多数据的距离 | number | | 200 |
| onFetch | 获取更多数据 | function | 必传 | |

</div>

### Slots
<div class="demo-block table-wrap">

| 参数      | 说明          |
|---------- |-------------- |
| item | 列表某项的作用域插槽，通过此插槽实现想要的渲染视图 |
| noMore | 无更多数据的提示文案的具名插槽 |

<div>