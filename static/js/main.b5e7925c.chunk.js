(this.webpackJsonpporkarus=this.webpackJsonpporkarus||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},69:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(16),r=n.n(c),i=(n(43),n(44),n(20)),s=n(3),o=n(11),l=n(12),u=(n(48),n(1));var d=function(){var e=Object(l.b)(),t=Object(s.f)(),n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],d=Object(a.useState)(""),j=Object(o.a)(d,2),b=j[0],m=j[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),O=f[0],h=f[1],v=Object(a.useState)(!1),x=Object(o.a)(v,2),y=x[0],g=x[1],S=function(n){""===n?m("You need to enter a participant ID"):!1===/^PID\d{5}$/.test(n)?m("You must enter a valid PID"):(e(function(e){return localStorage.setItem("pid",e),{type:"GET_PID",payload:e}}(n)),t.push("/turnip"))};return Object(a.useEffect)((function(){var e=new Date("June 15, 2021 12:55:00 PDT").toUTCString(),t=setInterval((function(){var t=(new Date).toUTCString(),n=e===t,a=Date.parse(e)-Date.parse(t),c=Math.floor(a/864e5),r=Math.floor(a%864e5/36e5),i=Math.floor(a%36e5/6e4),s=Math.floor(a%6e4/1e3),o="".concat(c,"d ").concat(r,"h ").concat(i,"m ").concat(s,"s");h(o),n&&g(!1)}),1e3);return function(){return clearInterval(t)}}),[]),Object(u.jsx)("div",{className:"main",children:Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("div",{className:"login-box",children:[Object(u.jsx)("h1",{className:"title",children:"Welcome to the dial testing portion of the study!"}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("p",{style:{color:"black"},children:"Please enter your Participant ID:"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{autoFocus:!0,type:"text",placeholder:"PID12345",onChange:function(e){return i(e.target.value)},value:r,className:"pid-input"}),b?Object(u.jsx)("p",{style:{color:"red",marginBottom:5},children:b}):null,Object(u.jsx)("button",{onClick:function(){return S(r)},className:"submit-button",disabled:y,children:y?"Session starts in: "+O:"Enter"})]})]})]})})})},j=n(36),b=n.n(j),m=(n(69),n(37)),p=n.n(m),f="ADD_SENTIMENT",O=function(e){return{type:f,payload:{sentimentScore:e.sentimentScore,systemTime:e.systemTime,number:e.number,mediaTime:e.mediaTime,startTime:e.startTime}}};var h=function(){var e=Object(l.c)((function(e){return e.systemTime})),t=Object(l.c)((function(e){return e.participantId})),n=Object(a.useState)(),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(),d=Object(o.a)(s,2),j=d[0],m=d[1],f=Object(a.useState)(50),h=Object(o.a)(f,2),v=h[0],x=h[1],y=Object(a.useState)(0),g=Object(o.a)(y,2),S=g[0],T=g[1],I=Object(l.b)(),N=r,D=Math.floor(N/3600);N%=3600;var w=Math.floor(N/60),k=Math.floor(N%60);w=String(w).padStart(2,"0");var E=(D=String(D).padStart(2,"0"))+":"+w+":"+(k=String(k).padStart(2,"0"));return Object(a.useEffect)((function(){var e=setInterval((function(){T((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[S]),Object(a.useEffect)((function(){window.onbeforeunload=function(){return"Show Warning"},document.addEventListener("keydown",(function(e){console.log("Key: ".concat(e.key," -- KeyCode: ").concat(e.keyCode)),9!==e.keyCode&&33!==e.keyCode&&34!==e.keyCode||e.preventDefault()}))})),Object(a.useEffect)((function(){var n=setInterval((function(){I(function(e,t,n,a,c){return function(r){p.a.post("https://turnip3-api.azurewebsites.net/turnip",{sentimentScore:e,systemTime:n,participantId:t,mediaTime:a,startTime:c}).then((function(e){r(O(e.data))})).catch((function(e){console.log("Error @sentimentAction: ",e)}))}}(v,t,e,E,j))}),600);return function(){return clearInterval(n)}}),[I,t,e,r,E,j]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"video-container",children:[Object(u.jsx)("div",{id:"overlay"}),Object(u.jsx)(b.a,{width:"100%",height:"100%",playing:!0,pip:!0,onStart:function(){return console.log("Started")},onReady:function(e){return m(Date())},onProgress:function(e){console.log("Progress"),i(e.playedSeconds)},onDuration:function(){return console.log("Duration")},config:{twitch:{options:{channel:"xbox",parent:["dial.azurewebsites.net","turnip3-api.azurewebsites.net"]}}}})]}),S>20&&S<120?Object(u.jsxs)("h1",{className:"warning pulsate",children:["Is your interest rating still ",v,"?"]}):S>=120?Object(u.jsxs)("h1",{className:"warning pulsate",children:["You haven't been active for over 2 minutes. Is your interest rating still ",v,"?"," "]}):Object(u.jsxs)("h1",{style:{paddingTop:"15px",paddingBottom:"15px"},children:["How interested are you? ",v]}),Object(u.jsxs)("div",{className:"sentiment-container",children:[Object(u.jsxs)("div",{className:"smile-container",children:[Object(u.jsx)("i",{className:"far fa-frown fa-3x"}),Object(u.jsx)("p",{style:{textAlign:"center"},children:"Not Interested"})]}),Object(u.jsxs)("div",{className:"slider-container",children:[Object(u.jsx)("input",{className:"slider",type:"range",min:"0",max:"100",step:"1",value:v,onChange:function(e){e.preventDefault(),x(parseInt(e.target.value)),T(0)},list:"steplist",autoFocus:!0}),Object(u.jsx)("div",{className:"ticks",children:function(){for(var e=[],t=0;t<101;t+=10)e.push(Object(u.jsx)("span",{className:"tick",children:t},t));return e}()})]}),Object(u.jsxs)("div",{className:"smile-container",children:[Object(u.jsx)("i",{className:"far fa-smile fa-3x"}),Object(u.jsx)("p",{style:{textAlign:"center"},children:"Very Interested"})]})]})]})};var v=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(s.a,{path:"/turnip",children:Object(u.jsx)(h,{})})]})})},x=n(23),y=n(38),g=n(15),S={participantId:"",intervalTime:null,sentimentScore:50,systemTime:null,mediaTime:"",startTime:null};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PID":return Object(g.a)(Object(g.a)({},e),{},{participantId:t.payload});case f:var n=new Date,a=n.toISOString().slice(0,19).replace("T"," ");return Object(g.a)(Object(g.a)({},e),{},{intervalTime:a,sentimentScore:t.payload.sentimentScore,systemTime:a,mediaTime:t.payload.mediaTime,startTime:t.payload.startTime});default:return e}},I=Object(x.b)(T,Object(x.a)(y.a));r.a.render(Object(u.jsx)(l.a,{store:I,children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.b5e7925c.chunk.js.map