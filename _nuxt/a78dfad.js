(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5,6,7,9],{374:function(t,$,e){var content=e(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("3d49dfa2",content,!0,{sourceMap:!1})},375:function(t,$,e){var content=e(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("5deb079e",content,!0,{sourceMap:!1})},377:function(t,$,e){"use strict";e.r($);e(239),e(45),e(24),e(72),e(55),e(56);var r=e(238),n={mounted:function(){for(var t=this.$route.path.split("/").map((function(t){return decodeURIComponent(t)})),$=t[1],e=t.length>2?t[2]:$,n=[],l=0,o=Array.from(this.$el.getElementsByTagName("section"));l<o.length;l++){var section=o[l],f=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(f)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(f),h2.id=f,section.prepend(h2),n.push(f);for(var c=0,_=Array.from(section.children);c<_.length;c++){var v=_[c];"DIV"!==v.tagName&&(v.innerHTML=v.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,$){return r.renderToString($,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,$){return r.renderToString($,{displayMode:!1})})))}}this.$store.commit("setBookTitle",$),this.$store.commit("setPageInfo",{title:e,sections:n})}},l=e(54),component=Object(l.a)(n,(function(){var t=this,$=t.$createElement;return(t._self._c||$)("article",[t._t("default")],2)}),[],!1,null,null,null);$.default=component.exports},378:function(t,$,e){var content=e(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("5527a6d8",content,!0,{sourceMap:!1})},379:function(t,$,e){"use strict";e(374)},380:function(t,$,e){var r=e(7)(!1);r.push([t.i,".term[data-v-396e4c82]{font-weight:700}",""]),t.exports=r},381:function(t,$,e){"use strict";e.r($);e(238);var r={},n=(e(379),e(54)),component=Object(n.a)(r,(function(){var t=this,$=t.$createElement;return(t._self._c||$)("span",{staticClass:"term"},[t._t("default")],2)}),[],!1,null,"396e4c82",null);$.default=component.exports},382:function(t,$,e){"use strict";e(375)},383:function(t,$,e){var r=e(7)(!1);r.push([t.i,".line[data-v-64a8e778]{display:flex;margin:1em 0}.line-title[data-v-64a8e778]{font-size:1em;font-weight:700;white-space:nowrap;margin:0 1em 0 0}",""]),t.exports=r},384:function(t,$,e){"use strict";e.r($);e(24),e(55);var r=e(238),n={data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,$){return r.renderToString($,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,$){return r.renderToString($,{displayMode:!1})}))}},l=e(54),component=Object(l.a)(n,(function(){var t=this,$=t.$createElement,e=t._self._c||$;return e("div",{staticClass:"introduction"},[e("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),e("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"ce34f5e0",null);$.default=component.exports},385:function(t,$,e){"use strict";e.r($);e(24),e(55);var r=e(238),n={props:["title"],data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(t,$){return r.renderToString($,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(t,$){return r.renderToString($,{displayMode:!1})}))},computed:{}},l=(e(382),e(54)),component=Object(l.a)(n,(function(){var t=this,$=t.$createElement,e=t._self._c||$;return e("div",{staticClass:"line"},[e("div",{staticClass:"line-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"line-content"},[e("p",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),e("div",{ref:"content",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,"64a8e778",null);$.default=component.exports},386:function(t,$,e){var content=e(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("761e7802",content,!0,{sourceMap:!1})},387:function(t,$,e){"use strict";e(378)},388:function(t,$,e){var r=e(7)(!1);r.push([t.i,".theorem[data-v-e755e794] .content-card.v-card{border-style:double;border-width:3px}@media (prefers-color-scheme:dark){.theorem[data-v-e755e794] .content-card.v-card{background-color:#0f2350;border-color:silver}}@media (prefers-color-scheme:light){.theorem[data-v-e755e794] .content-card{background-color:#f8f4e6;border-color:silver}}",""]),t.exports=r},389:function(t,$,e){"use strict";e.r($);var r={props:["title"]},n=(e(387),e(54)),component=Object(n.a)(r,(function(){var t=this,$=t.$createElement;return(t._self._c||$)("block",{staticClass:"theorem",attrs:{title:this.title||"定理"}},[t._t("default")],2)}),[],!1,null,"e755e794",null);$.default=component.exports;installComponents(component,{Block:e(376).default})},392:function(t,$,e){"use strict";e(386)},393:function(t,$,e){var r=e(7)(!1);r.push([t.i,".problem[data-v-08ee6042] .content-card{border-style:solid;border-width:1px}@media (prefers-color-scheme:dark){.problem[data-v-08ee6042] .content-card.v-card{background-color:#0f2350;border-color:grey}}@media (prefers-color-scheme:light){.problem[data-v-08ee6042] .content-card.v-card{background-color:#f8f4e6;border-color:grey}}",""]),t.exports=r},395:function(t,$,e){"use strict";e.r($);e(392);var r=e(54),component=Object(r.a)({},(function(){var t=this,$=t.$createElement;return(t._self._c||$)("block",{staticClass:"problem",attrs:{title:"問題"}},[t._t("default")],2)}),[],!1,null,"08ee6042",null);$.default=component.exports;installComponents(component,{Block:e(376).default})},420:function(t,$,e){"use strict";e.r($);var r={layout:"book"},n=e(54),component=Object(n.a)(r,(function(){var t=this,$=t.$createElement,e=t._self._c||$;return e("page",[e("introduction",[e("p",[t._v("動点の位置関数を微分すると速度関数に成り、速度関数を微分すると加速度関数に成る。")]),t._v(" "),e("p",[t._v("質量関数を微分すると密度関数になる。")]),t._v(" "),e("p",[t._v("ニュートンの運動方程式など、物理学の基礎方程式には微分を使って書かれるものが多く、微分は物理学をやり上で重要なリテラシーだ。")])]),t._v(" "),e("section",{attrs:{title:"連続的な極限"}},[e("problem",[e("p",[t._v("関数 $[x\\mapsto x^3]:\\mathbb{R}\\to\\mathbb{R}$ のグラフの点 $(p, p^3)$ に於ける接線の方程式を求めよ。")])]),t._v(" "),e("p",[t._v("点 $(p, p^3)$ を通る直線は、傾きを $a$ とすると $y-p^3=a(x-p)$ と書けるから、傾きを求めればよい。 $p$ とは異なる実数 $x$ に関して、二点 $(p, p^3)$ 、 $(x, x^3)$ を通る直線の傾きは $\\frac{x^3-p^3}{x-p}$ 、つまり $x^2+px+p^2$ に一致する。曲線上、点 $(x, x^3)$ を $(p, p^3)$ に近づけていくと、二点を通る直線は接線に近づいていき、 $x^2+px+p^2$ は接線の傾きに近づく。故に、接線の傾きは $3p^2$ と導出される。")]),t._v(" "),e("p",[t._v("この計算の注意点は、初めに商 $\\frac{x^3-p^3}{x-p}$ を構成する為に $x\\neq p$ を仮定したのだから、最後に $x:=p$ とはできないことだ。そこで、 $x$ を「 $p$ と一致しないようにしながら、限りなく $p$ に近づけていく」という操作を表す論理式を用意する。")]),t._v(" "),e("p",[t._v("次の概念は $x$ を近づけていく目標に関わる。")]),t._v(" "),e("def",[e("p",[t._v("$\\mathbb{R}$ の部分集合 $X$ 、点 $p$ に関して、 $p$ を含む全ての開集合が $X$ と交わるならば、 $p$ は $X$ の"),e("term",[t._v("集積点")]),t._v("という。")],1)]),t._v(" "),e("p",[t._v("集積点 $p$ のどれほど近くにも $X$ の点が存在するから、 $X$ の点を $p$ に限りなく近づける極限を考えることができる。。")]),t._v(" "),e("def",[e("p",[t._v("$\\mathbb{R}$ の部分集合の間の写像 $f:X\\to Y$ 、 $\\mathbb{R}$ に於ける $X$ の集積点 $p$ 、 $Y$ の実数 $L$ に関して、「 $f$ は $x\\to p$ の極限で $L$ に"),e("term",[t._v("収束")]),t._v("する」とは、次の条件が成り立つことをいう。")],1),t._v(" "),e("p",[t._v("$$\\forall_{\\varepsilon : \\mathbb{R}_{\\gt 0}}\\exists_{\\delta : \\mathbb{R}_{\\gt0}}\\forall_{x : X}[0\\lt |x- p|\\lt \\delta\\Rightarrow |f(x)- L|\\lt \\varepsilon]$$")]),t._v(" "),e("p",[t._v("これが成り立つならば、 $L$ を $x\\to p$ に於ける $f(x)$ の"),e("term",[t._v("極限")]),t._v("といい、 $\\lim\\limits_{x\\to p}f(x)$ と書く。")],1)]),t._v(" "),e("p",[t._v("先述の例では、接線の傾きを $\\lim\\limits_{x\\to p}\\frac{x^3-p^3}{x-p}$ とした上で、 $\\lim\\limits_{x\\to p}(x^2+px+p^2)=3p^2$ と計算した。この等式を定義通りに証明するならば、 $|x^p+px+p^2-3p^2|$ を $|(x-p)(x+2p)|$ と整理し、この値が $\\varepsilon$ より小さくなるには $|x-p|$ がどれほど小さければよいかを考え、その答えを $\\delta$ とする。しかし、 $x:=p$ として計算してよいことが次の定理から分かる。")]),t._v(" "),e("thm",[e("p",[t._v("$\\mathbb{R}$ の部分集合の間の写像 $f:X\\to Y$ 、 $X$ の点 $p$ に関して、次の命題1-2は同値。")]),t._v(" "),e("ol",[e("li",[t._v("$f$ は $p$ で連続。")]),t._v(" "),e("li",[t._v("$\\lim\\limits_{x\\to p}f(x)=f(p)$")])])])],1),t._v(" "),e("section",{attrs:{title:"微分"}},[e("def",[e("p",[t._v("$\\mathbb{R}$ の開集合 $D$ 、関数 $f:D\\to \\mathbb{R}$ 、 $D$ の点 $p$ に関して、 $f$ が $p$ で"),e("term",[t._v("微分可能")]),t._v("とは、次の極限値が存在することをという。")],1),t._v(" "),e("p",[t._v("$$\\lim\\limits_{h\\to0}\\frac{f(p+h)-f(p)}{h}$$")]),t._v(" "),e("p",[t._v("この値を $f$ の $p$ での"),e("term",[t._v("微分係数")]),t._v("という。")],1),t._v(" "),e("p",[t._v("$D$ の全ての点で微分可能ならば $f$ は"),e("term",[t._v("微分可能")]),t._v("という。その場合、写像 $\\left[x\\mapsto \\lim\\limits_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\right]:D\\to\\mathbb{R}$ を $f$ の"),e("term",[t._v("導関数")]),t._v("といい $f'$ と書く。")],1),t._v(" "),e("p",[t._v("$f$ を $n$ 回微分して得られる導関数を $f$ の $n$ "),e("term",[t._v("階導関数")]),t._v("といい、 $f^{(n)}$ と書く。 $f^{(n)}$ が存在し連続であるならば、 $f$ は $C^n$ "),e("term",[t._v("級")]),t._v("であるという。何回でも微分可能な場合は $C^\\infty$ "),e("term",[t._v("級")]),t._v("であるという。")],1)]),t._v(" "),e("l",{attrs:{title:"注釈"}},[t._v("$f'$ は $\\frac{\\mathrm{d}f}{\\mathrm{d}x}$ 等と書くことがある。また、 $C^0$ 級とは連続関数であることとする。")]),t._v(" "),e("p",[t._v("$f(t)$ を時刻 $t$ に於ける動点 $P$ の位置と考えるならば、 $f'(t)$ と $f''(t)$ は時刻 $t$ に於ける $P$ の速度と加速度を表す。")]),t._v(" "),e("p",[t._v("また、関数 $f:\\mathbb{R}\\to\\mathbb{R}$ のグラフを $F$ とすると、 $f'(t)$ は点 $(t, f(t))$ に於ける $F$ の接線の傾きに一致する。故に、微分可能性は接線が定まるか否かで視覚的に予想できる。例えば関数 $[x\\mapsto |x|]:\\mathbb{R}\\to\\mathbb{R}$ のグラフは点 $(0, 0)$ に角があり、その点では接線が定まらないから、この関数は $0$ に於いて微分可能でない。また、連続でない関数は不連続点に於いて微分可能でない。")]),t._v(" "),e("p",[t._v("計算例：")]),t._v(" "),e("ul",[e("li",[t._v("$\\forall m\\in\\mathbb{Z}\\backslash\\{0\\}.[(x^m)'=mx^{m-1}]$")]),t._v(" "),e("li",[t._v("$(e^x)'=(e^x)$")]),t._v(" "),e("li",[t._v("$(a^x)=(\\log a)\\cdot a^x$")]),t._v(" "),e("li",[t._v("$(\\log x)'=\\frac{1}{x}$")])]),t._v(" "),e("thm",[e("p",[t._v("$\\mathbb{R}$ の開集合の間の微分可能な関数 $f:U\\to V$ 、 $g:U\\to V$ に関して、次の命題1-3が成り立つ。")]),t._v(" "),e("ol",[e("li",[t._v("$(g\\circ f)'=(g'\\circ f)\\cdot f'$")]),t._v(" "),e("li",[t._v("$(f+g)'=f'+g'$")]),t._v(" "),e("li",[t._v("$(fg)'=f'\\cdot g+f\\cdot g'$")])]),t._v(" "),e("p",[t._v("また、 $f:U\\to V$ が全単射で条件 $\\forall_{x : U} [f(x)\\neq 0]$ が満たされる場合、 $f^{-1}:V\\to U$ は微分可能であり、 ${f^{-1}}'=\\frac{1}{f'\\circ f^{-1}}$ が成り立つ。")])]),t._v(" "),e("l",{attrs:{title:"系"}},[t._v("$\\left(\\frac{f}{g}\\right)'=\\frac{f'\\cdot g-f\\cdot g'}{g^2}$")]),t._v(" "),e("p",[t._v("比喩的には、合成関数の微分は $\\frac{\\mathrm{d}z}{\\mathrm{d}x}=\\frac{\\mathrm{d}z}{\\mathrm{d}y}\\cdot \\frac{\\mathrm{d}y}{\\mathrm{d}x}$ 、逆関数の微分は $\\frac{\\mathrm{d}x}{\\mathrm{d}y}=\\frac{1}{\\frac{\\mathrm{d}y}{\\mathrm{d}x}}$ と書ける。")]),t._v(" "),e("p",[t._v("これらの公式によって、構造のある関数の微分は素材の関数の微分から計算できる。")])],1),t._v(" "),e("section",{attrs:{title:"平均値の定理"}},[e("thm",{attrs:{title:"ロルの定理"}},[e("p",[t._v("開区間 $(a, b)$ に於いて微分可能な連続関数 $f:[a, b]\\to \\mathbb{R}$ に関して、条件 $f(a)=f(b)$ が満たされる場合、次が成り立つ。")]),t._v(" "),e("p",[t._v("$$\\exists c\\in (a, b).[f'(c)=0]$$")])]),t._v(" "),e("p",[t._v("系として、次の二つの定理が得られる。")]),t._v(" "),e("block",{attrs:{title:"平均値の定理"}},[e("p",[t._v("開区間 $(a, b)$ に於いて微分可能な連続関数 $f:[a, b]\\to \\mathbb{R}$ に関して、次が成り立つ。")]),t._v(" "),e("p",[t._v("$$\\exists_{c\\in (a, b)}\\left[f'(c)=\\frac{f(b)-f(a)}{b-a}\\right]$$")])]),t._v(" "),e("block",{attrs:{title:"コーシーの平均値の定理"}},[e("p",[t._v("開区間 $(a, b)$ に於いて微分可能な二つの連続写像 $f:[a, b]\\to \\mathbb{R}$ 、 $g:[a, b]\\to \\mathbb{R}$ に関して、次が成り立つ。")]),t._v(" "),e("p",[t._v("$$\\exists_{c\\in (a, b)}[(g(b)-g(a))f'(c)-(f(b)-f(a))g'(c)=0]$$")])]),t._v(" "),e("p",[t._v("上記の式は、 $g(b)-g(a)\\neq 0$ かつ $g'(c)\\neq 0$ の場合、 $\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(c)}{g'(c)}$ と整理できる。")]),t._v(" "),e("thm",[e("p",[t._v("微分可能関数 $f:(a, b)\\to \\mathbb{R}$ に関して、次の命題1-3が成り立つ。")]),t._v(" "),e("ol",[e("li",[t._v("条件 $\\forall_{x\\in (a, b)}[f'(x)\\gt0]$ が成り立つならば、 $f$ は狭義単調増加。")]),t._v(" "),e("li",[t._v("条件 $\\forall_{x\\in (a, b)}[f'(x)\\lt0]$ が成り立つならば、 $f$ は狭義単調減少。")]),t._v(" "),e("li",[t._v("条件 $\\forall_{x\\in (a, b)}[f'(x)=0]$ が成り立つならば、 $f$ は定数関数。")])])]),t._v(" "),e("thm",{attrs:{title:"ロピタルの定理"}},[e("p",[t._v("実数 $c$ 、 $c$ を含む開区間 $I$ 、写像 $f:I\\to \\mathbb{R}$ 、 $g:I\\to\\mathbb{R}$ が次の条件1-4を満たすとする。")]),t._v(" "),e("ol",[e("li",[t._v("$f$ と $g$ は $I\\backslash\\{c\\}$ に於いて微分可能。")]),t._v(" "),e("li",[t._v("$\\forall x\\in I\\backslash\\{c\\}. [g'(x)\\neq 0]$")]),t._v(" "),e("li",[t._v("極限 $\\lim\\limits_{x\\to c}\\frac{f'(x)}{g'(x)}$ が収束する。")]),t._v(" "),e("li",[t._v("$\\lim\\limits_{x\\to c} |f(x)|=\\lim\\limits_{x\\to c}|g(x)|=0$ 、または $\\lim\\limits_{x\\to c}|g(x)|=\\infty$ 。")])]),t._v(" "),e("p",[t._v("この場合、次が成り立つ。")]),t._v(" "),e("p",[t._v("$$\\lim\\limits_{x\\to c}\\frac{f(x)}{g(x)}=\\lim\\limits_{x\\to c}\\frac{f'(x)}{g'(x)}$$")])]),t._v(" "),e("l",{attrs:{title:"注釈"}},[t._v("条件2により、 $c$ を含み $U$ に含まれる或る開区間 $V$ に関して $\\forall_{x\\in V\\backslash\\{c\\}}[g(x)\\neq 0]$ が成り立つ。上記の極限は $V\\backslash\\{c\\}$ に於けるもの。")]),t._v(" "),e("p",[t._v("また、この定理は $x\\to \\infty$ や $x\\to -\\infty$ の場合にも一般化できる。")])],1),t._v(" "),e("section",{attrs:{title:"テイラーの定理"}},[e("p",[t._v("微分の定義により関数 $f$ は微分可能な点 $a$ の近くでは一次の多項式 $f(a)+f'(x-a)$ で近似できる。より高精度に近似するには高次の多項式を使えばよい。")]),t._v(" "),e("def",[e("p",[t._v("$\\mathbb{R}$ の開区間 $I$ 点 $a$ に於いて $n$ 回微分可能な関数 $f:I\\to\\mathbb{R}$ に関して、次の多項式を $f$ の $a$ に於ける $n$ 次"),e("term",[t._v("テイラー多項式")]),t._v("という。")],1),t._v(" "),e("p",[t._v("$$\\sum_{k=0}^n\\frac{f^{(k)}(a)}{k!}(x-a)^k$$")]),t._v(" "),e("p",[t._v("また、 $f$ からこれを引いたものを"),e("term",[t._v("剰余項")]),t._v("という。")],1)]),t._v(" "),e("p",[t._v("$f$ の $a$ に於ける $n$ 次テイラー多項式は点 $a$ に於ける $n$ 回までの全ての導関数が $f$ のそれと一致する。")]),t._v(" "),e("thm",{attrs:{title:"テイラーの定理"}},[e("p",[t._v("$\\mathbb{R}$ の開区間 $I$ に於いて $n$ 回微分可能な関数 $f:I\\to\\mathbb{R}$ 、 $I$ の点 $a$ に於ける $f$ の $n$ 次テイラー多項式 $T$ に関して、次が成り立つ。")]),t._v(" "),e("p",[t._v("$$\\lim_{x\\to a}\\frac{f(x)-T(x)}{(x-a)^n}=0$$")])]),t._v(" "),e("l",{attrs:{title:"注釈"}},[t._v("テイラーの定理には前提条件や結論が異なるいくつかの変種がある。")]),t._v(" "),e("p",[t._v('つまり、 $x$ を $a$ に近づけていけば剰余項は $(x-a)^n$ よりも"速く" $0$ に近づく。しかし、これだけでは剰余項を正数 $\\epsilon$ よりも小さくするには $x$ を $a$ にどれだけ近づければよいかや $n$ をどれだけ大きくすればよいかが分からない。剰余項の評価には次の定理が使える。')]),t._v(" "),e("thm",[e("p",[t._v("$\\mathbb{R}$ の開区間 $I$ に於いて $(n+1)$ 回微分可能な関数 $f:I\\to\\mathbb{R}$ 、 $I$ の点 $a$ に於ける $f$ の $n$ 次テイラー多項式 $T$ 、 $I$ の点 $b$ に関して、次が成り立つ。")]),t._v(" "),e("p",[t._v("$$\\exists_{\\theta\\in (0, 1)}\\left[f(b)-T(b)=\\frac{f^{(n+1)}(a+\\theta(b-a))}{(n+1)!}(b-a)^{n+1}\\right]$$")])]),t._v(" "),e("block",{attrs:{title:"誤差の評価"}},[e("p",[t._v("ネイピア数 $e$ を $\\sum\\limits_{k=0}^n\\frac{1}{k!}$ で近似する場合の誤差を評価する。区間 $(0, 1)$ に属す或る実数 $\\theta$ に関して、次が成り立つ。")]),t._v(" "),e("p",[t._v("$$e-\\sum_{k=0}^n\\frac{1}{k!}=\\frac{e^\\theta}{(n+1)!}$$")]),t._v(" "),e("p",[t._v("$e^\\theta\\lt 3$ だから誤差は $\\frac{3}{(n+1)!}$ よりも小さい。")])]),t._v(" "),e("def",[e("p",[t._v("点 $a$ を含む或る開区間に於いて $C^\\infty$ 級である関数 $f$ に関して、次の形式的無限級数を $f$ の"),e("term",[t._v("テイラー級数")]),t._v("という。")],1),t._v(" "),e("p",[t._v("$$\\sum_{k=0}^\\infty\\frac{f^{(k)}(a)}{k!}(x-a)^k$$")])]),t._v(" "),e("p",[t._v("テイラー級数は必ずしも収束せず、収束しても $f$ に一致するとは限らない。 $f$ が或る開区間 $I$ に於いて $")])],1),t._v(" "),e("section",{attrs:{title:"テイラー展開"}}),t._v(" "),e("section",{attrs:{title:"複素微分"}})],1)}),[],!1,null,null,null);$.default=component.exports;installComponents(component,{Introduction:e(384).default,Problem:e(395).default,Term:e(381).default,Def:e(394).default,Thm:e(389).default,L:e(385).default,Block:e(376).default,Page:e(377).default})}}]);