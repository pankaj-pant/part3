(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=(t(20),t(14)),l=t(2);var i=function(e){var n=e.submit,t=e.handleNameChange,a=e.newName,o=e.handleNumberChange,u=e.newNumber;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:t,value:a}),"number: ",r.a.createElement("input",{onChange:o,value:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))};var m=function(e){var n=e.id,t=e.name,a=e.number,o=e.deletePerson;return r.a.createElement("div",null,r.a.createElement("p",null,t," "," ",a," "," ",r.a.createElement("button",{onClick:function(){return o(n,t)}},"delete")))};var d=function(e){var n=e.persons,t=e.deletePerson;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,number:e.number,deletePerson:t})})))},s=t(3),f=t.n(s),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},v=function(e){return f.a.post(h,e).then((function(e){return e.data}))},E=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},w=(t(38),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),s=m[0],f=m[1],h=Object(a.useState)(""),w=Object(l.a)(h,2),g=w[0],j=w[1],O=Object(a.useState)(null),N=Object(l.a)(O,2),k=N[0],y=N[1],C=Object(a.useState)(null),S=Object(l.a)(C,2),P=S[0],T=S[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement((function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)}),{message:P}),r.a.createElement((function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)}),{message:k}),r.a.createElement("h2",null,"add a new contact"),r.a.createElement(i,{submit:function(e){e.preventDefault();var n={name:s,number:g};if(f(""),j(""),!0===t.some((function(e){return e.name===s}))){var a=t.findIndex((function(e){return e.name===s})),r=t[a].id;!0===window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one?"))&&(E(r,n).then((function(e){o(t.map((function(n){return n.id!==r?n:e})))})),y("Updated ".concat(s)),setTimeout((function(){y(null)}),5e3))}else v(n).then((function(e){o([].concat(Object(c.a)(t),[e])),f(""),j("")})),y("Added ".concat(s)),setTimeout((function(){y(null)}),5e3)},handleNameChange:function(e){f(e.target.value)},newName:s,handleNumberChange:function(e){j(e.target.value)},newNumber:g}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:t,deletePerson:function(e,n){!0===window.confirm("Delete ".concat(n,"?"))&&p(e).then((function(a){o(t.filter((function(n){return n.id!==e}))),y("".concat(n," succesfully deleted")),setTimeout((function(){y(null)}),5e3)})).catch((function(a){T("Information of '".concat(n,"' has already been removed from server")),setTimeout((function(){T(null)}),5e3),o(t.filter((function(n){return n.id!==e})))}))}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b90636d9.chunk.js.map