(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return k})),n.d(t,"default",(function(){return I}));var a=n("q1tI"),r=n.n(a),o=n("Ff2n"),i=n("wx14"),c=(n("17x9"),n("iuhU")),s=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=a.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,f=e.classes,u=e.className,d=e.component,p=void 0===d?"div":d,m=e.container,g=void 0!==m&&m,v=e.direction,x=void 0===v?"row":v,h=e.item,b=void 0!==h&&h,w=e.justify,y=void 0===w?"flex-start":w,j=e.lg,O=void 0!==j&&j,C=e.md,N=void 0!==C&&C,E=e.sm,S=void 0!==E&&E,M=e.spacing,k=void 0===M?0:M,R=e.wrap,I=void 0===R?"wrap":R,W=e.xl,L=void 0!==W&&W,_=e.xs,z=void 0!==_&&_,H=e.zeroMinWidth,A=void 0!==H&&H,V=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(c.a)(f.root,u,g&&[f.container,0!==k&&f["spacing-xs-".concat(String(k))]],b&&f.item,A&&f.zeroMinWidth,"row"!==x&&f["direction-xs-".concat(String(x))],"wrap"!==I&&f["wrap-xs-".concat(String(I))],"stretch"!==l&&f["align-items-xs-".concat(String(l))],"stretch"!==r&&f["align-content-xs-".concat(String(r))],"flex-start"!==y&&f["justify-xs-".concat(String(y))],!1!==z&&f["grid-xs-".concat(String(z))],!1!==S&&f["grid-sm-".concat(String(S))],!1!==N&&f["grid-md-".concat(String(N))],!1!==O&&f["grid-lg-".concat(String(O))],!1!==L&&f["grid-xl-".concat(String(L))]);return a.createElement(p,Object(i.a)({className:B,ref:t},V))})),p=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};f.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d),m=n("kKAo"),g=a.forwardRef((function(e,t){var n=e.classes,r=e.className,s=e.raised,l=void 0!==s&&s,f=Object(o.a)(e,["classes","className","raised"]);return(a.createElement(m.a,Object(i.a)({className:Object(c.a)(n.root,r),elevation:l?8:1,ref:t},f)))})),v=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(g),x=n("VD++"),h=a.forwardRef((function(e,t){var n=e.children,r=e.classes,s=e.className,l=e.focusVisibleClassName,f=Object(o.a)(e,["children","classes","className","focusVisibleClassName"]);return(a.createElement(x.a,Object(i.a)({className:Object(c.a)(r.root,s),focusVisibleClassName:Object(c.a)(l,r.focusVisible),ref:t},f),n,a.createElement("span",{className:r.focusHighlight})))})),b=Object(s.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(h),w=a.forwardRef((function(e,t){var n=e.classes,r=e.className,s=e.component,l=void 0===s?"div":s,f=Object(o.a)(e,["classes","className","component"]);return(a.createElement(l,Object(i.a)({className:Object(c.a)(n.root,r),ref:t},f)))})),y=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(w),j=["video","audio","picture","iframe","img"],O=a.forwardRef((function(e,t){var n=e.children,r=e.classes,s=e.className,l=e.component,f=void 0===l?"div":l,u=e.image,d=e.src,p=e.style,m=Object(o.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==j.indexOf(f),v=!g&&u?Object(i.a)({backgroundImage:'url("'.concat(u,'")')},p):p;return a.createElement(f,Object(i.a)({className:Object(c.a)(r.root,s,g&&r.media,-1!=="picture img".indexOf(f)&&r.img),ref:t,style:v,src:g?u||d:void 0},m),n)})),C=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(O),N=n("ofer"),E=n("YFqc"),S=n.n(E),M=r.a.createElement,k=!0,R="/blog";function I(e){var t=e.microphones;return M(p,{container:!0,spacing:3},t.map((function(e){return M(p,{item:!0,xs:12,sm:3,key:e.id},M(S.a,{href:"/microphone/[id]",as:"/microphone/".concat(e.id)},M("a",null,M(v,null,M(b,null,M(C,{component:"img",alt:e.brand+" "+e.model,height:"300",image:R+e.imageUrl,title:e.brand+" "+e.model}),M(y,null,M(N.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.brand+" "+e.model),M(N.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica")))))))})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),c=n("elyg"),s=(n("g/15"),n("nOHt")),l=new Map,f=window.IntersectionObserver,u={};var d=function(e,t){var n=o||(f?o=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,a){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),u[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],l=r[1],m=(0,s.useRouter)(),g=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(g,e.href);return{href:t,as:e.as?(0,c.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),x=v.href,h=v.as;i.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,c.isLocalURL)(x)&&!u[x+"%"+h])return d(o,(function(){p(m,x,h)}))}),[t,o,x,h,m]);var b=e.children,w=e.replace,y=e.shallow,j=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var O=i.Children.only(b),C={ref:function(e){e&&l(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,x,h,w,y,j)}};return t&&(C.onMouseEnter=function(e){(0,c.isLocalURL)(x)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),p(m,x,h,{priority:!0}))}),!e.passHref&&("a"!==O.type||"href"in O.props)||(C.href=(0,c.addBasePath)(h)),i.default.cloneElement(O,C)};t.default=m}}]);