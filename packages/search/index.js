import Search from './src/search'

Search.install = function (Vue) {
  Vue.component(Search.name, Search)
}

export default Search
