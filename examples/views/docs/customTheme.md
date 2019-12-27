## 自定义主题

### 主题文件

Tjui 的 theme-chalk 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Tjui 的样式变量。新建一个样式文件，例如 theme.scss，写入以下内容：

::: demo
```scss
/* color vars */
/* basic */
$color-default: #21c90b;
$color-regular-blue: #4a4c5b;
$color-background: #f7f7f7;
$color-white: #fff;
$color-black: #000;

/* gray */
$color-dark-grey: #333;
$color-grey: #666;
$color-light-grey: #999;
$color-light-grey-s: #ccc;
$color-light-grey-ss: #eee;
$color-light-grey-sss: #fcfcfc;
$color-active-grey: #e8e8e8;
$color-dark-grey-opacity: rgba(74, 76, 91, 0.8);
$color-grey-opacity: rgba(36, 20, 20, 0.5);
$color-light-grey-opacity: rgba(0, 0, 0, .04);

/* other color */
$color-green: #07c160;
$color-blue: #1989fa;
$color-yellow: #e6a23c;
$color-red: #f44;

/* row line */
$color-row-line: #ebebeb;

/* column line */
$color-col-line: #f5f5f5;

/* space */
$space-base: 5;
$unit-base: px;

@import "taojinui/packages/theme-chalk/src/index.scss";

```
:::

之后，在项目的入口文件中，直接引入以上样式文件即可(无需引入 Tjui 编译好的 CSS 文件):

::: demo
```js
import Vue from 'vue'
import Tjui from 'taojinui'
import './theme.scss'

Vue.use(Tjui)
```
:::