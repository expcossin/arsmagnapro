(window.webpackJsonp=window.webpackJsonp||[]).push([[22,3,7,8,10],{374:function(t,e,r){"use strict";r.r(e);r(239),r(45),r(24),r(72),r(55),r(56);var n=r(238),o={mounted:function(){var t=this.$route.path.split("/").map((function(t){return decodeURIComponent(t)})),e=t[1],r=t[t.length-1];3==t.length&&(r+="： 序");for(var o=[],l=0,c=Array.from(this.$el.getElementsByTagName("section"));l<c.length;l++){var section=c[l],d=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(d)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(d),h2.id=d,section.prepend(h2),o.push(d);for(var h=0,v=Array.from(section.children);h<v.length;h++){var f=v[h];"DIV"!==f.tagName&&(f.innerHTML=f.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return n.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return n.renderToString(e,{displayMode:!1})})))}}this.$store.commit("setBookTitle",e),this.$store.commit("setPageInfo",{title:r,sections:o})}},l=r(54),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article",[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,r){"use strict";r.r(e);r(24),r(55);var n=r(238),o={props:["title"],data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return n.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return n.renderToString(e,{displayMode:!1})}))}},l=(r(398),r(54)),c=r(73),d=r.n(c),h=r(406),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"block-wrapper"},[t.title?r("div",{staticClass:"block-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),r("v-card",{staticClass:"content-card",attrs:{"max-width":"800px",elevation:"1"}},[r("div",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),r("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)],1)}),[],!1,null,"22724555",null);e.default=component.exports;d()(component,{VCard:h.a})},378:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("5527a6d8",content,!0,{sourceMap:!1})},379:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("761e7802",content,!0,{sourceMap:!1})},387:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("2b26977f",content,!0,{sourceMap:!1})},388:function(t,e,r){"use strict";r(378)},389:function(t,e,r){var n=r(7)(!1);n.push([t.i,".theorem[data-v-e755e794] .content-card.v-card{border-style:double;border-width:3px}@media (prefers-color-scheme:dark){.theorem[data-v-e755e794] .content-card.v-card{background-color:#0f2350;border-color:silver}}@media (prefers-color-scheme:light){.theorem[data-v-e755e794] .content-card{background-color:#f8f4e6;border-color:silver}}",""]),t.exports=n},390:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},o=(r(388),r(54)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("block",{staticClass:"theorem",attrs:{title:this.title||"定理"}},[t._t("default")],2)}),[],!1,null,"e755e794",null);e.default=component.exports;installComponents(component,{Block:r(375).default})},391:function(t,e,r){"use strict";r(379)},392:function(t,e,r){var n=r(7)(!1);n.push([t.i,".problem[data-v-08ee6042] .content-card{border-style:solid;border-width:1px}@media (prefers-color-scheme:dark){.problem[data-v-08ee6042] .content-card.v-card{background-color:#0f2350;border-color:grey}}@media (prefers-color-scheme:light){.problem[data-v-08ee6042] .content-card.v-card{background-color:#f8f4e6;border-color:grey}}",""]),t.exports=n},393:function(t,e,r){"use strict";r.r(e);r(391);var n=r(54),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("block",{staticClass:"problem",attrs:{title:"問題"}},[t._t("default")],2)}),[],!1,null,"08ee6042",null);e.default=component.exports;installComponents(component,{Block:r(375).default})},394:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("e23b7040",content,!0,{sourceMap:!1})},395:function(t,e,r){var n=r(7)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},396:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("cf87dc84",content,!0,{sourceMap:!1})},397:function(t,e,r){var n=r(7)(!1);n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},398:function(t,e,r){"use strict";r(387)},399:function(t,e,r){var n=r(7)(!1);n.push([t.i,".content-card[data-v-22724555]{border-style:solid;border-width:.5px}@media (prefers-color-scheme:dark){.content-card.v-card[data-v-22724555]{background-color:#000;border-color:#fff}}@media (prefers-color-scheme:light){.content-card.v-card[data-v-22724555]{background-color:#fff;border-color:#000}}.block-wrapper[data-v-22724555]{margin:30px auto 40px}.block-title[data-v-22724555]{text-align:center;margin-bottom:2px}.content-card[data-v-22724555]{border-radius:0;margin-left:auto;margin-right:auto;padding:0 20px}.content-card ol[data-v-22724555],.content-card p[data-v-22724555],.content-card ul[data-v-22724555]{margin:16px 0}",""]),t.exports=n},406:function(t,e,r){"use strict";r(165),r(166),r(15);var n=r(2),o=(r(394),r(167)),l=r(0),c=(r(103),r(396),r(169)),d=r(22),h=r(104),v=r(168),f=r(21),m=r(1),_=r(5);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(_.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),v.a,f.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(m.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(m.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(m.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(m.k)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),x=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(y,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),k=r(66);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(_.a)(x,k.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return O(O({"v-card":!0},k.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=O({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=x.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},415:function(t,e,r){"use strict";r.r(e);var n={layout:"book"},o=r(54),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page",[r("section",{attrs:{title:"数の存在を知る方法"}},[r("p",[t._v("$1$ から加減乗除を繰り返すことで得られる数を有理数という。有理数でない実数は無理数といい、下記の例がある。")]),t._v(" "),r("ul",[r("li",[t._v("方程式 $x^2=2$ の正の解 $\\sqrt{2}$ 。")]),t._v(" "),r("li",[t._v("方程式 $10^x=2$ の解 $\\log_{10} 2$ 。")])]),t._v(" "),r("p",[t._v("これらの数はどうして存在すると言えるのだろう。")]),t._v(" "),r("problem",[r("p",[t._v("無理数の存在証明を可能とする公理は何か？")])])],1),t._v(" "),r("section",{attrs:{title:"数の大きさを知る方法"}},[r("p",[t._v("或る数の存在が証明できたとして、その大きさを知るにはどうすればよいだろう。")]),t._v(" "),r("p",[t._v("例えば、理論に基づいて或る量を計算した結果が、「長さ $\\sqrt{2}$ cmの線」や「質量 $\\pi$ kgの鉄」といった無理数を含むものだったとして、その様な実体を実際に用意するには、大きさを知らなければならない。")]),t._v(" "),r("p",[t._v("$\\sqrt{2}$ の大きさはどうすれば分かるだろう？素朴な方法は、 $\\sqrt{2}$ は $1$ と $2$ の間にあるから、 $1^2, 1.1^2, 1.2^2, \\dots$ を計算して $1.4\\lt \\sqrt{2}\\lt 1.5$ を知り、次に $1.41^2, 1.42^2$ を計算して $1.41\\lt \\sqrt{2}\\lt 1.42$ を知り、と一桁ずつ確定させていくものだ。この方法は数ある手法の中であまりよい方ではないが、ともかく $\\sqrt{2}$ を近似する数列 $1, 1.4, 1.41, \\dots$ を得ることができる。これを「 $\\sqrt{2}$ に収束する数列」という。")]),t._v(" "),r("p",[t._v("収束する数列という概念を使うと、次の一般的な問題が得られる。")]),t._v(" "),r("problem",[r("p",[t._v("大きさを知りたい実数があるとする。それに収束する数列を構成するにはどうすればよいか？")])])],1),t._v(" "),r("section",{attrs:{title:"数列の極限としての実数"}},[r("p",[t._v("与えられた数に収束する数列を構成する問題とは逆に、初めに数列を定義し、次にそれが収束条件を満たすことが分かり、その数列の極限（収束先）として実数が定義されることがある。")]),t._v(" "),r("p",[t._v("一例を挙げる。")]),t._v(" "),r("block",{attrs:{title:"連続金利"}},[r("p",[t._v("あなたは $N$ 円を元手に資産運用するとし、投資先候補には $A$ と $B$ があるとする。 $A$ に投資した場合、 $1$ 年後に元本に加えてその $r$ 倍が利子として受け取れる。 $B$ に投資した場合、半年後に元本に加えてその $\\frac{r}{2}$ 倍が利子として受け取れる。どちらに投資した方がよいだろう？")]),t._v(" "),r("p",[t._v("$N$ 円を $A$ に投資した場合、 $1$ 年後の資産は $(1+r)N$ であるのに対して、 $B$ に $N$ を投資して半年で $(1+\\frac{r}{2})N$ 円にしてから、それを $B$ に再投資すれば $(1+\\frac{r}{2})^2N$ になり、こちらの方が利益は大きい。")]),t._v(" "),r("p",[t._v("一般に $(1+\\frac{r}{n})^n$ という式を考えると、この値は $n$ が大きいほど大きい。どこまで大きくできるだろうか？ $n:=1, 2, 3, \\dots$ として数列を作ると、或る値に収束することが分かる。")]),t._v(" "),r("p",[t._v('$r=1$ の場合の極限値をネイピア数といい $e$ と書く。これは"最も美しい数式"と言われる $e^{i\\pi}+1=0$ に含まれる $e$ と同じものだ。一般の $r$ に関する極限値は $e^r$ に一致する。')])]),t._v(" "),r("p",[t._v("収束する数列の極限として実数を定義するには、数列の収束条件を知らなければならない。上記の例の場合、次の定理が使える。")]),t._v(" "),r("thm",[r("p",[t._v("次の条件1-2を満たす実数列 $\\{a_n\\}_{n\\in\\mathbb{N}}$ は収束する。")]),t._v(" "),r("ol",[r("li",[t._v("【単調増加】 $a_1\\leq a_2\\leq a_3\\leq\\dots$")]),t._v(" "),r("li",[t._v("【上に有界】 $\\exists_{x:\\mathbb{R}}\\forall_{n:\\mathbb{N}}[a_n\\leq x]$")])])]),t._v(" "),r("problem",[r("p",[t._v("前掲の定理を証明せよ。")])])],1),t._v(" "),r("section",{attrs:{title:"連続関数とは何か"}},[r("p",[t._v("無理数を含む式、例えば $\\frac{3\\sqrt{2}+1}{5}$ の大きさを知りたいとする。素朴な方法は、 $f(x):=\\frac{3x+1}{5}$ とし、 $\\sqrt{2}$ に収束する数列 $a_1, a_2, \\dots$ を採り、数列 $f(a_1), f(a_2), \\dots$ を計算するものだが、この数列は実際に $f(\\sqrt{2})$ に収束する。 その理由は $[x\\mapsto f(x)]:\\mathbb{R}\\to\\mathbb{R}$ が連続関数だからだ。")]),t._v(" "),r("p",[t._v("関数が連続とは、そのグラフに切れ目がないことをいう。例えば、関数「 $x$ が $0$ 未満なら $f(x):=0$ 、 $x$ が $0$ 以上なら $f(x):=1$ 」は点 $0$ に於いて不連続、それ以外の点で連続であり、関数「 $x$ が有理数ならば $f(x):=1$ 、 $x$ が無理数ならば $f(x):=0$ 」は全ての点で不連続だ。")]),t._v(" "),r("problem",[r("p",[t._v("関数 $f:\\mathbb{R}\\to \\mathbb{R}$ が連続であるということを論理式で定義し、定義に基づいて次の性質を証明せよ。")]),t._v(" "),r("p",[t._v("「 $f$ が連続であり $f(0)$ が負で $f(1)$ が正ならば、方程式 $f(x)=0$ には解が存在する。」")])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Problem:r(393).default,Block:r(375).default,Thm:r(390).default,Page:r(374).default})}}]);