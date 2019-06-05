## swipe 

轮播图，可自定义轮播时间间隔、动画时长等。

### 基础用法
<div class="demo-block" style="height:300px">
  <tj-swipe :auto="4000">
    <tj-swipe-item>
      <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" width="100%">
    </tj-swipe-item>
    <tj-swipe-item>
      <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" width="100%">
    </tj-swipe-item>
    <tj-swipe-item>
      <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" width="100%">
    </tj-swipe-item>
  </tj-swipe>
</div>

::: demo
```html
<tj-swipe :auto="4000">
  <tj-swipe-item>
    <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" width="100%">
  </tj-swipe-item>
  <tj-swipe-item>
    <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" width="100%">
  </tj-swipe-item>
  <tj-swipe-item>
    <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" width="100%">
  </tj-swipe-item>
</tj-swipe>
```
:::

### 隐藏indicators
<div class="demo-block" style="height:200px">
  <tj-swipe :show-indicators="false">
    <tj-swipe-item style="background: #9c27b0">1
    </tj-swipe-item>
    <tj-swipe-item style="background: #0089dc">2
    </tj-swipe-item>
    <tj-swipe-item style="background: #ffd705">3
    </tj-swipe-item>
  </tj-swipe>
</div>

::: demo
```html
<tj-swipe :show-indicators="false">
  <tj-swipe-item style="background: #9c27b0">1
  </tj-swipe-item>
  <tj-swipe-item style="background: #0089dc">2
  </tj-swipe-item>
  <tj-swipe-item style="background: #ffd705">3
  </tj-swipe-item>
</tj-swipe>
```
:::

### 取消自动播放
<div class="demo-block" style="height:200px">
  <tj-swipe :auto="0">
    <tj-swipe-item style="background: #9c27b0">1
    </tj-swipe-item>
    <tj-swipe-item style="background: #0089dc">2
    </tj-swipe-item>
    <tj-swipe-item style="background: #ffd705">3
    </tj-swipe-item>
  </tj-swipe>
</div>

::: demo
```html
<tj-swipe :auto="0">
  <tj-swipe-item style="background: #9c27b0">1
  </tj-swipe-item>
  <tj-swipe-item style="background: #0089dc">2
  </tj-swipe-item>
  <tj-swipe-item style="background: #ffd705">3
  </tj-swipe-item>
</tj-swipe>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| height | 容器高度 | string | | |
| auto | 自动播放的时间间隔（毫秒） | number | | 3000 |
| speed | 动画持时（毫秒） | number | | 300 |
| defaultIndex | 初始显示的轮播图的索引 | number | | 0 |
| continuous | 是否可以循环播放 | boolean | | true |
| showIndicators | 是否显示indicators | boolean | | true |

### Events
| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| change | 每一页轮播结束后触发 | index: Number |
| before | 上一页结束后触发 | index: Number |
| end | 下一页结束后触发 | index: Number |