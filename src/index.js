import Row from '../packages/row/index';
import Col from '../packages/col/index'
import Button from '../packages/button/index'
import Cell from '../packages/cell/index'
import Field from '../packages/field/index'
import Switch from '../packages/switch/index'
import Rate from '../packages/rate/index'

const components = [
  Row,
  Col,
  Button,
  Cell,
  Field,
  Switch,
  Rate,
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

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
};