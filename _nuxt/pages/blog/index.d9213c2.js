(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return v}));var n=r(314),o=r(2),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),v=Object(o.e)("v-card__title");n.a},303:function(t,e,r){var content=r(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("11aa2c8e",content,!0,{sourceMap:!1})},317:function(t,e,r){"use strict";var n=r(303);r.n(n).a},318:function(t,e,r){(e=r(18)(!1)).push([t.i,".blog-header{text-align:center;margin-top:15px;margin-bottom:30px;font-weight:400}.post-card{text-decoration:none}.read-more{color:#5c94fc}",""]),t.exports=e},346:function(t,e,r){"use strict";r.r(e);r(41);var n=r(10),o={name:"Blog",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("blog",n.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"Blog - Pramod Devireddy",description:"Blog Posts by Pramod Devireddy"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description}]}},created:function(){this.$store.commit("SET_APP_BAR_COLOR","#FFF"),this.$store.commit("SET_APP_TITLE_COLOR","#000")}},c=(r(317),r(56)),l=r(78),d=r.n(l),v=r(314),m=r(302),_=r(348),f=r(183),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("h1",{staticClass:"blog-header"},[t._v("Blog Posts")]),t._v(" "),r("div",{staticClass:"d-flex flex-wrap justify-center"},t._l(t.posts,(function(e){return r("v-card",{key:e.slug,staticClass:"ma-5",attrs:{elevation:"3",width:"500"}},[r("NuxtLink",{staticClass:"post-card",attrs:{to:{name:"blog-slug",params:{slug:e.slug}}}},[r("v-img",{attrs:{src:e.img,contain:""}}),t._v(" "),r("v-card-title",[t._v(t._s(e.title))]),t._v(" "),r("v-card-subtitle",[t._v("by "+t._s(e.author.name))]),t._v(" "),r("v-card-subtitle",{staticClass:"pt-0 pb-3"},[t._v(t._s(e.description))]),t._v(" "),r("div",{staticClass:"read-more ml-4 mb-3"},[t._v("Read More ...")])],1)],1)})),1)])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardSubtitle:m.a,VCardTitle:m.b,VContainer:_.a,VImg:f.a})}}]);