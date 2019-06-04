## field 输入框
表单编辑器，input输入框type属性事件都可使用。

<div class="demo-block bg_gray">
  <tj-field class="bd_b_1" title="用户名称" v-model="name" placeholder="请输入用户名称"></tj-field>
  <tj-field class="bd_b_1" title="电话" type="number" v-model="pnone" placeholder="请输入电话"></tj-field>
  <tj-field class="bd_b_1" title="密码" type="password" v-model="password" placeholder="请输入密码"></tj-field>
  <tj-field class="bd_b_1" title="描述" type="textarea" v-model="desc" rows="3" placeholder="请输入描述"></tj-field>
  <tj-field class="bd_b_1" 
    label-width="100px" 
    must title="验证码" 
    v-model="code" 
    icon="tj-weizhi" 
    placeholder="请输入验证码">
    <tj-button class="mr_10" plain round size="small">获取验证码</tj-button>
  </tj-field>
  <tj-field class="mt_10 bd_b_1" v-model="desc" placeholder="请输入描述"></tj-field>

  <script>
    export default {
      data() {
        return {
          name: "",
          pnone: "",
          password: "",
          code: "",
          desc: "",
        }
      }
    }
  </script>
</div>

::: demo
```html
<tj-field class="bd_b_1" title="用户名称" v-model="name" placeholder="请输入用户名称"></tj-field>
<tj-field class="bd_b_1" title="电话" type="number" v-model="pnone" placeholder="请输入电话"></tj-field>
<tj-field class="bd_b_1" title="密码" type="password" v-model="password" placeholder="请输入密码"></tj-field>
<tj-field class="bd_b_1" title="描述" type="textarea" v-model="desc" rows="3" placeholder="请输入描述"></tj-field>
<tj-field class="bd_b_1" 
  label-width="100px" 
  must title="验证码" 
  v-model="code" 
  icon="tj-weizhi" 
  placeholder="请输入验证码">
  <tj-button class="mr_10" plain round size="small">获取验证码</tj-button>
</tj-field>
<tj-field class="mt_10 bd_b_1" v-model="desc" placeholder="请输入描述"></tj-field>

<script>
  export default {
    data() {
      return {
        name: "",
        pnone: "",
        password: "",
        code: "",
        desc: "",
      }
    }
  }
</script>
```
:::


### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| value | 绑定表单输入值 | string | | |
| title | 标签名称 | string | | |
| labelWidth | 标签宽度 | string | | 70px |
| icon | 图标 | string | | |
| rows | 类型为 textarea 时可指定高度（显示行数） | string | | |
| placeholder | 占位内容 | string | | |
| type | 输入框类型 | string | text, number, email, url, password, textarea | text |
| disabled | 是否禁用 | boolean | | |

### Events
| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| change | change事件 | event |
| blur | blur事件 | event |
| input | input事件 | event |

### Slots
| 参数 | 说明 |
| ----- | ----- |
| value | 显示的 HTML 内容 |