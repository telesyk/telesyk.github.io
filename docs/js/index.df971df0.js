(function(e){function t(t){for(var c,i,l=t[0],a=t[1],s=t[2],h=0,f=[];h<l.length;h++)i=l[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={index:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"297c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,o,i){var l=Object(c["i"])("Home"),a=Object(c["i"])("Page");return Object(c["f"])(),Object(c["c"])(a,{sectionsConfig:o.sections,siteConfig:o.site,pageName:o.pages.home},{main:Object(c["k"])((function(){return[Object(c["e"])(l,{fetchedData:o.fetchedData,isError:o.fetchError},null,8,["fetchedData","isError"])]})),_:1},8,["sectionsConfig","siteConfig","pageName"])}n("a4d3"),n("e01a"),n("99af"),n("d81d"),n("b0c0"),n("d3b7"),n("96cf");var o=n("1da1"),i=n("5530"),l={class:"flex flex-col min-h-screen"},a={class:"main py-4 flex-grow"},s={class:"container xl:max-w-screen-xl mx-auto px-4 lg:px-0"};function u(e,t,n,r,o,i){var u=Object(c["i"])("Header"),h=Object(c["i"])("Footer");return Object(c["f"])(),Object(c["c"])("div",l,[Object(c["e"])(u,{socialMedia:n.sectionsConfig.socials,config:o.headerConfig},null,8,["socialMedia","config"]),Object(c["e"])("main",a,[Object(c["e"])("div",s,[Object(c["h"])(e.$slots,"main")])]),Object(c["e"])(h,{config:n.sectionsConfig.footer},null,8,["config"])])}n("9911");var h={class:"header sticky left-0 top-0 backdrop-filter backdrop-blur"},f={class:"container xl:max-w-screen-xl mx-auto py-4 px-4 lg:px-0 md:py-8 flex flex-auto justify-between items-center"},d={class:"text-2xl capitalize"},g={class:"flex justify-end items-center gap-4 text-center"},p={class:"block"},b={class:"hidden md:inline"};function m(e,t,n,r,o,i){var l=Object(c["i"])("Image"),a=Object(c["i"])("SocialLink"),s=Object(c["i"])("Icon");return Object(c["f"])(),Object(c["c"])("header",h,[Object(c["e"])("div",f,[n.config.logotypeUrl?(Object(c["f"])(),Object(c["c"])("figure",{key:0,class:n.config.logotype.className},[Object(c["e"])(l,{title:n.config.logotype.title,link:n.config.logotypeUrl},null,8,["title","link"])],2)):Object(c["d"])("",!0),Object(c["e"])("div",{class:["flex",n.config.logotypeUrl?"flex-1 ml-2":""]},[Object(c["e"])("h1",d,Object(c["j"])(n.config.title),1)],2),Object(c["e"])("ul",g,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["g"])(n.socialMedia,(function(e){return Object(c["f"])(),Object(c["c"])("li",{key:e.title,class:"block"},[Object(c["e"])(a,{class:"inline-block py-1 md:p-2",icon:e.title,url:e.link},null,8,["icon","url"])])})),128)),Object(c["e"])("li",p,[Object(c["e"])("button",{class:"py-2 inline-flex items-center md:flex transition-all",title:"Switch to "+o.switchThemeTitle,onClick:t[1]||(t[1]=Object(c["l"])((function(){return i.onSwitchTheme.apply(i,arguments)}),["prevent"]))},[Object(c["e"])("span",b,Object(c["j"])(i.getSwithcButtonName()),1),"dark"===o.switchThemeTitle?(Object(c["f"])(),Object(c["c"])(s,{key:0,glyph:"moon",className:"inline ml-1 h-8 w-8 p-2 rounded-full button button-accent"})):(Object(c["f"])(),Object(c["c"])(s,{key:1,glyph:"sun",className:"inline ml-1 h-8 w-8 p-2 rounded-full button button-accent"}))],8,["title"])])])])])}function j(e,t,n,r,o,i){return Object(c["f"])(),Object(c["c"])("img",{class:"".concat(o.defaultClass," ").concat(n.className),title:n.title,alt:n.title,src:n.link},null,10,["title","alt","src"])}var O={props:{title:{type:String,required:!0},link:{type:String,required:!0},className:{type:String,default:""}},data:function(){return{defaultClass:"object-cover"}}};O.render=j;var v=O,w={key:0,class:"hidden md:inline"};function k(e,t,n,r,o,i){var l=Object(c["i"])("Icon");return Object(c["f"])(),Object(c["c"])("div",null,[n.icon?(Object(c["f"])(),Object(c["c"])("a",{key:0,href:n.url,target:"_blank",rel:"noopener",class:"flex gap-1 items-center"},[n.title?(Object(c["f"])(),Object(c["c"])("span",w,Object(c["j"])(n.title),1)):Object(c["d"])("",!0),Object(c["e"])(l,{glyph:n.icon,strokeWidth:"0",className:"w-8 h-8"},null,8,["glyph"])],8,["href"])):(Object(c["f"])(),Object(c["c"])("a",{key:1,href:n.url,target:"_blank",rel:"noopener"},Object(c["j"])(n.title),9,["href"]))])}function x(e,t,n,r,o,i){return Object(c["f"])(),Object(c["c"])("span",{innerHTML:o.iconComponent(n.strokeWidth),class:["icon-svg",n.className],strokeWidth:n.strokeWidth},null,10,["innerHTML","strokeWidth"])}n("a9e3");var y=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 24 24"\n    stroke="currentColor"\n    >\n    <path\n      stroke-linecap="round"\n      stroke-linejoin="round"\n      stroke-width="'.concat(e,'"\n      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"\n    />\n  </svg>')},C=y,z=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 24 24"\n    stroke="currentColor"\n    >\n    <path\n      stroke-linecap="round"\n      stroke-linejoin="round"\n      stroke-width="'.concat(e,'"\n      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"\n    />\n  </svg>')},M=z,S=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 16 16"\n    stroke="none"\n    stroke-width="'.concat(e,'"\n    >\n    <path \n      fill="currentColor"\n      fill-rule="evenodd" \n      clip-rule="evenodd" \n      d="M15 0H0V15H15V0ZM8 8C8 6.89543 8.89543 6 10 6H11.1667C12.1792 6 13 6.82081 13 7.83333V8H12V7.83333C12 7.3731 11.6269 7 11.1667 7H10C9.44772 7 9 7.44772 9 8C9 8.55228 9.44772 9 10 9H11C12.1046 9 13 9.89543 13 11C13 12.1046 12.1046 13 11 13H10C8.89543 13 8 12.1046 8 11H9C9 11.5523 9.44772 12 10 12H11C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10H10C8.89543 10 8 9.10457 8 8ZM6 6V11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11H3C3 12.1046 3.89543 13 5 13C6.10457 13 7 12.1046 7 11V6H6Z" \n    />\n  </svg>')},T=S,H=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 26 26"\n    stroke="currentColor"\n    stroke-width="'.concat(e,'"\n    >\n    <path \n      d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"\n    />\n  </svg>')},N=H,L=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none"\n    viewBox="0 0 36 36"\n    stroke="currentColor"\n    stroke-width="'.concat(e,'"\n    >\n    <path \n      fill="currentColor" \n      d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"\n    />\n  </svg>')},V=L,U=function(e){return'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 24 24"\n    fill="none"\n    stroke="currentColor"\n    >\n    <path \n      stroke-linecap="round" \n      stroke-linejoin="round" \n      stroke-width="'.concat(e,'" \n      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />\n  </svg>')},B=U,_=function(e){return'<svg \n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 512 512"\n    fill="currentColor" \n    stroke="currentColor" \n    stroke-width="'.concat(e,'"\n    >\n      <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>\n    </svg>')},I=_,D=function(e){return'<svg \n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 512 512"\n    fill="currentColor" \n    stroke="currentColor" \n    stroke-width="'.concat(e,'"\n    >\n      <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>\n    </svg>')},E=D,P=function(e){return'<svg \n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 512 512"\n    fill="currentColor" \n    stroke="currentColor" \n    stroke-width="'.concat(e,'"\n    >\n      <path d="M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"></path>\n    </svg>')},q=P,A=function(e){return'<svg \n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 512 512"\n    fill="currentColor" \n    stroke="currentColor" \n    stroke-width="'.concat(e,'"\n    >\n      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>\n    </svg>')},R=A,W=function(e){return'<svg \n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 512 512"\n    fill="currentColor" \n    stroke="currentColor" \n    stroke-width="'.concat(e,'"\n    >\n      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>\n    </svg>')},F=W,J=function(e){return'<svg \n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 24 24"\n    fill="currentColor" \n    stroke="currentColor" \n    stroke-width="'.concat(e,'"\n    >\n      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path>\n    </svg>')},Y=J,Z={"external-link":C,code:M,javascript:T,react:N,vue:V,"color-swatch":B,sun:I,moon:E,git:q,github:R,linkedin:F,upwork:Y},G=Z,$={props:{glyph:{type:String,required:!0},className:{type:String,default:"ml-1 inline h-5 w-5"},strokeWidth:{type:[Number,String],default:2}},data:function(){var e=this.glyph.toLowerCase();return{iconComponent:G[e]?G[e]:G["code"]}}};$.render=x;var K=$,Q={components:{Icon:K},props:{title:String,url:String,icon:{type:String,required:!1}}};Q.render=k;var X=Q,ee=(n("a15b"),n("ac1f"),n("1276"),function(e){var t=e.split("").map((function(e,t){return 0===t?e.toUpperCase():e}));return t.join("")}),te=ee,ne=function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("colorSheme"),n="light"===t||!e.matches,c="dark"===t||e.matches;return n?!n:c},ce=ne,re={components:{Image:v,SocialLink:X,Icon:K},props:{socialMedia:Array,config:Object},data:function(){return{switchThemeTitle:"",rootElementClassList:document.documentElement.classList,colorTheme:this.config.theme}},created:function(){this.rootElementClassList.toggle(ce()?this.colorTheme.dark:this.colorTheme.light),this.switchThemeTitle=ce()?this.colorTheme.light:this.colorTheme.dark},methods:{getSwithcButtonName:function(){return te(this.switchThemeTitle)},onSwitchTheme:function(){var e=this,t=this.rootElementClassList.contains(this.colorTheme.light),n=function(){e.rootElementClassList.toggle(e.colorTheme.light),e.rootElementClassList.toggle(e.colorTheme.dark)};t?(this.switchThemeTitle=this.colorTheme.light,n(),this.getSwithcButtonName(),localStorage.setItem("colorSheme","dark")):(this.switchThemeTitle=this.colorTheme.dark,n(),this.getSwithcButtonName(),localStorage.setItem("colorSheme","light"))}}};re.render=m;var oe=re,ie={class:"footer"},le={class:"container mx-auto py-4 text-center"},ae={class:"my-3"},se={key:0,class:"my-3"};function ue(e,t,n,r,o,i){var l=Object(c["i"])("Icon");return Object(c["f"])(),Object(c["c"])("footer",ie,[Object(c["e"])("div",le,[Object(c["e"])("p",ae,Object(c["j"])(n.config.copyright)+" "+Object(c["j"])(o.currentYear),1),n.config.links?(Object(c["f"])(),Object(c["c"])("p",se,[Object(c["e"])("small",null,Object(c["j"])(n.config.thirdParty.text),1),Object(c["e"])("ul",null,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["g"])(n.config.links,(function(e,t){return Object(c["f"])(),Object(c["c"])("li",{key:t},[Object(c["e"])("a",{href:e.url,target:"_blank",class:"flex gap-2 justify-center underline"},[Object(c["e"])("span",null,Object(c["j"])(e.name),1),Object(c["e"])(l,{glyph:"external-link",className:"inline-block h-5 w-5 flex-shrink-0"})],8,["href"])])})),128))])])):Object(c["d"])("",!0)])])}var he={components:{Icon:K},props:{config:{type:Object,required:!0}},data:function(){return{currentYear:(new Date).getFullYear()}}};he.render=ue;var fe=he,de={components:{Header:oe,Footer:fe},props:{sectionsConfig:{type:Object,required:!0},siteConfig:{type:Object,required:!0},pageName:String},data:function(){return{headerConfig:Object(i["a"])(Object(i["a"])({},this.sectionsConfig.header),{},{title:this.siteConfig.name,theme:this.siteConfig.theme,logotypeUrl:null})}},mounted:function(){document.title=this.pageName?"".concat(this.siteConfig.name," | ").concat(this.pageName):this.siteConfig.name},beforeUpdate:function(){this.headerConfig=Object(i["a"])(Object(i["a"])({},this.headerConfig),{},{logotypeUrl:this.sectionsConfig.logotypeUrl})}};de.render=u;var ge=de,pe={key:0,class:"cart-list flex flex-wrap justify-center py-6"},be={key:1,class:"max-w-screen-md mx-auto py-6"},me=Object(c["e"])("p",null,"Data is loading...",-1),je={key:2,class:"max-w-screen-md mx-auto py-6"},Oe=Object(c["e"])("p",null,"Upss... Got an error.",-1);function ve(e,t,n,r,o,i){var l=Object(c["i"])("Card");return Object(c["f"])(),Object(c["c"])(c["a"],null,[o.fetchedRepos&&o.fetchedRepos.length?(Object(c["f"])(),Object(c["c"])("div",pe,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["g"])(o.fetchedRepos,(function(e){return Object(c["f"])(),Object(c["c"])(l,{key:e.id,config:e},null,8,["config"])})),128))])):Object(c["d"])("",!0),o.isDataLoading?(Object(c["f"])(),Object(c["c"])("div",be,[me])):Object(c["d"])("",!0),n.isError?(Object(c["f"])(),Object(c["c"])("div",je,[Oe])):Object(c["d"])("",!0)],64)}var we={class:"cart p-3 md:p-6 bg-accent rounded-xl shadow-md space-y-2 hover:shadow-lg"},ke={class:"text-left h-full grid grid-rows-1 grid-cols-5 gap-2"},xe={class:"icon-tech text-accent row-span-2 flex items-center"},ye={class:"col-span-4 text-lg text-accent font-semibold"},Ce={class:"capitalize"},ze={key:1,class:"flex items-center"},Me={class:"capitalize"},Se={class:"overflow-hidden col-span-4 text-accent-shade font-medium"},Te={class:"flex-1"};function He(e,t,n,r,o,i){var l=Object(c["i"])("Icon");return Object(c["f"])(),Object(c["c"])("div",we,[n.config.imageShow&&n.config.siteUrl?(Object(c["f"])(),Object(c["c"])("a",{key:0,href:n.config.siteUrl,title:"Link to site ".concat(n.config.title),class:"block mx-auto",target:"_blank"},[Object(c["e"])("img",{class:"hidden lg:block max-h-72 rounded-md rounded-bl-none rounded-br-none",src:n.config.image?n.config.image:o.defaultImage,alt:n.config.title},null,8,["src","alt"])],8,["href","title"])):Object(c["d"])("",!0),Object(c["e"])("div",ke,[Object(c["e"])("div",xe,[Object(c["e"])(l,{glyph:n.config.tech,strokeWidth:1,className:"inline w-12 h-12"},null,8,["glyph"])]),Object(c["e"])("div",ye,[n.config.siteUrl?(Object(c["f"])(),Object(c["c"])("a",{key:0,href:n.config.siteUrl,title:"Link to site ".concat(n.config.title),target:"_blank",class:"flex items-center underline"},[Object(c["e"])("span",Ce,Object(c["j"])(n.config.title),1)],8,["href","title"])):(Object(c["f"])(),Object(c["c"])("span",ze,[Object(c["e"])("span",Me,Object(c["j"])(n.config.title),1)]))]),Object(c["e"])("div",Se,[Object(c["e"])("a",{href:n.config.sourceUrl,title:"Link to source ".concat(n.config.title),target:"_blank",class:"flex items-center gap-1"},[Object(c["e"])(l,{glyph:"git",className:"w-6 h-6"}),Object(c["e"])("small",Te,Object(c["j"])(n.config.description?n.config.description:n.config.title),1)],8,["href","title"])])])])}var Ne={components:{Icon:K},props:{config:Object},data:function(){return{defaultImage:"/assets/images/screen_1.jpg"}}};n("7a6b");Ne.render=He;var Le=Ne,Ve={components:{Card:Le},props:{fetchedData:Array||null,isError:Boolean||null},data:function(){return{fetchedRepos:[],isDataLoading:null}},created:function(){this.isDataLoading=!0},beforeUpdate:function(){this.fetchedRepos=this.fetchedData.map((function(e){return e})),this.isDataLoading=!1}};Ve.render=ve;var Ue=Ve,Be={site:{name:"Oles Tk.",theme:{dark:"dark",light:"light"}},pages:{home:"Home page",experience:"Experience page"},page:{header:{logotype:{title:"VectorStock.com/36593829",className:"h-12 w-12 rounded-full overflow-hidden border-2"}},footer:{copyright:"Copyrights 2020 -",links:[{name:"TailwindCSS",url:"https://tailwindcss.com/"},{name:"VueJS",url:"https://vuejs.org/"}],thirdParty:{text:"Made with ❤️ &:"}},socials:[{link:"https://www.linkedin.com/in/oles-tkachuk-77a54284/",title:"LinkedIn"},{link:"https://github.com/telesyk",title:"GitHub"},{link:"https://upwork.com/freelancers/olestkachuk",title:"Upwork"}]}},_e={components:{Page:ge,Home:Ue},data:function(){return{site:Object(i["a"])({},Be.site),pages:Object(i["a"])({},Be.pages),sections:Object(i["a"])({},Be.page),fetchedData:null,fetchError:null}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.github.com/users/telesyk/repos");case 3:if(n=t.sent,n.ok||!(n.status>=400)){t.next=6;break}throw new Error("".concat(n.status,": ").concat(n.statusText));case 6:return t.next=8,n.json();case 8:return c=t.sent,console.debug(c),e.sections=Object(i["a"])(Object(i["a"])({},e.sections),{},{logotypeUrl:c[0].owner.avatar_url}),t.next=13,c.map((function(e){return{id:e.id,title:e.name,created:e.created_at,description:e.description,siteUrl:e.homepage,sourceUrl:e.html_url,tech:e.language}}));case 13:e.fetchedData=t.sent,t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),console.error(t.t0),e.fetchError=!0;case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}};_e.render=r;var Ie=_e;Object(c["b"])(Ie).mount("#app")},"7a6b":function(e,t,n){"use strict";n("297c")}});
//# sourceMappingURL=index.df971df0.js.map