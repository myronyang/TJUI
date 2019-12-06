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

所有的可按需引入的组件以及模块：

```
import {
  Row,
  Col,
  Button,
  Cell,
  Field,
  Switch,
  Rate,
  Swipe,
  SwipeItem,
  Loading,
  Checker,
  CheckerItem,
  Collapse,
  Progress,
  Upload,
  Range,
  Tabs,
  TabsItem,
  Header,
  Price,
  Panel,
  Popup,
  Checkbox,
  Select,
  RecycleList,
  Search,
} from 'taojinui'
```

