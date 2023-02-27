"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[682],{7682:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var a,r,i,o=t(3433),c=t(9439),l=t(889),s=t(2791),u=t(168),d=t(6444),m=d.default.label(a||(a=(0,u.Z)(["\n    display:block;\n    font-style:italic;\n"]))),f=d.default.input(r||(r=(0,u.Z)(["\n    font-size:55%;\n    margin-left:5%;\n"]))),p=d.default.button(i||(i=(0,u.Z)(["\n    display:block;\n    margin-top:1em;\n    margin-left:5%;\n    font-size:40%;\n"]))),h=t(184);var b,v,x,g=function(e){var n=e.submitFunction,t=(0,s.useState)(""),a=(0,c.Z)(t,2),r=a[0],i=a[1],o=(0,s.useState)(""),l=(0,c.Z)(o,2),u=l[0],d=l[1];return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(r,u)},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(m,{htmlFor:"acf-name",children:"\u0406\u043c'\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443"}),(0,h.jsx)(f,{id:"acf-name",value:r,onChange:function(e){return i(e.target.value)},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(m,{htmlFor:"acf-num",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"}),(0,h.jsx)(f,{id:"acf-num",value:u,onChange:function(e){return d(e.target.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(p,{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})},C=d.default.ul(b||(b=(0,u.Z)(["\nwidth:fit-content;\npadding-right:1em;\nheight:10em;\nborder-left:1px solid black;\noverflow-y:auto;\n"]))),j=d.default.li(v||(v=(0,u.Z)(["\nmargin-top:2%;\nbordewr-left:1px solid black;\npadding-left:0.2em\n"]))),k=d.default.div(x||(x=(0,u.Z)(["\n    display:block;\n    text-align:center;\n    background-color:#dcaaaa;\n    font-size:35%;\n    border-radius:10em;\n    \n    &:hover{\n        background-color:#ee4444;\n        border: 1px solid #aa0000\n    }\n"])));var Z=function(e){var n=e.contacts,t=e.removeContact,a=e.removeAllContacts,r=e.setTemplateContacts,i=(0,s.useState)(""),o=(0,c.Z)(i,2),l=o[0],u=o[1];return(0,h.jsxs)("div",{children:[(0,h.jsx)(f,{type:"text",value:l,placeholder:"find a contact",onChange:function(e){return u(e.target.value.toUpperCase())}}),(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)(p,{onClick:function(){return r()},children:"Set template contacts"}),(0,h.jsx)(p,{onClick:function(){return a()},children:"Remove all contacts"})]}),(0,h.jsx)(C,{children:n.filter((function(e){return!!e.name.toUpperCase().includes(l)||!!e.number.toString().includes(l)})).map((function(e){var n=e.id,a=e.name,r=e.number;return(0,h.jsxs)(j,{children:[a,":  ",r,(0,h.jsx)(k,{onClick:function(){return t(n)},children:"Delete"})]},n)}))})]})};function y(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),t=n[0],a=n[1],r=s.useRef(!1);return(0,s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contactList"));e&&a(e),r.current=!0}),[]),(0,s.useEffect)((function(){r.current&&localStorage.setItem("contactList",JSON.stringify(t))}),[t]),(0,h.jsxs)(l.Z,{type:"task",title:"\u041a\u043d\u0438\u0433\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432",children:[(0,h.jsx)(l.Z,{label:"Add contact",children:(0,h.jsx)(g,{submitFunction:function(e,n){!function(e){for(var n=0;n<t.length;n++){if(t[n].name.toLowerCase()===e.name.toLowerCase())return!0;if(t[n].number===e.number)return!0}return!1}({name:e,number:n})?a((function(t){return[].concat((0,o.Z)(t),[{id:Date.now(),name:e,number:n}])})):alert("You already have this contact")}})}),(0,h.jsx)(l.Z,{label:"Contact list",children:(0,h.jsx)(Z,{contacts:t,removeContact:function(e){a((function(n){return n.filter((function(n){return n.id!==e}))}))},removeAllContacts:function(){a([])},setTemplateContacts:function(){a(S)}})})]})}var S=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]}}]);
//# sourceMappingURL=682.a233087e.chunk.js.map