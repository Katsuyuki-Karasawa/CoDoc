"use strict";(self.webpackChunkco_doc=self.webpackChunkco_doc||[]).push([[229],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(v,i(i({ref:n},s),{},{components:t})):r.createElement(v,i({ref:n},s))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(795),o=(t(9496),t(9613));const a={},i="3-9 \u6f14\u7fd2\u554f\u984c",c={unversionedId:"Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5165\u9580/3-9",id:"Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5165\u9580/3-9",title:"3-9 \u6f14\u7fd2\u554f\u984c",description:"1",source:"@site/docs/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5165\u9580/3-9.md",sourceDirName:"Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5165\u9580",slug:"/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5165\u9580/3-9",permalink:"/CoDoc/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5165\u9580/3-9",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3-8 \u30ab\u30d7\u30bb\u30eb\u5316",permalink:"/CoDoc/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5165\u9580/3-8"},next:{title:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528",permalink:"/CoDoc/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/"}},l={},p=[{value:"1",id:"1",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-9-\u6f14\u7fd2\u554f\u984c"},"3-9 \u6f14\u7fd2\u554f\u984c"),(0,o.kt)("h2",{id:"1"},"1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class Car1 {\n    int no;\n    int speed;\n\n    void setNo(int n) {\n        no = n;\n    }\n    void run(int s) {\n        speed = s;\n    }\n    void brake() {\n        speed = 0;\n    }\n    void break(int s) {\n        speed = s\n    }\n    void display() {\n        System.out.prinln("\u30ca\u30f3\u30d0\u30fc" + no + "\u306e\u901f\u5ea6\u306f" + speed + "\u3067\u3059\u3002")\n    }\n}\n')))}d.isMDXComponent=!0}}]);