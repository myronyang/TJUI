import Vue from 'vue'

const Indicator = Vue.extend(require('./indicator.vue').default)
let instance

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    instance.text = typeof options === 'string' ? options : options.text || ''
    instance.iconType = options.iconType || 'spinner'
    instance.spinnerType = options.spinnerType || 'snake'
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.visible = true
    })
  },

  close() {
    if (instance) {
      instance.visible = false
    }
  }
}
