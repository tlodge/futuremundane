(this.webpackJsonplrotf=this.webpackJsonplrotf||[]).push([[0],{13:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},19:function(e,n,t){e.exports=t(43)},24:function(e,n,t){},25:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),a=t(12),l=t.n(a),r=(t(24),t(13)),c=t.n(r),s=t(14),d=t(15),g=t(2),m=t(17),u=t(18),h="undefined"!==typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),p=h?new h:null;p.continous=!0,p.interimResults=!0,p.lang="en-US",console.log("HAVE recognition",p);var f=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).state={listening:!1},e.toggleListen=e.toggleListen.bind(Object(g.a)(e)),e.handleListen=e.handleListen.bind(Object(g.a)(e)),e}return Object(d.a)(t,[{key:"toggleListen",value:function(){console.log("OK STARTING TO LISTEN!"),this.setState({listening:!this.state.listening},this.handleListen)}},{key:"handleListen",value:function(){console.log("handlimg listening!"),this.state.listening?(p.start(),p.onend=function(){return p.start()}):p.end();var e="";p.onresult=function(n){for(var t="",i=n.resultIndex;i<n.results.length;i++){var o=n.results[i][0].transcript;n.results[i].isFinal?e+=o+" ":t+=o}document.getElementById("interim").innerHTML=t,document.getElementById("final").innerHTML=e}}},{key:"render",value:function(){return o.a.createElement("div",{style:w},o.a.createElement("button",{id:"microphone-btn",style:v,onClick:this.toggleListen}),o.a.createElement("div",{id:"interim",style:E}),o.a.createElement("div",{id:"final",style:b}))}}]),t}(i.Component),w={display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},v={width:"60px",height:"60px",background:"lightblue",borderRadius:"50%",margin:"6em 0 2em 0"},E={color:"gray",border:"#ccc 1px solid",padding:"1em",margin:"1em",width:"300px"},b={color:"black",border:"#ccc 1px solid",padding:"1em",margin:"1em",width:"300px"},y=(t(25),t(16)),k=t.n(y);var x=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement("a",{href:"#",onClick:function(){k()({method:"post",url:"/set_gesture",data:{hello:"world"}})}},"send category"),o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),o.a.createElement("img",{src:"/video_feed"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.3441e05f.chunk.js.map