"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[96],{9096:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var r=n(5861),a=n(3433),i=n(9439),o=n(4687),s=n.n(o),c=n(889),u=n(2791),l="Button_Button__wIdHV",h=n(184),m=function(t){var e=t.LoadMoreFunc;return(0,h.jsx)("button",{className:l,onClick:function(){return e()},children:"Load more"})},d=n(5671),f=n(3144),p=n(136),g=n(7277),_=n(5013),v="ImageGalleryItem_ImageGalleryItem__jRz4S",b="ImageGalleryItem_ImageGalleryItem-image__ygb+d",x=function(t){var e=t.item,n=t.onClickF,r=e.webformatURL,a=e.largeImageURL;return(0,h.jsxs)("li",{className:v,onClick:function(){return n(a)},children:[(0,h.jsx)("img",{className:b,src:r,alt:""}),(0,h.jsx)("br",{})]})},y=function(){return(0,h.jsx)("div",{children:"Loading..."})},j="Modal_Overlay__bFO15",S="Modal_Modal__K2+VB",k=function(t){var e=t.imgSrc,n=void 0===e?"":e,r=t.onAbortF;return(0,h.jsx)("div",{onClick:r,className:j,children:(0,h.jsx)("div",{className:S,children:(0,h.jsx)("img",{src:n,alt:""})})})},F="ImageGallery_ImageGallery__GIWo2",Z=function(t){(0,p.Z)(n,t);var e=(0,g.Z)(n);function n(){var t;(0,d.Z)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={modal:""},t}return(0,f.Z)(n,[{key:"render",value:function(){var t=this;return"loading"===this.props.isLoading?(0,h.jsx)(y,{}):0===this.props.items.length?(0,h.jsx)(_.Z,{message:"Sorry, no images matched your search"}):(0,h.jsxs)("div",{children:[this.state.modal?(0,h.jsx)(k,{imgSrc:this.state.modal,onAbortF:function(){return t.setState({modal:""})}}):"",(0,h.jsx)("ul",{className:F,children:this.props.items.map((function(e){return(0,h.jsx)(x,{item:e,onClickF:function(e){return t.setState({modal:e})}},e.id)}))}),"updating"===this.props.isLoading?(0,h.jsx)(y,{}):""]})}}]),n}(u.Component),w="Searchbar_Searchbar__LGw3V",I="Searchbar_SearchForm__YO7CL",N="Searchbar_SearchForm-button__wRyNk",L="Searchbar_SearchForm-button-label__gTY94",C="Searchbar_SearchForm-input__fYU4n",G=function(t){var e=t.submitFunc;return(0,h.jsx)("header",{className:w,children:(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(t.target.elements.t3Filter.value)},className:I,children:[(0,h.jsx)("button",{type:"submit",className:N,children:(0,h.jsx)("span",{className:L,children:"Search"})}),(0,h.jsx)("input",{className:C,id:"t3Filter",name:"t3Filter",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},M=function(){return(0,h.jsx)("a",{style:{height:"100%"},href:"https://pixabay.com/",children:(0,h.jsx)("img",{style:{height:"100%"},src:"https://pixabay.com/static/img/public/leaderboard_b.png",alt:"Pixabay"})})};function A(){var t=(0,u.useState)([]),e=(0,i.Z)(t,2),n=e[0],r=e[1];var o=(0,u.useState)(""),s=(0,i.Z)(o,2),l=s[0],d=s[1],f=(0,u.useState)(1),p=(0,i.Z)(f,2),g=p[0],v=p[1],b=(0,u.useState)("loading"),x=(0,i.Z)(b,2),y=x[0],j=x[1],S=(0,u.useState)(!1),k=(0,i.Z)(S,2),F=k[0],w=k[1],I=(0,u.useState)(null),N=(0,i.Z)(I,2),L=N[0],C=N[1];function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";d(t),j("loading"),v(1),C(null),w(!1),P(t).then((function(t){r(t.hits),w(t.totalHits>12)})).catch((function(t){return C(t)})).finally(j(!1))}return(0,u.useEffect)((function(){A()}),[]),L?(0,h.jsx)(_.Z,{label:"Sorry, an error has occured",message:L.message}):(0,h.jsxs)(c.Z,{type:"task",title:(0,h.jsx)(M,{}),children:[(0,h.jsx)(G,{submitFunc:A}),(0,h.jsx)(Z,{items:n,isLoading:y}),F?(0,h.jsx)(m,{LoadMoreFunc:function(){var t=g+1;v(t),j("updating"),C(null),w(!1),P(l,t).then((function(e){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(t))}))}(e.hits),w(e.totalHits>12*t)})).catch((function(t){return C(t)})).finally(j(!1))}}):""]})}function P(){return R.apply(this,arguments)}function R(){return R=(0,r.Z)(s().mark((function t(){var e,n,r,a=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:1,console.log("making request..."),e=e.replaceAll(" ","%20"),r="https://pixabay.com/api/?image_type=photo&key=33557563-eb5e97db1c6663d33c38bf2d1&orientation=horizontal&per_page=12&page="+n+"&q="+e,t.abrupt("return",new Promise((function(t,e){fetch(r,[]).then((function(e){if(!e.ok)throw e;e.json().then((function(e){return t(e)}))})).catch((function(t){e(t)}))})));case 6:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}},5861:function(t,e,n){function r(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function s(t){r(o,a,i,s,c,"next",t)}function c(t){r(o,a,i,s,c,"throw",t)}s(void 0)}))}}n.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=96.db93d5c5.chunk.js.map