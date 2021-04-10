(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{29:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n(9),s=n(7),l=n(4),u=n(11),b=n(10),d=n(3),m=n(1),h=Object(d.a)({container:{margin:{right:"auto",left:"auto",top:"20px"},padding:"20px",width:"400px"}}),p=function(t){var e=t.children,n=h();return Object(m.jsx)("div",{className:n.container,children:e})},j=Object(d.a)({button:{marginLeft:"10px",backgroundColor:"white",border:["1px","solid","grey"],borderRadius:"5px",cursor:"pointer","&:hover":{backgroundColor:" rgba(116, 113, 255, 0.34)"}},item:{marginBottom:"10px"}}),f=function(t){var e=t.name,n=t.number,a=t.id,r=t.onDeleteContact,o=j();return Object(m.jsxs)("li",{className:o.item,children:[Object(m.jsx)("span",{children:e}),": ",Object(m.jsx)("span",{children:n}),Object(m.jsx)("button",{className:o.button,type:"button",onClick:function(){return r(a)},children:"Delete"})]})},x=function(t){var e=t.filteredContacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(m.jsx)(f,{id:e,name:a,number:r,onDeleteContact:n},e)}))})},g=Object(d.a)({input:{padding:"5px",outline:"none","&:focus":{border:["2px","solid","blue"],boxShadow:["inset","0px","0px","3px","3px","rgba(116, 113, 255, 0.34)"]}}}),O=function(t){var e=t.filter,n=t.onHandleChange,a=g();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:a.titel,children:"Find contacts by name"}),Object(m.jsx)("input",{className:a.input,type:"text",placeholder:"Search contact",name:"filter",value:e,onChange:n})]})},v=n(16),C=Object(d.a)({button:{cursor:"pointer",margin:{right:"auto",left:"auto",top:"20px",bottom:"20px"},display:"block",padding:"5px",width:"140px",backgroundColor:"transparent",borderRadius:"5px","&:hover":{backgroundColor:" rgba(116, 113, 255, 0.34)"}}}),S=function(){var t=C();return Object(m.jsx)("button",{className:t.button,type:"submit",children:"Add contact"})},y=n(5),N=n.n(y),k=n(31),F={name:"",number:""},w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state=F,t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,o={id:Object(k.a)(),name:a,number:r};t.props.onSubmitForm(o),t.resetForm()},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(v.a)({},a,r))},t.resetForm=function(){return t.setState(F)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(m.jsxs)("form",{className:N.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsx)("label",{className:N.a.label,htmlFor:this.labelInputIdName,children:"Name"}),Object(m.jsx)("input",{className:N.a.input,id:this.labelInputIdName,type:"text",name:"name",required:!0,placeholder:"Enter name",value:e,onChange:this.handleChange}),Object(m.jsx)("label",{className:N.a.label,htmlFor:this.labelInputIdNumber,children:"Number"}),Object(m.jsx)("input",{className:N.a.input,id:this.labelInputIdNumber,type:"tel",name:"number",required:!0,placeholder:"Enter you number",value:n,onChange:this.handleChange}),Object(m.jsx)(S,{})]})}}]),n}(a.Component),I={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},D=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state=I,t.handleSubmitForm=function(e){void 0===t.state.contacts.find((function(t){return t.name===e.name}))?t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}})):alert("".concat(e.name," is already in contacts"))},t.handleChange=function(e){console.log(e.currentTarget.value),t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e contacts \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),localStorage.setItem("contacts",JSON.stringify(n)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(m.jsxs)(p,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(w,{onSubmitForm:this.handleSubmitForm}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(O,{value:t,onHandleChange:this.handleChange}),Object(m.jsx)(x,{filteredContacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__11fg2",label:"ContactForm_label__3DNvd",input:"ContactForm_input__18U7J"}}},[[29,1,2]]]);
//# sourceMappingURL=main.5db00340.chunk.js.map