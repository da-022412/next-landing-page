(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8456:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(9756),o=t(2122),a=t(7294),i=(t(5697),t(6010)),c=t(7828),l=t(3353),s=t(7392),u=t(9612),p=t(5664);function f(e){return(0,p.Z)("MuiSvgIcon",e)}(0,t(742).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=t(5893);const d=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,r)=>{const{styleProps:t}=e;return(0,o.Z)({},r.root,"inherit"!==t.color&&r[`color${(0,l.Z)(t.color)}`],r[`fontSize${(0,l.Z)(t.fontSize)}`])}})((({theme:e,styleProps:r})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter}),fontSize:{inherit:"inherit",small:e.typography.pxToRem(20),medium:e.typography.pxToRem(24),large:e.typography.pxToRem(35)}[r.fontSize],color:{primary:e.palette.primary.main,secondary:e.palette.secondary.main,action:e.palette.action.active,error:e.palette.error.main,disabled:e.palette.action.disabled,inherit:void 0}[r.color]}))),m=a.forwardRef((function(e,r){const t=(0,s.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:u,color:p="inherit",component:m="svg",fontSize:v="medium",htmlColor:g,titleAccess:y,viewBox:b="0 0 24 24"}=t,x=(0,n.Z)(t,["children","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]),j=(0,o.Z)({},t,{color:p,component:m,fontSize:v,viewBox:b}),Z=(e=>{const{color:r,fontSize:t,classes:n}=e,o={root:["root","inherit"!==r&&`color${(0,l.Z)(r)}`,`fontSize${(0,l.Z)(t)}`]};return(0,c.Z)(o,f,n)})(j);return(0,h.jsxs)(d,(0,o.Z)({as:m,className:(0,i.Z)(Z.root,u),styleProps:j,focusable:"false",viewBox:b,color:g,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:r},x,{children:[a,y?(0,h.jsx)("title",{children:y}):null]}))}));m.muiName="SvgIcon";var v=m},6071:function(e,r,t){"use strict";var n=t(3848),o=t(9448);r.default=void 0;var a=o(t(7294)),i=t(1689),c=t(2441),l=t(5749),s={};function u(e,r,t,n){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var p=function(e){var r=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.asPath||"/",p=a.default.useMemo((function(){var r=(0,i.resolveHref)(o,e.href,!0),t=n(r,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),f=p.href,h=p.as,d=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof d&&(d=a.default.createElement("a",null,d));var b=a.Children.only(d),x=b&&"object"===typeof b&&b.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),Z=n(j,2),O=Z[0],w=Z[1],P=a.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,a.useEffect)((function(){var e=w&&r&&(0,i.isLocalURL)(f),n="undefined"!==typeof y?y:t&&t.locale,o=s[f+"%"+h+(n?"%"+n:"")];e&&!o&&u(t,f,h,{locale:n})}),[h,f,w,y,r,t]);var S={ref:P,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:c}))}(e,t,f,h,m,v,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(t,f,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var M="undefined"!==typeof y?y:t&&t.locale,k=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(h,M,t&&t.locales,t&&t.domainLocales);S.href=k||(0,i.addBasePath)((0,i.addLocale)(h,M,t&&t.defaultLocale))}return a.default.cloneElement(b,S)};r.default=p},5749:function(e,r,t){"use strict";var n=t(3848);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,l=(0,o.useRef)(),s=(0,o.useState)(!1),u=n(s,2),p=u[0],f=u[1],h=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||p||e&&e.tagName&&(l.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,p]);return(0,o.useEffect)((function(){if(!i&&!p){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[p]),[h,p]};var o=t(7294),a=t(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},6031:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return $}});var n=t(5893),o=t(7294),a=t(7642),i=t(9756),c=t(2122),l=(t(5697),t(6010)),s=t(9050),u=t(7828),p=t(9612),f=t(7392),h=t(3353),d=t(5664),m=t(742);function v(e){return(0,d.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const g=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{styleProps:t}=e;return(0,c.Z)({},r.root,t.variant&&r[t.variant],"inherit"!==t.align&&r[`align${(0,h.Z)(t.align)}`],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph)}})((({theme:e,styleProps:r})=>(0,c.Z)({margin:0},r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=o.forwardRef((function(e,r){const t=(0,f.Z)({props:e,name:"MuiTypography"});var o;t.color=(o=t.color,b[o]||o);const a=(0,s.Z)(t),{align:p="inherit",className:d,component:m,gutterBottom:x=!1,noWrap:j=!1,paragraph:Z=!1,variant:O="body1",variantMapping:w=y}=a,P=(0,i.Z)(a,["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=(0,c.Z)({},a,{align:p,className:d,component:m,gutterBottom:x,noWrap:j,paragraph:Z,variant:O,variantMapping:w}),M=m||(Z?"p":w[O]||y[O])||"span",k=(e=>{const{align:r,gutterBottom:t,noWrap:n,paragraph:o,variant:a,classes:i}=e,c={root:["root",a,"inherit"!==e.align&&`align${(0,h.Z)(r)}`,t&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,u.Z)(c,v,i)})(S);return(0,n.jsx)(g,(0,c.Z)({as:M,ref:r,styleProps:S,className:(0,l.Z)(k.root,d)},P))})),j=t(5894),Z=t(2666),O=t(6265),w=t(5135),P=t(7531);function S(e){return(0,d.Z)("MuiLink",e)}var M=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);const k=(0,p.ZP)(x,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{styleProps:t}=e;return(0,c.Z)({},r.root,r[`underline${(0,h.Z)(t.underline)}`],"button"===t.component&&r.button)}})((({styleProps:e})=>(0,c.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&{textDecoration:"underline"},"button"===e.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${M.focusVisible}`]:{outline:"auto"}})));var N=o.forwardRef((function(e,r){const t=(0,f.Z)({props:e,name:"MuiLink"}),{className:a,color:s="primary",component:p="a",onBlur:d,onFocus:m,TypographyClasses:v,underline:g="hover",variant:y="inherit"}=t,b=(0,i.Z)(t,["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),{isFocusVisibleRef:x,onBlur:j,onFocus:Z,ref:O}=(0,w.Z)(),[M,N]=o.useState(!1),R=(0,P.Z)(r,O),C=(0,c.Z)({},t,{color:s,component:p,focusVisible:M,underline:g,variant:y}),L=(e=>{const{classes:r,component:t,focusVisible:n,underline:o}=e,a={root:["root",`underline${(0,h.Z)(o)}`,"button"===t&&"button",n&&"focusVisible"]};return(0,u.Z)(a,S,r)})(C);return(0,n.jsx)(k,(0,c.Z)({className:(0,l.Z)(L.root,a),classes:v,color:s,component:p,onBlur:e=>{j(e),!1===x.current&&N(!1),d&&d(e)},onFocus:e=>{Z(e),!0===x.current&&N(!0),m&&m(e)},ref:R,styleProps:C,variant:y},b))})),R=t(8456);function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){(0,O.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function B(e){return(0,n.jsx)(R.Z,L(L({},e),{},{children:(0,n.jsx)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}))}function E(){return(0,n.jsxs)(x,{sx:{mt:6,mb:3},color:"text.secondary",children:[(0,n.jsx)(B,{sx:{mr:1,verticalAlign:"middle"}}),"Pro tip: See more"," ",(0,n.jsx)(N,{href:"https://material-ui.com/getting-started/templates/",children:"templates"})," on the Material-UI documentation."]})}function z(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var D=t(1163),I=t(1664);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,O.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var A=o.forwardRef((function(e,r){var t=e.to,o=e.linkAs,a=(e.href,e.replace),i=e.scroll,c=e.passHref,l=e.shallow,s=e.prefetch,u=e.locale,p=z(e,["to","linkAs","href","replace","scroll","passHref","shallow","prefetch","locale"]);return(0,n.jsx)(I.default,{href:t,prefetch:s,as:o,replace:a,scroll:i,shallow:l,passHref:c,locale:u,children:(0,n.jsx)("a",T({ref:r},p))})})),W=o.forwardRef((function(e,r){var t=e.activeClassName,o=void 0===t?"active":t,a=e.as,i=e.className,c=e.href,s=e.noLinkStyle,u=(e.role,z(e,["activeClassName","as","className","href","noLinkStyle","role"])),p=(0,D.useRouter)(),f="string"===typeof c?c:c.pathname,h=(0,l.Z)(i,(0,O.Z)({},o,p.pathname===f&&o));return"string"===typeof c&&(0===c.indexOf("http")||0===c.indexOf("mailto:"))?s?(0,n.jsx)("a",T({className:h,href:c,ref:r},u)):(0,n.jsx)(N,T({className:h,href:c,ref:r},u)):s?(0,n.jsx)(A,T({className:h,ref:r,to:c},u)):(0,n.jsx)(N,T({component:A,linkAs:a,className:h,ref:r,to:c},u))}));function H(){return(0,n.jsxs)(x,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,n.jsx)(N,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}function $(){return(0,n.jsx)(a.Z,{maxWidth:"sm",children:(0,n.jsxs)(j.Z,{sx:{my:4},children:[(0,n.jsx)(x,{variant:"h4",component:"h1",gutterBottom:!0,children:"Next.js v5-alpha example"}),(0,n.jsx)(Z.Z,{variant:"contained",component:W,noLinkStyle:!0,href:"/",children:"Go to the main page"}),(0,n.jsx)(E,{}),(0,n.jsx)(H,{})]})})}},8961:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(6031)}])},1664:function(e,r,t){e.exports=t(6071)},1163:function(e,r,t){e.exports=t(2441)}},function(e){e.O(0,[774,888,179],(function(){return r=8961,e(e.s=r);var r}));var r=e.O();_N_E=r}]);