"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[404],{5404:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var n=a(5861),r=a(3433),i=a(5671),s=a(3144),o=a(136),c=a(4104),l=a(7757),u=a.n(l),m=a(889),h=a(2791),f=a(5138),g=a(5013),d=a(6127),p=a(184),v=function(t){var e=t.item,a=t.onClickF,n=e.webformatURL,r=e.largeImageURL;return(0,p.jsxs)("li",{className:d.Z.ImageGalleryItem,onClick:function(){return a(r)},children:[(0,p.jsx)("img",{className:d.Z["ImageGalleryItem-image"],src:n,alt:""}),(0,p.jsx)("br",{})]})},y=a(6151),_="Modal_Overlay__dknq1",b="Modal_Modal__iK6Fy",x=function(t){var e=t.imgSrc,a=void 0===e?"":e,n=t.onAbortF;return(0,p.jsx)("div",{onClick:n,className:_,children:(0,p.jsx)("div",{className:b,children:(0,p.jsx)("img",{src:a,alt:""})})})},S=a(1847),j=function(t){(0,o.Z)(a,t);var e=(0,c.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={modal:""},t}return(0,s.Z)(a,[{key:"render",value:function(){var t=this;return"loading"===this.props.isLoading?(0,p.jsx)(y.a,{}):0===this.props.items.length?(0,p.jsx)(g.Z,{message:"Sorry, no images matched your search"}):(0,p.jsxs)("div",{children:[this.state.modal?(0,p.jsx)(x,{imgSrc:this.state.modal,onAbortF:function(){return t.setState({modal:""})}}):"",(0,p.jsx)("ul",{className:S.Z.ImageGallery,children:this.props.items.map((function(e){return(0,p.jsx)(v,{item:e,onClickF:function(e){return t.setState({modal:e})}},e.id)}))}),"updating"===this.props.isLoading?(0,p.jsx)(y.a,{}):""]})}}]),a}(h.Component),L=a(8512),F=function(){return(0,p.jsx)("a",{style:{height:"100%"},href:"https://pixabay.com/",children:(0,p.jsx)("img",{style:{height:"100%"},src:"https://pixabay.com/static/img/public/leaderboard_b.png",alt:"Pixabay"})})},I=function(t){(0,o.Z)(a,t);var e=(0,c.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={imageList:[],filter:"",pageNum:1,isLoading:"loading",isMoreAvailible:!1,error:null},t.changeFilter=function(e){t.setState({filter:e})},t.updateImageList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.setState((function(t){return{imageList:[].concat((0,r.Z)(t),(0,r.Z)(e))}}))},t}return(0,s.Z)(a,[{key:"componentDidMount",value:function(){var t=this;N().then((function(e){t.setState({imageList:e.hits,isMoreAvailible:!0})})).catch((function(e){t.setState({error:e.message})})).finally(this.setState({isLoading:!1}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;e.filter!==this.state.filter&&(this.setState({isLoading:"loading",pageNum:1,error:null}),N(this.state.filter,1).then((function(t){a.setState({imageList:t.hits,isMoreAvailible:t.totalHits>12})})).catch((function(t){a.setState({error:t})})).finally(this.setState({isLoading:!1}))),e.pageNum!==this.state.pageNum&&this.state.pageNum>1&&(this.setState({isLoading:"updating"}),N(this.state.filter,this.state.pageNum).then((function(t){a.setState((function(e){return{imageList:[].concat((0,r.Z)(e.imageList),(0,r.Z)(t.hits)),isMoreAvailible:t.totalHits>12*a.state.pageNum}}))})).catch((function(t){a.setState({error:t})})).finally(this.setState({isLoading:!1})))}},{key:"render",value:function(){var t=this;return this.state.error?(0,p.jsx)(g.Z,{label:"Sorry, an error has occured",message:this.state.error.message}):(0,p.jsxs)(m.Z,{type:"task",title:(0,p.jsx)(F,{}),children:[(0,p.jsx)(L.w,{submitFunc:this.changeFilter}),(0,p.jsx)(j,{items:this.state.imageList,isLoading:this.state.isLoading}),this.state.isMoreAvailible?(0,p.jsx)(f.s,{LoadMoreFunc:function(){t.setState({pageNum:t.state.pageNum+1})}}):""]})}}]),a}(h.Component);function N(){return Z.apply(this,arguments)}function Z(){return Z=(0,n.Z)(u().mark((function t(){var e,a,n,r=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:1,console.log("making request..."),e=e.replaceAll(" ","%20"),n="https://pixabay.com/api/?image_type=photo&key=33557563-eb5e97db1c6663d33c38bf2d1&orientation=horizontal&per_page=12&page="+a+"&q="+e,t.abrupt("return",new Promise((function(t,e){fetch(n,[]).then((function(e){if(!e.ok)throw e;e.json().then((function(e){return t(e)}))})).catch((function(t){e(t)}))})));case 6:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}},5138:function(t,e,a){a.d(e,{s:function(){return i}});var n="Button_Button__-2+Jp",r=a(184),i=function(t){var e=t.LoadMoreFunc;return(0,r.jsx)("button",{className:n,onClick:function(){return e()},children:"Load more"})}},6151:function(t,e,a){a.d(e,{a:function(){return r}});var n=a(184),r=function(){return(0,n.jsx)("div",{children:"Loading..."})}},8512:function(t,e,a){a.d(e,{w:function(){return l}});var n="Searchbar_Searchbar__QO6eC",r="Searchbar_SearchForm__PF2QQ",i="Searchbar_SearchForm-button__D0+UF",s="Searchbar_SearchForm-button-label__r6gUN",o="Searchbar_SearchForm-input__e3atQ",c=a(184),l=function(t){var e=t.submitFunc;return(0,c.jsx)("header",{className:n,children:(0,c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(t.target.elements.t3Filter.value)},className:r,children:[(0,c.jsx)("button",{type:"submit",className:i,children:(0,c.jsx)("span",{className:s,children:"Search"})}),(0,c.jsx)("input",{className:o,id:"t3Filter",name:"t3Filter",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}},1847:function(t,e){e.Z={ImageGallery:"ImageGallery_ImageGallery__4csFQ"}},6127:function(t,e){e.Z={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__c1fa7","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__qWEuN"}},5861:function(t,e,a){function n(t,e,a,n,r,i,s){try{var o=t[i](s),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,i){var s=t.apply(e,a);function o(t){n(s,r,i,o,c,"next",t)}function c(t){n(s,r,i,o,c,"throw",t)}o(void 0)}))}}a.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=404.e2c92de9.chunk.js.map