(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8],{364:function(e,t,n){"use strict";n.r(t);n(9),n(56),n(35),n(66),n(51),n(39),n(65);var r=n(234),o={mounted:function(){var e=this.$route.path.split("/").map((function(e){return decodeURIComponent(e)})).filter((function(e){return""!==e})),t=e[0],n=e[e.length-1];2==e.length&&(n+="： 序");for(var o=[],l=0,c=Array.from(this.$el.getElementsByTagName("section"));l<c.length;l++){var section=c[l],d=section.getAttribute("title"),h2=document.createElement("h2"),a=document.createElement("a");a.setAttribute("href","#".concat(d)),a.setAttribute("aria-hidden","true"),a.setAttribute("tab-index","-1");var span=document.createElement("span");span.className="icon",a.append(span),h2.append(a),h2.append(d),h2.id=d,section.prepend(h2),o.push(d);for(var f=0,m=Array.from(section.children);f<m.length;f++){var h=m[f];"DIV"!==h.tagName&&(h.innerHTML=h.innerHTML.replace(/\$\$(.*?)\$\$/g,(function(e,t){return r.renderToString(t,{displayMode:!0})})).replace(/\$(.*?)\$/g,(function(e,t){return r.renderToString(t,{displayMode:!1})})))}}this.$store.commit("setBookTitle",t),this.$store.commit("setPageInfo",{title:n,sections:o})}},l=n(64),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("article",[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},396:function(e,t,n){"use strict";n.r(t);var r={layout:"book"},o=n(64),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("page")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Page:n(364).default})}}]);