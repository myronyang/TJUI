import Upload from './src/upload'

Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload)
}

export default Upload
