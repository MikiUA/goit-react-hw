"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{6151:function(e,n,t){t.d(n,{a:function(){return a}});var r=t(184),a=function(){return(0,r.jsx)("div",{children:"Loading..."})}},2566:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(9439),a=t(889),i=t(2791),o=t(1816),c=t(5013),u=t(4664),l=t(184);function s(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],m=(0,i.useState)(null),f=(0,r.Z)(m,2),g=f[0],d=f[1],v=(0,i.useRef)(!0);return(0,i.useEffect)((function(){(0,o.Hg)().then((function(e){return s(e.results)})).catch((function(e){return d(e)})).finally(v.current=!1)}),[]),g?(0,l.jsx)(c.Z,{message:"something went wrong, please try again"}):(0,l.jsx)(a.Z,{children:(0,l.jsx)(u.Z,{items:t,isLoading:v})})}},9340:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(6127),a=t(184);function i(e){var n=e.image,t=void 0===n?"":n,i=e.label,o=void 0===i?"":i,c=e.onClickF,u=void 0===c?function(){}:c,l=e.alternative,s=void 0===l?"":l;return(0,a.jsxs)("div",{className:r.Z.ImageGalleryItem,onClick:function(){return u()},children:[(0,a.jsx)("img",{className:r.Z["ImageGalleryItem-image"],src:t,alt:s}),(0,a.jsx)("div",{children:o})]})}},4664:function(e,n,t){t(2791);var r=t(7689),a=t(889),i=t(5013),o=t(6151),c=t(9340),u=t(1847),l=t(184);n.Z=function(e){var n=e.items,t=e.isLoading,s=(0,r.s0)();return"loading"===t?(0,l.jsx)(o.a,{}):0===n.length?(0,l.jsx)(i.Z,{message:"Sorry, no movies matched your criteria"}):(0,l.jsxs)(a.Z,{children:[(0,l.jsx)("ul",{className:u.Z.ImageGallery,children:n.map((function(e){var n=e.id,t=e.original_title,r=e.poster_path;return(0,l.jsx)(c.Z,{image:r?"https://image.tmdb.org/t/p/original"+r:"",label:t,onClickF:function(){return e=n,console.log(e),s("../movies/".concat(e));var e}},n)}))}),"updating"===t?(0,l.jsx)(o.a,{}):""]})}},1816:function(e,n,t){function r(e){var n="?";-1!==e.indexOf("?")&&(n="&");var t="https://api.themoviedb.org/3"+e+n+"api_key=08afc14184aa63504b5201f5497d7cf1";return new Promise((function(e,n){fetch(t).then((function(t){console.log(t),t.ok?t.json().then((function(n){console.log(n),e(n)})):n(null)})).catch((function(e){return n(null)}))}))}function a(){return r("/trending/movie/week")}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="/search/movie?query=".concat(e,"&page=").concat(n);return r(t)}function o(e){return r("/movie/".concat(e,"?language=en-US"))}function c(e){return r("/movie/".concat(e,"/credits?language=en-US"))}function u(e){return r("/movie/".concat(e,"/reviews?language=en-US"))}t.d(n,{Hg:function(){return a},TP:function(){return o},V0:function(){return i},tx:function(){return u},zv:function(){return c}})},1847:function(e,n){n.Z={ImageGallery:"ImageGallery_ImageGallery__4csFQ"}},6127:function(e,n){n.Z={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__c1fa7","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__qWEuN"}}}]);
//# sourceMappingURL=566.76315ec8.chunk.js.map