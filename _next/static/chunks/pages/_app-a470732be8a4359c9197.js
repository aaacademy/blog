_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(n.default.useContext(a.AmpStateContext))};var o,n=(o=r("q1tI"))&&o.__esModule?o:{default:o},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,o=e.hybrid,n=void 0!==o&&o,a=e.hasQuery;return r||n&&(void 0!==a&&a)}},0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"48fX":function(e,t,r){var o=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"5fIB":function(e,t,r){var o=r("7eYB");e.exports=function(e){if(Array.isArray(e))return o(e)}},"8/g6":function(e,t,r){"use strict";var o=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=a.default.memo(a.default.forwardRef((function(t,r){return a.default.createElement(i.default,(0,n.default)({ref:r},t),e)})));0;return r.muiName=i.default.muiName,r};var n=o(r("pVnL")),a=o(r("q1tI")),i=o(r("UJJ5"))},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var o,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(o=r("Xuae"))&&o.__esModule?o:{default:o},i=r("lwAK"),c=r("FYa8"),u=r("/0+H");function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=n.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,o={};return function(n){var a=!0;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){var i=n.key.slice(n.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(n.type){case"title":case"base":t.has(n.type)?a=!1:t.add(n.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var p=f[c];if(n.props.hasOwnProperty(p))if("charSet"===p)r.has(p)?a=!1:r.add(p);else{var s=n.props[p],l=o[p]||new Set;l.has(s)?a=!1:(l.add(s),o[p]=l)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return n.default.cloneElement(e,{key:r})}))}function m(e){var t=e.children,r=(0,n.useContext)(i.AmpStateContext),o=(0,n.useContext)(c.HeadManagerContext);return n.default.createElement(a.default,{reduceComponentsToState:d,headManager:o,inAmpMode:(0,u.isInAmpMode)(r)},t)}m.rewind=function(){};var h=m;t.default=h},B5Ud:function(e,t,r){"use strict";var o=r("vJKn"),n=r("/GRZ"),a=r("i2R6"),i=r("48fX"),c=r("tCBg"),u=r("T0f4"),p=r("qVT1");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=u(e);if(t){var n=u(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return c(this,r)}}var l=r("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var f=l(r("q1tI")),d=r("g/15");function m(e){return h.apply(this,arguments)}function h(){return(h=p(o.mark((function e(t){var r,n,a;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,n=t.ctx,e.next=3,(0,d.loadGetInitialProps)(r,n);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var b=function(e){i(r,e);var t=s(r);function r(){return n(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,o=e.pageProps,n=e.__N_SSG,a=e.__N_SSP;return(f.default.createElement(r,Object.assign({},o,n||a?{}:{url:v(t)})))}}]),r}(f.default.Component);function v(e){var t=e.pathname,r=e.asPath,o=e.query;return{get query(){return o},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var o=r?t:"",n=r||t;return e.push(o,n)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var o=r?t:"",n=r||t;return e.replace(o,n)}}}t.default=b,b.origGetInitialProps=m,b.getInitialProps=m},FYa8:function(e,t,r){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var n=((o=r("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=n},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("IlR1")}])},IlR1:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Me}));var o=r("vuIU"),n=r("s4An");var a=r("cDf5"),i=r.n(a),c=r("JX7q");function u(e,t){if(t&&("object"===i()(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(c.a)(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=r("wx14"),l=r("Ff2n"),f=r("q1tI"),d=r.n(f),m=(r("17x9"),r("iuhU")),h=r("H2TA"),b=r("NqtD"),v=r("kKAo"),y=f.forwardRef((function(e,t){var r=e.classes,o=e.className,n=e.color,a=void 0===n?"primary":n,i=e.position,c=void 0===i?"fixed":i,u=Object(l.a)(e,["classes","className","color","position"]);return(f.createElement(v.a,Object(s.a)({square:!0,component:"header",elevation:4,className:Object(m.a)(r.root,r["position".concat(Object(b.a)(c))],r["color".concat(Object(b.a)(a))],o,"fixed"===c&&"mui-fixed"),ref:t},u)))})),g=Object(h.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(y),x=r("KQm4"),O=r("ac/i");function j(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}function w(e){var t=function(t){var r=e(t);return t.css?Object(s.a)({},Object(O.a)(r,e(Object(s.a)({theme:t.theme},t.css))),j(t.css,[e.filterProps])):t.sx?Object(s.a)({},Object(O.a)(r,e(Object(s.a)({theme:t.theme},t.sx))),j(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat(Object(x.a)(e.filterProps)),t}var S=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(O.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},k=r("rePB"),_=r("8UzI");function C(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var M=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,n=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=C(e.theme,n)||{};return Object(_.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=C(i,e)||e,a&&(t=a(t))),!1===o?t:Object(k.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function P(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var R=S(M({prop:"border",themeKey:"borders",transform:P}),M({prop:"borderTop",themeKey:"borders",transform:P}),M({prop:"borderRight",themeKey:"borders",transform:P}),M({prop:"borderBottom",themeKey:"borders",transform:P}),M({prop:"borderLeft",themeKey:"borders",transform:P}),M({prop:"borderColor",themeKey:"palette"}),M({prop:"borderRadius",themeKey:"shape"})),I=S(M({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),M({prop:"display"}),M({prop:"overflow"}),M({prop:"textOverflow"}),M({prop:"visibility"}),M({prop:"whiteSpace"})),T=S(M({prop:"flexBasis"}),M({prop:"flexDirection"}),M({prop:"flexWrap"}),M({prop:"justifyContent"}),M({prop:"alignItems"}),M({prop:"alignContent"}),M({prop:"order"}),M({prop:"flex"}),M({prop:"flexGrow"}),M({prop:"flexShrink"}),M({prop:"alignSelf"}),M({prop:"justifyItems"}),M({prop:"justifySelf"})),A=S(M({prop:"gridGap"}),M({prop:"gridColumnGap"}),M({prop:"gridRowGap"}),M({prop:"gridColumn"}),M({prop:"gridRow"}),M({prop:"gridAutoFlow"}),M({prop:"gridAutoColumns"}),M({prop:"gridAutoRows"}),M({prop:"gridTemplateColumns"}),M({prop:"gridTemplateRows"}),M({prop:"gridTemplateAreas"}),M({prop:"gridArea"})),N=S(M({prop:"position"}),M({prop:"zIndex",themeKey:"zIndex"}),M({prop:"top"}),M({prop:"right"}),M({prop:"bottom"}),M({prop:"left"})),E=S(M({prop:"color",themeKey:"palette"}),M({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),z=M({prop:"boxShadow",themeKey:"shadows"});function W(e){return e<=1?"".concat(100*e,"%"):e}var q=M({prop:"width",transform:W}),B=M({prop:"maxWidth",transform:W}),H=M({prop:"minWidth",transform:W}),K=M({prop:"height",transform:W}),G=M({prop:"maxHeight",transform:W}),D=M({prop:"minHeight",transform:W}),F=(M({prop:"size",cssProperty:"width",transform:W}),M({prop:"size",cssProperty:"height",transform:W}),S(q,B,H,K,G,D,M({prop:"boxSizing"}))),L=r("WhA+"),X=S(M({prop:"fontFamily",themeKey:"typography"}),M({prop:"fontSize",themeKey:"typography"}),M({prop:"fontStyle",themeKey:"typography"}),M({prop:"fontWeight",themeKey:"typography"}),M({prop:"letterSpacing"}),M({prop:"lineHeight"}),M({prop:"textAlign"})),U=r("2mql"),J=r.n(U),V=r("q4lC");function $(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}var Q=r("cNwE"),Y=function(e){var t=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.name,n=Object(l.a)(r,["name"]);var a,i=o,c="function"===typeof t?function(e){return{root:function(r){return t(Object(s.a)({theme:e},r))}}}:{root:t},u=Object(V.a)(c,Object(s.a)({Component:e,name:o||e.displayName,classNamePrefix:i},n));t.filterProps&&(a=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=d.a.forwardRef((function(t,r){var o=t.children,n=t.className,i=t.clone,c=t.component,p=Object(l.a)(t,["children","className","clone","component"]),f=u(t),h=Object(m.a)(f.root,n),b=p;if(a&&(b=$(b,a)),i)return d.a.cloneElement(o,Object(s.a)({className:Object(m.a)(o.props.className,h)},b));if("function"===typeof o)return o(Object(s.a)({className:h},b));var v=c||e;return(d.a.createElement(v,Object(s.a)({ref:r,className:h},b),o))}));return J()(p,e),p}}(e);return function(e,r){return t(e,Object(s.a)({defaultTheme:Q.a},r))}},Z=w(S(R,I,T,A,N,E,z,F,L.b,X)),ee=Y("div")(Z,{name:"MuiBox"}),te=f.forwardRef((function(e,t){var r=e.classes,o=e.className,n=e.component,a=void 0===n?"div":n,i=e.disableGutters,c=void 0!==i&&i,u=e.fixed,p=void 0!==u&&u,d=e.maxWidth,h=void 0===d?"lg":d,v=Object(l.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return(f.createElement(a,Object(s.a)({className:Object(m.a)(r.root,o,p&&r.fixed,c&&r.disableGutters,!1!==h&&r["maxWidth".concat(Object(b.a)(String(h)))]),ref:t},v)))})),re=Object(h.a)((function(e){return{root:Object(k.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:o}),t}),{}),maxWidthXs:Object(k.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(k.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(k.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(k.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(k.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(te),oe={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},ne=function(e){return Object(s.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var ae=Object(h.a)((function(e){return{"@global":{html:oe,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(s.a)({margin:0},ne(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,r=void 0===t?null:t;return e.classes,f.createElement(f.Fragment,null,r)})),ie=r("ye/S"),ce=r("VD++"),ue=f.forwardRef((function(e,t){var r=e.edge,o=void 0!==r&&r,n=e.children,a=e.classes,i=e.className,c=e.color,u=void 0===c?"default":c,p=e.disabled,d=void 0!==p&&p,h=e.disableFocusRipple,v=void 0!==h&&h,y=e.size,g=void 0===y?"medium":y,x=Object(l.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return(f.createElement(ce.a,Object(s.a)({className:Object(m.a)(a.root,i,"default"!==u&&a["color".concat(Object(b.a)(u))],d&&a.disabled,"small"===g&&a["size".concat(Object(b.a)(g))],{start:a.edgeStart,end:a.edgeEnd}[o]),centerRipple:!0,focusRipple:!v,disabled:d,ref:t},x),f.createElement("span",{className:a.label},n)))})),pe=Object(h.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(ie.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(ie.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(ie.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(ue),se=r("f0nN"),le=r("zGT9"),fe=r("/NGs");var de=function(e){var t=e.children,r=e.theme,o=Object(le.a)(),n=d.a.useMemo((function(){var e=null===o?r:function(e,t){return"function"===typeof t?t(e):Object(s.a)({},e,t)}(o,r);return null!=e&&(e[fe.a]=null!==o),e}),[r,o]);return d.a.createElement(se.a.Provider,{value:n},t)},me=f.forwardRef((function(e,t){var r=e.classes,o=e.className,n=e.component,a=void 0===n?"div":n,i=e.disableGutters,c=void 0!==i&&i,u=e.variant,p=void 0===u?"regular":u,d=Object(l.a)(e,["classes","className","component","disableGutters","variant"]);return(f.createElement(a,Object(s.a)({className:Object(m.a)(r.root,r[p],o,!c&&r.gutters),ref:t},d)))})),he=Object(h.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(k.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(me),be=r("ofer"),ve=r("uniG"),ye=r.n(ve),ge=r("8Bbg"),xe=r.n(ge),Oe=r("8Kt/"),je=r.n(Oe),we=r("dl/7"),Se=r("viY9"),ke=Object(Se.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:we.a.A400},background:{default:"#fff"}}}),_e=d.a.createElement;function Ce(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=p(e);if(t){var n=p(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return u(this,r)}}var Me=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(n.a)(e,t)}(r,e);var t=Ce(r);function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return _e(d.a.Fragment,null,_e(je.a,null,_e("link",{rel:"shortcut icon",href:"/blog/favicon.ico"}),_e("title",null,"My page"),_e("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})),_e(g,{position:"fixed"},_e(he,{variant:"dense"},_e(pe,{edge:"start",color:"inherit","aria-label":"menu"},_e(ye.a,null)),_e(be.a,{variant:"h6"},"Microphone Shop"))),_e(de,{theme:ke},_e(ae,null),_e(re,null,_e(ee,{marginTop:8},_e(t,r)))))}}]),r}(xe.a)},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},UJJ5:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));var o=r("wx14"),n=r("Ff2n"),a=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),u=r("NqtD"),p=a.forwardRef((function(e,t){var r=e.children,c=e.classes,p=e.className,s=e.color,l=void 0===s?"inherit":s,f=e.component,d=void 0===f?"svg":f,m=e.fontSize,h=void 0===m?"default":m,b=e.htmlColor,v=e.titleAccess,y=e.viewBox,g=void 0===y?"0 0 24 24":y,x=Object(n.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return(a.createElement(d,Object(o.a)({className:Object(i.a)(c.root,p,"inherit"!==l&&c["color".concat(Object(u.a)(l))],"default"!==h&&c["fontSize".concat(Object(u.a)(h))]),focusable:"false",viewBox:g,color:b,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},x),r,v?a.createElement("title",null,v):null))}));p.muiName="SvgIcon";var s=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(p)},Xuae:function(e,t,r){"use strict";var o=r("mPvQ"),n=r("/GRZ"),a=r("i2R6"),i=r("qXWd"),c=r("48fX"),u=r("tCBg"),p=r("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=p(e);if(t){var n=p(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),f=!1,d=function(e){c(r,e);var t=s(r);function r(e){var a;return n(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,f&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var n=((o=r("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=n},mPvQ:function(e,t,r){var o=r("5fIB"),n=r("rlHP"),a=r("KckH"),i=r("kG2m");e.exports=function(e){return o(e)||n(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},pVnL:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,r){var o=r("C+bE"),n=r("qXWd");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?n(e):t}},uniG:function(e,t,r){"use strict";var o=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("q1tI")),a=(0,o(r("8/g6")).default)(n.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=a}},[[0,0,2,1,3]]]);