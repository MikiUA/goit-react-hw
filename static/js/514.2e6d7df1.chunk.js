"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{5138:function(e,n,t){t.d(n,{s:function(){return o}});var a="Button_Button__-2+Jp",r=t(184),o=function(e){var n=e.LoadMoreFunc;return(0,r.jsx)("button",{className:a,onClick:function(){return n()},children:"Load more"})}},6151:function(e,n,t){t.d(n,{a:function(){return r}});var a=t(184),r=function(){return(0,a.jsx)("div",{children:"Loading..."})}},8512:function(e,n,t){t.d(n,{w:function(){return l}});var a="Searchbar_Searchbar__QO6eC",r="Searchbar_SearchForm__PF2QQ",o="Searchbar_SearchForm-button__D0+UF",i="Searchbar_SearchForm-button-label__r6gUN",c="Searchbar_SearchForm-input__e3atQ",u=t(184),l=function(e){var n=e.submitFunc;return(0,u.jsx)("header",{className:a,children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(e.target.elements.t3Filter.value)},className:r,children:[(0,u.jsx)("button",{type:"submit",className:o,children:(0,u.jsx)("span",{className:i,children:"Search"})}),(0,u.jsx)("input",{className:c,id:"t3Filter",name:"t3Filter",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}},9514:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(3433),r=t(9439),o=t(2791),i=t(1816),c=t(889),u=t(5013),l=t(8512),s=t(5138),m=t(4664),f=t(1087),g=t(184);function d(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],d=n[1];var h=(0,o.useState)(""),v=(0,r.Z)(h,2),_=v[0],p=v[1],x=(0,o.useState)(1),j=(0,r.Z)(x,2),b=j[0],y=j[1],S=(0,o.useState)(!1),Z=(0,r.Z)(S,2),I=Z[0],F=Z[1],k=(0,o.useState)(!1),w=(0,r.Z)(k,2),G=w[0],N=w[1],C=(0,o.useState)(null),L=(0,r.Z)(C,2),Q=L[0],U=L[1],q=(0,f.lr)(),P=(0,r.Z)(q,2),V=P[0],B=P[1];function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";p(e),B({query:e}),e&&(F("loading"),y(1),U(null),N(!1),(0,i.V0)(e).then((function(e){d(e.results),N(e.total_pages>1)})).catch((function(e){return U(e)})).finally(F(!1)))}return(0,o.useEffect)((function(){var e=V.get("query");e&&D(e)}),[]),Q?(console.log(Q),(0,g.jsx)(u.Z,{message:"something went wrong, please try again"})):_?(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(l.w,{submitFunc:D}),(0,g.jsx)(m.Z,{items:t,isLoading:I}),G?(0,g.jsx)(s.s,{LoadMoreFunc:function(){var e=b+1;y(e),F("updating"),U(null),N(!1),(0,i.V0)(_,e).then((function(n){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];d((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e))}))}(n.results),N(n.total_pages>e)})).catch((function(e){return U(e)})).finally(F(!1))}}):""]}):(0,g.jsx)(c.Z,{children:(0,g.jsx)(l.w,{submitFunc:D})})}},9340:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(6127),r=t(184);function o(e){var n=e.image,t=void 0===n?"":n,o=e.label,i=void 0===o?"":o,c=e.onClickF,u=void 0===c?function(){}:c,l=e.alternative,s=void 0===l?"":l;return(0,r.jsxs)("div",{className:a.Z.ImageGalleryItem,onClick:function(){return u()},children:[(0,r.jsx)("img",{className:a.Z["ImageGalleryItem-image"],src:t,alt:s}),(0,r.jsx)("div",{children:i})]})}},4664:function(e,n,t){t(2791);var a=t(7689),r=t(889),o=t(5013),i=t(6151),c=t(9340),u=t(1847),l=t(184);n.Z=function(e){var n=e.items,t=e.isLoading,s=(0,a.s0)();return"loading"===t?(0,l.jsx)(i.a,{}):0===n.length?(0,l.jsx)(o.Z,{message:"Sorry, no movies matched your criteria"}):(0,l.jsxs)(r.Z,{children:[(0,l.jsx)("ul",{className:u.Z.ImageGallery,children:n.map((function(e){var n=e.id,t=e.original_title,a=e.poster_path;return(0,l.jsx)(c.Z,{image:a?"https://image.tmdb.org/t/p/original"+a:"",label:t,onClickF:function(){return e=n,console.log(e),s("../movies/".concat(e));var e}},n)}))}),"updating"===t?(0,l.jsx)(i.a,{}):""]})}},1816:function(e,n,t){function a(e){var n="?";-1!==e.indexOf("?")&&(n="&");var t="https://api.themoviedb.org/3"+e+n+"api_key=08afc14184aa63504b5201f5497d7cf1";return new Promise((function(e,n){fetch(t).then((function(t){console.log(t),t.ok?t.json().then((function(n){console.log(n),e(n)})):n(null)})).catch((function(e){return n(null)}))}))}function r(){return a("/trending/movie/week")}function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="/search/movie?query=".concat(e,"&page=").concat(n);return a(t)}function i(e){return a("/movie/".concat(e,"?language=en-US"))}function c(e){return a("/movie/".concat(e,"/credits?language=en-US"))}function u(e){return a("/movie/".concat(e,"/reviews?language=en-US"))}t.d(n,{Hg:function(){return r},TP:function(){return i},V0:function(){return o},tx:function(){return u},zv:function(){return c}})},1847:function(e,n){n.Z={ImageGallery:"ImageGallery_ImageGallery__4csFQ"}},6127:function(e,n){n.Z={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__c1fa7","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__qWEuN"}}}]);
//# sourceMappingURL=514.2e6d7df1.chunk.js.map