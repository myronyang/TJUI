import Popup from './src/popup'

Popup.install = function (Vue) {
  Vue.component(Popup.name, Popup)
}

export default Popup