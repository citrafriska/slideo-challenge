(this["webpackJsonpslideo-challenge"]=this["webpackJsonpslideo-challenge"]||[]).push([[0],{39:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(15),a=s.n(i),d=s(29),r=s(4),l=(s(39),s(10)),j=s(12),o="ADD_NEW_SLIDE",b="RESET_SLIDES",h="CLEAR_SLIDES",x=s(1);var u=Object(j.b)(null,{addNewSlide:function(e){return function(t){t({type:o,payload:e}),console.log("SUCCESS ADDED NEW SLIDE")}}})((function(e){var t=e.addNewSlide,s=Object(c.useState)(""),n=Object(l.a)(s,2),i=n[0],a=n[1];return Object(x.jsx)("div",{id:"addNewSlideModal",class:"modal fade bd-example-modal-lg",tabindex:"-1",role:"dialog","aria-labelledby":"addNewSlideModalLabel","aria-hidden":"true",children:Object(x.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsx)("div",{className:"modal-header d-flex justify-content-center",children:Object(x.jsx)("h5",{className:"modal-title ",children:"Add A New Slide"})}),Object(x.jsx)("div",{className:"modal-body d-flex justify-content-center",children:Object(x.jsx)("form",{children:Object(x.jsx)("textarea",{type:"text",className:"input d-flex align-items-top",value:i,onChange:function(e){return a(e.target.value)}})})}),Object(x.jsx)("div",{className:"modal-footer",children:Object(x.jsx)("button",{type:"button",className:"btn btn-primary swal-btn",id:"pay","data-dismiss":"modal",onClick:function(){return function(){var e={text:i.split(/\r?\n/)};t(e),a("")}()},children:"Add"})})]})})})})),O=s(27),m=s(28);var v=Object(j.b)((function(e){return{slides:e.slideo.slides}}),{reset:function(e){return function(t){t({type:b,payload:e}),console.log("SUCCESS CLEAR SLIDES")}},clearSlides:function(e){return function(t){t({type:h,payload:e}),console.log("SUCCESS CLEAR SLIDES")}}})((function(e){var t=e.slides,s=e.reset,n=e.clearSlides,i=function(e){"r"===e?s():n()},a=Object(c.useState)(0),d=Object(l.a)(a,2),r=d[0],j=d[1],o=Object(c.useState)(!1),b=Object(l.a)(o,2),h=b[0],v=b[1],p=Object(c.useState)(),f=Object(l.a)(p,2),N=f[0],g=f[1],S=Object(c.useState)(t),y=Object(l.a)(S,2),w=y[0],D=y[1];return Object(c.useEffect)((function(){D(t)})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"main-wrapper",children:[Object(x.jsxs)("div",{className:"header-section",children:[Object(x.jsxs)("div",{className:"header-menu-toggle",children:[Object(x.jsx)("i",{className:"fas fa-bars fa-1x"}),Object(x.jsxs)("div",{className:"header-username",children:[Object(x.jsx)("h5",{children:"Alperen b"}),Object(x.jsx)("p",{children:"alperenberatdurmus@gmail.com"})]})]}),Object(x.jsxs)("div",{className:"header-buttons",children:[Object(x.jsx)("button",{className:"header-btn",id:"blue-btn",children:"Button"}),Object(x.jsx)("div",{className:"badge",children:Object(x.jsx)("span",{children:"!"})}),Object(x.jsx)("span",{children:"Some Text Here"})]}),Object(x.jsxs)("div",{className:"header-buttons",children:[Object(x.jsxs)("div",{className:"header-new-presentation",children:[Object(x.jsx)("span",{children:"New Presentation"})," \xa0",Object(x.jsx)("i",{className:"fas fa-edit nav-fa"})]}),Object(x.jsxs)("button",{className:"header-btn",id:"grey-btn",children:[Object(x.jsx)("i",{class:"fas fa-play"})," ",Object(x.jsx)("span",{children:" \xa0Watch Video Text"})]}),Object(x.jsxs)("button",{className:"header-btn",id:"red-btn",children:[Object(x.jsx)("i",{class:"fas fa-download"}),Object(x.jsx)("span",{children:"\xa0Download"})]})]}),Object(x.jsx)("div",{className:"slideo-logo",children:"Slideo Logo"})]}),Object(x.jsxs)("div",{className:"content-wrapper",children:[Object(x.jsxs)("div",{className:"menu-section",children:[Object(x.jsxs)("div",{className:"menu-sidebar",children:[Object(x.jsxs)("div",{className:"active-menu",children:[Object(x.jsx)("i",{class:"fas fa-paint-brush"}),Object(x.jsx)("span",{children:"Edit"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{class:"fas fa-images"}),Object(x.jsx)("span",{children:"Images"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(O.a,{size:29})," ",Object(x.jsx)("span",{children:"Upload"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{class:"fas fa-font"}),Object(x.jsx)("span",{children:"Text"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{class:"fas fa-shapes"}),Object(x.jsx)("span",{children:"Shapes"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{size:29})," ",Object(x.jsx)("span",{children:"Background"})]})]}),Object(x.jsxs)("div",{className:"menu-design-layout-wrapper",children:[Object(x.jsx)("h5",{children:"All Design"}),Object(x.jsx)("div",{className:"menu-all-design-bar",children:[1,2,3,4,5,6].map((function(e,t){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"design"}),Object(x.jsx)("div",{className:"design"})]})}))}),Object(x.jsx)("div",{className:"menu-design-layout-footer",children:Object(x.jsx)("button",{className:"menu-design-layouts-btn",children:"DESIGN LAYOUTS"})})]})]}),Object(x.jsx)("div",{className:"preview-section",children:0===r?Object(x.jsx)("div",{className:"preview",id:"design1",children:0===t.length?null:t[r].text.map((function(e,t){return 0===t?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"first-line",children:Object(x.jsx)("h5",{children:e})})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"other-lines",children:Object(x.jsx)("p",{children:e})})})}))}):Object(x.jsx)("div",{className:"preview",id:"design2",children:0===t.length?null:t[r].text.map((function(e,s){return 0===s?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"other-lines",children:Object(x.jsx)("p",{children:t[r].text[0]})})}):1===s?Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("div",{className:"first-line",children:Object(x.jsx)("p",{children:t[r].text[1]})})]}):void 0}))})}),Object(x.jsxs)("div",{className:"thumbnails-section",children:[Object(x.jsx)("div",{className:"thumbnails-header",children:Object(x.jsx)("h5",{children:"Slides"})}),Object(x.jsxs)("div",{className:"thumbnails-wrapper",children:[Object(x.jsx)("div",{className:"slide-thumbnails",children:t.length>0?t.sort((function(e,t){return e.order-t.order})).map((function(e,s){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"thumbnail-wrap",children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:0!==h&&h===s?"showDivider":"hideDivider",children:[Object(x.jsx)("div",{className:"divider1"}),Object(x.jsx)("div",{className:"divider2"})]}),Object(x.jsx)("div",{className:r===s?"thumbnail active-slide":0!=h&&h===s?"thumbnail dragover":"thumbnail",draggable:!0,id:e.id,onClick:function(){return j(s)},onDragOver:function(e){return function(e){e.preventDefault();var s=t.findIndex((function(t){return t.id===e.target.id}));v(s)}(e)},onDragStart:function(e){return function(e){var s=t.findIndex((function(t){return t.id===e.target.id}));j(s),g(e.target.id)}(e)},onDrop:function(e){return function(e){if(!e.target.id)return v(!1),null;var s=t.find((function(e){return e.id===N})),c=t.find((function(t){return t.id===e.target.id})),n=s.order,i=c.order,a=w.map((function(t){return t.id===N&&(t.order=i),t.id===e.target.id&&(t.order=n),t})),d=t.findIndex((function(t){return t.id===e.target.id}));j(d),v(!1),D(a)}(e)},children:Object(x.jsx)("span",{children:e.text.join("\n")})})]}),Object(x.jsx)("div",{className:"thumbnail-number",children:Object(x.jsx)("p",{children:s+1})})]})})})):null}),Object(x.jsx)("div",{}),Object(x.jsx)("button",{className:"add-btn","data-target":"#addNewSlideModal","data-toggle":"modal",children:"+"})]}),Object(x.jsxs)("div",{className:"options-btn",children:[Object(x.jsx)("button",{type:"button",className:"clear-btn",onClick:function(){return i("r")},children:"3 Slides"}),Object(x.jsx)("button",{type:"button",className:"clear-btn",onClick:function(){return i("c")},children:"Clear"})]})]})]})]})}),Object(x.jsx)(u,{})]})}));var p=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(d.a,{children:Object(x.jsx)(r.c,{children:Object(x.jsx)(r.a,{exact:!0,path:"/",component:v})})})})},f=(s(46),s(9)),N=s(30),g=s(23),S=s(34),y=s(31),w=s(24),D=s(33),E={slides:[{id:"slide-1",order:1,text:["First Slide","Other Text"]},{id:"slide-2",order:2,text:["Second Slide","Other Text"]},{id:"slide-3",order:3,text:["Third Slide","Other Text"]}]},C={slideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return{slides:[].concat(Object(D.a)(e.slides),[Object(w.a)(Object(w.a)({},t.payload),{},{id:"slide-".concat(e.slides.length+1),order:e.slides.length+1})])};case b:return{slides:[{id:"slide-1",order:1,text:["First Slide","Other Text"]},{id:"slide-2",order:2,text:["Second Slide","Other Text"]},{id:"slide-3",order:3,text:["Third Slide","Other Text"]}]};case h:return{slides:[]};default:return e}}},T={},A=[y.a],I={key:"primary",storage:S.a},L=Object(g.a)(I,C),F=s(32),k=function(){var e=Object(f.createStore)(L,T,Object(N.composeWithDevTools)(f.applyMiddleware.apply(void 0,A)));return{store:e,persistor:Object(g.b)(e)}}(),M=k.persistor,U=k.store;a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(j.a,{store:U,children:Object(x.jsx)(F.a,{loading:null,persistor:M,children:Object(x.jsx)(p,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4e2545d2.chunk.js.map