(this.webpackJsonpporkarus=this.webpackJsonpporkarus||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){},70:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(16),r=n.n(c),i=(n(44),n(45),n(20)),s=n(4),o=n(12),l=n(13),u=(n(49),n(2));var d=function(){var e=Object(l.b)(),t=Object(s.f)(),n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],d=Object(a.useState)(""),j=Object(o.a)(d,2),b=j[0],m=j[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),f=p[0],h=p[1],v=Object(a.useState)(!1),x=Object(o.a)(v,2),y=x[0],S=x[1],g=function(n){""===n?m("You need to enter a participant ID"):!1===/^PID\d{5}$/.test(n)?m("You must enter a valid PID"):(e(function(e){return localStorage.setItem("pid",e),{type:"GET_PID",payload:e}}(n)),t.push("/turnip"))};return Object(a.useEffect)((function(){var e=new Date("June 1, 2021 16:43:00").toUTCString(),t=setInterval((function(){var t=(new Date).toUTCString(),n=e<t,a=Date.parse(e)-Date.parse(t),c=Math.floor(a/864e5),r=Math.floor(a%864e5/36e5),i=Math.floor(a%36e5/6e4),s=Math.floor(a%6e4/1e3),o="".concat(c,"d ").concat(r,"h ").concat(i,"m ").concat(s,"s");h(o),n&&S(!1)}),1e3);return function(){return clearInterval(t)}}),[]),Object(u.jsx)("div",{className:"main",children:Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("div",{className:"login-box",children:[Object(u.jsx)("h1",{className:"title",children:"Welcome to the dial testing portion of the study!"}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("p",{style:{color:"black"},children:"Please enter your Participant ID:"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{autoFocus:!0,type:"text",placeholder:"PID12345",onChange:function(e){return i(e.target.value)},value:r,className:"pid-input"}),b?Object(u.jsx)("p",{style:{color:"red",marginBottom:5},children:b}):null,Object(u.jsx)("button",{onClick:function(){return g(r)},className:"submit-button",disabled:y,children:y?"Session starts in: "+f:"Enter"})]})]})]})})})},j=n(36),b=n(37),m=n.n(b),O=(n(70),n(38)),p=n.n(O),f="ADD_SENTIMENT",h=function(e){return{type:f,payload:{sentimentScore:e.sentimentScore,systemTime:e.systemTime,number:e.number,mediaTime:e.mediaTime,startTime:e.startTime}}};var v=function(){var e=Object(l.c)((function(e){return e.systemTime})),t=Object(l.c)((function(e){return e.participantId})),n=Object(a.useState)(),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(),d=Object(o.a)(s,2),b=d[0],O=d[1],f=Object(a.useState)(50),v=Object(o.a)(f,2),x=v[0],y=v[1],S=Object(a.useState)(0),g=Object(o.a)(S,2),T=g[0],I=g[1],N=Object(a.useState)(0),D=Object(o.a)(N,2),E=D[0],w=D[1],k=Object(l.b)(),C=r,_=Math.floor(C/3600);C%=3600;var P=Math.floor(C/60),M=Math.floor(C%60);P=String(P).padStart(2,"0");var A=(_=String(_).padStart(2,"0"))+":"+P+":"+(M=String(M).padStart(2,"0"));return Object(a.useEffect)((function(){var e=setInterval((function(){I((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[T]),Object(a.useEffect)((function(){window.onbeforeunload=function(){return"Show Warning"},document.addEventListener("keydown",(function(e){console.log("Key: ".concat(e.key," -- KeyCode: ").concat(e.keyCode)),9!==e.keyCode&&33!==e.keyCode&&34!==e.keyCode||e.preventDefault()}))})),Object(a.useEffect)((function(){var n=setInterval((function(){k(function(e,t,n,a,c){return function(r){p.a.post("https://turnip3-api.azurewebsites.net/turnip",{sentimentScore:e,systemTime:n,participantId:t,mediaTime:a,startTime:c}).then((function(e){r(h(e.data))})).catch((function(e){console.log("Error @sentimentAction: ",e)}))}}(x,t,e,A,b))}),600);return function(){return clearInterval(n)}}),[k,t,e,r,A,b]),Object(j.a)({onAction:function(e){console.log("User did something",e),e&&w(E+1),console.log(E)}}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"video-container",children:[Object(u.jsx)("div",{id:"overlay"}),Object(u.jsx)(m.a,{url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).VIDEO_URL),controls:!1,width:"100%",height:"100%",playing:!0,onReady:function(){return O(Date())},onProgress:function(e){return i(e.playedSeconds)},config:{youtube:{playerVars:{controls:0,disablekb:1}},vimeo:{controls:!1}}})]}),T>30&&T<120?Object(u.jsxs)("h1",{className:"warning pulsate",children:["Is your interest rating still ",x,"?"]}):T>=120?Object(u.jsxs)("h1",{className:"warning pulsate",children:["You haven't been active for over 2 minutes. Is your interest rating still ",x,"?"," "]}):Object(u.jsxs)("h1",{style:{paddingTop:"15px",paddingBottom:"15px"},children:["How interested are you? ",x]}),Object(u.jsxs)("div",{className:"sentiment-container",children:[Object(u.jsxs)("div",{className:"smile-container",children:[Object(u.jsx)("i",{className:"far fa-frown fa-3x"}),Object(u.jsx)("p",{style:{textAlign:"center"},children:"Not Interested"})]}),Object(u.jsxs)("div",{className:"slider-container",children:[Object(u.jsx)("input",{className:"slider",type:"range",min:"0",max:"100",step:"1",value:x,onChange:function(e){e.preventDefault(),y(parseInt(e.target.value)),I(0)},list:"steplist",autoFocus:!0}),Object(u.jsx)("div",{className:"ticks",children:function(){for(var e=[],t=0;t<101;t+=10)e.push(Object(u.jsx)("span",{className:"tick",children:t},t));return e}()})]}),Object(u.jsxs)("div",{className:"smile-container",children:[Object(u.jsx)("i",{className:"far fa-smile fa-3x"}),Object(u.jsx)("p",{style:{textAlign:"center"},children:"Very Interested"})]})]})]})};var x=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(s.a,{path:"/turnip",children:Object(u.jsx)(v,{})})]})})},y=n(23),S=n(39),g=n(15),T={participantId:"",intervalTime:null,sentimentScore:50,systemTime:null,mediaTime:"",startTime:null};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PID":return Object(g.a)(Object(g.a)({},e),{},{participantId:t.payload});case f:var n=new Date,a=n.toISOString().slice(0,19).replace("T"," ");return Object(g.a)(Object(g.a)({},e),{},{intervalTime:a,sentimentScore:t.payload.sentimentScore,systemTime:a,mediaTime:t.payload.mediaTime,startTime:t.payload.startTime});default:return e}},N=Object(y.b)(I,Object(y.a)(S.a));r.a.render(Object(u.jsx)(l.a,{store:N,children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.15da4220.chunk.js.map