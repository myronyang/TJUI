## Indicator 加载提示

Indicator 采用单例模式，即同一时间只会存在一个 Indicator。

且当上一个Indicator 关闭时，另一个才会显示。

<div class="demo-block mt_15">
  <tj-button round="3px" @click="handle">默认</tj-button>
  <tj-button round="3px" class="ml_10" @click="handle2">文字</tj-button>

  <script>
    export default {
      methods: {
        handle() {
          this.$indicator.open();
          setTimeout(() => this.$indicator.close(), 2000);
        },
        handle2() {
          this.$indicator.open("加载中");
          setTimeout(() => this.$indicator.close(), 2000);
        }
      }
    }
  </script>
</div>

::: demo
```html
<tj-button round="3px" @click="handle">默认</tj-button>
<tj-button round="3px" class="ml_10" @click="handle2">文字</tj-button>

<script>
  export default {
    methods: {
      handle() {
        this.$indicator.open();
        setTimeout(() => this.$indicator.close(), 2000);
      },
      handle2() {
        this.$indicator.open("加载中");
        setTimeout(() => this.$indicator.close(), 2000);
      }
    }
  }
</script>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| text | 文本内容 | string | | |