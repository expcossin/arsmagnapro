(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,6,7,9],{374:function(t,e,$){var content=$(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,$(8).default)("3d49dfa2",content,!0,{sourceMap:!1})},375:function(t,e,$){"use strict";$.r(e);$(239),$(45),$(24),$(72),$(55),$(56);var r=$(238),n={mounted:function(){for(var t=this.$route.path.split("/").map((function(t){return decodeURIComponent(t)})),e=t[1],$=t[t.length-1],n=[],o=0,l=Array.from(this.$el.getElementsByTagName("section"));o<l.length;o++){var section=l[o],_=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(_)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(_),h2.id=_,section.prepend(h2),n.push(_);for(var f=0,v=Array.from(section.children);f<v.length;f++){var c=v[f];"DIV"!==c.tagName&&(c.innerHTML=c.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return r.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return r.renderToString(e,{displayMode:!1})})))}}this.$store.commit("setBookTitle",e),this.$store.commit("setPageInfo",{title:$,sections:n})}},o=$(54),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article",[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,$){var content=$(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,$(8).default)("5deb079e",content,!0,{sourceMap:!1})},378:function(t,e,$){var content=$(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,$(8).default)("5527a6d8",content,!0,{sourceMap:!1})},379:function(t,e,$){"use strict";$(374)},380:function(t,e,$){var r=$(7)(!1);r.push([t.i,".term[data-v-396e4c82]{font-weight:700}",""]),t.exports=r},382:function(t,e,$){"use strict";$.r(e);$(238);var r={},n=($(379),$(54)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"term"},[t._t("default")],2)}),[],!1,null,"396e4c82",null);e.default=component.exports},383:function(t,e,$){"use strict";$(377)},384:function(t,e,$){var r=$(7)(!1);r.push([t.i,".line[data-v-64a8e778]{display:flex;margin:1em 0}.line-title[data-v-64a8e778]{font-size:1em;font-weight:700;white-space:nowrap;margin:0 1em 0 0}",""]),t.exports=r},385:function(t,e,$){"use strict";$.r(e);$(24),$(55);var r=$(238),n={data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return r.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return r.renderToString(e,{displayMode:!1})}))}},o=$(54),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,$=t._self._c||e;return $("div",{staticClass:"introduction"},[$("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),$("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"ce34f5e0",null);e.default=component.exports},386:function(t,e,$){"use strict";$.r(e);$(24),$(55);var r=$(238),n={props:["title"],data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return r.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return r.renderToString(e,{displayMode:!1})}))},computed:{}},o=($(383),$(54)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,$=t._self._c||e;return $("div",{staticClass:"line"},[$("div",{staticClass:"line-title"},[t._v(t._s(t.title))]),t._v(" "),$("div",{staticClass:"line-content"},[$("p",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),$("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"64a8e778",null);e.default=component.exports},387:function(t,e,$){"use strict";$(378)},388:function(t,e,$){var r=$(7)(!1);r.push([t.i,".theorem[data-v-e755e794] .content-card.v-card{border-style:double;border-width:3px}@media (prefers-color-scheme:dark){.theorem[data-v-e755e794] .content-card.v-card{background-color:#0f2350;border-color:silver}}@media (prefers-color-scheme:light){.theorem[data-v-e755e794] .content-card{background-color:#f8f4e6;border-color:silver}}",""]),t.exports=r},389:function(t,e,$){"use strict";$.r(e);var r={props:["title"]},n=($(387),$(54)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("block",{staticClass:"theorem",attrs:{title:this.title||"定理"}},[t._t("default")],2)}),[],!1,null,"e755e794",null);e.default=component.exports;installComponents(component,{Block:$(376).default})},419:function(t,e,$){"use strict";$.r(e);var r={layout:"book"},n=$(54),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,$=t._self._c||e;return $("page",[$("introduction",[$("p",[t._v("『写像』は二つの集合の元の間の依存関係一般を表す言葉で、数学に於いては『関数』と同義だ。依存関係の例には次の様なものがある。")]),t._v(" "),$("ul",[$("li",[t._v("【法則】物体の位置が時刻に依存して決まる。")]),t._v(" "),$("li",[t._v("【意思決定】獲得できる利益が選択する行為に依存して決まる。")]),t._v(" "),$("li",[t._v("【表データ】情報が記録された表に於いて、記載内容が行と列に依存して決まる。")])]),t._v(" "),$("p",[t._v("写像は様々な場面で多様なものが使われる。ここではその一般論を扱う。")])]),t._v(" "),$("section",{attrs:{title:"写像"}},[$("p",[t._v("写像の定義は、非公理的には「集合 $A$ 、 $B$ に関して、 $A$ の各元に対して $B$ の元が一つずつ対応する依存関係を $A$ から $B$ への写像という」と書ける。公理的集合論には、写像を集合として定義する流儀があり、ここではその方法を採用する。")]),t._v(" "),$("def",[$("p",[t._v("集合 $A$ 、 $A$ の変項 $x$ に関する命題 $P(x)$ に関して、次の命題を $\\exists!_{x:  A}P(x)$ と書き、「 $A$ の元 $x$ で条件 $P(x)$ を満たすものが唯一つ存在する」等という。")]),t._v(" "),$("p",[t._v("$$\\exists_{x:  A}P(x)\\wedge\\forall_{x:  A}\\forall_{y:  A}[(P(x)\\wedge P(y))\\Rightarrow x=y]$$")])]),t._v(" "),$("p",[t._v("$\\exists!_{x:  A}P(x)$ が成り立つならば、 $P(x)$ を満たす $A$ の元 $x$ に名前を付けることができる。")]),t._v(" "),$("def",[$("p",[t._v("集合 $A$ 、 $B$ に関して、集合 $B^A$ を次の様に定義する。")]),t._v(" "),$("p",[t._v("$$B^A:=\\{f\\in\\mathcal{P}(A\\times B)|\\forall_{x:  A}\\exists!_{y:  B}[(x, y)\\in f]\\}$$")]),t._v(" "),$("p",[t._v("この集合の元は $A$ から $B$ への"),$("term",[t._v("写像")]),t._v("といい、$A$ 、 $B$ をその写像の"),$("term",[t._v("始集合")]),t._v("、"),$("term",[t._v("終集合")]),t._v("という。写像を表記する際は「写像 $f:A\\to B$ 」と書いて始集合と終集合を明示することがある。")],1),t._v(" "),$("p",[t._v("写像 $f:A\\to B$ と $A$ の各元 $a$ に関して、条件 $(a, b)\\in f$ を満たす $b$ を $f(a)$ と書く。")])]),t._v(" "),$("l",{attrs:{title:"注釈"}},[t._v("『写像』を「 $A$ の各元 $x$ に $B$ の或る元 $f(x)$ を対応させる規則」の様に定義する場合、本稿で写像と呼んでいるものは写像のグラフと呼ばれる。つまり、写像 $f:A\\to B$ のグラフとは集合 $\\{(x, y)\\in A\\times B|y=f(x)\\}$ のことであり、本稿の定義では $f$ に一致する。")]),t._v(" "),$("def",[$("p",[t._v("集合 $A$ 、集合 $B$ 、 $A$ の変項 $x$ に関する $B$ の元 $f(x)$ に関して、写像 $\\{(x, y)\\in A\\times B|y=f(x)\\}$ は「 "),$("term",[t._v("対応")]),t._v(" $x\\mapsto f(x)$ によって定まる」といい、 $[x\\mapsto f(x)]:A\\to B$ と書く。")],1)]),t._v(" "),$("l",{attrs:{title:"注釈"}},[t._v("始集合が直積集合の場合は、変項記号を複数使って $[(x, y)\\mapsto x+y]:\\mathbb{R}\\times\\mathbb{R}\\to\\mathbb{R}$ の様にも書く。")]),t._v(" "),$("l",{attrs:{title:"注釈"}},[t._v("記号 $\\mapsto$ は対応を表すためのものとして普及しているが、対応 $x\\mapsto f(x)$ によって定まる写像を $[x\\mapsto f(x)]:A\\to B$ と表記することはそれほど普及していない。例えば本書で $[(x, y)\\mapsto xy+1]:\\mathbb{R}^2\\to\\mathbb{R}$ と書く写像は、他所では「関数 $f(x, y)=xy+1$ 」等と書くことが多く、関数の数が増えるに伴って関数記号が $f, g, h, \\dots$ と増えていく。本書の流儀は関数記号を増やしたくない場合に使える。")]),t._v(" "),$("p",[t._v("写像には対応規則が明記できる物とできない物がある。後者は選択公理(後述)などの非構成的な手段を使った存在証明によって生じる。前者の物には、 $[x\\mapsto x^2+x+1]:\\mathbb{R}\\to\\mathbb{R}$ の様に数式で書かれる物や $[x\\mapsto\\{$ $x$ が有理数ならば $1$ 、 $x$ が無理数ならば $0$ $\\}]:\\mathbb{R}\\to\\mathbb{R}$ の様に論理的な条件で書かれるものがある。")]),t._v(" "),$("def",[$("p",[t._v("写像 $f:A\\to B$ 、 $g:B\\to C$ に関して、写像 $[x \\mapsto g(f(x))]:A\\to C$ を $g\\circ f$ と書き、 $f$ と $g$ の"),$("term",[t._v("合成")]),t._v("という。")],1)])],1),t._v(" "),$("section",{attrs:{title:"集合の包含関係に関する写像"}},[$("def",[$("p",[t._v("集合 $A$ 、 $A$ の部分集合 $S$ に関して、写像 $[x\\mapsto x]:S\\to A$ を"),$("term",[t._v("包含写像")]),t._v("という。特に $S=A$ の場合、これを $A$ 上の"),$("term",[t._v("恒等写像")]),t._v("といい、 $\\mathrm{id}_A$ と書く。")],1)]),t._v(" "),$("def",[$("p",[t._v("写像 $f:A\\to B$、 $A$の部分集合 $S$ に関して、写像 $[x\\mapsto f(x)]:S\\to B$ を $f$ の $S$ への"),$("term",[t._v("制限")]),t._v("といい、 $f|_{S}$ と書く。")],1)]),t._v(" "),$("def",[$("p",[t._v("集合 $S$ の部分集合 $A$ に関して、写像 $[x\\mapsto\\{$ $x \\in A$ ならば $1$ 、 $x\\notin A$ ならば $0$ $\\}]:S\\to \\{0, 1\\}$ を $\\chi_{A}$ と書き、 $A$ の"),$("term",[t._v("特性写像")]),t._v("という。")],1)])],1),t._v(" "),$("section",{attrs:{title:"単射と全射"}},[$("def",[$("p",[t._v("写像 $f:A\\to B$ に関して、次の条件1-2を満たす写像 $g:B\\to A$ を $f$ の"),$("term",[t._v("逆写像")]),t._v("といい $f^{-1}$ と書く。")],1),t._v(" "),$("ol",[$("li",[t._v("$g\\circ f=\\mathrm{id}_A$")]),t._v(" "),$("li",[t._v("$f\\circ g=\\mathrm{id}_B$")])])]),t._v(" "),$("l",{attrs:{title:"注釈"}},[t._v("逆写像は存在するとは限らない。")]),t._v(" "),$("def",[$("p",[t._v("写像 $f:A\\rightarrow B$ に関して、次の様に定義する。")]),t._v(" "),$("ul",[$("li",[t._v("命題 $\\forall_{x_1 :  A}\\forall_{x_2 :  A} [f(x_1)=f(x_2) \\Rightarrow x_1 = x_2]$ を「 $f$ は"),$("term",[t._v("単射")]),t._v("」という。")],1),t._v(" "),$("li",[t._v("命題 $\\forall_{y :  B}\\exists_{x :  A}[f(x)=y]$ を「 $f$ は"),$("term",[t._v("全射")]),t._v("」という。")],1),t._v(" "),$("li",[t._v("単射かつ全射であることを"),$("term",[t._v("全単射")]),t._v("という。")],1)])]),t._v(" "),$("p",[t._v("写像 $f:A\\to B$ の単射性や全射性から、 $A$ と $B$ の元の個数の大小関係が分かる。")]),t._v(" "),$("thm",[$("p",[t._v("写像 $f:A\\to B$ に関して、次の命題1-2は同値。")]),t._v(" "),$("ul",[$("li",[t._v(" $f$ の逆写像が存在する。")]),t._v(" "),$("li",[t._v("$f$ は全単射。")])])])],1),t._v(" "),$("section",{attrs:{title:"像と逆像"}},[$("def",[$("p",[t._v("写像 $f:A\\to B$ 、 $A$ の部分集合 $S$ に関して、次の集合を $f$ による $S$ の"),$("term",[t._v("像")]),t._v("という。")],1),t._v(" "),$("p",[t._v("$$f(S):=\\{y\\in B|\\exists_{x:  S}[f(x)=y]\\}$$")]),t._v(" "),$("p",[t._v("写像 $f:A\\to B$ 、 $B$ の部分集合 $S$ に関して、次の集合を $S$ の $f$ による"),$("term",[t._v("逆像")]),t._v("という。")],1),t._v(" "),$("p",[t._v("$$f^{-1}(S):=\\{ x \\in A| f(x)\\in B\\}$$")])]),t._v(" "),$("l",{attrs:{title:"注釈"}},[t._v("逆写像と逆像に同じ記号 $f^{-1}$ が使われているが、意味は異なる。写像 $f:A\\to B$ の逆写像 $f^{-1}:B\\to A$ は必ずしも存在しないが、 $B$ の部分集合 $x$ に関して逆像 $f^{-1}(x)$ は必ず存在する。")]),t._v(" "),$("block",{attrs:{title:"像と逆像による図形の描画"}},[$("p",[t._v("像と逆像を使って図形を定義することができる。例として、 $\\mathbb{R}^2$ に原点を中心とする半径1の円周 $S$ を二通りの方法で描く。")]),t._v(" "),$("p",[t._v("【軌跡としての円】 写像 $[\\theta\\mapsto (\\cos{\\theta}, \\sin{\\theta})]: \\mathbb{R}\\to \\mathbb{R}^2$ を $\\gamma$ とすると、像 $\\gamma([0, 2\\pi))$ は $S$ に一致する。変数 $t$ を時間とみなして $\\gamma(t)$ を「時刻 $t$ に於ける動点 $P$ の座標」と考えれば、像 $\\gamma([0, t])$ は時刻 $0$ から時刻 $t$ までの $P$ の軌跡を表す。 $S$ の長さが $2\\pi$ であることは、曲線 $\\gamma|_{[0, 2\\pi)}$ の長さ積分法で計算することで分かる。")]),t._v(" "),$("p",[t._v("【零点集合としての円】 写像 $[(x, y)\\mapsto x^2+y^2-1]:\\mathbb{R}^2\\to \\mathbb{R}$ を $f$ とすると、逆像 $f^{-1}(\\{0\\})$ は $S$ に一致する。これを $f$ の零点集合という。図形を写像の零点集合として表現すれば、図形の問題が方程式の問題に翻訳され、図を描かずに式変形で解くという方針が生じる。")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Introduction:$(385).default,Def:$(399).default,Term:$(382).default,L:$(386).default,Thm:$(389).default,Block:$(376).default,Page:$(375).default})}}]);