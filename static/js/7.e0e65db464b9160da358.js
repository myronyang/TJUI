webpackJsonp([7],{"+rcy":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Select 选择器")]),s._v(" "),a("h3",[s._v("基本用法")]),s._v(" "),a("div",{staticClass:"demo-block mt_15 mb_15"},[a("tj-button",{attrs:{plain:"",round:"3px",size:"small"},on:{click:function(t){s.visible=!0}}},[s._v("选择"+s._s(s.value))]),s._v(" "),a("p",[a("tj-select",{attrs:{title:"默认",visible:s.visible,options:s.options},on:{"update:visible":function(t){s.visible=t}},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})],1)],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("tj-button",{attrs:{plain:"",round:"3px",size:"small"},on:{click:function(t){s.visible=!0}}},[s._v("选择"+s._s(s.value))]),s._v(" "),a("tj-select",{attrs:{title:"默认",visible:s.visible,options:s.options},on:{"update:visible":function(t){s.visible=t}},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("plain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("round")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3px"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible = true"')]),s._v(">")]),s._v("选择{{value}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-button")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-select")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"默认"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-select")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项3"')]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项1"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项2"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项3"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项4"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项5"')]),s._v("],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options2")]),s._v(": [],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible3")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value3")]),s._v(": [],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options3")]),s._v(": []\n    }\n  },\n  mounted() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("; i++) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".options2.push({\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": i,\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项"')]),s._v(" + i\n      })\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value3.push({\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": i,\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项"')]),s._v(" + i\n      })\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" children = []\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" j = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; j < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("; j++) {\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" childrens = []\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" k = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; k < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("; k++) {\n          childrens.push({\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": k,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"第三列"')]),s._v(" + k\n          })\n        }\n\n        children.push({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": j,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"第二列"')]),s._v(" + j,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": childrens\n        })\n      }\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".options3.push({\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": i,\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"第一列"')]),s._v(" + i,\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": children\n      })\n    }\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("选项对象")]),s._v(" "),a("p",[s._v("value-key 为对象中文字对应的 key。")]),s._v(" "),a("p",[s._v("select-key 为 v-model 中展示的 key，为空默认整个对象。")]),s._v(" "),a("div",{staticClass:"demo-block mt_15 mb_15"},[a("tj-button",{attrs:{plain:"",round:"3px",size:"small"},on:{click:function(t){s.visible2=!0}}},[s._v("选择"+s._s(s.value2))]),s._v(" "),a("tj-select",{attrs:{title:"选项对象",visible:s.visible2,"value-key":"name","select-key":"id",options:s.options2},on:{"update:visible":function(t){s.visible2=t}},model:{value:s.value2,callback:function(t){s.value2=t},expression:"value2"}})],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("tj-select",{attrs:{title:"选项对象",visible:s.visible2,"value-key":"name","select-key":"id",options:s.options2},on:{"update:visible":function(t){s.visible2=t}},model:{value:s.value2,callback:function(t){s.value2=t},expression:"value2"}})],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-select")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"选项对象"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value2"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible2"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value-key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("select-key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"id"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options2"')]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-select")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("多列联动")]),s._v(" "),a("p",[s._v("对象子集列表 key 需为 children。")]),s._v(" "),a("div",{staticClass:"demo-block mt_15 mb_15"},[a("tj-button",{attrs:{plain:"",round:"3px",size:"small"},on:{click:function(t){s.visible3=!0}}},[s._v(s._s(s.value3[0].name)+s._s(s.value3[1].name)+s._s(s.value3[2].name))]),s._v(" "),a("tj-select",{attrs:{title:"多列联动",visible:s.visible3,"value-key":"name","item-count":3,options:s.options3},on:{"update:visible":function(t){s.visible3=t}},model:{value:s.value3,callback:function(t){s.value3=t},expression:"value3"}})],1),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("tj-select",{attrs:{title:"多列联动",visible:s.visible3,"value-key":"name","item-count":3,options:s.options3},on:{"update:visible":function(t){s.visible3=t}},model:{value:s.value3,callback:function(t){s.value3=t},expression:"value3"}})],1),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-select")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"多列联动"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value3"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible3"')]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value-key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":item-count")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options3"')]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tj-select")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("Props")]),s._v(" "),s._m(0),s._v(" "),a("h3",[s._v("Events")]),s._v(" "),s._m(1)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("标题")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("v-model")]),s._v(" "),a("td",[s._v("选中值")]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("visible")]),s._v(" "),a("td",[s._v("显示状态")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("options")]),s._v(" "),a("td",[s._v("列表数组")]),s._v(" "),a("td",[s._v("array")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("valueKey")]),s._v(" "),a("td",[s._v("对象中文字对应的key")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("selectKey")]),s._v(" "),a("td",[s._v("选中对象显示对应的key")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("itemCount")]),s._v(" "),a("td",[s._v("显示的列数")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("1")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("confirm")]),s._v(" "),a("td",[s._v("点击确认触发")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("cancel")]),s._v(" "),a("td",[s._v("点击取消触发")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("change")]),s._v(" "),a("td",[s._v("滑动选项时触发")]),s._v(" "),a("td",[s._v("picker, values")])])])])}]},l=a("C7Lr")({data:function(){return{visible:!1,value:"选项3",options:["选项1","选项2","选项3","选项4","选项5"],visible2:!1,value2:2,options2:[],visible3:!1,value3:[],options3:[]}},mounted:function(){for(var s=0;s<5;s++){this.options2.push({id:s,name:"选项"+s}),this.value3.push({id:s,name:"选项"+s});for(var t=[],a=0;a<5;a++){for(var v=[],l=0;l<5;l++)v.push({id:l,name:"第三列"+l});t.push({id:a,name:"第二列"+a,children:v})}this.options3.push({id:s,name:"第一列"+s,children:t})}}},v,!1,null,null,null);t.default=l.exports},J6QJ:function(s,t,a){s.exports=a("+rcy")}});
//# sourceMappingURL=7.e0e65db464b9160da358.js.map