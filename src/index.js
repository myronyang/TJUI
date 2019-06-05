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
import DialogVue from '../packages/dialog/src/dialog.vue'

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
  DialogVue
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
  DialogVue
}