(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6,7,9],{374:function($,t,e){var content=e(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[$.i,content,""]]),content.locals&&($.exports=content.locals);(0,e(8).default)("3d49dfa2",content,!0,{sourceMap:!1})},375:function($,t,e){var content=e(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[$.i,content,""]]),content.locals&&($.exports=content.locals);(0,e(8).default)("5deb079e",content,!0,{sourceMap:!1})},376:function($,t,e){"use strict";e.r(t);e(239),e(45),e(24),e(72),e(55),e(56);var n=e(238),r={mounted:function(){for(var $=this.$route.path.split("/").map((function($){return decodeURIComponent($)})),t=$[1],e=$.length>2?$[2]:t,r=[],_=0,l=Array.from(this.$el.getElementsByTagName("section"));_<l.length;_++){var section=l[_],o=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(o)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(o),h2.id=o,section.prepend(h2),r.push(o);for(var v=0,c=Array.from(section.children);v<c.length;v++){var d=c[v];"DIV"!==d.tagName&&(d.innerHTML=d.innerHTML.replace(/\$\$(.*?)\$\$/g,(function($,t){return n.renderToString(t,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function($,t){return n.renderToString(t,{displayMode:!1})})))}}this.$store.commit("setBookTitle",t),this.$store.commit("setPageInfo",{title:e,sections:r})}},_=e(54),component=Object(_.a)(r,(function(){var $=this,t=$.$createElement;return($._self._c||t)("article",[$._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},378:function($,t,e){"use strict";e(374)},379:function($,t,e){var n=e(7)(!1);n.push([$.i,".term[data-v-396e4c82]{font-weight:700}",""]),$.exports=n},380:function($,t,e){"use strict";e.r(t);e(238);var n={},r=(e(378),e(54)),component=Object(r.a)(n,(function(){var $=this,t=$.$createElement;return($._self._c||t)("span",{staticClass:"term"},[$._t("default")],2)}),[],!1,null,"396e4c82",null);t.default=component.exports},381:function($,t,e){"use strict";e(375)},382:function($,t,e){var n=e(7)(!1);n.push([$.i,".line[data-v-64a8e778]{display:flex;margin:1em 0}.line-title[data-v-64a8e778]{font-size:1em;font-weight:700;white-space:nowrap;margin:0 1em 0 0}",""]),$.exports=n},384:function($,t,e){var content=e(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[$.i,content,""]]),content.locals&&($.exports=content.locals);(0,e(8).default)("761e7802",content,!0,{sourceMap:!1})},385:function($,t,e){"use strict";e.r(t);e(24),e(55);var n=e(238),r={data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function($,t){return n.renderToString(t,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function($,t){return n.renderToString(t,{displayMode:!1})}))}},_=e(54),component=Object(_.a)(r,(function(){var $=this,t=$.$createElement,e=$._self._c||t;return e("div",{staticClass:"introduction"},[e("div",{domProps:{innerHTML:$._s($.content)}}),$._v(" "),e("div",{ref:"content",staticStyle:{display:"none"}},[$._t("default")],2)])}),[],!1,null,"ce34f5e0",null);t.default=component.exports},386:function($,t,e){"use strict";e.r(t);e(24),e(55);var n=e(238),r={props:["title"],data:function(){return{content:""}},mounted:function(){this.content=this.$refs.content.innerHTML.replace(/\$\$(.*?)\$\$/g,(function($,t){return n.renderToString(t,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function($,t){return n.renderToString(t,{displayMode:!1})}))},computed:{}},_=(e(381),e(54)),component=Object(_.a)(r,(function(){var $=this,t=$.$createElement,e=$._self._c||t;return e("div",{staticClass:"line"},[e("div",{staticClass:"line-title"},[$._v($._s($.title))]),$._v(" "),e("div",{staticClass:"line-content"},[e("p",{domProps:{innerHTML:$._s($.content)}})]),$._v(" "),e("div",{ref:"content",staticStyle:{display:"none"}},[$._t("default")],2)])}),[],!1,null,"64a8e778",null);t.default=component.exports},394:function($,t,e){"use strict";e(384)},395:function($,t,e){var n=e(7)(!1);n.push([$.i,".problem[data-v-08ee6042] .content-card{border-style:solid;border-width:1px}@media (prefers-color-scheme:dark){.problem[data-v-08ee6042] .content-card.v-card{background-color:#0f2350;border-color:grey}}@media (prefers-color-scheme:light){.problem[data-v-08ee6042] .content-card.v-card{background-color:#f8f4e6;border-color:grey}}",""]),$.exports=n},399:function($,t,e){"use strict";e.r(t);e(394);var n=e(54),component=Object(n.a)({},(function(){var $=this,t=$.$createElement;return($._self._c||t)("block",{staticClass:"problem",attrs:{title:"問題"}},[$._t("default")],2)}),[],!1,null,"08ee6042",null);t.default=component.exports;installComponents(component,{Block:e(377).default})},415:function($,t,e){"use strict";e.r(t);var n={layout:"book"},r=e(54),component=Object(r.a)(n,(function(){var $=this,t=$.$createElement,e=$._self._c||t;return e("page",{attrs:{title:"集合"}},[e("introduction",[e("p",[$._v("様々な数学的対象が集合として構成できる。例えば、図形を位置の集合と考えれば「原点を中心とする半径 $1$ の球面」は次の様に書ける。")]),$._v(" "),e("p",[$._v("$$\\{(x, y, z)\\in \\mathbb{R}^3| \\sqrt{x^2+y^2+z^2}=1\\}$$")]),$._v(" "),e("p",[$._v('人はこれまで、零、負の数、虚数など新しい種類の数を導入してきたが、集合論に基づく数学では、既存の物を素材に新しい物を作っていくので、存在公理を追加する必要が生じることは通常ない(例外には『全ての集合から成る集合』の様な"大きな"物がある)。')]),$._v(" "),e("p",[$._v("例えば、自然数は知っているが整数を知らない人に対して、零や負の数を教える場合、二つの自然数 $m, n$ に関する組 $(m, n)$ を整数 $m-n$ の代わりに使い、二つの組 $(m, n)$ と $(p, q)$ は条件 $m+q=p+n$ が成立つ場合に同一視することにすればよい。")]),$._v(" "),e("p",[$._v("現代数学は様々な数学的対象を集合として定義しながら進められる。")])]),$._v(" "),e("section",{attrs:{title:"集合"}},[e("p",[$._v("数学用語としての『集合』は、非公理的には「客体の集まりであって、個々の客体がその集まりに属するか否かが確定するもの」を意味する。")]),$._v(" "),e("p",[$._v("集合論の公理系には複数の選択肢がある。しかし、それらはここで説明するような基本機能を持つことを要件に設計された物だから、公理系の選択による差異は通常の数学では問題にならない。本書では特定の公理系を前提としない。")]),$._v(" "),e("def",[e("p",[$._v("客体 $e$ が集合 $S$ に属することを $e\\in S$ と書き、 $e$ は $S$ の"),e("term",[$._v("元")]),$._v("や"),e("term",[$._v("要素")]),$._v("であるという。その否定命題 $\\lnot(e\\in S)$ を $e\\notin S$ と書く。")],1)]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("先述の『集合』の非公理的な定義に於ける条件を論理式で書けば、 $e\\in S$ や $e\\notin S$ という命題が構成される場合には命題 $[e\\in S]\\vee [e\\notin S]$ が真でなければならないことを意味する。例えば「全ての大きな自然数から成る集合」は条件を満たさない。")]),$._v(" "),e("p",[$._v("基本的な集合には次のものがある。")]),$._v(" "),e("ul",[e("li",[$._v("全ての自然数から成る集合 $\\mathbb{N}$ ")]),$._v(" "),e("li",[$._v("全ての整数から成る集合 $\\mathbb{Z}$")]),$._v(" "),e("li",[$._v("全ての有理数から成る集合 $\\mathbb{Q}$")]),$._v(" "),e("li",[$._v("全ての実数から成る集合 $\\mathbb{R}$")]),$._v(" "),e("li",[$._v("全ての複素数から成る集合 $\\mathbb{C}$")])]),$._v(" "),e("p",[$._v("また、既存の集合 $A$ 、 $B$ を素材として $A\\cup B, A\\cap B, A-B, B^A, A\\times B, A\\coprod B$ 等の集合が構成できる。")]),$._v(" "),e("def",[e("p",[$._v("客体 $a_1, \\dots, a_n$ から成る集合を $\\{a_1, \\dots, a_n\\}$ と書く。")])]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("理由は後述するが、集合に元は重複しない。例えば集合 $\\{1, 1, 2\\}$ には見かけ上 $1$ が二つ含まれているが、 $\\{1, 2\\}$ に等しい。")]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("集合 $\\{1\\}$ は自然数 $1$ とは異なる。")]),$._v(" "),e("block",{attrs:{title:"量化"}},[e("p",[$._v("集合 $S$ 、 $S$ の変項 $x$ に関する命題 $P(x)$ に関して、次の二つの命題が構成できる。")]),$._v(" "),e("ul",[e("li",[$._v("$\\forall_{x: A}P(x)$ 、意味は「 $S$ の全ての元 $x$ に関して $P(x)$ が成り立つ」。")]),$._v(" "),e("li",[$._v("$\\exists_{x: A}P(x)$ 、意味は「 $S$ の或る元 $x$ に関して $P(x)$ が成り立つ」。")])]),$._v(" "),e("p",[$._v("他書では $\\forall_{x: A}P(x)$ を $\\forall x\\in A, P(x)$ 等と書くことが多い。$\\forall_{x: A}P(x)$ を $P(x)$ の全称量化、 $\\exists_{x: A}P(x)$ を存在量化という。")]),$._v(" "),e("p",[$._v("量化の範囲は集合に限らない。例えば、集合を表す記号 $\\text{Set}$ を導入して、「全ての集合 $x$ に関して、 $x=x$ が成り立つ」という意味の命題 $\\forall_{x: \\text{Set}}[x=x]$ を構成することができる。")])]),$._v(" "),e("block",{attrs:{title:"構成的な証明"}},[e("p",[$._v("命題 $\\exists_{x: A}P(x)$ の証明は、条件 $P(x)$ を満たす $x$ を必ずしも特定しない。条件を満たす $x$ を特定する証明は構成的であるという。以下に例示する。")]),$._v(" "),e("p",[$._v("命題：無理数 $p$ 、 $q$ であって $p^q$ が有理数であるものが存在する。")]),$._v(" "),e("p",[$._v("非構成的な証明： $\\sqrt{2}$ が無理数であることは既知とする。 $\\sqrt{2}^{\\sqrt{2}}$ は無理数か有理数かのどちらかだが、前者の場合は $(p, q):=(\\sqrt{2}, \\sqrt{2})$ が条件を満たし、後者の場合は $(p, q):=(\\sqrt{2}^{\\sqrt{2}}, \\sqrt{2})$ が条件を満たす。よって、条件を満たす $(p, q)$ は存在する。")]),$._v(" "),e("p",[$._v("構成的な証明： $\\sqrt{2}$ と $2\\log_{2}3$ は無理数。また、 $\\sqrt{2}^{2\\log_{2}3}$ は $3$ だから有理数。よって、 $(p, q):=(\\sqrt{2}, 2\\log_{2}3)$ が条件を満たす。")])]),$._v(" "),e("def",[e("p",[$._v("集合 $A$ 、 $B$ に関して、命題 $\\forall_{x: A}[x\\in B]$ を $A\\subseteq B$ と書き、「 $A$ は $B$ の"),e("term",[$._v("部分集合")]),$._v("」という。")],1),$._v(" "),e("p",[$._v("また、命題 $A\\subseteq B \\wedge B \\subseteq A$ を $A=B$ と書き、「 $A$ と $B$ は"),e("term",[$._v("同一")]),$._v("」等という。")],1)]),$._v(" "),e("l",{attrs:{title:"例"}},[$._v("$\\{1, 1, 2\\}=\\{1, 2\\}$")]),$._v(" "),e("def",[e("p",[$._v("有限個の客体から成る集合を"),e("term",[$._v("有限集合")]),$._v("といい、そうでない集合を"),e("term",[$._v("無限集合")]),$._v("という。")],1)]),$._v(" "),e("def",[e("p",[$._v("元が一つも存在しない集合 $\\emptyset$ を導入し、"),e("term",[$._v("空集合")]),$._v("という。")],1)]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("空集合は何かが集まって成立しているものではないという点で例外的な概念だが、これを導入することによって、二つの集合の共通部分などが例外なく集合と成る。空集合は理論の単純化の為に導入されるものと考えてよい。")]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("命題 $\\lnot\\exists_{x: \\emptyset} P(x)$ は、 $x\\in \\emptyset$ が偽だから真、故に命題 $\\forall_{x: \\emptyset}P(x)$ は真。")])],1),$._v(" "),e("section",{attrs:{title:"集合の構成（前半）"}},[e("def",[e("p",[$._v("集合 $X$ の全ての部分集合から成る集合を、 $X$ の"),e("term",[$._v("冪集合")]),$._v("といい $\\mathcal{P}(X)$ と書く。")],1)]),$._v(" "),e("problem",[e("p",[$._v("集合 $X$ の元の個数が $n$ の場合、集合 $\\mathcal{P}(X)$ の元の個数はいくつか？")])]),$._v(" "),e("def",[e("p",[$._v("$n$ 個の集合 $A_1, \\dots, A_n$ に関して、各 $A_i$ の或る元 $x_i$ から成る組 $(x_1, \\dots, x_n)$ 全体から成る集合を $A_1\\times \\dots\\times A_n$ と書き、 $A_1, \\dots, A_n$ の"),e("term",[$._v("直積")]),$._v("という。")],1),$._v(" "),e("p",[$._v("組の同一性 $(a_1, \\dots, a_n)=(b_1, \\dots, b_n)$ は $\\forall_{i:\\{1, \\dots, n\\}}[a_i=b_i]$ と定義する。")]),$._v(" "),e("p",[$._v("集合 $A$ の $n$ 個の直積 $A\\times\\dots\\times A$ を $A^n$ と書く。")])]),$._v(" "),e("p",[$._v("直積集合には次の例がある。")]),$._v(" "),e("block",{attrs:{title:"例: デカルト空間"}},[e("p",[$._v("$\\mathbb{R}^n$ を $n$ 次元デカルト空間という。我々のいる空間に原点と三本の座標軸を定めれば、空間内の位置と $\\mathbb{R}^3$ の元の間に一対一の対応が定まる。")])]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("『デカルト空間』の意味で『ユークリッド空間』と書かれることがあるが、『ユークリッド空間』は本来、原点や座標軸が設定される以前の空間をいう。")]),$._v(" "),e("block",{attrs:{title:"例: 関係"}},[e("p",[$._v("集合 $A$ の元の二項関係は $A^2$ の部分集合と一対一に対応する。二項関係 $R$ からは「条件 $R(x, y)$ を満たす全ての $(x, y)$ から成る $A^2$ の部分集合」が構成でき、逆に $A^2$ の部分集合 $S$ からは $A$ の変項 $x$ 、 $y$ の関係 $R$ を $R(x, y):=(x, y)\\in S$ で定義できる。")])]),$._v(" "),e("def",[e("p",[$._v("集合 $A$ 、 $A$ の変項 $x$ に関する命題 $P(x)$ に関して、 $A$ の部分集合 $S$ で条件 $\\forall_{x: A}[x\\in S\\Leftrightarrow P(x)]$ を満たすものを $\\{x\\in A|P(x)\\}$ と書く。")])]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("集合 $\\{s:  S|\\varphi(s)\\}$ は $s$ に構造がある場合は略記されることがある。例えば、集合 $\\{s\\in A\\times A|\\exists_{x:  A}\\exists_{y:  A}[s=(x, y)\\wedge x=y]\\}$ は $\\{(x, y)\\in A\\times A|x=y\\}$ 等と書かれる。")]),$._v(" "),e("p",[$._v('全ての $A$ と $P(x)$ に関して $\\forall_{x: A}[x\\in S\\Leftrightarrow P(x)]$ が存在するという命題を分出公理というが、これと"全ての集合から成る集合"から次の様に矛盾が構成できる。')]),$._v(" "),e("block",{attrs:{title:"ラッセルのパラドックス"}},[e("p",[$._v("全ての集合から成る集合を $\\mathbb{S}$ とする。分出公理により集合 $\\{x\\in \\mathbb{S}|x\\notin x\\}$ が存在する。これを $X$ と書く。 $X\\in X$ を仮定すれば $X\\notin X$ が導出できて仮定に矛盾、よって $X\\notin X$ が成り立つが、これから $X\\in X$ が導出できて $X\\in X$ に矛盾する。")])]),$._v(" "),e("p",[$._v('故に、通常の数学に於いては"全ての集合から成る集合"は禁忌とされる。その様な概念を使いたい場面、「クラス」等の類義語を導入して「全ての集合から成るクラス」のようにすることがある。')]),$._v(" "),e("def",[e("p",[$._v("集合 $A$ 、 $B$ に関して、次の様に定義する。")]),$._v(" "),e("ul",[e("li",[$._v("$A$ の元と $B$ の元全てから成る集合を $A$ と $B$ の"),e("term",[$._v("和集合")]),$._v("といい、 $A\\cup B$ と書く。")],1),$._v(" "),e("li",[$._v("$A$ の元 $x$ に関する組 $(x, 1)$ と $B$ の元 $x$ に関する組 $(x, 2)$ 全体から成る集合を $A$ と $B$ の"),e("term",[$._v("非交和集合")]),$._v("といい、 $A\\coprod B$ と書く。")],1),$._v(" "),e("li",[$._v("$A$ と $B$ の両方に含まれる元全てから成る集合を $A$ と $B$ の"),e("term",[$._v("共通部分")]),$._v("といい、 $A\\cap B$ と書く。命題 $A\\cap B\\neq\\emptyset$ を「 $A$ と $B$ は"),e("term",[$._v("交わる")]),$._v("」という。")],1),$._v(" "),e("li",[$._v("$A$ の元のうち $B$ に含まれないもの全てから成る集合を $A-B$ や $A\\backslash B$ と書き、"),e("term",[$._v("差集合")]),$._v("という。また、同じものを「 $A$ を"),e("term",[$._v("全体集合")]),$._v("とする $B$ の"),e("term",[$._v("補集合")]),$._v(" 」といって $B^c$ と書くことがある。")],1)])]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("非交和にはもう一つの意味がある。集合 $A$ を $A=A_1\\cup A_2$ と書く際、この和が非交和であるとは、 $A_1$ と $A_2$ が交わらないことをいう。")])],1),$._v(" "),e("section",{attrs:{title:"同値関係と商集合"}},[e("def",[e("p",[$._v("集合 $A$ 上の二項関係 $\\sim$ であって、次の条件1-3を満たすものを $A$ 上の"),e("term",[$._v("同値関係")]),$._v("という。")],1),$._v(" "),e("ol",[e("li",[$._v("【反射律】 $\\forall_{x: A}[x\\sim x]$")]),$._v(" "),e("li",[$._v("【対称律】 $\\forall_{x: A}\\forall_{y :  A}[x\\sim y \\Rightarrow y\\sim x]$")]),$._v(" "),e("li",[$._v("【推移律】 $\\forall_{x: A}\\forall_{y :  A}\\forall_{z: A}[(x \\sim y \\wedge y \\sim z) \\Rightarrow x \\sim z]$")])]),$._v(" "),e("p",[$._v("$a \\sim b$ となる元 $a$ と $b$ は $\\sim$ に関して"),e("term",[$._v("同値")]),$._v("であるという。 $A$ の元 $a$ に関して、集合 $\\{ x \\in A | a \\sim x\\}$ を $a$ の"),e("term",[$._v("同値類")]),$._v("といい $[a]$ と書く。 $A$ の元の同値類全体から成る集合を $A$ の $\\sim$ による"),e("term",[$._v("商集合")]),$._v("といい $A/\\sim$ と書く。写像 $[x \\mapsto [x]]: A \\to A/\\sim$ を"),e("term",[$._v("標準射影")]),$._v("という。")],1)]),$._v(" "),e("l",{attrs:{title:"注釈"}},[$._v("『写像』は"),e("nuxt-link",{attrs:{to:"写像"}},[$._v("次章")]),$._v("で説明。")],1),$._v(" "),e("p",[$._v("商集合には次の様な例がある。")]),$._v(" "),e("block",{attrs:{title:"代数系の商"}},[e("p",[$._v("$\\mathbb{Z}$ の元 $n$ に関して、 $n$ の倍数全てから成る集合を $n\\mathbb{Z}$ と書き、 $\\mathbb{Z}$ 上の同値関係を $[a\\sim b]:=[a-b \\in n\\mathbb{Z}]$ と定義して商集合 $\\mathbb{Z}/\\sim$ を作る。これを $\\mathbb{Z}/n\\mathbb{Z}$ と書く。")]),$._v(" "),e("p",[$._v("$\\mathbb{Z}/n\\mathbb{Z}$ にも加法や乗法が定義でき、 $n$ で割った余りを計算するのに使える。例えば $1234$ を $3$ で割った余りは、 $\\mathbb{Z}/3\\mathbb{Z}$ に於いて $[10]=[1]$ を使って、 $[1234]=[1*10^3+2*10^2+3*10+4]=[1]*[10]^3+[2]*[10]^2+[3]*[10]+[4]=[1]+[2]+[0]+[1]=[1]$ より $1$ だと分かる。")])]),$._v(" "),e("block",{attrs:{title:"図形の貼り合わせ"}},[e("p",[$._v("集合 $\\{x\\in \\mathbb{R}|0\\leq x\\leq 1\\}$ を $[0, 1]$ と書く。これは数直線上の $0$ と $1$ を端点とする線分と考えられる。 $[0, 1]$ 上の同値関係 $\\sim$ を「 $0$ と $1$ は同値、それ以外の元は自分自身とのみ同値」と定義し、商集合 $[0, 1]/\\sim$ を $S$ と書くことにする。")]),$._v(" "),e("p",[$._v('$S$ は線分 $[0, 1]$ を"端点で繋げた"図形であり、円周と似ている。例えば、 $S$ 上を正の方向に動く点 $P$ を観察すると、 $[0], [0.1], [0.2], \\dots, [0.8], [0.9]$ と進んでいき、 $[1]$ に到達したら $[0]$ に戻り、再び $[0.1], [0.2], \\dots$ と進む。これは円周上を回る点の動きに似ている。')]),$._v(" "),e("p",[$._v("同様にして、正方形 $ABCD$ の辺 $AB$ と $DC$ を同一視して円筒の様な集合を作ったり、さらに $AD$ と $BC$ を同一視してドーナツの表面の様な集合を作ったりすることができる。")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Introduction:e(385).default,Term:e(380).default,Def:e(398).default,L:e(386).default,Block:e(377).default,Problem:e(399).default,Page:e(376).default})}}]);