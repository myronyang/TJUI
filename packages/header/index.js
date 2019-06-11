import Header from './src/header'

Header.install = function (Vue) {
  Vue.component(Header.name, Header)
}

export default Header