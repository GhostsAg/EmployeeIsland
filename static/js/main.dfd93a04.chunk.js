(this.webpackJsonpempisland=this.webpackJsonpempisland||[]).push([[0],{31:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"SpongeBob","lastName":"SquarePants","image":[{"images":{"original":{"url":"https://media.giphy.com/media/8plT87cI4F2gw/giphy.gif"}}},{"something":"not"}],"email":"Craby@patty.com","role":"Fry Cook","department":"A Pineapple Under the Sea"},{"id":2,"firstName":"Mark","lastName":"Walhberg","image":[{"images":{"original":{"url":"https://media.giphy.com/media/8plT87cI4F2gw/giphy.gif"}}},{"something":"not"}],"email":"Mark@walli.com","role":"King of errthang","department":"Broadway"}]')},34:function(e,a,t){e.exports=t(67)},39:function(e,a,t){},40:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},41:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(28),r=t.n(i),m=(t(39),t(40),t(41),t(9)),c=t(6);var s=function(){var e=Object(c.e)();return l.a.createElement("ul",null,l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link"},"Home View")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/add",className:"/add"===e.pathname?"nav-link active":"nav-link"},"Add New Employee")))},o=t(10),u=t(11),d=t(12),p=t(13);t(47);var h=function(e){return l.a.createElement("div",{className:"wrapper"},e.children)};t(48);var f=function(e){return l.a.createElement("h1",{className:"title"},e.children)},v=t(31);t(49);var g=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:e.image[0].title,className:"img-fluid",src:e.image[0].images.original.url})),l.a.createElement("div",{className:"content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Name:")," ",e.name),l.a.createElement("li",null,l.a.createElement("strong",null,"Email:")," ",e.email),l.a.createElement("li",null,l.a.createElement("strong",null,"Role:")," ",e.role),l.a.createElement("li",null,l.a.createElement("strong",null,"Department:")," ",e.department))),l.a.createElement("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove"},"\ud835\ude05"))},E=t(19),y=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={empFile:v},e.removeEmployee=function(a){var t=e.state.empFile.filter((function(e){return e.id!==a}));e.setState({employees:t}),E.writeFileSync("../../employees.json",JSON.stringify(t,null,2),(function(e){if(e)throw e}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h,null,l.a.createElement(f,null,"All Employees"),this.state.empFile.map((function(a){return l.a.createElement(g,{removeEmp:e.removeEmployee,id:a.id,key:a.id,name:a.firstName+" "+a.lastName,image:a.image,email:a.email,role:a.role,department:a.department})})))}}]),t}(l.a.Component),N=t(32),b=t(33),w=t.n(b),k=function(e){return w.a.get("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=dc6zaTOxFJmzC&limit=20")},C=t(19),S=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={firstName:"",lastName:"",image:[],email:"",role:"",department:""},e.searchGiphy=function(a){k(a).then((function(a){return e.setState({image:a.data.data})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(t,[{key:"handleChange",value:function(e){var a=e.target.value,t=e.target.name;this.setState(Object(N.a)({},t,a))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.searchGiphy(this.state.image);var t=this.state,n=C.readFileSync("../employee.json","utf-8",(function(e){return JSON.parse(e)}));C.writeFileSync("../employee.json",JSON.stringify(n.push(t),null,2),(function(e){if(e)throw e;alert("Employee inserted: "+a.state.firstName+" "+a.state.lastName+".")})),this.setState({firstName:"",lastName:"",image:"",email:"",role:"",department:""})}},{key:"render",value:function(){return l.a.createElement("form",{class:"col s12"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s6"},l.a.createElement("input",{name:"firstName",id:"first_name",type:"text",class:"validate",onChange:this.handleChange,value:this.state.firstName}),l.a.createElement("label",{for:"first_name"},"First Name")),l.a.createElement("div",{class:"input-field col s6"},l.a.createElement("input",{name:"lastName",id:"last_name",type:"text",class:"validate",onChange:this.handleChange,value:this.state.lastName}),l.a.createElement("label",{for:"last_name"},"Last Name"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{name:"image",id:"image",type:"text",class:"validate",onChange:this.handleChange,value:this.state.image}),l.a.createElement("label",{for:"image"},"Who does he look like."))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{name:"email",id:"email",type:"text",class:"validate",onChange:this.handleChange,value:this.state.email}),l.a.createElement("label",{for:"email"},"Email"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{name:"role",id:"role",type:"text",class:"validate",onChange:this.handleChange,value:this.state.role}),l.a.createElement("label",{for:"role"},"Role"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{name:"department",id:"department",type:"text",class:"validate",onChange:this.handleChange,value:this.state.department}),l.a.createElement("label",{for:"department"},"Department"))),l.a.createElement("input",{onClick:this.handleSubmit,type:"submit",value:"Submit"},"Submit"))}}]),t}(l.a.Component);var O=function(){return l.a.createElement(h,null,l.a.createElement(f,null,"Add a New Employee"),l.a.createElement("div",{class:"body"},l.a.createElement(S,null)))};var j=function(){return l.a.createElement(m.a,null,l.a.createElement(s,null),l.a.createElement(c.a,{exact:!0,path:"/",component:y}),l.a.createElement(c.a,{exact:!0,path:"/add",component:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.dfd93a04.chunk.js.map