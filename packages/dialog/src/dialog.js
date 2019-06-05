const CONFIRM_TEXT = '确定'
const CANCEL_TEXT = '取消'

const defaults = {
  title: '提示',
  message: '',
  type: '',
  showInput: false,
  showClose: true,
  modalFade: false,
  lockScroll: false,
  closeOnClickModal: true,
  inputValue: null,
  inputPlaceholder: '',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
  confirmButtonClass: '',
  cancelButtonClass: ''
}

import Vue from 'vue'
import dialogVue from './dialog.vue'

const merge = function (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i]
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

const dialogConstructor = Vue.extend(dialogVue)

let currentMsg, instance
const msgQueue = []

const defaultCallback = action => {
  if (currentMsg) {
    var callback = currentMsg.callback
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action)
      } else {
        callback(action)
      }
    }
    if (currentMsg.resolve) {
      var $type = currentMsg.options.$type
      if ($type === 'confirm' || $type === 'prompt') {
        if (action === 'confirm') {
          if (instance.showInput) {
            currentMsg.resolve({
              value: instance.inputValue,
              action
            })
          } else {
            currentMsg.resolve(action)
          }
        } else if (action === 'cancel' && currentMsg.reject) {
          currentMsg.reject(action)
        }
      } else {
        currentMsg.resolve(action)
      }
    }
  }
}

const initInstance = function () {
  instance = new dialogConstructor({
    el: document.createElement('div')
  })

  instance.callback = defaultCallback
}

const showNextMsg = function () {
  if (!instance) {
    initInstance()
  }

  if (!instance.value || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift()

      var options = currentMsg.options
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback
      }
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape'].forEach(prop => {
        if (instance[prop] === undefined) {
          instance[prop] = true
        }
      })
      document.body.appendChild(instance.$el)

      Vue.nextTick(() => {
        instance.value = true
      })
    }
  }
}

const Dialog = function (options, callback) {
  if (typeof options === 'string') {
    options = {
      title: options
    }
    if (arguments[1]) {
      options.message = arguments[1]
    }
    if (arguments[2]) {
      options.type = arguments[2]
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }

  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      msgQueue.push({
        options: merge({}, defaults, Dialog.defaults || {}, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      })

      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: merge({}, defaults, Dialog.defaults || {}, options),
      callback: callback
    })

    showNextMsg()
  }
}

Dialog.setDefaults = function (defaults) {
  Dialog.defaults = defaults
}

Dialog.alert = function (message, title, options) {
  if (typeof title === 'object') {
    options = title
    title = ''
  }
  return Dialog(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options))
}

Dialog.confirm = function (message, title, options) {
  if (typeof title === 'object') {
    options = title
    title = ''
  }
  return Dialog(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options))
}

Dialog.prompt = function (message, title, options) {
  if (typeof title === 'object') {
    options = title
    title = ''
  }
  return Dialog(merge({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt'
  }, options))
}

Dialog.close = function () {
  if (!instance) return
  instance.value = false
  msgQueue = []
  currentMsg = null
}

export default Dialog