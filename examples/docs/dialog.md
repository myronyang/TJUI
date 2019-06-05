## Dialog 弹出框

### 基础用法
<div class="demo-block mt_15">
  <tj-button round="3px" @click="handle">alert</tj-button>
  <tj-button round="3px" class="ml_10" @click="handle2">confirm</tj-button>
  <tj-button round="3px" class="ml_10" @click="handle3">prompt</tj-button>

  <script>
    export default {
      methods: {
        handle() {
          this.$dialog.alert('操作成功!', '提示');
        },
        handle2() {
          this.$dialog.confirm('确定执行此操作?', '提示').then(() => {
            console.log('已确认')
          }).catch(() => {
            console.log('已取消')
          });
        },
        handle3() {
          this.$dialog.prompt(' ', '请输入姓名').then(({ value }) => {
            if (value) {
              this.$dialog.alert(`你的名字是 ${ value }`, '输入成功');
            }
          });
        },
        handle4() {
          this.$dialog.confirm('', {
            title: '',
            message: '<div ref="html"><h3>title</h3><p>this a content</p></div>',
            modalFade: false,
            confirmButtonText: 'confirm',
            cancelButtonText: 'cancel',
          }).then(({ value }) => {
            if (value) {
              this.$dialog.alert(`你的名字是 ${ value }`, '输入成功');
            }
          });
        }
      }
    }
  </script>
</div>

::: demo
```html
  <tj-button round="3px" @click="handle">alert</tj-button>
  <tj-button round="3px" class="ml_10" @click="handle2">confirm</tj-button>
  <tj-button round="3px" class="ml_10" @click="handle3">prompt</tj-button>

  <script>
    export default {
      methods: {
        handle() {
          this.$dialog.alert('操作成功!', '提示');
        },
        handle2() {
          this.$dialog.confirm('确定执行此操作?', '提示').then(() => {
            console.log('已确认')
          }).catch(() => {
            console.log('已取消')
          });
        },
        handle3() {
          this.$dialog.prompt(' ', '请输入姓名').then(({ value }) => {
            if (value) {
              this.$dialog.alert(`你的名字是 ${ value }`, '输入成功');
            }
          });
        }
      }
    }
  </script>
```
:::

### 参数传递
<div class="demo-block mt_15">
  <tj-button round="3px" @click="handle4">参数传递</tj-button>
</div>

::: demo
```html
<div class="demo-block mt_15">
  <tj-button round="3px" @click="handle4">参数传递</tj-button>
</div>

<script>
  export default {
    methods: {
      handle4() {
        this.$dialog.confirm('', {
          title: '',
          message: '<div ref="html"><h3>title</h3><p>this a content</p></div>',
          modalFade: false,
          confirmButtonText: 'confirm',
          cancelButtonText: 'cancel',
        }).then(({ value }) => {
          if (value) {
            this.$dialog.alert(`你的名字是 ${ value }`, '输入成功');
          }
        });
      }
    }
  }
</script>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| title | 标题 | string | | |
| message | 文本内容 | string | | |
