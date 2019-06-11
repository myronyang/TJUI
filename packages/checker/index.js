import Checker from './src/checker'

Checker.install = function (Vue) {
  Vue.component(Checker.name, Checker)
}

export default Checker