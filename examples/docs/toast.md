## Toast 轻提示
Toast 组件会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。

### 基础用法
<div class="demo-block">
  <tj-button round="3px" @click="handleTip">文字提示</tj-button>
  <tj-button class="ml_10" @click="handleLongTip" round="3px">长文字提示</tj-button>

  <script>
    export default {
      methods: {
        handleTip() {
          this.$toast('文字提示')
        },
        handleLongTip() {
          this.$toast('这是一条长文字提示，超过一定字数就会换行')
        },
        handleToast() {
          this.$toast({
            message: '操作成功',
            iconClass: 'tj-icon tj-success_no_circle'
          })
        },
        handleToast2() {
          this.$toast({
            message: '这是一条长文字提示，超过一定字数就会换行',
            position: 'bottom'
          })
        },
      }
    }
  </script>
</div>

::: demo
```html
  <tj-button round="3px" @click="handleTip">文字提示</tj-button>
  <tj-button class="ml_10" @click="handleLongTip" round="3px">长文字提示</tj-button>

  <script>
    export default {
      methods: {
        handleTip() {
          this.$toast('文字提示')
        },
        handleLongTip() {
          this.$toast('这是一条长文字提示，超过一定字数就会换行')
        }
      }
    }
  </script>
```
:::

### 参数传递
<div class="demo-block">
  <tj-button round="3px" @click="handleToast">文字提示</tj-button>
  <tj-button class="ml_10" @click="handleToast2" round="3px">长文字提示</tj-button>
</div>

::: demo
```html
<tj-button round="3px" @click="handleToast">文字提示</tj-button>
<tj-button class="ml_10" @click="handleToast2" round="3px">长文字提示</tj-button>

<script>
  export default {
    methods: {
      handleToast() {
        this.$toast({
          message: '操作成功',
          iconClass: 'tj-icon tj-success_no_circle'
        })
      },
      handleToast2() {
        this.$toast({
          message: '这是一条长文字提示，超过一定字数就会换行',
          position: 'bottom'
        })
      },
    }
  }
</script>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| message | 文本内容 | string | | |
| position | 位置 | string | top, bottom, middle | middle |
| duration | 持续时间（毫秒），若为 -1 则不会自动关闭 | number | | 3000 |
| className | 给容器添加的类名 | string | | |
| iconClass | icon 图标的类名	 | string | | |