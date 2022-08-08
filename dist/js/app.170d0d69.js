(function(){"use strict";var t={3074:function(t,e,n){var i=n(6369),s=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},a=[],o={},r=o,l=n(1001),c=(0,l.Z)(r,s,a,!1,null,null,null),u=c.exports,m=n(2631),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"homeContainer"},[e("div",{staticClass:"heardr"},[e("div",{staticClass:"headerTitle",on:{click:t.goIndex}},[t._v("青灯看图")])]),e("div",{staticClass:"imgClassification"},t._l(t.navList,(function(n,i){return e("span",{key:i,class:n.style,on:{click:function(e){return t.taggerNav(i,n.type,n.name)}}},[t._v(t._s(n.name))])})),0),e("div",{staticClass:"imglist"},t._l(t.imgList,(function(n){return e("div",{key:n.id,staticClass:"imgStyle",on:{click:function(e){return t.goImgAbout(n)}}},[e("img",{attrs:{src:n.url,alt:"",title:n.title}}),e("div",{staticClass:"imgTitle"},[t._v(t._s(n.title))])])})),0),e("div",{staticClass:"imgNum"},[e("van-pagination",{attrs:{"total-items":125,"show-page-size":5,"force-ellipses":""},on:{change:t.taggerImgList},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},d=[],p=n(6265),v=n.n(p);const y=v().create({baseURL:"https://api.apiopen.top/api/"});var f=y;const h=function(t,e,n){return f({method:"get",url:"getImages",params:{responseType:"blob",type:t||"",page:e||0,size:n||18}})};var b=n(3822),w={data(){return{navList:[{name:"全部",type:"",style:"navStyle checkedNav"},{name:"动物",type:"animal",style:"navStyle"},{name:"美",type:"beauty",style:"navStyle"},{name:"汽车",type:"car",style:"navStyle"},{name:"漫画",type:"comic",style:"navStyle"},{name:"食物",type:"food",style:"navStyle"},{name:"游戏",type:"game",style:"navStyle"},{name:"电影",type:"movie",style:"navStyle"},{name:"人物",type:"person",style:"navStyle"},{name:"壁纸",type:"phone",style:"navStyle"},{name:"风景",type:"scenery",style:"navStyle"}],imgList:[],show:!1,currentPage:1,newType:"",flag:!1,imgType:"全部"}},methods:{...(0,b.OI)(["getImgAbout"]),async taggerNav(t,e,n){this.imgType=n,this.currentPage=1,this.newType=e;const i=await h(e);200!==i.status?this.show=!0:this.imgList=i.data.result.list,this.navList.some((t=>{if("navStyle checkedNav"===t.style)return t.style="navStyle",!0})),this.navList[t].style="navStyle checkedNav"},async getinitImg(){const t=await h();this.imgList=t.data.result.list},async taggerImgList(){window.scroll(0,0);const t=await h(this.newType,18*this.currentPage);this.imgList=t.data.result.list},goImgAbout(t){t.imgType=this.imgType,this.getImgAbout(t),this.$router.push("/imgelement")},goIndex(){this.$router.push("/")}},created(){this.getinitImg()}},C=w,I=(0,l.Z)(C,g,d,!1,null,"f653a4ee",null),_=I.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"imgElementContainer"},[e("div",{staticClass:"heardr"},[e("div",{staticClass:"headerTitle",attrs:{title:"返回首页"},on:{click:t.goIndex}},[t._v("青灯看图")])]),e("div",{staticClass:"imgElementBox"},[e("div",{staticClass:"imgstyle"},[e("div",{staticClass:"imgtitle"},[t._v(t._s(t.imgAbout.title))]),e("div",{staticClass:"img"},[e("img",{attrs:{src:t.imgAbout.url,alt:""}})])])]),e("div",{staticClass:"recommend"},[e("p",[t._v("相关图片推荐")]),e("div",{staticClass:"imglist"},t._l(t.imgList,(function(n){return e("div",{key:n.id,staticClass:"imgStyle",on:{click:function(e){return t.goImgAbout(n)}}},[e("img",{attrs:{src:n.url,alt:"",title:n.title}}),e("div",{staticClass:"imgTitle"},[t._v(t._s(n.title))])])})),0)])])},A=[],L={data(){return{imgList:[],downloadImg:""}},computed:{...(0,b.rn)(["imgAbout"])},filters:{Classification(t){return""===t?"全部":"animal"===t?"动物":"beauty"===t?"美":"car"===t?"汽车":"comic"===t?"漫画":"food"===t?"食物":"game"===t?"游戏":"movie"===t?"电影":"person"===t?"人物":"phone"===t?"壁纸":"风景"}},methods:{...(0,b.OI)(["getImgAbout"]),async getinitImg(){const t=await h(this.imgAbout.type);this.imgList=t.data.result.list,console.log(t)},goImgAbout(t){this.getImgAbout(t),window.scroll(0,0)},goIndex(){this.$router.push("/")},downloadBtn(){console.log("点击下载图片"),v()({method:"get",url:this.imgAbout.url,responseType:"arraybuffer"}).then((t=>{console.log(t);const e=new Blob(response),n=window.URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=n,i.setAttribute("download","https://pic.netbian.com/uploads/allimg/220605/235509-1654444509b06d.jpg"),document.body.appendChild(i),i.click()})),download(this.imgAbout.url)}},created(){this.getinitImg(),this.downloadImg=this.imgAbout.url}},S=L,P=(0,l.Z)(S,k,A,!1,null,"0efc99a9",null),T=P.exports;i.ZP.use(m.Z);const x=[{path:"/",name:"home",component:_},{path:"/imgelement",component:T}],O=new m.Z({mode:"history",base:"/",routes:x});var Z=O;i.ZP.use(b.ZP);var j=new b.ZP.Store({state:{imgAbout:{}},getters:{},mutations:{getImgAbout(t,e){t.imgAbout=e}},actions:{},modules:{}}),E=n(3713);n(5110);i.ZP.config.productionTip=!1,i.ZP.use(E.ZP),document.addEventListener("contextmenu",(function(t){t.preventDefault()})),document.addEventListener("selectstart",(function(t){t.preventDefault()})),new i.ZP({router:Z,store:j,render:t=>t(u)}).$mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,a){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],a=t[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(r=!1,a<o&&(o=a));if(r){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,o=i[0],r=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var u=l(n)}for(e&&e(i);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},i=self["webpackChunkdemo_lookmap"]=self["webpackChunkdemo_lookmap"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3074)}));i=n.O(i)})();
//# sourceMappingURL=app.170d0d69.js.map