## 快速上手

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
  Button,
  Loading
} from 'taojinui'

Vue.use(Button)
Vue.use(Loading)

import 'taojinui/packages/theme-chalk/lib/button.css'
import 'taojinui/packages/theme-chalk/lib/loading.css'
```