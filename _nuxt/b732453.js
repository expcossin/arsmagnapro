(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,7],{375:function(t,e,n){"use strict";n.r(e);n(239),n(45),n(24),n(72),n(55),n(56);var r=n(238),o={mounted:function(){for(var t=this.$route.path.split("/").map((function(t){return decodeURIComponent(t)})),e=t[1],n=t.length>2?t[2]:e,o=[],c=0,l=Array.from(this.$el.getElementsByTagName("section"));c<l.length;c++){var section=l[c],d=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(d)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(d),h2.id=d,section.prepend(h2),o.push(d);for(var $=0,f=Array.from(section.children);$<f.length;$++){var v=f[$];"DIV"!==v.tagName&&(v.innerHTML=v.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return r.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return r.renderToString(e,{displayMode:!1})})))}}this.$store.commit("setBookTitle",e),this.$store.commit("setPageInfo",{title:n,sections:o})}},c=n(54),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article",[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,n){"use strict";n.r(e);n(24),n(55);var r=n(238),o={data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return r.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return r.renderToString(e,{displayMode:!1})}))}},c=n(54),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduction"},[n("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"ce34f5e0",null);e.default=component.exports},410:function(t,e,n){"use strict";n.r(e);var r={layout:"book"},o=n(54),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("introduction",[n("p",[t._v("本書は大学レベルの数学を学び始める人が初めに読む物として書いた。")]),t._v(" "),n("p",[t._v("大学数学は大雑把には代数学・幾何学・解析学と分かれているが、。微分積分学から勉強するのが普通")])]),t._v(" "),n("section",{attrs:{title:"集合と写像"}},[n("p",[t._v("集合と写像は数学の基本語彙だ。初等数学が1、2、3、...と数字を覚える所から始まる様に、大学数学をやるには集合と写像を知る必要がある。")]),t._v(" "),n("p",[t._v("集合論は存在論的な問題を解消する。数学的対象は形而上の物であり、観測によって存在を確かめることができないから、何が存在するかという点で意見の相違があり得る(例： 虚数)。集合論を使えば、新しい物の存在を仮定する代わりに、それと同じ機能の物を既存の物を使って定義できる。")]),t._v(" "),n("p",[t._v("写像は二つの集合の要素間の依存関係のことであり、関数とも呼ばれる。")])]),t._v(" "),n("section",{attrs:{title:"構造付き集合"}},[n("p",[t._v("集合と写像を習得すると、構造付き集合が使える様に成る。これは理論の建設に役立つ。例えば、群論は群という種類の構造付き集合についての理論であり、この様に構造付き集合の一つの種類に対して理論が一つ建設されるのは典型的なことだ。")]),t._v(" "),n("p",[t._v("構造付き集合は「集合 $S$ と構造 $K$ の組 $(S, K)$ であって公理系 $A$ を満たすものを $X$ と呼ぶ」という風にして種類 $X$ が定義される(細部は物によって異なる)。 $X$ に該当する範囲の具体例に対して、 $A$ から導出される定理が成り立つという一般性がある。")]),t._v(" "),n("p",[t._v("構造付き集合には様々な物があるが、本書では、微分積分学の基礎である「全ての実数から成る集合はデデキント完備な順序体である」という命題を理解できる様になることを目標に、順序集合と群・環・体を説明した。")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Introduction:n(383).default,Page:n(375).default})}}]);