(window.webpackJsonp=window.webpackJsonp||[]).push([[24,15],{"0aJK":function(e,t,a){"use strict";t.a=[{active:!0,text:"SERVICES",url:"/"},{text:"ABOUT",url:"/"},{text:"NEWS",url:"/"},{text:"CONTACT US",url:"/",highlight:!0}]},"1Z4S":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("YwZP");a("wxht");function i(e){var t=e.children;return r.a.createElement("div",{className:"footer"},t)}function o(e){var t=e.children;return r.a.createElement("div",{className:"footer__info"},t)}function l(e){var t=e.children,a=e.variant;return r.a.createElement("div",{className:"footer__menu "+(a?"footer__menu--"+a:"")},t)}function s(e){var t=e.children,a=e.variant,n=e.to;return r.a.createElement(c.Link,{to:n,className:"footer__menu-item "+(a?"footer__menu-item--"+a:"")},t)}var m=a("ma3e"),u=a("gEP1");t.a=function(e){var t=e.info,a=e.menuItems,n=e.socialLinks;return r.a.createElement(u.a,{type:"full",className:"footer-block"},r.a.createElement(i,null,r.a.createElement(o,null,t),r.a.createElement(l,{className:"footer__menu"},a&&a.map((function(e){return r.a.createElement(s,{key:e.text,to:e.url},e.text)}))),r.a.createElement(l,{variant:"social",className:"footer__social"},n.linkedin&&r.a.createElement(s,{to:n.linkedin,variant:"social"},r.a.createElement(m.b,{className:"footer__social-icon footer__social-icon--linkedin"})),n.twitter&&r.a.createElement(s,{to:n.twitter,variant:"social"},r.a.createElement(m.c,{className:"footer__social-icon footer__social-icon--twitter"})),n.facebook&&r.a.createElement(s,{to:n.facebook,variant:"social"},r.a.createElement(m.a,{className:"footer__social-icon footer__social-icon--facebook"})))))}},JGQ2:function(e,t,a){},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function l(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var c=e.attr,l=e.title,s=o(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,s,{className:a,style:i({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==c?n.createElement(c.Consumer,null,(function(e){return t(e)})):t(r)}},gRW2:function(e,t,a){"use strict";t.a={linkedin:"/linkedin",facebook:"/facebook",twitter:"/twitter"}},jk6b:function(e,t,a){"use strict";a.r(t),a.d(t,"Page",(function(){return v}));var n=a("q1tI"),r=a.n(n),c=a("X/CG"),i=a("b97G"),o=a("1Z4S"),l=a("sh+E"),s=a("9SI3"),m=a("3/e4");a("nSay");var u=function(e){var t=e.month,a=e.day;return r.a.createElement("div",{className:"calendar"},r.a.createElement("div",{className:"calendar__header"},t),r.a.createElement("div",{className:"calendar__content"},a))},f=a("0aJK"),d=a("gRW2"),v=(t.default={title:"Pages.Benefits",decorators:[c.withA11y]},function(){return r.a.createElement("div",null,r.a.createElement(i.a,{menuItems:f.a}),r.a.createElement(m.c,{className:"job-info"},r.a.createElement(m.a,{variant:"centered"},r.a.createElement(m.b,{columns:"12"},r.a.createElement(m.a,null,r.a.createElement(s.a,{variant:"lightLead"},"Our ",r.a.createElement("span",null,"benefits.")),r.a.createElement(s.a,{variant:"titleLight"},"weKnow is an employee-driven company and we acknowledge that great talent with a positive mindset brings great clients."),r.a.createElement(l.a,{variant:"hidden"}),r.a.createElement(l.a,{variant:"hidden"}),r.a.createElement(l.a,{variant:"hidden"}),r.a.createElement(u,{day:1,month:"Jan"}),r.a.createElement(u,{day:11,month:"Apr"}),r.a.createElement(u,{day:18,month:"Apr"}),r.a.createElement(u,{day:19,month:"Apr"}),r.a.createElement(l.a,{variant:"hidden"}),r.a.createElement(l.a,{variant:"hidden"}),r.a.createElement(l.a,{variant:"hidden"}))))),r.a.createElement(o.a,{info:"© 2020 weKnow, Inc.",menuItems:f.a,socialLinks:d.a}))})},nSay:function(e,t,a){},"sh+E":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("JGQ2");t.a=function(e){var t=e.children,a=e.variant;return r.a.createElement("div",{className:"divider "+(a?"divider--"+a:"")},t)}},wZ29:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("jk6b");t.default=function(){return r.a.createElement(c.Page,null)}},wxht:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-benefits-js-3390dbda1c3e693b64d3.js.map