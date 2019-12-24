## 快速上手

### 安装

使用vue-cli初始创建项目。

::: demo
```js
$ npm install taojinui --save
```
:::

### 脚手架

<!-- 如果你正在使用新版本的 Vue CLI vue-cli@3，那么推荐你直接使用 [vue-cli-plugin-tjui](https://github.com/myronyang/vue-cli-plugin-tjui) 插件。 -->
如果你打算用在一个新项目中使用 Tjui，可以通过我们提供的一套基于 vue-cli 实现的脚手架模板去初始化 Tjui 项目的配置和基础代码，这样你就可以忽略安装步骤，直接看使用部分。

::: demo
```js
$ vue init myronyang/vue-cli-plugin-tjui projectname
```
:::

<font color=#999 class=mt_15 style='display: block'>默认scss, 提供样式初始化、常用样式class、 minxin、变量。</font>

<font color=#999>提供axios封装，具体配置参见模板。</font>

关于模板始化时特殊的配置项，请参考 [vue-cli-plugin-tjui](https://github.com/myronyang/vue-cli-plugin-tjui)。

### 使用

::: demo
```js
import Tjui from 'taojinui'

import 'taojinui/packages/theme-chalk/lib/index.css'

Vue.use(Tjui)
```
:::

### 按需引入

::: demo
```js
import {
  Button,
  Loading
} from 'taojinui'

Vue.use(Button)
Vue.use(Loading)

import 'taojinui/packages/theme-chalk/lib/button.css'
import 'taojinui/packages/theme-chalk/lib/loading.css'
```
:::