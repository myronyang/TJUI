import Panel from './src/panel'

Panel.install = function (Vue) {
  Vue.component(Panel.name, Panel)
}

export default Panel