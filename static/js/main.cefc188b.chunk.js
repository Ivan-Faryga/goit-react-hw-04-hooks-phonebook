(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={formLabel:"Form_formLabel__32rrv",formInput:"Form_formInput__acijd",formBtn:"Form_formBtn__22oWr"}},,function(e,t,n){e.exports={contactItem:"ContactListItem_contactItem__3GHmR",contactName:"ContactListItem_contactName__3M1zV",deleteContactBtn:"ContactListItem_deleteContactBtn__U27u0"}},,,function(e,t,n){e.exports={filterInputLabel:"Filter_filterInputLabel__15CVd",filterInput:"Filter_filterInput__JIWbW"}},,,function(e,t,n){e.exports={contactsList:"ContactList_contactsList__3qzDl"}},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(17),n(9)),s=n(2),u=n(21),l=n(3),m=n.n(l),b=n(0);function j(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],d=l[1],f=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}},O=function(){o(""),d("")},p=Object(u.a)(),h=Object(u.a)();return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:j}),O()},children:[Object(b.jsx)("label",{htmlFor:p,className:m.a.formLabel,children:"Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:p,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:f,className:m.a.formInput}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:h,className:m.a.formLabel,children:"Number"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:h,type:"tel",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:f,className:m.a.formInput}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:m.a.formBtn,children:"add"})]})}var d=n(5),f=n.n(d),O=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDelete;return Object(b.jsxs)("li",{className:f.a.contactItem,children:[Object(b.jsxs)("p",{className:f.a.contactName,children:[n,": ",Object(b.jsx)("span",{className:f.a.contactNumber,children:a})]}),Object(b.jsx)("button",{className:f.a.deleteContactBtn,type:"button",onClick:function(){return c(t)},children:"Delete"})]})},p=n(11),h=n.n(p),x=function(e){var t=e.contacts,n=e.onDelete;return Object(b.jsx)("ul",{className:h.a.contactsList,children:t.map((function(e){return Object(b.jsx)(O,{id:e.id,name:e.name,number:e.number,onDelete:n},e.id)}))})},_=(n(19),n(8)),v=n.n(_),C=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:v.a.filterInputLabel,children:"Find contacts by name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:v.a.filterInput,type:"text",name:"filter",value:t,onChange:n,placeholder:"Contact"})]})},N=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function I(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],m=o[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));c(e||N)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"InputWrapper",children:[Object(b.jsx)("h1",{className:"inputTitle",children:"Phonebook"}),Object(b.jsx)(j,{onSubmit:function(e){var t=e.name,a=e.number;if(n.map((function(e){return e.name})).includes(t.trim()))return alert('"'.concat(t.trim(),'" is already in contacts'));if(n.map((function(e){return e.number})).includes(a.trim()))return alert('"'.concat(a.trim(),'" is already in contacts'));var r={id:Object(u.a)(),name:t,number:a};c([].concat(Object(i.a)(n),[r]))}}),Object(b.jsx)("br",{}),Object(b.jsx)(C,{value:l,onChange:function(e){m(e.currentTarget.value)}})]}),Object(b.jsxs)("div",{className:"contactsSection",children:[Object(b.jsx)("h2",{className:"contactsSectionTitle",children:"Contacts"}),Object(b.jsx)(x,{contacts:function(){var e=l.toLocaleLowerCase().trim();return n.filter((function(t){return t.name.toLocaleLowerCase().trim().includes(e)}))}(),onDelete:function(e){c(Object(i.a)(n.filter((function(t){return t.id!==e}))))}})]})]})}var g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),g()}],[[20,1,2]]]);
//# sourceMappingURL=main.cefc188b.chunk.js.map