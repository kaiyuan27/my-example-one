(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(72)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),i=a.n(c),s=(a(45),a(28)),o=a(29),u=a(38),l=a(30),d=a(39),m=a(34),f=a(6),E=(a(46),a(47),a(11)),v=Object(n.createContext)(),p=function(e){var t=e.rootReducer,a=t(e.initialValue,{type:"__INIT__"}),c=Object(n.useReducer)(t,a),i=Object(E.a)(c,2),s=i[0],o=i[1];return r.a.createElement(v.Provider,{value:[s,o]},e.children)},b=a(31),h=a.n(b),L=GLOBAL_CONFIG.ROUTE,O=GLOBAL_CONFIG.API_PATH,I=h.a.create();I.defaults.timeout=GLOBAL_CONFIG.TIMEOUT;var _=function(){return new Promise(function(e,t){I.get(O).then(function(t){e(t)}).catch(function(e){t(e)})})};var j=a(37),T=function(e,t,a){var n=a.filter(function(t,a){var n=t.name?t.name.toLowerCase():"",r=t.email?t.email.toLowerCase():"",c=e?e.toLowerCase():"";return n.includes(c)||r.includes(c)});t({type:"FILTERED_USER_LIST",fliteredUserList:Object(j.a)(n)})},N=function(e,t){return{type:"OPEN_ACCORDIAN_ID",data:e,openStatus:t}},S=(a(65),function(e){var t=e.value,a=e.onChange,n=e.labelText,c=function(e){var t=e.target.value;a({value:t,isValid:!0,errorMsg:""})},i=""===t?"--withoutValue":"";return r.a.createElement("div",{id:"searchInput-container"},r.a.createElement("div",{className:"search-icon-container"},r.a.createElement("img",{src:"./images/searchIcon.svg",alt:"search"})),r.a.createElement("div",{className:"searchInput-field-container"},r.a.createElement("label",{className:"searchInputLabel".concat(i)},n),r.a.createElement("input",{className:"searchInput-field",value:t,onChange:function(e){return c(e)},type:"text"})))}),y=(a(66),function(e){var t="";switch(e){case"phone":t="tel:";break;case"email":t="mailto:";break;default:t=""}return t}),g=function(e){var t=e.individualData,a=e.sequenceArray,n=e.sequenceLabel,c=e.objectInObject,i=e.sequenceInObject,s=a.map(function(e,a){var s=[],o="";c.indexOf(e)>=0?(i[c.indexOf(e)].array.map(function(a,n){return s.push(""!==y(a)?r.a.createElement("a",{key:n,href:"".concat(y(a)).concat(t[e][a])}," ",t[e][a]," "):r.a.createElement("div",{key:n},t[e][a])),s}),o=r.a.createElement("div",null,n[a])):(s.push(""!==y(e)?r.a.createElement("a",{key:a,href:"".concat(y(e)).concat(t[e])}," ",t[e]," "):r.a.createElement("div",{key:a},t[e])),o=r.a.createElement("div",{key:a},n[a]));return r.a.createElement("div",{className:"accordian-desc-value",key:a},r.a.createElement("div",{id:"openAccordianData-desc"},o),r.a.createElement("div",{id:"openAccordianData-value"},s))});return r.a.createElement("div",{className:"openAccordianData-container"},s)},A=function(e){var t=e.data,a=e.headerParameter,n=e.sequenceArray,c=e.sequenceLabel,i=e.objectInObject,s=e.sequenceInObject,o=e.idValue,u=e.onClick,l=e.openStatus;return r.a.createElement("div",{id:"accordianData-full-container",tabIndex:"0"},t.map(function(e,t){return r.a.createElement("div",{className:"accordianData-container",key:t},r.a.createElement("div",{className:"accordianData-header-container",onClick:function(){return u&&u(e.id.toString())}},r.a.createElement("div",{className:"circle-icon"},e[a].charAt(0)),r.a.createElement("div",{className:"accordianData-header-value-container"},r.a.createElement("label",{className:"accordianData-header-value"},e[a]))),o===e.id.toString()&&l&&r.a.createElement(g,{individualData:e,sequenceArray:n,sequenceLabel:c,objectInObject:i,sequenceInObject:s}))}))},D=function(e){return r.a.createElement("div",{className:"body-container"},e.children)},U=function(){var e=Object(n.useContext)(v),t=Object(E.a)(e,2),a=t[0],c=t[1],i=a.common,s=i.searchInput,o=i.openUserListID,u=i.fliteredUserList;Object(n.useEffect)(function(){null===a.common.userList&&function(e){_().then(function(t){e({type:"GET_USER_LIST",userList:t.data,fliteredUserList:t.data})}).catch(function(t){t.response&&e({type:"SET_GET_LIST_STATUS"})})}(c)});var l=function(e,t){!function(e,t,a,n){a({type:"HANDLE_ON_CHANGE_TEXT_INPUT",field:e,data:t}),T(t.value,a,n)}(e,t,c,i.userList)};return r.a.createElement(D,null,r.a.createElement("div",{className:"application-container"},r.a.createElement(S,{labelText:"Enter Keyword",value:s.value,onChange:function(e){return l("searchInput",e)}}),r.a.createElement("div",{className:"common-separator"}),null!==i.fliteredUserList&&r.a.createElement(A,{data:u,headerParameter:"name",sequenceArray:["phone","email","address"],sequenceLabel:["Mobile","Email","Address"],objectInObject:["address"],sequenceInObject:[{array:["street","suite","city","zipcode"]}],idValue:o.id,openStatus:o.openStatus,onClick:function(e){return function(e){i.openUserListID.id===e?c(N(e,!o.openStatus)):c(N(e,!0))}(e)}})))},w=a(32),C=a(10),k=a(7),q={appData:null,userList:null,fliteredUserList:null,getListStatus:{successful:!1,error:""},searchInput:{name:"searchInput",value:"",errorMsg:"",isValid:!0},openUserListID:{id:"",openStatus:!0}},G=Object(w.a)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_LIST":return Object(k.a)({},e,{userList:t.userList,fliteredUserList:t.fliteredUserList,getListStatus:Object(k.a)({},e.getListStatus,{successful:!0})});case"SET_GET_LIST_STATUS":return Object(k.a)({},e,{getListStatus:{successful:!1,error:t.statusCode}});case"HANDLE_ON_CHANGE_TEXT_INPUT":return Object(k.a)({},e,Object(C.a)({},t.field,Object(k.a)({},e[t.field],{value:t.data.value,errorMsg:t.data.errorMsg,isValid:t.data.isValid})));case"FILTERED_USER_LIST":return Object(k.a)({},e,{fliteredUserList:t.fliteredUserList});case"OPEN_ACCORDIAN_ID":return Object(k.a)({},e,{openUserListID:{id:t.data,openStatus:t.openStatus}});default:return e}}}),R=function(){var e=L,t=window.location.pathname;return t.replace(e.filter(function(e){return-1!==t.indexOf(e)})[0],"")},x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p,{rootReducer:G},r.a.createElement(m.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"".concat(R()),component:U}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.c0576107.chunk.js.map