(window.webpackJsonp=window.webpackJsonp||[]).push([[27,6,7,9],{379:function(t,e,n){"use strict";n.r(e);n(6),n(58),n(35),n(69),n(52),n(40),n(68);var $=n(246),r={mounted:function(){var t=this.$route.path.split("/").map((function(t){return decodeURIComponent(t)})).filter((function(t){return""!==t})),e=t[0],n=t[t.length-1];2==t.length&&(n+="： 序");for(var r=[],o=0,l=Array.from(this.$el.getElementsByTagName("section"));o<l.length;o++){var section=l[o],_=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(_)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(_),h2.id=_,section.prepend(h2),r.push(_);for(var c=0,v=Array.from(section.children);c<v.length;c++){var f=v[c];"DIV"!==f.tagName&&(f.innerHTML=f.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return $.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return $.renderToString(e,{displayMode:!1})})))}}this.$store.commit("setBookTitle",e),this.$store.commit("setPageInfo",{title:n,sections:r})}},o=n(67),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article",[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("3d49dfa2",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5deb079e",content,!0,{sourceMap:!1})},383:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5527a6d8",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n(380)},385:function(t,e,n){var $=n(13)(!1);$.push([t.i,".term[data-v-396e4c82]{font-weight:700}",""]),t.exports=$},388:function(t,e,n){"use strict";n.r(e);n(246);var $={},r=(n(384),n(67)),component=Object(r.a)($,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"term"},[t._t("default")],2)}),[],!1,null,"396e4c82",null);e.default=component.exports},389:function(t,e,n){"use strict";n(382)},390:function(t,e,n){var $=n(13)(!1);$.push([t.i,".line[data-v-64a8e778]{display:flex;margin:1em 0}.line-title[data-v-64a8e778]{font-size:1em;font-weight:700;white-space:nowrap;margin:0 1em 0 0}",""]),t.exports=$},391:function(t,e,n){"use strict";n.r(e);n(35),n(68);var $=n(246),r={props:["title"],data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return $.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return $.renderToString(e,{displayMode:!1})}))},computed:{}},o=(n(389),n(67)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line"},[n("div",{staticClass:"line-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"line-content"},[n("p",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),n("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"64a8e778",null);e.default=component.exports},393:function(t,e,n){"use strict";n(383)},394:function(t,e,n){var $=n(13)(!1);$.push([t.i,".theorem[data-v-e755e794] .content-card.v-card{border-style:double;border-width:3px}@media (prefers-color-scheme:dark){.theorem[data-v-e755e794] .content-card.v-card{background-color:#0f2350;border-color:silver}}@media (prefers-color-scheme:light){.theorem[data-v-e755e794] .content-card{background-color:#f8f4e6;border-color:silver}}",""]),t.exports=$},395:function(t,e,n){"use strict";n.r(e);var $={props:["title"]},r=(n(393),n(67)),component=Object(r.a)($,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("block",{staticClass:"theorem",attrs:{title:this.title||"定理"}},[t._t("default")],2)}),[],!1,null,"e755e794",null);e.default=component.exports;installComponents(component,{Block:n(381).default})},405:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("040ffae4",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n(405)},409:function(t,e,n){var $=n(13)(!1);$.push([t.i,".hint-wrapper[data-v-973abeae]{margin:30px auto 40px}.hint-title[data-v-973abeae]{text-align:center;margin-bottom:2px}.content-card[data-v-973abeae]{border-radius:0;margin-left:auto;margin-right:auto;padding:0 20px}.left[data-v-973abeae]{margin-right:1em}.content-card ol[data-v-973abeae],.content-card p[data-v-973abeae],.content-card ul[data-v-973abeae]{margin:16px 0}.content-card[data-v-973abeae]{border-style:dotted;border-width:.5px}@media (prefers-color-scheme:dark){.content-card[data-v-973abeae]{background-color:#000;border-color:#fff}}@media (prefers-color-scheme:light){.content-card[data-v-973abeae]{background-color:#fff;border-color:#000}}",""]),t.exports=$},410:function(t,e,n){"use strict";n.r(e);n(35),n(68);var $=n(246),r={data:function(){return{button:!0,dialog:!1,content:"",show:!1,question:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,e){return $.renderToString(e,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,e){return $.renderToString(e,{displayMode:!1})}))},methods:{close:function(){console.log("close"),this.show=!1},clickButton:function(){this.dialog=!0}}},o=(n(408),n(67)),l=n(82),_=n.n(l),c=n(411),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hint-wrapper"},[t.button?n("button",{on:{click:function(){t.button=!1,t.dialog=!0}}},[t._v("証明の手引き")]):t._e(),t._v(" "),t.dialog?n("div",[n("p",[t._v("証明の手引きを読みますか？")]),t._v(" "),n("button",{staticClass:"left",on:{click:function(){t.dialog=!1,t.button=!0}}},[t._v("いいえ")]),t._v(" "),n("button",{on:{click:function(){t.dialog=!1,t.show=!0}}},[t._v("はい")])]):t._e(),t._v(" "),t.show?n("div",[n("div",{staticClass:"hint-title"},[t._v("証明の手引き")]),t._v(" "),n("v-card",{staticClass:"content-card",attrs:{"max-width":"800px",elevation:"1"},domProps:{innerHTML:t._s(t.content)}})],1):t._e(),t._v(" "),n("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"973abeae",null);e.default=component.exports;_()(component,{VCard:c.a})},430:function(t,e,n){"use strict";n.r(e);var $={layout:"book"},r=n(67),component=Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("section",{attrs:{title:"無限級数"}},[n("def",[n("p",[t._v("実数列 $\\{a_n\\}_{n\\in\\mathbb{N}}$ に関して、第 $i$ 項から第 $j$ 項までの和 $a_i+a_{i+1}+\\dots +a_j$ を $\\sum\\limits_{k=i}^ja_k$ と書き、"),n("term",[t._v("級数")]),t._v("という。")],1),t._v(" "),n("p",[t._v("級数の極限 $\\lim\\limits_{n\\to \\infty}\\sum\\limits_{k=1}^n a_k$ を"),n("term",[t._v("無限級数")]),t._v("といい、 $\\sum\\limits_{k=1}^\\infty a_k$ や $a_1+a_2+a_3+\\dots$ 等と書く。")],1)]),t._v(" "),n("l",{attrs:{title:"例"}},[t._v("無限小数 $0.a_1a_2a_3\\dots$ は無限級数として $\\sum_{k=1}^\\infty a_n10^n$ と書ける。 $10$ の代わりに $2$ 以上の自然数 $N$ を使えば、数の $N$ 進表記が得られる。")]),t._v(" "),n("l",{attrs:{title:"例"}},[t._v("$1+\\frac{1}{2}+\\frac{1}{3}+\\dots+\\frac{1}{n}+\\dots=\\infty$")]),t._v(" "),n("p",[t._v("無限級数の例には関数の級数展開があり、次の二つがよく使われる。")]),t._v(" "),n("block",{attrs:{title:"テイラー級数展開"}},[n("p",[t._v("実変数 $x$ に関する等式 $(1-x)(1+x+x^2+\\dots+x^{n-1})=1-x^n$ から、 $|x|\\lt 1$ の範囲に於いて次の等式が成立する。")]),t._v(" "),n("p",[t._v("$$\\frac{1}{1-x}=1+x+x^2+x^3+\\dots$$")]),t._v(" "),n("p",[t._v("上式の右辺が左辺のテイラー級数であり、関数 $[x\\mapsto \\frac{1}{1-x}]$ を「点 $0$ の近くに於いて」「 $x^n$ の和として」表している。典型的な場合に於いてテイラー級数は、対象の関数を「或る点の近くに於いて」「 $c_n\\cdot x^n$ （ $c_n$ は或る実数）の和として」表す。")])]),t._v(" "),n("block",{attrs:{title:"フーリエ級数展開"}},[n("p",[t._v("恒等関数 $[x\\mapsto x]: (-\\pi, \\pi)\\to \\mathbb{R}$ に関して、次の等式が成立する。")]),t._v(" "),n("p",[t._v("$$x=2\\left(\\sin{x}-\\frac{\\sin{2x}}{2}+\\frac{\\sin{3x}}{3}-\\dots\\right)$$")]),t._v(" "),n("p",[t._v("フーリエ級数は上式の右辺の様に、対象の関数を典型的には三角関数 $\\cos{nx}$ 、 $\\sin{nx}$ の無限級数として表す。テイラー級数展開が局所的なものであるのと対照的に、フーリエ級数展開の範囲は元の関数の定義域に一致する。ただし、元の関数の不連続点などに於いては例外が生じうる。")]),t._v(" "),n("p",[t._v("ちなみに、上記の等式に $x=\\frac{\\pi}{4}$ を代入すると、次のライプニッツの公式が得られる。")]),t._v(" "),n("p",[t._v("$$\\frac{\\pi}{2}=1-\\frac{1}{3}+\\frac{1}{5}-\\frac{1}{7}+\\dots$$")])]),t._v(" "),n("p",[t._v("関数の級数展開に関しては、次の問題がある。")]),t._v(" "),n("ol",[n("li",[t._v("級数は収束するか？")]),t._v(" "),n("li",[t._v("収束する場合、元の関数と一致するか？")])]),t._v(" "),n("p",[t._v("テイラー級数とフーリエ級数のいずれの場合に於いても、収束しない例や元の関数と一致しない例がある。")])],1),t._v(" "),n("section",{attrs:{title:"無限積"}},[n("def",[n("p",[t._v("実数列 $\\{a_n\\}_{n\\in\\mathbb{N}}$ に関して、第 $i$ 項から第 $j$ 項までの積 $a_i\\cdot a_{i+1}\\cdot \\dots \\cdot a_j$ を $\\prod\\limits_{k=i}^ja_k$ と書く。")]),t._v(" "),n("p",[t._v("積の極限 $\\lim\\limits_{n\\to \\infty}\\prod\\limits_{k=1}^n a_k$ を"),n("term",[t._v("無限積")]),t._v("といい、 $\\prod\\limits_{k=1}^\\infty a_k$ と書く。")],1)]),t._v(" "),n("p",[t._v("次の公式は紹介だけしておく。")]),t._v(" "),n("block",{attrs:{title:"ウォリスの公式"}},[n("p",[t._v("$$\\frac{\\pi}{2}=\\frac{2\\cdot 2}{1\\cdot 3}\\cdot\\frac{4\\cdot 4}{3\\cdot 5}\\cdot\\frac{6\\cdot 6}{5\\cdot 7}\\cdot\\dots$$")])])],1),t._v(" "),n("section",{attrs:{title:"絶対収束"}},[n("def",[n("p",[t._v("無限級数 $\\sum\\limits_{k=1}^\\infty a_k$ は、 $\\sum\\limits_{k=1}^\\infty |a_k|$ が収束するならば、"),n("term",[t._v("絶対収束")]),t._v("するという。")],1)]),t._v(" "),n("p",[t._v("絶対収束する数列は、比較的扱いやすい。例えば、項の順番を入れ替えても極限値は変わらない。")]),t._v(" "),n("thm",[n("p",[t._v("絶対収束する級数 $\\sum\\limits_{k=1}^\\infty a_k$ 、全単射 $\\varphi:\\mathbb{N}\\to\\mathbb{N}$ に関して、 $\\sum\\limits_{k=1}^\\infty a_{\\varphi(k)}$ は$\\sum\\limits_{k=1}^\\infty a_k$ と同じ値に絶対収束する。")])]),t._v(" "),n("p",[t._v("収束するが絶対収束しない場合、例えば、無限級数 $\\sum\\limits_{k=1}^\\infty\\frac{(-1)^k}{k}$ は、項の順序を入れ替えることでどの実数にも収束させることができる。具体的には、目標の実数 $a$ よりも大きくなるまで正の項を加え、その次は $a$ より小さくなるまで負の項を加え、...と繰り返せばよい。")]),t._v(" "),n("thm",[n("p",[t._v("収束する無限級数 $\\sum\\limits_{n=1}^\\infty a_n$ 、 $\\sum\\limits_{n=1}^\\infty b_n$ の少なくとも一方が絶対収束するならば、 $c_n:=\\sum\\limits_{k=1}^na_{k}b_{n-k+1}$ と定めると、無限級数 $\\sum\\limits_{n=1}^\\infty c_n$ は $\\sum\\limits_{n=1}^\\infty a_n$ と $\\sum\\limits_{n=1}^\\infty b_n$ の積に絶対収束する。")])]),t._v(" "),n("block",{attrs:{title:"例"}},[n("p",[t._v("$$\\left(\\sum\\limits_{n=0}^\\infty\\frac{x^n}{n!}\\right)\\cdot\\left(\\sum\\limits_{n=0}^\\infty\\frac{y^n}{n!}\\right)=\\sum\\limits_{n=0}^\\infty\\sum\\limits_{k=0}^n\\frac{x^ky^{n-k}}{k!(n-k)!}=\\sum\\limits_{n=0}^\\infty\\frac{(x+y)^n}{n!}$$")])])],1),t._v(" "),n("section",{attrs:{title:"収束の判定法"}},[n("p",[t._v("$1$ でない実数 $r$ に関して、 $1+r+r^2+\\dots+r^{n-1}=\\frac{1-r^n}{1-r}$ より、無限級数 $1+r+r^2+\\dots$ は $|r|\\lt 1$ ならば収束し、それ以外なら発散する。この種の収束判定法を二つ挙げる。")]),t._v(" "),n("thm",{attrs:{title:"冪根テスト"}},[n("p",[t._v("正の実数から成る無限級数  $\\sum\\limits_{n=1}^\\infty a_n$ は、次の値が $1$ よりも小さければ収束し、大きければ発散する。")]),t._v(" "),n("p",[t._v("$$\\limsup\\limits_{n\\to\\infty}\\sqrt[n]{a_n}$$")])]),t._v(" "),n("thm",{attrs:{title:"比率テスト"}},[n("p",[t._v("正の実数から成る無限級数 $\\sum\\limits_{n=1}^\\infty a_n$ は、次の値が $1$ よりも小さければ収束し、大きければ発散する。")]),t._v(" "),n("p",[t._v("$$\\lim\\limits_{n\\to \\infty}\\frac{a_{n+1}}{a_n}$$")])]),t._v(" "),n("p",[t._v("次の等式は、微分法の章でテイラーの定理を学べば証明できるが、全ての実数 $x$ に関して右辺が収束することはここで証明できる。")]),t._v(" "),n("p",[t._v("$$\\cos{x}=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\dots$$")]),t._v(" "),n("p",[t._v("$$\\sin{x}=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}+\\dots$$")]),t._v(" "),n("l",{attrs:{title:"注釈"}},[n("em",[t._v("上記をこれらの関数の定義とする立場もある。")]),t._v("三角関数 $\\cos{\\theta}$ 、 $\\sin{\\theta}$ とは、 $\\mathbb{R}^2$ に於いて単位円周上を点 $(1, 0)$ から反時計回りに $\\theta$ 移動した点の $x$ 座標と $y$ 座標のことだが、曲線の長さは積分を使って定義されるものだから、三角関数をこの方法で定義するのはもう少し後の段階にならないとできない。それに対して、上記の定義はここで導入できるという利点がある。しかし、その場合は円周との関係が非自明だから、積分論を構成した後に幾何学的な考察をする必要がある。")])],1),t._v(" "),n("section",{attrs:{title:"ネイピア数"}},[n("p",[t._v("「最も美しい数式は何か？」と問えば、オイラーの等式 $e^{i\\pi}+1=0$ が候補に挙がることが多い。 $e$ はネイピア数という。様々な方法で定義できる数であり、無限級数を使えば次の様に定義できる。")]),t._v(" "),n("def",[n("p",[t._v("実数 $\\sum\\limits_{n=0}^\\infty\\frac{1}{n!}$ を"),n("term",[t._v("ネイピア数")]),t._v("といい、 $e$ と書く。")],1)]),t._v(" "),n("p",[t._v("次の等式の左辺も $e$ の定義としてよく使われる。")]),t._v(" "),n("thm",[n("p",[t._v("$$\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n=\\sum_{n=0}^\\infty\\frac{1}{n!}$$")])]),t._v(" "),n("hint",[n("p",[t._v("$\\left(1+\\frac{1}{n}\\right)^n$ を $\\sum\\limits_{k=0}^n\\left[\\frac{1}{k!}\\prod\\limits_{i=0}^{k-1}\\left(1-\\frac{i}{n}\\right)\\right]$ と書いて $\\sum\\limits_{k=0}^n\\frac{1}{k!}$ と比較することで、 $\\limsup\\limits_{n\\to\\infty} \\left(1+\\frac{1}{n}\\right)^n\\leq e$ と $\\liminf\\limits_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n\\geq e$ を証明する。")])]),t._v(" "),n("p",[t._v("左辺の表現の用例を挙げる。")]),t._v(" "),n("block",{attrs:{title:"連続複利"}},[n("p",[t._v("資産運用の選択肢として、資金が1年後に元本の $r$ 倍増える投資と、半年後に元本の $\\frac{r}{2}$ 倍増える投資があるとする。 $c$ 円を1年間運用する場合、前者で $(1+r)c$ 円にするよりも、後者に半年投資して $(1+\\frac{r}{2})c$ 円にしてから、それを再投資して $(1+\\frac{r}{2})^2c$ 円にする方が利益は大きい。")]),t._v(" "),n("p",[t._v("一般に、 $\\frac{1}{n}$ 年後に元本の $(1+\\frac{r}{n})$ 倍を受け取れる投資を $n$ 回繰り返す場合の年利は、 $r$ が一定ならば $n$ が大きいほど大きく、上限 $\\lim\\limits_{n\\to\\infty}\\left(1+\\frac{r}{n}\\right)^n$ は $e^r$ に一致する。")])])],1),t._v(" "),n("section",{attrs:{title:"$\\exp$"}},[n("def",[n("p",[t._v("写像 $\\exp:\\mathbb{R}\\to\\mathbb{R}$ を次の対応によって定義する。")]),t._v(" "),n("p",[t._v("$$x\\mapsto \\sum\\limits_{n=0}^\\infty \\frac{x^n}{n!}$$")])]),t._v(" "),n("l",{attrs:{title:"注釈"}},[t._v("$x^0:=1$ 。")]),t._v(" "),n("thm",[n("p",[t._v("$$\\forall_{x\\in \\mathbb{R}}[\\exp{x}=e^x]$$")])]),t._v(" "),n("p",[t._v("指数関数 $[x\\mapsto a^x]$ の中でも $\\exp$ には特に重要性がある。")])],1),t._v(" "),n("section",{attrs:{title:"$\\log$"}},[n("def",[n("p",[t._v("$1$ でない正の実数 $a$ に関して、写像 $[a\\mapsto a^x]:\\mathbb{R}\\to\\mathbb{R}_{\\gt 0}$ の逆関数を $\\log_a$ と書き、 $a$ を"),n("term",[t._v("底")]),t._v("（てい）とする"),n("term",[t._v("対数関数")]),t._v("という。底が $e$ の場合は $\\log$ と書き、"),n("term",[t._v("自然対数")]),t._v("という。底が $10$ の場合は"),n("term",[t._v("常用対数")]),t._v("という。")],1)]),t._v(" "),n("l",{attrs:{title:"注釈"}},[t._v("$\\log_a(x)$ は $\\log_a x$ と書く。")]),t._v(" "),n("p",[t._v("次の定理も紹介だけしておく。")]),t._v(" "),n("block",{attrs:{title:"素数定理"}},[n("p",[t._v("自然数 $n$ に関して、 $n$ 以下の素数の個数を $\\pi(n)$ と書くと、次が成り立つ。")]),t._v(" "),n("p",[t._v("$$\\lim_{n\\to\\infty}\\frac{\\pi(n)\\log n}{n}=1$$")])]),t._v(" "),n("p",[t._v("つまり、$n$ 以下の自然数中の素数の割合 $\\frac{\\pi(n)}{n}$ は、 $n$ が大きい場合 $\\frac{1}{\\log{n}}$ に近い。")])],1),t._v(" "),n("section",{attrs:{title:"複素数"}},[n("def",[n("p",[n("term",[t._v("虚数単位")]),t._v("と呼ぶ記号 $i$ を用意し、実数 $a$ 、 $0$ でない実数 $b$ に関する $a+bi$ という形式を"),n("term",[t._v("虚数")]),t._v("という。虚数と実数を総称して"),n("term",[t._v("複素数")]),t._v("といい、全ての複素数から成る集合を $\\mathbb{C}$ と書く。")],1),t._v(" "),n("p",[t._v("複素数 $z$ を実数 $a$ と $b$ を使って $a+bi$ と書いた時、 $a$ を $z$ の"),n("term",[t._v("実部")]),t._v("といって $\\mathrm{Re}(z)$ と書き、 $b$ を $z$ の"),n("term",[t._v("虚部")]),t._v("といって $\\mathrm{Im}(z)$ と書く。")],1)]),t._v(" "),n("l",{attrs:{title:"注釈"}},[t._v("$a+0i$ は実数 $a$ を意味するものとして、複素数を一般に $a+bi$ と書く。 $a+bi$ は $a+ib$ とも書く。 $0+1i$ は略記として $i$ とも書く。")]),t._v(" "),n("l",{attrs:{title:"注釈"}},[n("em",[t._v("複素数の定義に哲学的な問題はない。")]),t._v("『虚数』（英語ではimaginary number）という名前は、本当は存在しない数であるという印象を与えるかもしれないが、複素数の定義の際に新たに導入されたのは記号 $i$ のみであり、その他に公理の追加等はない。また、 $\\mathbb{C}$ と $\\mathbb{R}^2$ の間には対応 $x+yi\\mapsto (x, y)$ による全単射があり、複素数に関する命題は実数の組に関する命題に変換できる。")]),t._v(" "),n("def",[n("p",[t._v("複素数 $a+ib$ 、 $c+id$ の加法と乗法を次の様に定義する。")]),t._v(" "),n("ul",[n("li",[t._v("$(a+ib)+(c+id):=(a+c)+i(b+d)$")]),t._v(" "),n("li",[t._v("$(a+ib)\\cdot (c+id):=(ac-bd)+i(bc+ad)$")])])]),t._v(" "),n("p",[t._v("$\\mathbb{C}$ は $\\mathbb{R}$ を含む体であり、 $i^2=-1$ が成り立つ。")]),t._v(" "),n("def",[n("p",[t._v("複素数 $z$ に対して、 $\\mathrm{Re}(z)-\\mathrm{Im}(z)i$ を $z$ の"),n("term",[t._v("複素共役")]),t._v("といい、 $\\overline{z}$ と書く。")],1)]),t._v(" "),n("def",[n("p",[t._v("複素数 $z$ に関して、 $\\sqrt{\\mathrm{Re}(z)^2 + \\mathrm{Im}(z)^2}$ を $z$ の"),n("term",[t._v("絶対値")]),t._v("といい、 $|z|$ と書く。")],1)]),t._v(" "),n("p",[t._v("$z$ が実数の場合は、実数としての絶対値と一致する。")]),t._v(" "),n("p",[t._v("次が成り立つ。")]),t._v(" "),n("ul",[n("li",[t._v("$|z|^2=z\\cdot \\overline{z}$")]),t._v(" "),n("li",[t._v("$\\overline{z+w}=\\overline{z}+\\overline{w}$")]),t._v(" "),n("li",[t._v("$\\overline{z\\cdot w}=\\overline{z}\\cdot\\overline{w}$")]),t._v(" "),n("li",[t._v("$|z+w|\\leq |z|+|w|$")])]),t._v(" "),n("def",[n("p",[t._v("$\\mathbb{C}$ 上の"),n("term",[t._v("距離関数")]),t._v(" $d$ を $d(z, w):=|z-w|$ と定義する。")],1)]),t._v(" "),n("p",[t._v("これに関しても三角不等式が成り立つ。実数列と同様に複素数列の収束や絶対収束が定義できて類似の定理が証明できる。また、全単射 $[x+iy\\mapsto (x, y)]:\\mathbb{C}\\to\\mathbb{R}^2$ は等距離写像。 $\\mathbb{R}^2$ に於いて全てのコーシー列は収束ことから、 $\\mathbb{C}$ に於いてもそれが成り立つ。")]),t._v(" "),n("p",[t._v("指数関数の無限級数表示 $e^x=\\sum\\limits_{n=0}^\\infty \\frac{x^n}{n!}$ の右辺は $x$ が複素数の場合にも収束する。その値を $e^x$ と定義する。 $\\cos x$ と $\\sin x$ も複素数 $x$ に関して定義できる。")]),t._v(" "),n("thm",{attrs:{title:"オイラーの公式"}},[n("p",[t._v("$$\\forall_{\\theta\\in\\mathbb{C}}[e^{i\\theta}=\\cos\\theta+i\\sin\\theta]$$")])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Term:n(388).default,Def:n(406).default,L:n(391).default,Block:n(381).default,Thm:n(395).default,Hint:n(410).default,Page:n(379).default})}}]);