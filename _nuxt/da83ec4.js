(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{235:function(e,t,n){var content=n(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("2b7ba6d2",content,!0,{sourceMap:!1})},236:function(e,t,n){"use strict";n(235)},237:function(e,t,n){var r=n(86)(!1);r.push([e.i,".response[data-v-0330da15]{margin:20px 10px;background-color:#316745;color:#fff}.response-body[data-v-0330da15]{margin:5px 0 10px}.response-content[data-v-0330da15]{white-space:pre}*[data-v-0330da15] a{color:#add6ff}.meta[data-v-0330da15]{font-size:12px;color:gold}.note[data-v-0330da15]{padding:5px 10px;color:#232323;background:#fff8e8;border-left:10px solid #ffc06e;max-width:400px}",""]),e.exports=r},239:function(e,t,n){"use strict";n.r(t);n(34),n(171);var r={props:{response:Object,isPreview:{default:!1}},data:function(){return{isHidden:!0}},computed:{datetime:function(){if(this.isPreview)return"year/month/date h:m:s";var e=new Date(this.response.datetime);return e.getFullYear()+"/"+("0"+(e.getMonth()+1)).slice(-2)+"/"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)},number:function(){return this.isPreview?this.response.number||"n":this.response.number},display:function(){return!this.response.options.hideContent||!this.isHidden}},mounted:function(){var html=this.$refs.content.innerHTML;this.response.options.disableMath||(html=this.$renderer.katex(html)),this.$refs.content.innerHTML=this.$renderer.basic(html),html=this.$refs.explanation.innerHTML,html=this.$renderer.katex(html,!1),this.$refs.explanation.innerHTML=this.$renderer.basic(html)}},o=(n(236),n(42)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"response",attrs:{id:e.number}},[n("div",{staticClass:"meta"},[n("span",{staticClass:"number"},[e._v(e._s(e.number))]),e._v(" "),e.response.options.writeName?n("span",{staticClass:"name"},[e._v(e._s(e.response.name))]):e._e(),e._v(" "),n("span",{staticClass:"datetime"},[e._v(e._s(e.datetime))])]),e._v(" "),n("div",{staticClass:"response-body"},[n("div",{ref:"explanation",staticClass:"explanation"},[e._v(e._s(e.response.explanation))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.display,expression:"display"}],ref:"content",staticClass:"response-content"},[e._v(e._s(e.response.content))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.display,expression:"!display"}],staticClass:"note"},[n("p",[e._v("投稿者によって非表示に設定されています。")]),e._v(" "),n("button",{on:{click:function(t){e.isHidden=!1}}},[e._v("表示する")])])])])}),[],!1,null,"0330da15",null);t.default=component.exports}}]);