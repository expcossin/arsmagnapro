(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,6,7,9],{375:function(t,e,r){var content=r(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("3d49dfa2",content,!0,{sourceMap:!1})},376:function(t,e,r){"use strict";r.r(e);r(239),r(45),r(24),r(72),r(55),r(56);var n=r(238),l={mounted:function(){var t=this.$route.path.split("/").map((function(t){return decodeURIComponent(t)})),e=t[1],r=t[t.length-1];3==t.length&&(r+="： 序");for(var l=[],$=0,o=Array.from(this.$el.getElementsByTagName("section"));$<o.length;$++){var section=o[$],_=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(_)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(_),h2.id=_,section.prepend(h2),l.push(_);for(var c=0,v=Array.from(section.children);c<v.length;c++){var m=v[c];"DIV"!==m.tagName&&(m.innerHTML=m.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return n.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return n.renderToString(e,{displayMode:!1})})))}}this.$store.commit("setBookTitle",e),this.$store.commit("setPageInfo",{title:r,sections:l})}},$=r(54),component=Object($.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article",[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("5deb079e",content,!0,{sourceMap:!1})},378:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("5527a6d8",content,!0,{sourceMap:!1})},379:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("761e7802",content,!0,{sourceMap:!1})},380:function(t,e,r){"use strict";r(375)},381:function(t,e,r){var n=r(7)(!1);n.push([t.i,".term[data-v-396e4c82]{font-weight:700}",""]),t.exports=n},382:function(t,e,r){"use strict";r.r(e);r(238);var n={},l=(r(380),r(54)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"term"},[t._t("default")],2)}),[],!1,null,"396e4c82",null);e.default=component.exports},383:function(t,e,r){"use strict";r(377)},384:function(t,e,r){var n=r(7)(!1);n.push([t.i,".line[data-v-64a8e778]{display:flex;margin:1em 0}.line-title[data-v-64a8e778]{font-size:1em;font-weight:700;white-space:nowrap;margin:0 1em 0 0}",""]),t.exports=n},385:function(t,e,r){"use strict";r.r(e);r(24),r(55);var n=r(238),l={data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return n.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return n.renderToString(e,{displayMode:!1})}))}},$=r(54),component=Object($.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"introduction"},[r("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),r("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"ce34f5e0",null);e.default=component.exports},386:function(t,e,r){"use strict";r.r(e);r(24),r(55);var n=r(238),l={props:["title"],data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return n.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return n.renderToString(e,{displayMode:!1})}))},computed:{}},$=(r(383),r(54)),component=Object($.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"line"},[r("div",{staticClass:"line-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"line-content"},[r("p",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),r("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"64a8e778",null);e.default=component.exports},388:function(t,e,r){"use strict";r(378)},389:function(t,e,r){var n=r(7)(!1);n.push([t.i,".theorem[data-v-e755e794] .content-card.v-card{border-style:double;border-width:3px}@media (prefers-color-scheme:dark){.theorem[data-v-e755e794] .content-card.v-card{background-color:#0f2350;border-color:silver}}@media (prefers-color-scheme:light){.theorem[data-v-e755e794] .content-card{background-color:#f8f4e6;border-color:silver}}",""]),t.exports=n},390:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},l=(r(388),r(54)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("block",{staticClass:"theorem",attrs:{title:this.title||"定理"}},[t._t("default")],2)}),[],!1,null,"e755e794",null);e.default=component.exports;installComponents(component,{Block:r(374).default})},391:function(t,e,r){"use strict";r(379)},392:function(t,e,r){var n=r(7)(!1);n.push([t.i,".problem[data-v-08ee6042] .content-card{border-style:solid;border-width:1px}@media (prefers-color-scheme:dark){.problem[data-v-08ee6042] .content-card.v-card{background-color:#0f2350;border-color:grey}}@media (prefers-color-scheme:light){.problem[data-v-08ee6042] .content-card.v-card{background-color:#f8f4e6;border-color:grey}}",""]),t.exports=n},393:function(t,e,r){"use strict";r.r(e);r(391);var n=r(54),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("block",{staticClass:"problem",attrs:{title:"問題"}},[t._t("default")],2)}),[],!1,null,"08ee6042",null);e.default=component.exports;installComponents(component,{Block:r(374).default})},423:function(t,e,r){"use strict";r.r(e);var n={layout:"book"},l=r(54),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page",[r("introduction",[r("p",[t._v("連続関数の例は多い。普通の関数は連続か、少数の点を除いて連続だ。ここでは連続関数の基本事項を扱う。")]),t._v(" "),r("p",[t._v("連続関数の性質は『位相』という概念を使って体系化できることが知られていて、一般論は『位相空間論』として整理されている。本章でもその様式を取り入れた。")])]),t._v(" "),r("section",{attrs:{title:"連続関数"}},[r("p",[t._v("実数 $x$ 、 $y$ の距離 $d(x, y)$ を $|x-y|$ と定義する。距離の概念を使って、連続関数を次の様に定義する。")]),t._v(" "),r("def",[r("p",[t._v("$\\mathbb{R}$ の部分集合の間の関数 $f:X\\to Y$ 、 $X$ の点 $x$ に関して、 $f$ が $x$ で"),r("term",[t._v("連続")]),t._v("とは、次の条件が満たされることをいう。")],1),t._v(" "),r("p",[t._v("$$\\forall_{\\varepsilon : \\mathbb{R}_{\\gt 0}}\\exists_{\\delta : \\mathbb{R}_{\\gt 0}}\\forall_{y : X}[d(x, y)\\lt\\delta \\Rightarrow d(f(x), f(y))\\lt\\varepsilon]$$")]),t._v(" "),r("p",[t._v("全ての点で連続ならば、 $f$ は"),r("term",[t._v("連続関数")]),t._v("という。")],1)]),t._v(" "),r("l",{attrs:{title:"注釈"}},[t._v("$\\mathbb{R}_{\\gt 0}:=\\{x\\in \\mathbb{R}|x\\gt 0\\}$ 。")]),t._v(" "),r("problem",[r("p",[t._v("関数 $[x\\mapsto \\sqrt{x}]:\\mathbb{R}_{\\geq 0}\\to \\mathbb{R}$ が連続であることを証明せよ。")])]),t._v(" "),r("thm",[r("p",[t._v("連続関数の和、積、合成は連続関数。")])]),t._v(" "),r("p",[t._v("この定理を使えば、連続関数を組み合わせて定義される関数の連続性が証明できる。例えば、恒等写像 $\\mathrm{id}_{\\mathbb{R}}:\\mathbb{R}\\to\\mathbb{R}$ の連続性から関数 $[x\\mapsto x^n]:\\mathbb{R}\\to\\mathbb{R}$ の連続性が証明でき、これと定数関数の連続性から多項式関数 $[x\\mapsto \\sum\\limits_{i=1}^na_ix^i]:\\mathbb{R}\\to\\mathbb{R}$ の連続性が証明できる。")])],1),t._v(" "),r("section",{attrs:{title:"位相"}},[r("def",[r("p",[t._v("$\\mathbb{R}$ の点 $P$ と正の実数 $r$ に関して、次の集合を $P$ を中心とする半径 $r$ の"),r("term",[t._v("開球")]),t._v("という。")],1),t._v(" "),r("p",[t._v("$$B_P(r):=\\{x\\in \\mathbb{R}|d(P, x)\\lt r\\}$$")])]),t._v(" "),r("thm",[r("p",[t._v("$\\mathbb{R}$ の部分集合の間の関数 $f:X\\to Y$ が $X$ の点 $x$ で連続であることは、次の条件と同値。")]),t._v(" "),r("p",[t._v("$$\\forall_{\\varepsilon : \\mathbb{R}_{\\gt0}}\\exists_{\\delta : \\mathbb{R}_{\\gt 0}}[f(B_x(\\delta))\\subseteq B_{f(x)}(\\varepsilon)]$$")])]),t._v(" "),r("def",[r("p",[t._v("$\\mathbb{R}$ の部分集合 $U$ は、次の条件を満たすならば、"),r("term",[t._v("開集合")]),t._v("という。")],1),t._v(" "),r("p",[t._v("$$\\forall_{x: U}\\exists_{\\varepsilon : \\mathbb{R}_{\\gt0}}[B_x(\\varepsilon)\\subseteq U]$$")]),t._v(" "),r("p",[t._v("開集合の補集合を"),r("term",[t._v("閉集合")]),t._v("という。")],1)]),t._v(" "),r("l",{attrs:{title:"例"}},[t._v("開区間 $(0, 1)$ は開集合、閉区間 $[0, 1]$ は閉集合であり、半開区間 $[0, 1)$ はどちらでもない。")]),t._v(" "),r("thm",[r("p",[t._v("$\\mathbb{R}$ の閉集合 $X$ の元から成る全てのコーシー列は、 $X$ の元に収束する。")])]),t._v(" "),r("p",[t._v("閉集合でない場合には反例がある。例えば、数列 $\\{\\frac{1}{n}\\}_{n\\in\\mathbb{N}}$ は半開区間 $(0, 1]$ の元から成るコーシー列だが、極限 $0$ は $(0, 1]$ に属さない。")]),t._v(" "),r("def",[r("p",[t._v("$\\mathbb{R}$ の全ての開集合から成る集合を $\\mathcal{O}_{\\mathbb{R}}$ と書き、 $\\mathbb{R}$ の"),r("term",[t._v("位相")]),t._v("という。")],1),t._v(" "),r("p",[t._v("$\\mathbb{R}$ の部分集合 $X$ に関しては、次の集合を $X$ の"),r("term",[t._v("位相")]),t._v("といい、その元を $X$ の"),r("term",[t._v("開集合")]),t._v("という。")],1),t._v(" "),r("p",[t._v("$$\\mathcal{O}_X:=\\{X\\cap U| U\\in \\mathcal{O}_{\\mathbb{R}}\\}$$")])]),t._v(" "),r("block",{attrs:{title:"位相空間"}},[r("p",[t._v("次の命題1-3は位相の概念にとって本質的であり、これらの性質を公理として『位相空間』が定義される。")]),t._v(" "),r("ol",[r("li",[t._v("$\\emptyset \\in \\mathcal{O}_{\\mathbb{R}}, \\mathbb{R}\\in\\mathcal{O}_{\\mathbb{R}}$")]),t._v(" "),r("li",[t._v("$\\forall_{U: \\mathcal{O}_{\\mathbb{R}}}\\forall_{V: \\mathcal{O}_{\\mathbb{R}}}[U\\cap V\\in \\mathcal{O}_{\\mathbb{R}}]$")]),t._v(" "),r("li",[t._v("$\\forall_{\\Lambda: \\mathcal{P}(\\mathcal{O}_{\\mathbb{R}})}[\\bigcup_{U: \\Lambda}U\\in \\mathcal{O}_{\\mathbb{R}}]$")])]),t._v(" "),r("p",[t._v("例えば、 $\\mathbb{R}^n$ 等の距離空間に関しては、距離関数、開球、開集合という定義の連鎖によって位相が得られる。")])]),t._v(" "),r("thm",[r("p",[t._v("$\\mathbb{R}$ の部分集合の間の関数 $f:X\\to Y$ が連続であることは、次の命題と同値。")]),t._v(" "),r("p",[t._v("$$\\forall_{U:\\mathcal{O}_Y}[f^{-1}(U)\\in\\mathcal{O}_X]$$")])]),t._v(" "),r("l",{attrs:{title:"例"}},[t._v("$\\mathbb{R}$ の部分集合 $\\{x\\in\\mathbb{R}|0\\lt x^2+x+1\\lt 1\\}$ が開集合であることの証明は、関数 $[ x\\mapsto x^2+x+1]:\\mathbb{R}\\to\\mathbb{R}$ が連続であることと、開区間 $(0, 1)$ が開集合であることを使って構成できる。")])],1),t._v(" "),r("section",{attrs:{title:"連結性"}},[r("def",[r("p",[t._v("$\\mathbb{R}$ の部分集合 $X$ は、次の条件1-3を満たす $X$ の開集合 $U$ 、 $V$ が存在しないならば、"),r("term",[t._v("連結集合")]),t._v("という。")],1),t._v(" "),r("ol",[r("li",[t._v("$U\\neq\\emptyset, V\\neq\\emptyset$")]),t._v(" "),r("li",[t._v("$U\\cup V=X$")]),t._v(" "),r("li",[t._v("$U\\cap V=\\emptyset$")])])]),t._v(" "),r("thm",[r("p",[t._v("$\\mathbb{R}$ の部分集合に関しては、区間であることと連結集合であることは同値。")])]),t._v(" "),r("thm",[r("p",[t._v("連続関数による連結集合の像は連結集合。")])]),t._v(" "),r("p",[t._v("以上より次の定理が得られる。")]),t._v(" "),r("thm",{attrs:{title:"中間値の定理"}},[r("p",[t._v("$\\mathbb{R}$ の閉区間 $[a, b]$ 、連続関数 $f:[a, b]\\to \\mathbb{R}$ 、 $f(a)$ と $f(b)$ の間の実数 $y$ に関して、 $[a,b]$ の元 $x$ であって条件 $f(x)=y$ を満たすものが存在する。")])]),t._v(" "),r("p",[t._v("例えば、連続関数 $f$ に関して $f(0) \\lt 0$ かつ $f(1) \\gt 0$ ならば、区間 $[0, 1]$ に条件 $f(x)=0$ を満たす点が存在する。")]),t._v(" "),r("p",[t._v("正の実数 $a$ に関する $\\sqrt[n]{a}$ の存在は、関数 $[x\\mapsto x^n]:\\mathbb{R}_{\\geq 0}\\to\\mathbb{R}$ の連続性と中間値の定理を使っても証明できる。")])],1),t._v(" "),r("section",{attrs:{title:"コンパクト性"}},[r("def",[r("p",[t._v("$\\mathbb{R}$ の部分集合 $X$ に関して、 $X$ の開集合から成る集合族 $\\{U_i\\}_{i\\in \\Lambda}$ は、条件 $\\bigcup_{i\\in \\Lambda}U_i=X$ を満たすならば、 $X$ の"),r("term",[t._v("開被覆")]),t._v("という。更に $\\Lambda$ が有限集合ならば、"),r("term",[t._v("有限被覆")]),t._v("という。")],1),t._v(" "),r("p",[t._v("$X$ の開被覆 $\\{U_i\\}_{I\\in\\Lambda}$ 、 $\\Lambda$ の部分集合 $\\Lambda'$ に関して、 $\\{U_i\\}_{i\\in\\Lambda'}$ は $X$ の被覆の場合、 $\\{U_i\\}_{I\\in\\Lambda}$ の"),r("term",[t._v("部分被覆")]),t._v("という。")],1),t._v(" "),r("p",[t._v("$X$ は全ての開被覆に有限部分被覆が存在するならば、 $\\mathbb{R}$ の"),r("term",[t._v("コンパクト集合")]),t._v("という。")],1)]),t._v(" "),r("thm",[r("p",[t._v("$\\mathbb{R}$ の部分集合に関しては、コンパクト集合であることと「有界かつ閉」であることは同値。")])]),t._v(" "),r("thm",[r("p",[t._v("連続関数によるコンパクト集合の像は、コンパクト集合。")])]),t._v(" "),r("p",[t._v("以上より次の定理が得られる。")]),t._v(" "),r("thm",{attrs:{title:"最大値・最小値の定理"}},[r("p",[t._v("$\\mathbb{R}$ の空でない有界閉集合から $\\mathbb{R}$ への連続関数には、最大値と最小値が存在する。")])]),t._v(" "),r("p",[t._v("最大値が存在しない連続関数の例には、 $[x\\mapsto \\frac{1}{x}]:(0, \\infty)\\to\\mathbb{R}$ がある。この定理からは、閉区間を定義域とする実数値連続関数には最大値と最小値が存在することが分かる。")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Introduction:r(385).default,Term:r(382).default,Def:r(401).default,L:r(386).default,Problem:r(393).default,Thm:r(390).default,Block:r(374).default,Page:r(376).default})}}]);