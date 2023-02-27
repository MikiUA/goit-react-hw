"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[64],{8064:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var a,r,o,s,c,i,l=n(3433),u=n(5671),d=n(3144),m=n(136),p=n(4104),f=n(889),h=n(2791),v=n(168),b=n(6444),C=b.default.label(a||(a=(0,v.Z)(["\n    display:block;\n    font-style:italic;\n"]))),x=b.default.input(r||(r=(0,v.Z)(["\n    font-size:55%;\n    margin-left:5%;\n"]))),y=b.default.button(o||(o=(0,v.Z)(["\n    display:block;\n    margin-top:1em;\n    margin-left:5%;\n    font-size:40%;\n"]))),k=n(184),g=function(t){(0,m.Z)(n,t);var e=(0,p.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.submitHandler=function(e){e.preventDefault();var n=e.target.elements,a=n.name,r=n.number;t.props.submitFunction(a.value,r.value)},t}return(0,d.Z)(n,[{key:"render",value:function(){return(0,k.jsxs)("form",{onSubmit:this.submitHandler,children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(C,{htmlFor:"name",children:"\u0406\u043c'\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443"}),(0,k.jsx)(x,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(C,{htmlFor:"number",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"}),(0,k.jsx)(x,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(y,{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(h.Component),Z=b.default.ul(s||(s=(0,v.Z)(["\nwidth:fit-content;\npadding-right:1em;\nheight:10em;\nborder-left:1px solid black;\noverflow-y:auto;\n"]))),j=b.default.li(c||(c=(0,v.Z)(["\nmargin-top:2%;\nbordewr-left:1px solid black;\npadding-left:0.2em\n"]))),w=b.default.div(i||(i=(0,v.Z)(["\n    display:block;\n    text-align:center;\n    background-color:#dcaaaa;\n    font-size:35%;\n    border-radius:10em;\n    \n    &:hover{\n        background-color:#ee4444;\n        border: 1px solid #aa0000\n    }\n"]))),A=function(t){(0,m.Z)(n,t);var e=(0,p.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={filter:""},t.checkItem=function(e){return!!e.name.toUpperCase().includes(t.state.filter)||!!e.number.toString().includes(t.state.filter)},t}return(0,d.Z)(n,[{key:"render",value:function(){var t=this;return(0,k.jsxs)("div",{children:[(0,k.jsx)(x,{type:"text",value:this.state.filter,placeholder:"find a contact",onChange:function(e){return t.setState({filter:e.target.value.toUpperCase()})}}),(0,k.jsxs)("div",{style:{display:"flex"},children:[(0,k.jsx)(y,{onClick:function(){return t.props.setTemplateContacts()},children:"Set template contacts"}),(0,k.jsx)(y,{onClick:function(){return t.props.removeAllContacts()},children:"Remove all contacts"})]}),(0,k.jsx)(Z,{children:this.props.contacts.filter(this.checkItem).map((function(e){var n=e.id,a=e.name,r=e.number;return(0,k.jsxs)(j,{children:[a,":  ",r,(0,k.jsx)(w,{onClick:function(){return t.props.removeContact(n)},children:"Delete"})]},n)}))})]})}}]),n}(h.Component),S=function(t){(0,m.Z)(n,t);var e=(0,p.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.checkContactExists=function(e){for(var n=0;n<t.state.contacts.length;n++){if(t.state.contacts[n].name.toLowerCase()===e.name.toLowerCase())return!0;if(t.state.contacts[n].number===e.number)return!0}return!1},t.addContact=function(e,n){t.checkContactExists({name:e,number:n})?alert("You already have this contact"):t.setState({contacts:[].concat((0,l.Z)(t.state.contacts),[{id:Date.now(),name:e,number:n}])})},t.removeContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t.removeAllContacts=function(){t.setState({contacts:[]})},t.setTemplateContacts=function(){t.setState({contacts:z})},t}return(0,d.Z)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contactList"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contactList",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return(0,k.jsxs)(f.Z,{type:"task",title:"\u041a\u043d\u0438\u0433\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432",children:[(0,k.jsx)(f.Z,{label:"Add contact",children:(0,k.jsx)(g,{submitFunction:this.addContact})}),(0,k.jsx)(f.Z,{label:"Contact list",children:(0,k.jsx)(A,{contacts:this.state.contacts,removeContact:this.removeContact,removeAllContacts:this.removeAllContacts,setTemplateContacts:this.setTemplateContacts})})]})}}]),n}(h.Component),z=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]}}]);
//# sourceMappingURL=64.2b5d213d.chunk.js.map