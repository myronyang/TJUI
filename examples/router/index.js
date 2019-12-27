import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/views/index/index.vue')), 'index')
const docs = r => require.ensure([], () => r(require('@/views/docs/index.vue')), 'index')

// 开发指南
const introduction = r => require.ensure([], () => r(require('../views/docs/introduction.md')), 'introduction')
const quickstart = r => require.ensure([], () => r(require('../views/docs/quickstart.md')), 'quickstart')
const customTheme = r => require.ensure([], () => r(require('../views/docs/customTheme.md')), 'customTheme')

// 基础组件
const layout = r => require.ensure([], () => r(require('@/views/docs/layout.md')), 'layout')
const button = r => require.ensure([], () => r(require('@/views/docs/button.md')), 'button')
const cell = r => require.ensure([], () => r(require('@/views/docs/cell.md')), 'cell')
const popup = r => require.ensure([], () => r(require('@/views/docs/popup.md')), 'popup')

// 表单组件
const checkbox = r => require.ensure([], () => r(require('@/views/docs/checkbox.md')), 'checkbox')
const field = r => require.ensure([], () => r(require('@/views/docs/field.md')), 'field')
const Switch = r => require.ensure([], () => r(require('@/views/docs/switch.md')), 'switch')
const rate = r => require.ensure([], () => r(require('@/views/docs/rate.md')), 'rate')
const checker = r => require.ensure([], () => r(require('@/views/docs/checker.md')), 'checker')
const upload = r => require.ensure([], () => r(require('@/views/docs/upload.md')), 'upload')
const range = r => require.ensure([], () => r(require('@/views/docs/range.md')), 'range')
const select = r => require.ensure([], () => r(require('@/views/docs/select.md')), 'select')

// 展示组件
const swipe = r => require.ensure([], () => r(require('@/views/docs/swipe.md')), 'swipe')
const loading = r => require.ensure([], () => r(require('@/views/docs/loading.md')), 'loading')
const collapse = r => require.ensure([], () => r(require('@/views/docs/collapse.md')), 'collapse')
const progress = r => require.ensure([], () => r(require('@/views/docs/progress.md')), 'progress')
const price = r => require.ensure([], () => r(require('@/views/docs/price.md')), 'price')
const panel = r => require.ensure([], () => r(require('@/views/docs/panel.md')), 'panel')
const recycleList = r => require.ensure([], () => r(require('@/views/docs/recycleList.md')), 'recycleList')

// 反馈组件
const toast = r => require.ensure([], () => r(require('@/views/docs/toast.md')), 'toast')
const dialog = r => require.ensure([], () => r(require('@/views/docs/dialog.md')), 'dialog')
const indicator = r => require.ensure([], () => r(require('@/views/docs/indicator.md')), 'indicator')

// 导航组件
const tabs = r => require.ensure([], () => r(require('@/views/docs/tabs.md')), 'tabs')
const header = r => require.ensure([], () => r(require('@/views/docs/header.md')), 'header')
const search = r => require.ensure([], () => r(require('@/views/docs/search.md')), 'search')

export default new Router({
  routes: [
    {
      path: '/',
      label: '首页',
      name: '首页',
      component: index
    },
    {
      path: '/docs',
      label: '文档',
      name: '文档',
      component: docs,
      children: [
        // 开发指南
        {
          path: 'introduction',
          label: '开发指南',
          name: 'TJUI介绍',
          component: introduction
        },
        // 开发指南
        {
          path: 'quickstart',
          label: '开发指南',
          name: '快速上手',
          component: quickstart
        },
        // 自定义主题
        {
          path: 'customTheme',
          label: '开发指南',
          name: '自定义主题',
          component: customTheme
        },
        // 基础组件
        {
          path: 'layout',
          label: '基础组件',
          name: 'Layout 布局',
          component: layout
        },
        {
          path: 'button',
          label: '基础组件',
          name: 'Button 按钮',
          component: button
        },
        {
          path: 'cell',
          label: '基础组件',
          name: 'Cell 单元格',
          component: cell
        },
        {
          path: 'popup',
          label: '基础组件',
          name: 'Popup 弹出层',
          component: popup
        },
        // 表单组件
        {
          path: 'checkbox',
          label: '表单组件',
          name: 'Checkbox 复选框',
          component: checkbox
        },
        {
          path: 'field',
          label: '表单组件',
          name: 'Field 输入框',
          component: field
        },
        {
          path: 'switch',
          label: '表单组件',
          name: 'Switch 开关',
          component: Switch
        },
        {
          path: 'rate',
          label: '表单组件',
          name: 'Rate 评分',
          component: rate
        },
        {
          path: 'checker',
          label: '表单组件',
          name: 'Checker 选择器',
          component: checker
        },
        {
          path: 'upload',
          label: '表单组件',
          name: 'Upload 上传图片',
          component: upload
        },
        {
          path: 'range',
          label: '表单组件',
          name: 'Range 滑块',
          component: range
        },
        {
          path: 'select',
          label: '表单组件',
          name: 'Select 选择器',
          component: select
        },
        // 展示组件
        {
          path: 'swipe',
          label: '展示组件',
          name: 'Swipe 轮播',
          component: swipe
        },
        {
          path: 'loading',
          label: '展示组件',
          name: 'Loading 加载动画',
          component: loading
        },
        {
          path: 'collapse',
          label: '展示组件',
          name: 'Collapse 折叠面板',
          component: collapse
        },
        {
          path: 'progress',
          label: '展示组件',
          name: 'Progress 进度条',
          component: progress
        },
        {
          path: 'price',
          label: '展示组件',
          name: 'Price 价格',
          component: price
        },
        {
          path: 'panel',
          label: '展示组件',
          name: 'Panel 面板',
          component: panel
        },
        {
          path: 'recycleList',
          label: '展示组件',
          name: 'RecycleList 滚动列表',
          component: recycleList
        },
        // 反馈组件
        {
          path: 'toast',
          label: '反馈组件',
          name: 'Toast 轻提示',
          component: toast
        },
        {
          path: 'dialog',
          label: '反馈组件',
          name: 'Dialog 弹出框',
          component: dialog
        },
        {
          path: 'indicator',
          label: '反馈组件',
          name: 'Indicator 加载提示',
          component: indicator
        },
        // 导航组件
        {
          path: 'tabs',
          label: '导航组件',
          name: 'Tabs 标签页',
          component: tabs
        },
        {
          path: 'header',
          label: '导航组件',
          name: 'Header 顶部导航栏',
          component: header
        },
        {
          path: 'search',
          label: '导航组件',
          name: 'Search 搜索框',
          component: search
        },
      ]
    }
  ]
})
