(this.webpackJsonpmiral=this.webpackJsonpmiral||[]).push([[23],{1068:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={children:u.a.node,className:u.a.string,listClassName:u.a.string,cssModule:u.a.object,size:u.a.string,tag:E.p,listTag:E.p,"aria-label":u.a.string},i=function(e){var a,t=e.className,r=e.listClassName,s=e.cssModule,u=e.size,m=e.tag,d=e.listTag,i=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),g=Object(E.l)(o()(t),s),f=Object(E.l)(o()(r,"pagination",((a={})["pagination-"+u]=!!u,a)),s);return c.a.createElement(m,{className:g,"aria-label":i},c.a.createElement(d,Object(l.a)({},b,{className:f})))};i.propTypes=d,i.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=i},1069:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={active:u.a.bool,children:u.a.node,className:u.a.string,cssModule:u.a.object,disabled:u.a.bool,tag:E.p},i=function(e){var a=e.active,t=e.className,r=e.cssModule,s=e.disabled,u=e.tag,m=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(E.l)(o()(t,"page-item",{active:a,disabled:s}),r);return c.a.createElement(u,Object(l.a)({},m,{className:d}))};i.propTypes=d,i.defaultProps={tag:"li"},a.a=i},1070:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={"aria-label":u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,next:u.a.bool,previous:u.a.bool,first:u.a.bool,last:u.a.bool,tag:E.p},i=function(e){var a,t=e.className,r=e.cssModule,s=e.next,u=e.previous,m=e.first,d=e.last,i=e.tag,b=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),g=Object(E.l)(o()(t,"page-link"),r);u?a="Previous":s?a="Next":m?a="First":d&&(a="Last");var f,p=e["aria-label"]||a;u?f="\u2039":s?f="\u203a":m?f="\xab":d&&(f="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),b.href||"a"!==i||(i="button"),(u||s||m||d)&&(v=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||f),c.a.createElement("span",{className:"sr-only",key:"sr"},p)]),c.a.createElement(i,Object(l.a)({},b,{className:g,"aria-label":p}),v)};i.propTypes=d,i.defaultProps={tag:"a"},a.a=i},859:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},863:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={tag:E.p,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool},i=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,s=e.tag,u=e.form,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(E.l)(o()(a,r?"no-gutters":null,u?"form-row":"row"),t);return c.a.createElement(s,Object(l.a)({},m,{className:d}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},864:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(859),c=t.n(r),s=t(3),u=t.n(s),m=t(107),o=t.n(m),E=t(856),d=t.n(E),i=t(857),b=o.a.oneOfType([o.a.number,o.a.string]),g=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:b,offset:b})]),f={tag:i.p,xs:g,sm:g,md:g,lg:g,xl:g,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,s=e.tag,m=Object(n.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,l){var n=e[a];if(delete m[a],n||""===n){var r=!l;if(c()(n)){var s,u=r?"-":"-"+a+"-",E=v(r,a,n.size);o.push(Object(i.l)(d()(((s={})[E]=n.size||""===n.size,s["order"+u+n.order]=n.order||0===n.order,s["offset"+u+n.offset]=n.offset||0===n.offset,s)),t))}else{var b=v(r,a,n);o.push(b)}}})),o.length||o.push("col");var E=Object(i.l)(d()(a,o),t);return u.a.createElement(s,Object(l.a)({},m,{className:E}))};h.propTypes=f,h.defaultProps=p,a.a=h},866:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={tag:E.p,inverse:u.a.bool,color:u.a.string,body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},i=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.body,u=e.inverse,m=e.outline,d=e.tag,i=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(E.l)(o()(a,"card",!!u&&"text-white",!!s&&"card-body",!!r&&(m?"border":"bg")+"-"+r),t);return c.a.createElement(d,Object(l.a)({},b,{className:g,ref:i}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},867:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={tag:E.p,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},i=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,s=e.tag,u=Object(n.a)(e,["className","cssModule","innerRef","tag"]),m=Object(E.l)(o()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},u,{className:m,ref:r}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},868:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={tag:E.p,className:u.a.string,cssModule:u.a.object},i=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),u=Object(E.l)(o()(a,"card-header"),t);return c.a.createElement(r,Object(l.a)({},s,{className:u}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},875:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={color:u.a.string,pill:u.a.bool,tag:E.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),children:u.a.node,className:u.a.string,cssModule:u.a.object},i=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.innerRef,u=e.pill,m=e.tag,d=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),i=Object(E.l)(o()(a,"badge","badge-"+r,!!u&&"badge-pill"),t);return d.href&&"span"===m&&(m="a"),c.a.createElement(m,Object(l.a)({},d,{className:i,ref:s}))};i.propTypes=d,i.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=i},906:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),u=t.n(s),m=t(856),o=t.n(m),E=t(857),d={className:u.a.string,cssModule:u.a.object,size:u.a.string,bordered:u.a.bool,borderless:u.a.bool,striped:u.a.bool,dark:u.a.bool,hover:u.a.bool,responsive:u.a.oneOfType([u.a.bool,u.a.string]),tag:E.p,responsiveTag:E.p,innerRef:u.a.oneOfType([u.a.func,u.a.string,u.a.object])},i=function(e){var a=e.className,t=e.cssModule,r=e.size,s=e.bordered,u=e.borderless,m=e.striped,d=e.dark,i=e.hover,b=e.responsive,g=e.tag,f=e.responsiveTag,p=e.innerRef,v=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(E.l)(o()(a,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!u&&"table-borderless",!!m&&"table-striped",!!d&&"table-dark",!!i&&"table-hover"),t),N=c.a.createElement(g,Object(l.a)({},v,{ref:p,className:h}));if(b){var j=Object(E.l)(!0===b?"table-responsive":"table-responsive-"+b,t);return c.a.createElement(f,{className:j},N)}return N};i.propTypes=d,i.defaultProps={tag:"table",responsiveTag:"div"},a.a=i},973:function(e,a,t){"use strict";t.r(a);var l=t(221),n=t(222),r=t(224),c=t(223),s=t(3),u=t.n(s),m=t(863),o=t(864),E=t(866),d=t(868),i=t(867),b=t(906),g=t(875),f=t(1068),p=t(1069),v=t(1070),h=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,u.a.createElement(o.a,{xs:"12",lg:"6"},u.a.createElement(E.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Simple Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Samppa Nori"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Estavan Lykos"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Chetan Mohamed"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Derick Maximinus"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Friderik D\xe1vid"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(f.a,null,u.a.createElement(p.a,null,u.a.createElement(v.a,{previous:!0,tag:"button"})),u.a.createElement(p.a,{active:!0},u.a.createElement(v.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(v.a,{next:!0,tag:"button"})))))),u.a.createElement(o.a,{xs:"12",lg:"6"},u.a.createElement(E.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Striped Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0,striped:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Yiorgos Avraamu"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Avram Tarasios"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Quintin Ed"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"En\xe9as Kwadwo"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Agapetus Tade\xe1\u0161"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(f.a,null,u.a.createElement(p.a,{disabled:!0},u.a.createElement(v.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(v.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(v.a,{next:!0,tag:"button"},"Next"))))))),u.a.createElement(m.a,null,u.a.createElement(o.a,{xs:"12",lg:"6"},u.a.createElement(E.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Condensed Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0,size:"sm"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Carwyn Fachtna"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Nehemiah Tatius"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Ebbe Gemariah"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Eustorgios Amulius"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Leopold G\xe1sp\xe1r"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(f.a,null,u.a.createElement(p.a,null,u.a.createElement(v.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(v.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(v.a,{next:!0,tag:"button"},"Next")))))),u.a.createElement(o.a,{xs:"12",lg:"6"},u.a.createElement(E.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Bordered Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0,bordered:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Pompeius Ren\xe9"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Pa\u0109jo Jadon"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Micheal Mercurius"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Ganesha Dubhghall"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Hiroto \u0160imun"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(f.a,null,u.a.createElement(p.a,null,u.a.createElement(v.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(v.a,{tag:"button"},"1")),u.a.createElement(p.a,{className:"page-item"},u.a.createElement(v.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(v.a,{next:!0,tag:"button"},"Next"))))))),u.a.createElement(m.a,null,u.a.createElement(o.a,null,u.a.createElement(E.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Combined All Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Vishnu Serghei"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Zbyn\u011bk Phoibos"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Einar Randall"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"F\xe9lix Troels"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Aulus Agmundr"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement("nav",null,u.a.createElement(f.a,null,u.a.createElement(p.a,null,u.a.createElement(v.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(v.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(v.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(v.a,{next:!0,tag:"button"},"Next")))))))))}}]),t}(s.Component);a.default=h}}]);
//# sourceMappingURL=23.4f074b0f.chunk.js.map