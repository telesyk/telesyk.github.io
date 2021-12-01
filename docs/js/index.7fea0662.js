(function(e){function t(t){for(var c,r,a=t[0],l=t[1],s=t[2],g=0,f=[];g<a.length;g++)r=a[g],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={index:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"297c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function i(e,t,n,i,o,r){var a=Object(c["j"])("Home"),l=Object(c["j"])("Page");return Object(c["g"])(),Object(c["c"])(l,{pageConfig:o.page,siteConfig:o.site,pageName:o.pages.home},{main:Object(c["l"])((function(){return[Object(c["f"])(a,{cards:o.cards},null,8,["cards"])]})),_:1},8,["pageConfig","siteConfig","pageName"])}var o=n("2909"),r=n("5530"),a={class:"container flex flex-col min-h-screen mx-auto"},l={class:"main py-5 flex-grow"};function s(e,t,n,i,o,r){var s=Object(c["j"])("Header"),u=Object(c["j"])("Footer");return Object(c["g"])(),Object(c["c"])("div",a,[Object(c["f"])(s,{socialMedia:n.pageConfig.socials,config:o.headerConfig},null,8,["socialMedia","config"]),Object(c["f"])("main",l,[Object(c["i"])(e.$slots,"main")]),Object(c["f"])(u,{config:n.pageConfig.footer},null,8,["config"])])}n("99af"),n("b0c0"),n("9911");var u={class:"header flex py-4"},g={class:"flex flex-auto justify-between items-center"},f={class:"flex"},p={class:"text-2xl capitalize"},h={class:"text-right md:text-center md:flex md:justify-end md:items-center md:gap-x-4"},d={key:0,class:"pr-3 md:pr-0"},m={class:"hidden md:inline"};function b(e,t,n,i,o,r){var a=Object(c["j"])("Image"),l=Object(c["j"])("SocialLink"),s=Object(c["j"])("Icon");return Object(c["g"])(),Object(c["c"])("header",u,[Object(c["f"])("div",g,[n.config.logotype.link?(Object(c["g"])(),Object(c["c"])("figure",{key:0,class:n.config.logotype.className},[Object(c["f"])(a,{title:n.config.logotype.title,link:n.config.logotype.link},null,8,["title","link"])],2)):Object(c["d"])("",!0),Object(c["f"])("div",f,[Object(c["f"])("h1",p,Object(c["k"])(n.config.title),1)]),Object(c["f"])("ul",h,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(n.socialMedia,(function(e){return Object(c["g"])(),Object(c["c"])("li",{key:e.title},[Object(c["f"])(l,{class:"p-3",title:e.title,url:e.link},null,8,["title","url"])])})),128)),o.colorTheme.dark?(Object(c["g"])(),Object(c["c"])("li",d,[Object(c["f"])("button",{class:"inline-flex md:flex px-4 rounded-md button button-accent text-xs p-2",title:"Switch to "+o.switchTheme,onClick:t[1]||(t[1]=Object(c["m"])((function(){return r.onSwitchTheme.apply(r,arguments)}),["prevent"]))},[Object(c["f"])("span",m,Object(c["k"])(r.getSwithcButtonName()),1),Object(c["f"])(s,{glyph:"color-swatch",className:"ml-1 inline h-4 w-4"})],8,["title"])])):Object(c["d"])("",!0)])])])}function j(e,t,n,i,o,r){return Object(c["g"])(),Object(c["c"])("img",{class:"".concat(o.defaultClass," ").concat(n.className),title:n.title,alt:n.title,src:n.link},null,10,["title","alt","src"])}var O={props:{title:{type:String,required:!0},link:{type:String,required:!0},className:{type:String,default:""}},data:function(){return{defaultClass:"object-cover"}}};O.render=j;var k=O;function v(e,t,n,i,o,r){return Object(c["g"])(),Object(c["c"])("a",{href:n.url,target:"_blank",rel:"noopener"},Object(c["k"])(n.title),9,["href"])}var w={props:{title:String,url:String}};w.render=v;var y=w;function x(e,t,n,i,o,r){return Object(c["g"])(),Object(c["c"])("span",{innerHTML:o.iconComponent(n.strokeWidth),class:["icon-svg",n.className]},null,10,["innerHTML"])}n("a9e3");var C=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 24 24"\n    stroke="currentColor"\n    >\n    <path\n      stroke-linecap="round"\n      stroke-linejoin="round"\n      stroke-width="'.concat(e,'"\n      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"\n    />\n  </svg>')},S=C,M=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 24 24"\n    stroke="currentColor"\n    >\n    <path\n      stroke-linecap="round"\n      stroke-linejoin="round"\n      stroke-width="'.concat(e,'"\n      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"\n    />\n  </svg>')},T=M,H=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 16 16"\n    stroke="none"\n    stroke-width="'.concat(e,'"\n    >\n    <path \n      fill="currentColor"\n      fill-rule="evenodd" \n      clip-rule="evenodd" \n      d="M15 0H0V15H15V0ZM8 8C8 6.89543 8.89543 6 10 6H11.1667C12.1792 6 13 6.82081 13 7.83333V8H12V7.83333C12 7.3731 11.6269 7 11.1667 7H10C9.44772 7 9 7.44772 9 8C9 8.55228 9.44772 9 10 9H11C12.1046 9 13 9.89543 13 11C13 12.1046 12.1046 13 11 13H10C8.89543 13 8 12.1046 8 11H9C9 11.5523 9.44772 12 10 12H11C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10H10C8.89543 10 8 9.10457 8 8ZM6 6V11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11H3C3 12.1046 3.89543 13 5 13C6.10457 13 7 12.1046 7 11V6H6Z" \n    />\n  </svg>')},z=H,N=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 26 26"\n    stroke="currentColor"\n    stroke-width="'.concat(e,'"\n    >\n    <path \n      d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"\n    />\n  </svg>')},L=N,_=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 36 36"\n    stroke="currentColor"\n    stroke-width="'.concat(e,'"\n    >\n    <path \n      fill="currentColor" \n      d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"\n    />\n  </svg>')},P=_,B=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 24 24"\n    fill="none"\n    stroke="currentColor"\n    >\n    <path \n      stroke-linecap="round" \n      stroke-linejoin="round" \n      stroke-width="'.concat(e,'" \n      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />\n  </svg>')},I=B,V={"external-link":S,code:T,javascript:z,"react-js":L,"vue-js":P,"color-swatch":I},E=V,q={props:{glyph:{type:String,required:!0},className:{type:String,default:"ml-1 inline h-5 w-5"},strokeWidth:{type:[Number,String],default:2}},data:function(){return{iconComponent:E[this.glyph]}}};q.render=x;var A=q,J=(n("a15b"),n("d81d"),n("ac1f"),n("1276"),function(e){var t=e.split("").map((function(e,t){return 0===t?e.toUpperCase():e}));return t.join("")}),W=J,Z=function(){var e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches},F=Z,D={components:{Image:k,SocialLink:y,Icon:A},props:{socialMedia:Array,config:Object},data:function(){return{switchTheme:"",rootElementClassList:document.documentElement.classList,colorTheme:this.config.theme}},created:function(){this.rootElementClassList.toggle(F()?this.colorTheme.dark:this.colorTheme.light),this.switchTheme=F()?this.colorTheme.light:this.colorTheme.dark},methods:{getSwithcButtonName:function(){return W(this.switchTheme)},onSwitchTheme:function(){var e=this,t=this.rootElementClassList.contains(this.colorTheme.light),n=function(){e.rootElementClassList.toggle(e.colorTheme.light),e.rootElementClassList.toggle(e.colorTheme.dark)};t?(this.switchTheme=this.colorTheme.light,n(),this.getSwithcButtonName()):(this.switchTheme=this.colorTheme.dark,n(),this.getSwithcButtonName())}}};D.render=b;var G=D,R={class:"footer py-4"},U={class:"text-center"},$={key:0,class:"my-3"},K={class:"my-3"};function Q(e,t,n,i,o,r){return Object(c["g"])(),Object(c["c"])("footer",R,[Object(c["f"])("div",U,[n.config.thirdParty.links?(Object(c["g"])(),Object(c["c"])("p",$,[Object(c["e"])(Object(c["k"])(n.config.thirdParty.text)+" ",1),Object(c["f"])("ul",null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(n.config.thirdParty.links,(function(e,t){return Object(c["g"])(),Object(c["c"])("li",{key:t},Object(c["k"])(e),1)})),128))])])):Object(c["d"])("",!0),Object(c["f"])("p",K,Object(c["k"])(n.config.copyright),1)])])}var X={props:{config:{type:Object,required:!0}}};X.render=Q;var Y=X,ee={components:{Header:G,Footer:Y},props:{pageConfig:{type:Object,required:!0},siteConfig:{type:Object,required:!0},pageName:String},data:function(){return{headerConfig:Object(r["a"])(Object(r["a"])({},this.pageConfig.header),{},{title:this.siteConfig.name,theme:this.siteConfig.theme})}},mounted:function(){document.title=this.pageName?"".concat(this.siteConfig.name," | ").concat(this.pageName):this.siteConfig.name}};ee.render=s;var te=ee,ne={class:"max-w-screen-md mx-auto flex flex-wrap justify-center gap-6 p-y-6"};function ce(e,t,n,i,o,r){var a=Object(c["j"])("Card");return Object(c["g"])(),Object(c["c"])("div",ne,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(n.cards,(function(e){return Object(c["g"])(),Object(c["c"])(a,{key:e.title,config:e},null,8,["config"])})),128))])}n("a4d3"),n("e01a");var ie={class:"card w-full max-w-md py-6 px-6 bg-accent rounded-xl shadow-md space-y-2"},oe={class:"text-left grid grid-rows-1 grid-cols-5"},re={class:"icon-tech text-accent row-span-2 flex justify-center items-center"},ae={class:"col-span-4 text-lg text-accent font-semibold"},le={class:"capitalize"},se={class:"col-span-4 text-accent-shade font-medium"};function ue(e,t,n,i,o,r){var a=Object(c["j"])("Icon");return Object(c["g"])(),Object(c["c"])("div",ie,[n.config.imageShow?(Object(c["g"])(),Object(c["c"])("a",{key:0,href:n.config.linkSite,title:"Link to site ".concat(n.config.title),class:"block mx-auto",target:"_blank"},[Object(c["f"])("img",{class:"hidden lg:block max-h-72 rounded-md rounded-bl-none rounded-br-none",src:n.config.image?n.config.image:o.defaultImage,alt:n.config.title},null,8,["src","alt"])],8,["href","title"])):Object(c["d"])("",!0),Object(c["f"])("div",oe,[Object(c["f"])("p",re,[Object(c["f"])(a,{glyph:n.config.icon,strokeWidth:"1",className:"inline w-14 h-14 mt-1"},null,8,["glyph"])]),Object(c["f"])("p",ae,[Object(c["f"])("a",{href:n.config.linkSite,title:"Link to site ".concat(n.config.title),target:"_blank",class:"flex items-center"},[Object(c["f"])("span",le,Object(c["k"])(n.config.title),1),Object(c["f"])(a,{glyph:"external-link"})],8,["href","title"])]),Object(c["f"])("p",se,[Object(c["f"])("a",{href:n.config.linkSource,title:"Link to source ".concat(n.config.title),target:"_blank",class:"flex items-center"},[Object(c["f"])("span",null,Object(c["k"])(n.config.description),1),Object(c["f"])(a,{glyph:"code"})],8,["href","title"])])])])}var ge={components:{Icon:A},props:{config:Object},data:function(){return{defaultImage:"/assets/images/screen_1.jpg"}}};n("7a6b");ge.render=ue;var fe=ge,pe={components:{Card:fe},props:{cards:Array}};pe.render=ce;var he=pe,de={site:{name:"Oles Tk.",theme:{dark:"dark",light:"light"}},pages:{home:"Home page",experience:"Experience page"},page:{header:{logotype:{title:"VectorStock.com/36593829",className:"h-24 w-24 rounded overflow-hidden bg-white"}},footer:{copyright:"Copyrights 2021 lesyk",thirdParty:{text:"Made with help:"}},socials:[{link:"https://www.linkedin.com/in/oles-tkachuk-77a54284/",title:"LinkedIn"},{link:"https://github.com/telesyk",title:"GitHub"},{link:"mailto:tkachuk.oles@gmail.com",title:"Email"}]},cards:[{title:"training-js-cardio",description:"JS trainnig samples",linkSite:"https://vibrant-poincare-3ab32c.netlify.app/",linkSource:"https://github.com/telesyk/training-js-cardio",image:"/assets/images/screen_3.jpg",imageShow:!1,icon:"javascript"},{title:"react-todo-tracker-tutorial",description:"Tutorial React app",linkSite:"https://csb-kcop4.netlify.app/",linkSource:"https://github.com/telesyk/react-todo-tracker-tutorial",image:"/assets/images/screen_1.jpg",imageShow:!1,icon:"react-js"},{title:"vue-todo-app",description:"Tutorial ToDo Vue app",linkSite:"https://priceless-noyce-203235.netlify.app/",linkSource:"https://github.com/telesyk/vue-todo-app",image:"/assets/images/screen_2.jpg",imageShow:!1,icon:"vue-js"}]},me={components:{Page:te,Home:he},data:function(){return{site:Object(r["a"])({},de.site),pages:Object(r["a"])({},de.pages),page:Object(r["a"])({},de.page),cards:Object(o["a"])(de.cards)}}};me.render=i;var be=me;Object(c["b"])(be).mount("#app")},"7a6b":function(e,t,n){"use strict";n("297c")}});
//# sourceMappingURL=index.7fea0662.js.map