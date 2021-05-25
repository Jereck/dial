(this.webpackJsonpporkarus=this.webpackJsonpporkarus||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},69:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(16),c=n.n(r),a=(n(43),n(44),n(20)),s=n(3),o=n(12),l=n(11),u=(n(48),n(1));var d=function(){var e=Object(l.b)(),t=Object(s.f)(),n=Object(i.useState)(""),r=Object(o.a)(n,2),c=r[0],a=r[1],d=Object(i.useState)(""),j=Object(o.a)(d,2),p=j[0],b=j[1],m=function(n){""===n?b("You need to enter a participant ID"):!1===/^PID\d{5}$/.test(n)?b("You must enter a valid PID"):(e(function(e){return localStorage.setItem("pid",e),{type:"GET_PID",payload:e}}(n)),t.push("/turnip"))};return Object(u.jsx)("div",{className:"main",children:Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("div",{className:"login-box",children:[Object(u.jsx)("h1",{className:"title",children:"Welcome to the dial testing portion of the study!"}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("p",{style:{color:"black"},children:"Please enter your Participant ID:"}),Object(u.jsx)("input",{type:"text",placeholder:"PID12345",onChange:function(e){return a(e.target.value)},value:c,className:"pid-input"}),p?Object(u.jsx)("p",{style:{color:"red",marginBottom:5},children:p}):null,Object(u.jsx)("button",{onClick:function(){return m(c)},className:"submit-button",children:"Enter"})]})]})})})},j=n(36),p=n.n(j),b=(n(69),n(37)),m=n.n(b),h="ADD_SENTIMENT",f=function(e){return{type:h,payload:{sentimentScore:e.sentimentScore,systemTime:e.systemTime,number:e.number,mediaTime:e.mediaTime,startTime:e.startTime}}};var x=function(){var e=Object(l.c)((function(e){return e.systemTime})),t=Object(l.c)((function(e){return e.participantId})),n=Object(i.useState)(),r=Object(o.a)(n,2),c=r[0],a=r[1],s=Object(i.useState)(),d=Object(o.a)(s,2),j=d[0],b=d[1],h=Object(i.useState)(50),x=Object(o.a)(h,2),O=x[0],y=x[1],v=Object(i.useState)(0),g=Object(o.a)(v,2),T=g[0],I=g[1],S=Object(l.b)(),D=c,w=Math.floor(D/3600);D%=3600;var N=Math.floor(D/60),k=Math.floor(D%60);N=String(N).padStart(2,"0");var E=(w=String(w).padStart(2,"0"))+":"+N+":"+(k=String(k).padStart(2,"0"));return Object(i.useEffect)((function(){var e=setInterval((function(){I((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[T]),console.log(T),Object(i.useEffect)((function(){var n=setInterval((function(){S(function(e,t,n,i,r){return function(c){m.a.post("https://turnip3-api.azurewebsites.net/turnip",{sentimentScore:e,systemTime:n,participantId:t,mediaTime:i,startTime:r}).then((function(e){c(f(e.data))})).catch((function(e){console.log("Error @sentimentAction: ",e)}))}}(O,t,e,E,j))}),500);return function(){return clearInterval(n)}}),[S,t,e,c,E,j]),Object(u.jsxs)("div",{style:{height:"95vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(u.jsxs)("div",{style:{height:"100%",width:"100%",position:"relative",marginTop:"10px"},children:[Object(u.jsx)("div",{id:"overlay"}),Object(u.jsx)(p.a,{url:"https://www.youtube.com/watch?v=y7e-GC6oGhg",controls:!1,width:"100%",height:"100%",playing:!0,onReady:function(){return b(Date())},onProgress:function(e){return a(e.playedSeconds)},config:{youtube:{playerVars:{controls:0,disablekb:1}},vimeo:{controls:!1}}})]}),T>30&&T<120?Object(u.jsxs)("h1",{style:{paddingTop:"15px",paddingBottom:"15px",color:"#9bf00b"},children:["Are you still there? ",O]}):T>=120?Object(u.jsxs)("h1",{style:{paddingTop:"15px",paddingBottom:"15px",color:"#9bf00b"},children:["You haven't been active for over 2 minutes. Are you still there? ",O]}):Object(u.jsxs)("h1",{style:{paddingTop:"15px",paddingBottom:"15px"},children:["How interested are you? ",O]}),Object(u.jsxs)("div",{style:{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(u.jsx)("i",{className:"far fa-frown fa-3x",style:{marginRight:"10px"}}),Object(u.jsx)("p",{style:{textAlign:"center"},children:"Not Interested"})]}),Object(u.jsxs)("div",{style:{width:"90%",display:"flex",flexDirection:"column",paddingRight:"10px",paddingLeft:"10px"},children:[Object(u.jsx)("input",{className:"slider",type:"range",min:"0",max:"100",step:"1",value:O,onChange:function(e){e.preventDefault(),y(parseInt(e.target.value)),I(0)},list:"steplist",autoFocus:!0}),Object(u.jsx)("div",{className:"ticks",children:function(){for(var e=[],t=0;t<101;t+=10)e.push(Object(u.jsx)("span",{className:"tick",children:t},t));return e}()})]}),Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(u.jsx)("i",{className:"far fa-smile fa-3x",style:{marginLeft:"10px"}}),Object(u.jsx)("p",{style:{textAlign:"center"},children:"Very Interested"})]})]})]})};var O=function(){return Object(u.jsx)(a.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(s.a,{path:"/turnip",children:Object(u.jsx)(x,{})})]})})},y=n(23),v=n(38),g=n(15),T={participantId:"",intervalTime:null,sentimentScore:50,systemTime:null,mediaTime:"",startTime:null};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PID":return Object(g.a)(Object(g.a)({},e),{},{participantId:t.payload});case h:var n=new Date,i=n.toISOString();return Object(g.a)(Object(g.a)({},e),{},{intervalTime:i,sentimentScore:t.payload.sentimentScore,systemTime:i,mediaTime:t.payload.mediaTime,startTime:t.payload.startTime});default:return e}},S=Object(y.b)(I,Object(y.a)(v.a));c.a.render(Object(u.jsx)(l.a,{store:S,children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.d5c58aef.chunk.js.map