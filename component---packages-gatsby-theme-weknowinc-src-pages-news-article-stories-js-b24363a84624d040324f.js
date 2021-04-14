(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0aJK":function(e,t,a){"use strict";t.a=[{active:!0,text:"SERVICES",url:"/"},{text:"ABOUT",url:"/"},{text:"NEWS",url:"/"},{text:"CONTACT US",url:"/",highlight:!0}]},"1Z4S":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("YwZP");a("wxht");function i(e){var t=e.children;return r.a.createElement("div",{className:"footer"},t)}function l(e){var t=e.children;return r.a.createElement("div",{className:"footer__info"},t)}function c(e){var t=e.children,a=e.variant;return r.a.createElement("div",{className:"footer__menu "+(a?"footer__menu--"+a:"")},t)}function s(e){var t=e.children,a=e.variant,n=e.to;return r.a.createElement(o.Link,{to:n,className:"footer__menu-item "+(a?"footer__menu-item--"+a:"")},t)}var m=a("ma3e"),u=a("gEP1");t.a=function(e){var t=e.info,a=e.menuItems,n=e.socialLinks;return r.a.createElement(u.a,{type:"full",className:"footer-block"},r.a.createElement(i,null,r.a.createElement(l,null,t),r.a.createElement(c,{className:"footer__menu"},a&&a.map((function(e){return r.a.createElement(s,{key:e.text,to:e.url},e.text)}))),r.a.createElement(c,{variant:"social",className:"footer__social"},n.linkedin&&r.a.createElement(s,{to:n.linkedin,variant:"social"},r.a.createElement(m.b,{className:"footer__social-icon footer__social-icon--linkedin"})),n.twitter&&r.a.createElement(s,{to:n.twitter,variant:"social"},r.a.createElement(m.c,{className:"footer__social-icon footer__social-icon--twitter"})),n.facebook&&r.a.createElement(s,{to:n.facebook,variant:"social"},r.a.createElement(m.a,{className:"footer__social-icon footer__social-icon--facebook"})))))}},"6lKs":function(e,t,a){"use strict";a.r(t),a.d(t,"Page",(function(){return w}));var n=a("q1tI"),r=a.n(n),o=a("X/CG"),i=a("b97G"),l=a("1Z4S"),c={title:"Reaction Commerce: does the world really need another e-commerce platform?",date:"Jun 10, 2020",author:"ANDRÉS ÁVILA",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"It feels like the e-commerce arena is already flooded with too many options that aren't that different from each other. Shopify, WooCommerce, PrestaShop, Magento, Weebly, BigCommerce… The list goes on and on. So, considering that bloated landscape, is there a case to be made for yet another option?"),r.a.createElement("p",null,"The answer is yes."),r.a.createElement("p",null,"After spending over a decade working exclusively with Open Source technologies and supporting the top players in the Drupal ecosystem, the last couple of years we've worked on expanding our capabilities and targeted e-commerce as a vertical with great potential that we aimed to enter. We set a few requirements right out of the gate: we wanted to work on a platform that was Open Source, customizable, fast, and scalable. Reaction Commerce checked all these boxes."),r.a.createElement("h2",null,"What exactly is Reaction Commerce?"),r.a.createElement("p",null,"Reaction Commerce is an \"API-first, modular commerce stack with a service-based architecture built to deliver flexibility and freedom at scale\". Fluff aside, Reaction Commerce is the platform you need when out-of-the-box solutions like Shopify just won't cut it for your particular business needs. We're talking about ambitious brands and retailers that want to retain ultimate control over the online shopping experience they want to provide for their customers."),r.a.createElement("p",null,"If you enjoy to geek out about the technical ins and outs, Reaction Commerce is built on a very modern stack that includes React, GraphQL, Docker, NextJS, and MeteorJS. And for the developers out there, starting with the release of version 3.0, Reaction Commerce is now a fully headless commerce stack, which means that you can build custom storefront interfaces without having to touch the core Reaction API or the Admin back end."),r.a.createElement("h2",null,"Why choose Reaction Commerce?"),r.a.createElement("p",null,"This all sounds very nice on paper, but why (and most importantly, when) should you choose Reaction Commerce to build your online store?"),r.a.createElement("p",null,"Simply put, Reaction Commerce is the ideal fit when you want to customize anything and everything about your commerce solution, including which specific CMS to use on the front end, which payment options to offer, and basically any other feature or piece of functionality that relates to your specific business model. This allows you to easily replace anything from your platform as your business evolves, as opposed to being restricted by the constraints of a turnkey system. In addition, its microservices architecture and API-first nature allows for easy integration with your already existing systems."),r.a.createElement("p",null,"Such flexibility is exactly what the stakeholders from the first 2 projects we are developing in this platform were looking for, and as we dig deeper into its features we are just starting to realize the huge potential that Reaction Commerce has to offer in a field that has become stagnant by the dominance of more rigid alternatives. Interestingly enough, Reaction Commerce has been recently acquired by Mailchimp, but no need to fret: Mailchimp plans to keep Reaction Commerce as an Open Source product and continue supporting its community of developers."),r.a.createElement("p",null,"If you'd like to know more about Reaction Commerce and see if it's the right fit for you, get in touch with us here.")),articleTags:["Reaction Commerce","Commerce","NextJS","MeteorJS"],related:[{title:"Create a custom Reaction Commerce payment method",url:"/"},{title:"Reaction Commerce: does the world really need another e-commerce platform?",url:"/"}]},s=a("9SI3"),m=a("3/e4");a("uivy");var u=function(e){var t=e.tags.map((function(e,t){return r.a.createElement("div",{key:t,className:"article-tags__item"},r.a.createElement("span",null,e))}));return r.a.createElement("div",{className:"article-tags"},t)},d=a("ieMv"),h=(a("hnKc"),a("sh+E"));var f=function(e){var t=e.article,a=t.related.map((function(e){return function(e){return r.a.createElement("div",{className:"news-article__related-content"},r.a.createElement(s.a,{variant:"cardTitleSmall",className:"news-article__related-title"},e.title),r.a.createElement(d.a,{to:e.url,variant:"readmore-yellow"},"read more"))}(e)}));return r.a.createElement(m.c,{className:"news-article"},r.a.createElement(s.a,{variant:"lightLead",className:"news-article__title"},t.title),r.a.createElement(m.c,{className:"news-article__wrapper"},r.a.createElement(m.a,{variant:"centered"},r.a.createElement(m.b,{columns:"12"},r.a.createElement(m.a,null,r.a.createElement(m.b,{className:"news-article__sidebar",columns:"4"},r.a.createElement("div",{className:"news-article__sidebar-date"},t.date),r.a.createElement("div",{className:"news-article__sidebar-author"},"WRITTEN BY ",r.a.createElement("br",null),t.author),r.a.createElement(u,{tags:t.articleTags})),r.a.createElement(m.b,{columns:"8",className:"news-article__content"},t.body))))),r.a.createElement(h.a,{variant:"completeGray"}),r.a.createElement(m.c,{className:"news-article__related"},r.a.createElement(m.a,null,r.a.createElement(m.b,{columns:"6",className:"news-article__related-left"},r.a.createElement(s.a,{variant:"lightLead",className:"news-article__related-main-title"},"Related ",r.a.createElement("br",null),r.a.createElement(s.b,null,"articles"))),r.a.createElement(m.b,{columns:"6",className:"news-article__related-right"},a))))},p=a("0aJK"),y=a("gRW2"),w=(t.default={title:"Pages.NewsArticle",decorators:[o.withA11y]},function(){return r.a.createElement("div",null,r.a.createElement(i.a,{menuItems:p.a}),r.a.createElement(f,{article:c}),r.a.createElement(l.a,{info:"© 2020 weKnow, Inc.",menuItems:p.a,socialLinks:y.a}))})},JGQ2:function(e,t,a){},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function c(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var o=e.attr,c=e.title,s=l(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:a,style:i({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}},gRW2:function(e,t,a){"use strict";t.a={linkedin:"/linkedin",facebook:"/facebook",twitter:"/twitter"}},hnKc:function(e,t,a){},"sh+E":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("JGQ2");t.a=function(e){var t=e.children,a=e.variant;return r.a.createElement("div",{className:"divider "+(a?"divider--"+a:"")},t)}},uivy:function(e,t,a){},wxht:function(e,t,a){}}]);
//# sourceMappingURL=component---packages-gatsby-theme-weknowinc-src-pages-news-article-stories-js-b24363a84624d040324f.js.map