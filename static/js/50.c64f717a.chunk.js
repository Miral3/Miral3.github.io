(this["webpackJsonppotion-blog"]=this["webpackJsonppotion-blog"]||[]).push([[50],{1014:function(e,t,a){"use strict";a.r(t);var n=a(221),s=a(222),i=a(225),o=a(224),r=a(223),l=a(3),c=a.n(l),p=a(869),h=a(35),d=a(856),u=a.n(d),m=a(935),f=function(e){var t=u()("popover","show"),a=u()("popover-inner",e.innerClassName);return c.a.createElement(m.a,Object(h.a)({},e,{popperClassName:t,innerClassName:a}))};f.propTypes=m.b,f.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var g=f,b=a(97),v=a(107),O=a.n(v),T=a(857),j={tag:T.p,className:O.a.string,cssModule:O.a.object},E=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(b.a)(e,["className","cssModule","tag"]),i=Object(T.l)(u()(t,"popover-header"),a);return c.a.createElement(n,Object(h.a)({},s,{className:i}))};E.propTypes=j,E.defaultProps={tag:"h3"};var y=E,C={tag:T.p,className:O.a.string,cssModule:O.a.object},N=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(b.a)(e,["className","cssModule","tag"]),i=Object(T.l)(u()(t,"popover-body"),a);return c.a.createElement(n,Object(h.a)({},s,{className:i}))};N.propTypes=C,N.defaultProps={tag:"div"};var w=N,P=a(866),_=a(868),D=a(867),k=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).toggle=s.toggle.bind(Object(i.a)(s)),s.state={popoverOpen:!1},s}return Object(s.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return c.a.createElement("span",null,c.a.createElement(p.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),c.a.createElement(g,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle,trigger:"legacy",delay:0},c.a.createElement(y,null,"Popover Title"),c.a.createElement(w,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),a}(l.Component),M=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).toggle=s.toggle.bind(Object(i.a)(s)),s.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},s}return Object(s.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(P.a,null,c.a.createElement(_.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Popovers"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(D.a,null,c.a.createElement(p.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),c.a.createElement(g,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},c.a.createElement(y,null,"Popover Title"),c.a.createElement(w,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),c.a.createElement(P.a,null,c.a.createElement(_.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Popovers"),c.a.createElement("small",null," list")),c.a.createElement(D.a,null,this.state.popovers.map((function(e,t){return c.a.createElement(k,{key:t,item:e,id:t})})))))}}]),a}(l.Component);t.default=M},873:function(e,t,a){"use strict";var n=a(35),s=a(97),i=a(862),o=a(3),r=a.n(o),l=a(107),c=a.n(l),p=a(856),h=a.n(p),d=a(872),u=a(857),m=Object(i.a)({},d.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:u.p,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),f=Object(i.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,i=e.baseClassActive,o=e.className,l=e.cssModule,c=e.children,p=e.innerRef,m=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(u.n)(m,u.c),g=Object(u.m)(m,u.c);return r.a.createElement(d.Transition,f,(function(e){var s="entered"===e,d=Object(u.l)(h()(o,a,s&&i),l);return r.a.createElement(t,Object(n.a)({className:d},g,{ref:p}),c)}))}g.propTypes=m,g.defaultProps=f,t.a=g},935:function(e,t,a){"use strict";a.d(t,"b",(function(){return y}));var n=a(35),s=a(858),i=a(62),o=a(3),r=a.n(o),l=a(107),c=a.n(l),p=a(97),h=a(862),d=a(227),u=a.n(d),m=a(856),f=a.n(m),g=a(1171),b=a(857),v=a(873);var O={children:c.a.node.isRequired,popperClassName:c.a.string,placement:c.a.string,placementPrefix:c.a.string,arrowClassName:c.a.string,hideArrow:c.a.bool,tag:b.p,isOpen:c.a.bool.isRequired,cssModule:c.a.object,offset:c.a.oneOfType([c.a.string,c.a.number]),fallbackPlacement:c.a.oneOfType([c.a.string,c.a.array]),flip:c.a.bool,container:b.q,target:b.q.isRequired,modifiers:c.a.object,boundariesElement:c.a.oneOfType([c.a.string,b.a]),onClosed:c.a.func,fade:c.a.bool,transition:c.a.shape(v.a.propTypes)},T={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{},onClosed:function(){},fade:!0,transition:Object(h.a)({},v.a.defaultProps)},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).handlePlacementChange=a.handlePlacementChange.bind(Object(s.a)(a)),a.setTargetNode=a.setTargetNode.bind(Object(s.a)(a)),a.getTargetNode=a.getTargetNode.bind(Object(s.a)(a)),a.getRef=a.getRef.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.state={isOpen:t.isOpen},a}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null};var a=t.prototype;return a.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},a.setTargetNode=function(e){this.targetNode=e},a.getTargetNode=function(){return this.targetNode},a.getContainerNode=function(){return Object(b.j)(this.props.container)},a.getRef=function(e){this._element=e},a.handlePlacementChange=function(e){return this.state.placement!==e.placement&&this.setState({placement:e.placement}),e},a.onClosed=function(){this.props.onClosed(),this.setState({isOpen:!1})},a.renderChildren=function(){var e=this.props,t=e.cssModule,a=e.children,s=e.isOpen,i=e.flip,o=(e.target,e.offset),l=e.fallbackPlacement,c=e.placementPrefix,d=e.arrowClassName,u=e.hideArrow,m=e.popperClassName,O=e.tag,T=(e.container,e.modifiers),j=e.boundariesElement,E=(e.onClosed,e.fade),y=e.transition,C=Object(p.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","popperClassName","tag","container","modifiers","boundariesElement","onClosed","fade","transition"]),N=Object(b.l)(f()("arrow",d),t),w=this.state.placement||C.placement,P=w.split("-")[0],_=Object(b.l)(f()(m,c?c+"-"+P:P),this.props.cssModule),D=Object(h.a)({offset:{offset:o},flip:{enabled:i,behavior:l},preventOverflow:{boundariesElement:j},update:{enabled:!0,order:950,fn:this.handlePlacementChange}},T),k=Object(h.a)({},v.a.defaultProps,y,{baseClass:E?y.baseClass:"",timeout:E?y.timeout:0});return r.a.createElement(v.a,Object(n.a)({},k,C,{in:s,onExited:this.onClosed,tag:O}),r.a.createElement(g.a,{referenceElement:this.targetNode,modifiers:D,placement:w},(function(e){var t=e.ref,n=e.style,s=e.placement,i=e.arrowProps;return r.a.createElement("div",{ref:t,style:n,className:_,"x-placement":s},a,!u&&r.a.createElement("span",{ref:i.ref,className:N,style:i.style}))})))},a.render=function(){return this.setTargetNode(Object(b.j)(this.props.target)),this.state.isOpen?"inline"===this.props.container?this.renderChildren():u.a.createPortal(r.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(r.a.Component);j.propTypes=O,j.defaultProps=T;var E=j,y={placement:c.a.oneOf(b.b),target:b.q.isRequired,container:b.q,isOpen:c.a.bool,disabled:c.a.bool,hideArrow:c.a.bool,boundariesElement:c.a.oneOfType([c.a.string,b.a]),className:c.a.string,innerClassName:c.a.string,arrowClassName:c.a.string,popperClassName:c.a.string,cssModule:c.a.object,toggle:c.a.func,autohide:c.a.bool,placementPrefix:c.a.string,delay:c.a.oneOfType([c.a.shape({show:c.a.number,hide:c.a.number}),c.a.number]),modifiers:c.a.object,offset:c.a.oneOfType([c.a.string,c.a.number]),innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object]),trigger:c.a.string,fade:c.a.bool,flip:c.a.bool},C={show:0,hide:0},N={isOpen:!1,hideArrow:!1,autohide:!1,delay:C,toggle:function(){},trigger:"click",fade:!0};function w(e,t){return t&&(e===t||t.contains(e))}var P=function(e){function t(t){var a;return(a=e.call(this,t)||this)._target=null,a.addTargetEvents=a.addTargetEvents.bind(Object(s.a)(a)),a.handleDocumentClick=a.handleDocumentClick.bind(Object(s.a)(a)),a.removeTargetEvents=a.removeTargetEvents.bind(Object(s.a)(a)),a.toggle=a.toggle.bind(Object(s.a)(a)),a.showWithDelay=a.showWithDelay.bind(Object(s.a)(a)),a.hideWithDelay=a.hideWithDelay.bind(Object(s.a)(a)),a.onMouseOverTooltipContent=a.onMouseOverTooltipContent.bind(Object(s.a)(a)),a.onMouseLeaveTooltipContent=a.onMouseLeaveTooltipContent.bind(Object(s.a)(a)),a.show=a.show.bind(Object(s.a)(a)),a.hide=a.hide.bind(Object(s.a)(a)),a.onEscKeyDown=a.onEscKeyDown.bind(Object(s.a)(a)),a.getRef=a.getRef.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.state={isOpen:t.isOpen},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.updateTarget()},a.componentWillUnmount=function(){this.removeTargetEvents()},t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null},a.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._hideTimeout&&this.clearHideTimeout(),this.state.isOpen&&!this.props.isOpen&&this.toggle())},a.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},a.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},a.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},a.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?C[e]:t[e]:t},a.show=function(e){this.props.isOpen||(this.clearShowTimeout(),this.toggle(e))},a.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},a.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.toggle(e))},a.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},a.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},a.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},a.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||w(e.target,this._target))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!w(e.target,this._popover)?this.hideWithDelay(e):this.props.isOpen||this.showWithDelay(e)):t.indexOf("click")>-1&&w(e.target,this._target)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},a.addTargetEvents=function(){if(this.props.trigger){var e=this.props.trigger.split(" ");-1===e.indexOf("manual")&&((e.indexOf("click")>-1||e.indexOf("legacy")>-1)&&document.addEventListener("click",this.handleDocumentClick,!0),this._target&&(e.indexOf("hover")>-1&&(this._target.addEventListener("mouseover",this.showWithDelay,!0),this._target.addEventListener("mouseout",this.hideWithDelay,!0)),e.indexOf("focus")>-1&&(this._target.addEventListener("focusin",this.show,!0),this._target.addEventListener("focusout",this.hide,!0)),this._target.addEventListener("keydown",this.onEscKeyDown,!0)))}},a.removeTargetEvents=function(){this._target&&(this._target.removeEventListener("mouseover",this.showWithDelay,!0),this._target.removeEventListener("mouseout",this.hideWithDelay,!0),this._target.removeEventListener("keydown",this.onEscKeyDown,!0),this._target.removeEventListener("focusin",this.show,!0),this._target.removeEventListener("focusout",this.hide,!0)),document.removeEventListener("click",this.handleDocumentClick,!0)},a.updateTarget=function(){var e=Object(b.j)(this.props.target);e!==this._target&&(this.removeTargetEvents(),this._target=e,this.addTargetEvents())},a.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},a.onClosed=function(){this.setState({isOpen:!1})},a.render=function(){if(!this.state.isOpen)return null;this.updateTarget();var e=this.props,t=e.className,a=e.cssModule,s=e.innerClassName,i=e.target,o=e.isOpen,l=e.hideArrow,c=e.boundariesElement,p=e.placement,h=e.placementPrefix,d=e.arrowClassName,u=e.popperClassName,m=e.container,f=e.modifiers,g=e.offset,v=e.fade,O=e.flip,T=Object(b.m)(this.props,Object.keys(y)),j=Object(b.l)(u,a),C=Object(b.l)(s,a);return r.a.createElement(E,{className:t,target:i,isOpen:o,hideArrow:l,boundariesElement:c,placement:p,placementPrefix:h,arrowClassName:d,popperClassName:j,container:m,modifiers:f,offset:g,cssModule:a,onClosed:this.onClosed,fade:v,flip:O},r.a.createElement("div",Object(n.a)({},T,{ref:this.getRef,className:C,role:"tooltip","aria-hidden":o,onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})))},t}(r.a.Component);P.propTypes=y,P.defaultProps=N;t.a=P}}]);
//# sourceMappingURL=50.c64f717a.chunk.js.map