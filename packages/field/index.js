import Field from './src/field'

Field.install = function (Vue) {
  Vue.component(Field.name, Field)
}

export default Field