(function(){"use strict";var e={136:function(e,t,n){var r=n(751),o=n(641);const u={id:"app"};function l(e,t,n,r,l,a){const i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.bF)(i)])}var a={},i=n(262);const c=(0,i.A)(a,[["render",l]]);var s=c,d=n(484),p=n(166),m=n(33);const f={class:"carousel-container"},v=["src"];function h(e,t,n,r,u,l){const a=(0,o.g2)("el-card"),i=(0,o.g2)("el-col"),c=(0,o.g2)("el-row");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",f,[(0,o.Lk)("div",{class:"carousel-wrapper",style:(0,m.Tr)(l.carouselStyle)},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.images,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:"carousel-item"},[(0,o.Lk)("img",{src:e.src},null,8,v)])))),128))],4),(0,o.Lk)("button",{class:"prev",onClick:t[0]||(t[0]=(...e)=>l.prevSlide&&l.prevSlide(...e))}," ‹ "),(0,o.Lk)("button",{class:"next",onClick:t[1]||(t[1]=(...e)=>l.nextSlide&&l.nextSlide(...e))}," › ")]),(0,o.bF)(c,{span:24},{default:(0,o.k6)((()=>[(0,o.bF)(i,{span:24},{default:(0,o.k6)((()=>[(0,o.bF)(a,null,{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.Lk)("h3",null,"Card 1",-1),(0,o.Lk)("p",null,"Some content for Card 1",-1)]))),_:1})])),_:1})])),_:1})])}var k=n(910),b=n.p+"img/test2.1d2a4432.png",g=n.p+"img/test3.0efa3193.png",F=n.p+"img/test4.9753ec57.png",_=n.p+"img/test5.8620216a.png",x={name:"MyHome",data(){return{urls:[n(910)],images:[{src:k},{src:b},{src:g},{src:F},{src:_}],currentIndex:0,timer:null}},computed:{carouselStyle(){const e=100*-this.currentIndex;return{transform:`translateX(${e}%)`,transition:"transform 0.5s ease-in-out"}}},beforeUnmount(){this.stopAutoSlide()},mounted(){this.startAutoSlide()},methods:{prevSlide(){this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length},nextSlide(){this.currentIndex=(this.currentIndex+1)%this.images.length},startAutoSlide(){this.timer=setInterval(this.nextSlide,3e3)},stopAutoSlide(){clearInterval(this.timer)}}};const y=(0,i.A)(x,[["render",h],["__scopeId","data-v-7b846617"]]);var C=y;function S(e,t,n,r,u,l){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Lk)("h1",null,"About Page",-1)]))}var A={name:"AboutPage"};const L=(0,i.A)(A,[["render",S]]);var E=L;function I(e,t,n,r,u,l){const a=(0,o.g2)("el-menu-item"),i=(0,o.g2)("el-button"),c=(0,o.g2)("el-menu"),s=(0,o.g2)("router-view"),d=(0,o.g2)("el-header"),p=(0,o.g2)("el-card"),f=(0,o.g2)("el-main"),v=(0,o.g2)("el-container");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[t[5]||(t[5]=(0,o.Lk)("h1",null,"个人博客",-1)),(0,o.bF)(c,{class:"menu","default-active":u.activeIndex,mode:"horizontal",onSelect:e.handleSelect},{default:(0,o.k6)((()=>[(0,o.bF)(a,{index:"1"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)(" 首页 ")]))),_:1}),(0,o.bF)(a,{index:"2"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)(" 关于我们 ")]))),_:1}),(0,o.bF)(a,null,{default:(0,o.k6)((()=>[(0,o.bF)(i,{onClick:r.goToAbout},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)(" 返回about ")]))),_:1},8,["onClick"])])),_:1}),(0,o.bF)(a,null,{default:(0,o.k6)((()=>[(0,o.bF)(i,{onClick:r.goToHome},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)(" 返回home ")]))),_:1},8,["onClick"])])),_:1}),(0,o.bF)(a,{index:"3"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)(" 联系我 ")]))),_:1})])),_:1},8,["default-active","onSelect"]),(0,o.Lk)("div",null,[(0,o.bF)(s)])])),_:1}),(0,o.bF)(v,null,{default:(0,o.k6)((()=>[(0,o.bF)(f,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.posts,((e,n)=>((0,o.uX)(),(0,o.Wv)(p,{key:n,class:"post-card"},{default:(0,o.k6)((()=>[(0,o.Lk)("h2",null,(0,m.v_)(e.title),1),(0,o.Lk)("p",null,(0,m.v_)(e.content),1),(0,o.bF)(i,{type:"primary"},{default:(0,o.k6)((()=>t[6]||(t[6]=[(0,o.eW)(" 阅读更多... ")]))),_:1})])),_:2},1024)))),128))])),_:1})])),_:1}),(0,o.Lk)("div",null,[(0,o.bF)(s)])])}var X={setup(){const e=(0,p.rd)(),t=()=>{e.push("/about")},n=()=>{e.push("/")};return{goToAbout:t,goToHome:n}},data(){return{activeIndex:"1",posts:[{title:"博客文章标题 1",content:"这是第一篇博客文章的内容。这里可以写一些关于你的兴趣和经历的文字。"},{title:"博客文章标题 2",content:"这是第二篇博客文章的内容。可以分享一些你最近的项目或想法。"},{title:"博客文章标题 3",content:"这是第三篇博客文章的内容。可以讨论一些技术主题或个人见解。"}]}}};const w=(0,i.A)(X,[["render",I]]);var O=w;function P(e,t,n,r,u,l){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Lk)("h1",null,"Bookmark Page",-1)]))}var T={name:"AboutPage"};const j=(0,i.A)(T,[["render",P]]);var W=j;const B={class:"common-layout"};function M(e,t,n,r,u,l){const a=(0,o.g2)("el-menu-item"),i=(0,o.g2)("el-menu"),c=(0,o.g2)("el-header"),s=(0,o.g2)("router-view"),d=(0,o.g2)("el-main"),p=(0,o.g2)("Bottom"),f=(0,o.g2)("el-footer"),v=(0,o.g2)("el-container");return(0,o.uX)(),(0,o.CE)("div",B,[(0,o.bF)(v,null,{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(i,{class:"menu","default-active":r.activeIndex,mode:"horizontal",onSelect:r.handleSelect,style:{"font-size":"18px","justify-content":"space-between"}},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.routes,(e=>((0,o.uX)(),(0,o.Wv)(a,{key:e.path,index:e.path},{default:(0,o.k6)((()=>[(0,o.eW)((0,m.v_)(e.name),1)])),_:2},1032,["index"])))),128))])),_:1},8,["default-active","onSelect"])])),_:1}),(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1}),(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(p,{ref:"Bottom"})])),_:1})])),_:1})])}function H(e,t,n,r,u,l){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Lk)("p",null,"© 2024 高华西 个人博客. 保留所有权利.",-1)]))}var U={name:"MyBottom"};const z=(0,i.A)(U,[["render",H]]);var K=z,q={name:"MyHome",components:{Bottom:K},setup(){const e=(0,p.rd)(),t=(0,p.lq)(),n=[{path:"/home",name:"首页"},{path:"/products",name:"产品中心"},{path:"/about",name:"关于我"},{path:"/bookMark",name:"收藏"},{path:"/callUs",name:"联系我们"}],r=t=>{e.push(t)},o=t.path;return{routes:n,handleSelect:r,activeIndex:o}}};const $=(0,i.A)(q,[["render",M]]);var D=$;function G(e,t,n,r,u,l){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Lk)("h1",null,"联系我们",-1)]))}var J={name:"CallUs"};const N=(0,i.A)(J,[["render",G]]);var Q=N;function R(e,t,n,r,u,l){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Lk)("h1",null,"相关产品",-1)]))}var V={name:"MyProducts",data(){return{products:[{id:1,name:"Product 1",description:"This is product 1",price:10},{id:2,name:"Product 2",description:"This is product 2",price:20},{id:3,name:"Product 3",description:"This is product 3",price:30}]}}};const Y=(0,i.A)(V,[["render",R]]);var Z=Y;const ee=[{path:"/",name:"框架",component:D,children:[{path:"/home",name:"首页",component:C},{path:"/about",name:"关于我",component:E},{path:"/products",name:"产品中心",component:Z},{path:"/bookMark",name:"收藏",component:W},{path:"/callUs",name:"联系我们",component:Q}]},{path:"/blog",name:"Blog",component:O}],te=(0,p.aE)({history:(0,p.Bt)(),routes:ee});var ne=te;n(522);const re=(0,r.Ef)(s);re.use(d.A),re.use(ne),re.mount("#app")},910:function(e,t,n){e.exports=n.p+"img/test1.eacce0ba.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],u=e[s][2];for(var a=!0,i=0;i<r.length;i++)(!1&u||l>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(a=!1,u<l&&(l=u));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[r,o,u]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,l=r[0],a=r[1],i=r[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var s=i(n)}for(t&&t(r);c<l.length;c++)u=l[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},r=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(136)}));r=n.O(r)})();
//# sourceMappingURL=app.52e88975.js.map