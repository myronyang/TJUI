import Cell from './src/cell'

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

export default Cell