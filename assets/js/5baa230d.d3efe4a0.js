"use strict";(self.webpackChunkco_doc=self.webpackChunkco_doc||[]).push([[755],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(795),a=(r(9496),r(9613));const i={},l="4-3 this \u3068 super",o={unversionedId:"Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/4-3",id:"Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/4-3",title:"4-3 this \u3068 super",description:"\u30e1\u30f3\u30d0\u5909\u6570 / \u30e1\u30bd\u30c3\u30c9\u306e\u547c\u3073\u51fa\u3057",source:"@site/docs/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/4-3.md",sourceDirName:"Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528",slug:"/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/4-3",permalink:"/CoDoc/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/4-3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4-2 \u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9",permalink:"/CoDoc/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/4-2"},next:{title:"4-4 final",permalink:"/CoDoc/Java/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u5fdc\u7528/4-4"}},p={},u=[{value:"\u30e1\u30ea\u30c3\u30c8",id:"\u30e1\u30ea\u30c3\u30c8",level:3},{value:"this \u3068 super \u306b\u3088\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u547c\u3073\u51fa\u3057",id:"this-\u3068-super-\u306b\u3088\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u547c\u3073\u51fa\u3057",level:2},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:3},{value:"\u30b3\u30fc\u30c9\u89e3\u8aac",id:"\u30b3\u30fc\u30c9\u89e3\u8aac",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4-3-this-\u3068-super"},"4-3 this \u3068 super"),(0,a.kt)("admonition",{title:"\u899a\u3048\u308b",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u30e1\u30f3\u30d0\u5909\u6570 / \u30e1\u30bd\u30c3\u30c9\u306e\u547c\u3073\u51fa\u3057"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.hoge"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u81ea\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e hoge"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"super.fuga"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30b9\u30fc\u30d1\u30fc\u30af\u30e9\u30b9\u306e fuga")))),(0,a.kt)("p",{parentName:"admonition"},"\u30b5\u30d6\u30af\u30e9\u30b9\u304c\u30b9\u30fc\u30d1\u30fc\u30af\u30e9\u30b9\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u524d\u306e\u51e6\u7406\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b")),(0,a.kt)("h3",{id:"\u30e1\u30ea\u30c3\u30c8"},"\u30e1\u30ea\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540c\u3058(\u91cd\u8907\u3057\u305f)\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u5fc5\u8981\u304c\u306a\u3044"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.hoge"),"\u306b\u3088\u3063\u3066\u3001\u5f15\u6570\u540d\u3092\u8003\u3048\u306a\u304f\u3066\u3082\u3088\u3044",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u81ea\u52d5\u3067\u751f\u6210\u3067\u304d\u308b"),(0,a.kt)("li",{parentName:"ul"},"eclipse \u3060\u3068")))),(0,a.kt)("h2",{id:"this-\u3068-super-\u306b\u3088\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u547c\u3073\u51fa\u3057"},"this \u3068 super \u306b\u3088\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u547c\u3073\u51fa\u3057"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this(\u5f15\u6570hoge)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540c\u3058\u30af\u30e9\u30b9\u5185\u3067\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u547c\u3073\u51fa\u3057\u5408\u3046\u3053\u3068\u304c\u3067\u304d\u308b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"super(\u5f15\u6570fuga)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30b9\u30fc\u30d1\u30fc\u30af\u30e9\u30b9\u5185\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b")))),(0,a.kt)("h3",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this()"),"\u3084",(0,a.kt)("inlineCode",{parentName:"li"},"super()"),"\u306f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u5185\u306e\u5148\u982d\u306b\u8a18\u8ff0\u3059\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u306a\u3051\u308c\u3070\u81ea\u52d5\u7684\u306b",(0,a.kt)("inlineCode",{parentName:"li"},"super(\u5f15\u6570fuga);"),"\u304c\u633f\u5165\u3055\u308c\u308b"))),(0,a.kt)("li",{parentName:"ul"},"\u30b9\u30fc\u30d1\u30fc\u30af\u30e9\u30b9\u304b\u3089\u5909\u6570\u3092\u4f5c\u3063\u3066\u3044\u304f\u305f\u3081")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"")),(0,a.kt)("h2",{id:"\u30b3\u30fc\u30c9\u89e3\u8aac"},"\u30b3\u30fc\u30c9\u89e3\u8aac"))}s.isMDXComponent=!0}}]);