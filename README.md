## TJUI

#### 官方地址 [http://tjui.glinsunai.com/#/](http://tjui.glinsunai.com/#/)

#### 中文文档 [http://tjui.glinsunai.com/#/docs/introduction](http://tjui.glinsunai.com/#/docs/introduction)

### 安装

使用vue-cli初始创建项目。

```
$ npm install taojinui --save
```

### 使用

```
import TJUI from 'taojinui'

import 'taojinui/packages/theme-chalk/lib/index.css'

Vue.use(TJUI)
```

### 按需引入

```
import {
  tj-button,
  tj-loading
} from 'taojinui'

Vue.use(tj-button)
Vue.use(tj-loading)

import 'taojinui/packages/theme-chalk/lib/button.css'
import 'taojinui/packages/theme-chalk/lib/loading.css'
```
