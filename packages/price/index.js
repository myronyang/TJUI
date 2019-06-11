import Price from './src/price'

Price.install = function (Vue) {
  Vue.component(Price.name, Price)
}

export default Price