(function(e){function t(t){for(var c,o,a=t[0],l=t[1],s=t[2],f=0,p=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(c=!1)}c&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},i=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/telesyk.github.io/docs/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,i,o){var a=Object(c["i"])("Home"),l=Object(c["i"])("Page");return Object(c["f"])(),Object(c["c"])(l,{config:i.store.page},{main:Object(c["k"])((function(){return[Object(c["e"])(a,{cards:i.store.cards},null,8,["cards"])]})),_:1},8,["config"])}var i=n("5530"),o={class:"page container mx-auto"},a={class:"main py-5"};function l(e,t,n,r,i,l){var s=Object(c["i"])("Header"),u=Object(c["i"])("Footer");return Object(c["f"])(),Object(c["c"])("div",o,[Object(c["e"])(s,{socialMedia:n.config.socials,config:n.config.header},null,8,["socialMedia","config"]),Object(c["e"])("main",a,[Object(c["h"])(e.$slots,"main")]),Object(c["e"])(u,{config:n.config.footer},null,8,["config"])])}n("9911");var s={class:"header flex py-4"},u={class:"flex flex-auto justify-between items-center"},f={class:"flex"},p={class:"text-2xl capitalize"},b={class:"md:flex md:justify-end md:gap-x-4"};function d(e,t,n,r,i,o){var a=Object(c["i"])("Image"),l=Object(c["i"])("SocialLink");return Object(c["f"])(),Object(c["c"])("header",s,[Object(c["e"])("div",u,[n.config.logotype.link?(Object(c["f"])(),Object(c["c"])("figure",{key:0,class:n.config.logotype.className},[Object(c["e"])(a,{title:n.config.logotype.title,link:n.config.logotype.link},null,8,["title","link"])],2)):Object(c["d"])("",!0),Object(c["e"])("div",f,[Object(c["e"])("h1",p,Object(c["j"])(n.config.title),1)]),Object(c["e"])("ul",b,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["g"])(n.socialMedia,(function(e){return Object(c["f"])(),Object(c["c"])("li",{key:e.title},[Object(c["e"])(l,{title:e.title,url:e.link},null,8,["title","url"])])})),128))])])])}n("99af");function g(e,t,n,r,i,o){return Object(c["f"])(),Object(c["c"])("img",{class:"".concat(i.defaultClass," ").concat(n.className),title:n.title,alt:n.title,src:n.link},null,10,["title","alt","src"])}var j={props:{title:{type:String,required:!0},link:{type:String,required:!0},className:{type:String,default:""}},data:function(){return{defaultClass:"object-cover"}}};j.render=g;var O=j;function m(e,t,n,r,i,o){return Object(c["f"])(),Object(c["c"])("a",{href:n.url,target:"_blank",rel:"noopener"},Object(c["j"])(n.title),9,["href"])}var h={props:{title:String,url:String}};h.render=m;var k=h,v={props:{socialMedia:Array,config:Object},components:{Image:O,SocialLink:k},data:function(){return{}}};v.render=d;var y=v,w={class:"footer py-4"},x={class:"flex justify-center"};function S(e,t,n,r,i,o){return Object(c["f"])(),Object(c["c"])("footer",w,[Object(c["e"])("div",x,[Object(c["e"])("p",null,Object(c["j"])(n.config.copyright),1)])])}var _={props:{config:Object}};_.render=S;var M=_,P={name:"Page",components:{Header:y,Footer:M},props:{config:{type:Object,required:!0}}};P.render=l;var C=P,H={class:"flex flex-wrap justify-center xl:justify-between gap-6 p-y-6"};function I(e,t,n,r,i,o){var a=Object(c["i"])("Card");return Object(c["f"])(),Object(c["c"])("div",H,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["g"])(n.cards,(function(e){return Object(c["f"])(),Object(c["c"])(a,{key:e.title,config:e},null,8,["config"])})),128))])}n("a4d3"),n("e01a");var T={class:"py-6 px-6 max-w-md bg-white rounded-xl shadow-md space-y-2"},L={class:"text-center space-y-3 md:text-left flex flex-col"},N={class:"text-lg text-black font-semibold"},V={class:"capitalize"},q=Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ml-1 inline h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(c["e"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),A={class:"text-gray-500 font-medium"},J=Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ml-1 inline h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(c["e"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1);function z(e,t,n,r,i,o){return Object(c["f"])(),Object(c["c"])("div",T,[Object(c["e"])("a",{class:"block mx-auto",href:n.config.linkSite,title:"Visite ".concat(n.config.title)},[Object(c["e"])("img",{class:"max-h-72 rounded-md rounded-bl-none rounded-br-none",src:n.config.image?n.config.image:i.defaultImage,alt:n.config.title},null,8,["src","alt"])],8,["href","title"]),Object(c["e"])("div",L,[Object(c["e"])("p",N,[Object(c["e"])("a",{href:n.config.linkSite,title:"Visite ".concat(n.config.title),target:"_blank"},[Object(c["e"])("span",V,Object(c["j"])(n.config.title),1),q],8,["href","title"])]),Object(c["e"])("p",A,[Object(c["e"])("a",{href:n.config.linkSource,title:"Source code ".concat(n.config.title),target:"_blank"},[Object(c["e"])("span",null,Object(c["j"])(n.config.description),1),J],8,["href","title"])])])])}var B={props:{config:Object},data:function(){return{defaultImage:"/assets/images/screen_1.jpg"}}};B.render=z;var F=B,D={props:{cards:Array},components:{Card:F}};D.render=I;var E=D,G={page:{header:{title:"resume / portfolio",logotype:{title:"VectorStock.com/36593829",className:"h-24 w-24 rounded overflow-hidden bg-white"}},footer:{copyright:"Copyrights 2021 lesyk"},socials:[{link:"https://www.linkedin.com/in/oles-tkachuk-77a54284/",title:"LinkedIn"},{link:"https://github.com/telesyk",title:"GitHub"},{link:"mailto:tkachuk.oles@gmail.com",title:"Email"}]},cards:[{title:"training-js-cardio",description:"JS trainnig samples",linkSite:"https://vibrant-poincare-3ab32c.netlify.app/",linkSource:"https://github.com/telesyk/training-js-cardio",image:"/assets/images/screen_3.jpg"},{title:"react-todo-tracker-tutorial",description:"Tutorial React app",linkSite:"https://csb-kcop4.netlify.app/",linkSource:"https://github.com/telesyk/react-todo-tracker-tutorial",image:"/assets/images/screen_1.jpg"},{title:"vue-todo-app",description:"Tutorial ToDo Vue app",linkSite:"https://priceless-noyce-203235.netlify.app/",linkSource:"https://github.com/telesyk/vue-todo-app",image:"/assets/images/screen_2.jpg"}]},R={name:"App",components:{Page:C,Home:E},data:function(){return{store:Object(i["a"])({},G)}}};R.render=r;var $=R;Object(c["b"])($).mount("#app")}});
//# sourceMappingURL=app.61602eab.js.map