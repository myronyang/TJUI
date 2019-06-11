import Row from '../packages/row/index'
import Col from '../packages/col/index'
import Button from '../packages/button/index'
import Cell from '../packages/cell/index'
import Field from '../packages/field/index'
import Switch from '../packages/switch/index'
import Rate from '../packages/rate/index'
import Swipe from '../packages/swipe/index'
import SwipeItem from '../packages/swipe-item/index'
import Loading from '../packages/loading/index'
import Toast from '../packages/toast/index'
import Indicator from '../packages/indicator/index'
import Dialog from '../packages/dialog/index'
import Checker from '../packages/checker/index'
import CheckerItem from '../packages/checker-item/index'
import Collapse from '../packages/collapse/index'
import Progress from '../packages/progress/index'
import Upload from '../packages/upload/index'
import Range from '../packages/range/index'
import Tabs from '../packages/tabs/index'
import TabsItem from '../packages/tabs-item/index'
import Header from '../packages/header/index'
import Price from '../packages/price/index'
import Panel from '../packages/panel/index'
import Popup from '../packages/popup/index'
import Checkbox from '../packages/checkbox/index'
import Select from '../packages/select/index'
import RecycleList from '../packages/recycle-list/index'
import Search from '../packages/search/index'

const components = [
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
]

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));

  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
  Vue.$dialog = Vue.prototype.$dialog = Dialog;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
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
}