(function(){"use strict";var e={655:function(e,t,n){var l=n(751),a=n(641);const o={id:"app"};function r(e,t,n,l,r,u){const s=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(s)])}var u={},s=n(262);const c=(0,s.A)(u,[["render",r]]);var i=c,d=n(15),m=n(166);const p={class:"outer-container"},f={class:"fixed-container"},k={class:"image-container"},g=["src"];function v(e,t,n,l,o,r){const u=(0,a.g2)("carousel"),s=(0,a.g2)("el-row"),c=(0,a.g2)("el-col");return(0,a.uX)(),(0,a.CE)("div",p,[(0,a.bF)(s,{span:24},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[(0,a.bF)(u)])])),_:1}),(0,a.bF)(s,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.Lk)("span",null,"今日推荐",-1)]))),_:1})])),_:1}),(0,a.Lk)("div",f,[(0,a.bF)(s,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.images,((e,t)=>((0,a.uX)(),(0,a.Wv)(c,{span:6,key:t},{default:(0,a.k6)((()=>[(0,a.Lk)("div",k,[(0,a.Lk)("img",{src:e.src},null,8,g)])])),_:2},1024)))),128))])),_:1})])])}var b=n.p+"img/图片1.e070e3c4.jpg",h=n.p+"img/图片2.6be93e8b.jpg",_=n.p+"img/图片3.166e899d.jpg",F=n.p+"img/图片4.bcfb93c9.jpg",y=n.p+"img/图片5.1fc3418e.jpg",C=n(33);const L={class:"carousel-container"},x=["src"];function E(e,t,n,l,o,r){return(0,a.uX)(),(0,a.CE)("div",L,[(0,a.Lk)("div",{class:"carousel-wrapper",style:(0,C.Tr)(r.carouselStyle)},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.images,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"carousel-item"},[(0,a.Lk)("img",{src:e.src},null,8,x)])))),128))],4),(0,a.Lk)("button",{class:"prev",onClick:t[0]||(t[0]=(...e)=>r.prevSlide&&r.prevSlide(...e))}," ‹ "),(0,a.Lk)("button",{class:"next",onClick:t[1]||(t[1]=(...e)=>r.nextSlide&&r.nextSlide(...e))}," › ")])}var I=n(910),X=n.p+"img/test2.1d2a4432.png",S=n.p+"img/test3.0efa3193.png",A=n.p+"img/test4.9753ec57.png",w=n.p+"img/test5.8620216a.png",W={name:"MyCarousel",data(){return{urls:[n(910)],images:[{src:I},{src:X},{src:S},{src:A},{src:w}],currentIndex:0,timer:null}},computed:{carouselStyle(){const e=100*-this.currentIndex;return{transform:`translateX(${e}%)`,transition:"transform 0.5s ease-in-out"}}},beforeUnmount(){this.stopAutoSlide()},mounted(){this.startAutoSlide()},methods:{prevSlide(){this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length},nextSlide(){this.currentIndex=(this.currentIndex+1)%this.images.length},startAutoSlide(){this.timer=setInterval(this.nextSlide,3e3)},stopAutoSlide(){clearInterval(this.timer)}}};const j=(0,s.A)(W,[["render",E],["__scopeId","data-v-7e71cb88"]]);var O=j,M={name:"MyHome",components:{carousel:O},data(){return{images:[{src:b},{src:h},{src:_},{src:F},{src:y}]}}};const B=(0,s.A)(M,[["render",v],["__scopeId","data-v-233f5d8c"]]);var K=B;const T=["src","alt"];function H(e,t,n,l,o,r){const u=(0,a.g2)("el-header"),s=(0,a.g2)("el-card"),c=(0,a.g2)("el-col"),i=(0,a.g2)("el-row"),d=(0,a.g2)("el-main"),m=(0,a.g2)("el-container");return(0,a.uX)(),(0,a.Wv)(m,{class:"about-us"},{default:(0,a.k6)((()=>[(0,a.bF)(u,null,{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.Lk)("h1",{class:"page-title"},"关于我们",-1),(0,a.Lk)("p",{class:"page-subtitle"},"我们致力于为全球用户提供优质的产品与服务。",-1)]))),_:1}),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(s,{class:"section"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.Lk)("h2",null,"我们的使命",-1),(0,a.Lk)("p",null," 我们的使命是通过创新和高效的解决方案，推动行业的发展，并为社会带来积极的影响。 ",-1)]))),_:1}),(0,a.bF)(s,{class:"section"},{default:(0,a.k6)((()=>[t[2]||(t[2]=(0,a.Lk)("h2",null,"我们的价值观",-1)),(0,a.bF)(i,{gutter:20},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.values,((e,t)=>((0,a.uX)(),(0,a.Wv)(c,{span:8,key:t},{default:(0,a.k6)((()=>[(0,a.bF)(s,{class:"value-card"},{default:(0,a.k6)((()=>[(0,a.Lk)("h3",null,(0,C.v_)(e.title),1),(0,a.Lk)("p",null,(0,C.v_)(e.description),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,a.bF)(s,{class:"section"},{default:(0,a.k6)((()=>[t[3]||(t[3]=(0,a.Lk)("h2",null,"我们的团队",-1)),t[4]||(t[4]=(0,a.Lk)("p",null," 我们的团队由一群充满激情、富有创造力的专业人士组成。我们相信，团队的力量能够成就伟大的事业。 ",-1)),(0,a.bF)(i,{gutter:20},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.teamMembers,(e=>((0,a.uX)(),(0,a.Wv)(c,{span:6,key:e.id},{default:(0,a.k6)((()=>[(0,a.bF)(s,{class:"team-member"},{default:(0,a.k6)((()=>[(0,a.Lk)("img",{src:e.image,alt:e.name,class:"team-member-image"},null,8,T),(0,a.Lk)("h3",null,(0,C.v_)(e.name),1),(0,a.Lk)("p",null,(0,C.v_)(e.role),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}var P=n(644),U=n(703),$=n(691),z=n(306),Z={name:"AboutUs",components:{ElContainer:P.lX,ElHeader:P.bZ,ElMain:P.ZO,ElFooter:P.LK,ElCard:U.Ik,ElRow:$.S2,ElCol:z.uD},data(){return{values:[{title:"创新",description:"我们不断挑战自我，寻求更高效的方式解决问题。"},{title:"诚信",description:"我们始终以诚信为本，恪守承诺，赢得客户的信任。"},{title:"责任",description:"我们关心社会责任，为环境可持续发展做出贡献。"}],teamMembers:[{id:1,name:"张伟",image:b},{id:2,name:"李娜",image:h},{id:3,name:"王强",image:_}]}}};const q=(0,s.A)(Z,[["render",H],["__scopeId","data-v-0396338c"]]);var D=q;function R(e,t,n,l,o,r){const u=(0,a.g2)("el-menu-item"),s=(0,a.g2)("el-button"),c=(0,a.g2)("el-menu"),i=(0,a.g2)("router-view"),d=(0,a.g2)("el-header"),m=(0,a.g2)("el-card"),p=(0,a.g2)("el-main"),f=(0,a.g2)("el-container");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[t[5]||(t[5]=(0,a.Lk)("h1",null,"个人博客",-1)),(0,a.bF)(c,{class:"menu","default-active":o.activeIndex,mode:"horizontal",onSelect:e.handleSelect},{default:(0,a.k6)((()=>[(0,a.bF)(u,{index:"1"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)(" 首页 ")]))),_:1}),(0,a.bF)(u,{index:"2"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)(" 关于我们 ")]))),_:1}),(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(s,{onClick:l.goToAbout},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)(" 返回about ")]))),_:1},8,["onClick"])])),_:1}),(0,a.bF)(u,null,{default:(0,a.k6)((()=>[(0,a.bF)(s,{onClick:l.goToHome},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)(" 返回home ")]))),_:1},8,["onClick"])])),_:1}),(0,a.bF)(u,{index:"3"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)(" 联系我 ")]))),_:1})])),_:1},8,["default-active","onSelect"]),(0,a.Lk)("div",null,[(0,a.bF)(i)])])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(p,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.posts,((e,n)=>((0,a.uX)(),(0,a.Wv)(m,{key:n,class:"post-card"},{default:(0,a.k6)((()=>[(0,a.Lk)("h2",null,(0,C.v_)(e.title),1),(0,a.Lk)("p",null,(0,C.v_)(e.content),1),(0,a.bF)(s,{type:"primary"},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)(" 阅读更多... ")]))),_:1})])),_:2},1024)))),128))])),_:1})])),_:1}),(0,a.Lk)("div",null,[(0,a.bF)(i)])])}var G={setup(){const e=(0,m.rd)(),t=()=>{e.push("/about")},n=()=>{e.push("/")};return{goToAbout:t,goToHome:n}},data(){return{activeIndex:"1",posts:[{title:"博客文章标题 1",content:"这是第一篇博客文章的内容。这里可以写一些关于你的兴趣和经历的文字。"},{title:"博客文章标题 2",content:"这是第二篇博客文章的内容。可以分享一些你最近的项目或想法。"},{title:"博客文章标题 3",content:"这是第三篇博客文章的内容。可以讨论一些技术主题或个人见解。"}]}}};const J=(0,s.A)(G,[["render",R]]);var N=J;function Q(e,t,n,l,o,r){return(0,a.uX)(),(0,a.CE)("div",null,t[0]||(t[0]=[(0,a.Lk)("h1",null,"Bookmark Page",-1)]))}var V={name:"AboutPage"};const Y=(0,s.A)(V,[["render",Q]]);var ee=Y;const te={class:"common-layout"};function ne(e,t,n,l,o,r){const u=(0,a.g2)("el-menu-item"),s=(0,a.g2)("el-menu"),c=(0,a.g2)("el-header"),i=(0,a.g2)("router-view"),d=(0,a.g2)("el-main"),m=(0,a.g2)("Bottom"),p=(0,a.g2)("el-footer"),f=(0,a.g2)("el-container");return(0,a.uX)(),(0,a.CE)("div",te,[(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(s,{class:"menu","default-active":l.activeIndex,mode:"horizontal",onSelect:l.handleSelect},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.routes,(e=>((0,a.uX)(),(0,a.Wv)(u,{key:e.path,index:e.path,class:"menu-item"},{default:(0,a.k6)((()=>[(0,a.eW)((0,C.v_)(e.name),1)])),_:2},1032,["index"])))),128))])),_:1},8,["default-active","onSelect"])])),_:1}),(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(i)])),_:1}),(0,a.bF)(p,null,{default:(0,a.k6)((()=>[(0,a.bF)(m,{ref:"Bottom"})])),_:1})])),_:1})])}const le={class:"footer-container"};function ae(e,t,n,l,o,r){return(0,a.uX)(),(0,a.CE)("div",le,t[0]||(t[0]=[(0,a.Lk)("p",null,"© 2025 高华西 个人版权. 保留所有权利.",-1)]))}var oe={name:"MyBottom"};const re=(0,s.A)(oe,[["render",ae],["__scopeId","data-v-733d87f7"]]);var ue=re,se={name:"MyHome",components:{Bottom:ue},setup(){const e=(0,m.rd)(),t=(0,m.lq)(),n=[{path:"/home",name:"首页"},{path:"/products",name:"产品中心"},{path:"/about",name:"关于我们"},{path:"/callUs",name:"联系我们"}],l=t=>{e.push(t)},a=t.path;return{routes:n,handleSelect:l,activeIndex:a}}};const ce=(0,s.A)(se,[["render",ne]]);var ie=ce;const de={class:"contact-us"};function me(e,t,n,l,o,r){return(0,a.uX)(),(0,a.CE)("div",de,t[0]||(t[0]=[(0,a.Lk)("h1",null,"联系我们",-1),(0,a.Lk)("p",null,"如果您有任何问题，请随时通过以下方式联系我们：",-1),(0,a.Lk)("div",{class:"contact-info"},[(0,a.Lk)("p",null,"电话：111"),(0,a.Lk)("p",null,"邮箱：222"),(0,a.Lk)("p",null,"地址：333")],-1)]))}var pe={name:"CallUs",data(){return{form:{name:"",email:"",message:""}}},methods:{handleSubmit(){alert(`感谢您的留言，${this.form.name}！我们会尽快回复您。`),this.form.name="",this.form.email="",this.form.message=""}}};const fe=(0,s.A)(pe,[["render",me],["__scopeId","data-v-f51471ac"]]);var ke=fe;const ge={class:"container"},ve={class:"main"};function be(e,t,n,l,o,r){const u=(0,a.g2)("el-button"),s=(0,a.g2)("el-col"),c=(0,a.g2)("el-row");return(0,a.uX)(),(0,a.CE)("div",ge,[t[8]||(t[8]=(0,a.Lk)("div",{class:"tou"},[(0,a.Lk)("h1",null,"产品分类")],-1)),(0,a.Lk)("div",ve,[(0,a.bF)(c,{gutter:10,class:"full-height"},{default:(0,a.k6)((()=>[(0,a.bF)(s,{span:12,class:"category"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{type:"primary",class:"full-button",onClick:t[0]||(t[0]=e=>r.handleClick("类型1"))},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)(" 类型1 ")]))),_:1})])),_:1}),(0,a.bF)(s,{span:12,class:"category"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{type:"success",class:"full-button",onClick:t[1]||(t[1]=e=>r.handleClick("类型2"))},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)(" 类型2 ")]))),_:1})])),_:1})])),_:1}),(0,a.bF)(c,{gutter:10,class:"full-height"},{default:(0,a.k6)((()=>[(0,a.bF)(s,{span:12,class:"category"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{type:"warning",class:"full-button",onClick:t[2]||(t[2]=e=>r.handleClick("类型3"))},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)(" 类型3 ")]))),_:1})])),_:1}),(0,a.bF)(s,{span:12,class:"category"},{default:(0,a.k6)((()=>[(0,a.bF)(u,{type:"danger",class:"full-button",onClick:t[3]||(t[3]=e=>r.handleClick("类型4"))},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)(" 类型4 ")]))),_:1})])),_:1})])),_:1})])])}var he={name:"MyProducts",methods:{handleClick(e){this.$message({message:`你点击了 ${e}`,type:"info"})}}};const _e=(0,s.A)(he,[["render",be],["__scopeId","data-v-19815a5e"]]);var Fe=_e;const ye=[{path:"/",name:"框架",component:ie,children:[{path:"/home",name:"首页",component:K},{path:"/about",name:"关于我",component:D},{path:"/products",name:"产品中心",component:Fe},{path:"/bookMark",name:"收藏",component:ee},{path:"/callUs",name:"联系我们",component:ke}]},{path:"/blog",name:"Blog",component:N}],Ce=(0,m.aE)({history:(0,m.Bt)(),routes:ye});var Le=Ce;n(522);const xe=(0,l.Ef)(i);xe.use(d.A),xe.use(Le),xe.mount("#app")},910:function(e,t,n){e.exports=n.p+"img/test1.eacce0ba.png"}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,l,a,o){if(!l){var r=1/0;for(i=0;i<e.length;i++){l=e[i][0],a=e[i][1],o=e[i][2];for(var u=!0,s=0;s<l.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(u=!1,o<r&&(r=o));if(u){e.splice(i--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[l,a,o]}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,o,r=l[0],u=l[1],s=l[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var i=s(n)}for(t&&t(l);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},l=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(655)}));l=n.O(l)})();
//# sourceMappingURL=app.e79344ff.js.map