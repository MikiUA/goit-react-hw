"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[207],{8207:function(e,n,a){a.r(n),a.d(n,{default:function(){return j}});var i=a(9439),t=a(2791),s=a(1087),r=a(7689),c=a(1816),l=a(5013),o=a(9340),u="MovieDetails_details-section__clDTF",m="MovieDetails_description-segment__+4D0G",d="MovieDetails_title__3aVmM",h="MovieDetails_description__WEhOc",v="MovieDetails_genre-division__rIcyr",f="MovieDetails_image-container__NlU+4",g="MovieDetails_description-container__86CSA",_=a(184);function j(){var e=(0,r.UO)().movieID,n=(0,r.s0)(),a=(0,t.useState)({}),j=(0,i.Z)(a,2),x=j[0],p=j[1],N=(0,t.useState)(null),I=(0,i.Z)(N,2),k=I[0],w=I[1],y=x.poster_path,G=x.original_title,D=x.vote_average,b=x.release_date,M=x.overview,U=x.genres,Z=void 0===U?[]:U,C=G+(b?" (".concat(b.split("-")[0],")"):"");return(0,t.useEffect)((function(){(0,c.TP)(e).then((function(e){return p(e)})).catch((function(e){return w(e)}))}),[e]),k?(console.log(k),(0,_.jsx)(l.Z,{message:"something went wrong, please try again"})):(0,_.jsxs)("div",{children:[(0,_.jsx)("button",{onClick:function(){return n(-1)},children:"Go back"}),(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("div",{className:f,children:(0,_.jsx)(o.Z,{image:y?"https://image.tmdb.org/t/p/original"+y:"",label:""})}),(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)("h6",{className:d,children:C}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("h6",{className:d,children:"overview"}),(0,_.jsx)("p",{className:h,children:M})]}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("h6",{className:d,children:"Genres"}),(0,_.jsx)("p",{className:h,children:Z.map((function(e){return(0,_.jsx)("span",{className:v,children:e.name},e.id)}))})]}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("h6",{className:d,children:"User score:"}),(0,_.jsxs)("p",{className:h,children:[Math.round(10*D),"%"]})]}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("h6",{className:d,children:"Additional information"}),(0,_.jsxs)("p",{className:h,children:[(0,_.jsxs)("span",{className:v,children:[" ",(0,_.jsx)(s.rU,{to:"./reviews",replace:!0,children:"Reviews"})," "]}),(0,_.jsx)("span",{className:v,children:(0,_.jsx)(s.rU,{to:"./cast",replace:!0,children:"Cast"})})]})]})]})]}),(0,_.jsx)(r.j3,{})]})}},9340:function(e,n,a){a.d(n,{Z:function(){return s}});var i=a(6127),t=a(184);function s(e){var n=e.image,a=void 0===n?"":n,s=e.label,r=void 0===s?"":s,c=e.onClickF,l=void 0===c?function(){}:c,o=e.alternative,u=void 0===o?"":o;return(0,t.jsxs)("div",{className:i.Z.ImageGalleryItem,onClick:function(){return l()},children:[(0,t.jsx)("img",{className:i.Z["ImageGalleryItem-image"],src:a,alt:u}),(0,t.jsx)("div",{children:r})]})}},1816:function(e,n,a){function i(e){var n="?";-1!==e.indexOf("?")&&(n="&");var a="https://api.themoviedb.org/3"+e+n+"api_key=08afc14184aa63504b5201f5497d7cf1";return new Promise((function(e,n){fetch(a).then((function(a){console.log(a),a.ok?a.json().then((function(n){console.log(n),e(n)})):n(null)})).catch((function(e){return n(null)}))}))}function t(){return i("/trending/movie/week")}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="/search/movie?query=".concat(e,"&page=").concat(n);return i(a)}function r(e){return i("/movie/".concat(e,"?language=en-US"))}function c(e){return i("/movie/".concat(e,"/credits?language=en-US"))}function l(e){return i("/movie/".concat(e,"/reviews?language=en-US"))}a.d(n,{Hg:function(){return t},TP:function(){return r},V0:function(){return s},tx:function(){return l},zv:function(){return c}})},6127:function(e,n){n.Z={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__c1fa7","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__qWEuN"}}}]);
//# sourceMappingURL=207.b769bf49.chunk.js.map