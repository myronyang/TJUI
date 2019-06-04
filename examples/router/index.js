import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 基础组件
const layout = r => require.ensure([], () => r(require('../docs/layout.md')), 'layout')
const button = r => require.ensure([], () => r(require('../docs/button.md')), 'button')
const cell = r => require.ensure([], () => r(require('../docs/cell.md')), 'cell') 

// 表单组件
const field = r => require.ensure([], () => r(require('../docs/field.md')), 'field')
const Switch = r => require.ensure([], () => r(require('../docs/switch.md')), 'switch')
const rate = r => require.ensure([], () => r(require('../docs/rate.md')), 'rate')


export default new Router({
  routes: [
    // 基础组件
    {
      path: '/layout',
      label: '基础组件',
      name: 'Layout 布局',
      component: layout
    },
    {
      path: '/button',
      label: '基础组件',
      name: 'Button 按钮',
      component: button
    },
    {
      path: '/cell',
      label: '基础组件',
      name: 'Cell 单元格',
      component: cell
    },
    {
      path: '/popup',
      label: '基础组件',
      name: 'Popup 弹出层',
      component: layout
    }, 
    // 表单组件
    {
      path: '/checkbox',
      label: '表单组件',
      name: 'Checkbox 复选框',
      component: layout
    },
    {
      path: '/field',
      label: '表单组件',
      name: 'Field 输入框',
      component: field
    },
    {
      path: '/switch',
      label: '表单组件',
      name: 'Switch 输入框',
      component: Switch
    }, 
    {
      path: '/rate',
      label: '表单组件',
      name: 'Rate 评分',
      component: rate
    }
  ]
})
