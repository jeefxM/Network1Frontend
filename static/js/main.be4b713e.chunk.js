(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{157:function(e,t){},235:function(e,t,n){},237:function(e,t,n){},267:function(e,t){},269:function(e,t){},279:function(e,t){},281:function(e,t){},308:function(e,t){},310:function(e,t){},311:function(e,t){},317:function(e,t){},319:function(e,t){},337:function(e,t){},339:function(e,t){},351:function(e,t){},354:function(e,t){},385:function(e,t,n){"use strict";n.r(t);var r=n(15),a=(n(235),n(57)),s=n(9),c=n(0),i=n.n(c),o=n(44),u=n(17),l=(n(237),n(1)),b=n.n(l),d=n(138),f=n.n(d),j=n(431),p=n(435),m=n(429),h=n(433),O=n(219),v=n.n(O),g=n(24),x=n(222),y=n(432),w=b.a.createContext({getProfileFB:function(){return Promise.resolve({isSuccessful:!1})},setProfileFB:function(){return Promise.resolve({isSuccessful:!1})},getAllProfilesFB:function(){return Promise.resolve({isSuccessful:!1})}}),k="https://network1backend.up.railway.app",C=function(e){var t=e.children,n=Object(l.useCallback)(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"/users/profile/".concat(t),{method:"GET"});case 2:if(!(n=e.sent).ok){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),a=Object(l.useCallback)(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"/users/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({profile:t})});case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",{isSuccessful:!0});case 5:return e.abrupt("return",{isSuccessful:!1,message:n.statusText});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),s=Object(l.useCallback)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"/users/allProfiles",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=7;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),[]);return Object(r.jsx)(w.Provider,{value:{getProfileFB:n,setProfileFB:a,getAllProfilesFB:s},children:t})},B=n(108),S="localhost"===window.location.hostname?"ws://localhost:8000":"https://network1backend.up.railway.app",P=v()(S,{transports:["websocket"]}),F=(new g.i({name:"Beacon Docs"}),["0","v1.0","v2.0","v3.0"]),A=Object(y.a)();var T=function(){var e=Object(l.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],d=Object(l.useState)("sync"),O=Object(u.a)(d,2),v=(O[0],O[1],Object(l.useState)(!1)),g=Object(u.a)(v,2),y=(g[0],g[1],Object(l.useState)("#FFFF00")),k=Object(u.a)(y,2),C=k[0],S=k[1],T=Object(l.useContext)(w),z=(T.getProfileFB,T.setProfileFB),D=T.getAllProfilesFB,E=Object(l.useState)({color:C,timestamp:Date.now(),key:A,username:""}),I=Object(u.a)(E,2),N=I[0],L=I[1],q=Object(l.useState)([{color:"blue",timestamp:Date.now(),key:A,username:"user x"}]),J=Object(u.a)(q,2),M=J[0],R=J[1],G=b.a.useState(""),_=Object(u.a)(G,2),U=_[0],X=_[1],H=Object(B.b)().enqueueSnackbar,K=Object(l.useState)([]),V=Object(u.a)(K,2),W=V[0],Y=V[1],Q=Object(l.useState)(1),Z=Object(u.a)(Q,1)[0],$=Object(l.useState)(!1),ee=Object(u.a)($,2),te=(ee[0],ee[1],Object(l.useState)("")),ne=Object(u.a)(te,2),re=ne[0],ae=ne[1],se=Object(l.useState)([{}]),ce=Object(u.a)(se,2),ie=ce[0],oe=ce[1],ue=!1;Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,R(t.recentStatus),Y(t.history);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[D]),Object(l.useEffect)((function(){var e=function(e){Y(W.concat(e).sort((function(e,t){return parseFloat(t.timestamp)-parseFloat(e.timestamp)}))),M.find((function(t,n){return t.key===e.key&&(R([].concat(Object(s.a)(M.slice(0,n)),[e],Object(s.a)(M.slice(n+1)))),!0)}))};return P.on("profile",e),function(){P.off("profile",e)}}),[M,R,W]),Object(l.useEffect)((function(){var e=new f.a(window.ethereum);e.currentProvider.selectedAddress&&c(e.currentProvider.selectedAddress)}),[]);var le=function(){window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){c(e),ae(window.ethereum.networkVersion)}))};function be(){return de.apply(this,arguments)}function de(){return(de=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le(),ue){e.next=4;break}return H("You need to sign the message first!",{variant:"error"}),e.abrupt("return");case 4:n&&ie?(t=Date.now(),console.log(t),L(Object(a.a)(Object(a.a)({},N),{},{color:C,key:n.address,username:U,timestamp:t})),P.emit("profile",Object(a.a)(Object(a.a)({},N),{},{color:C,key:n.address,username:U,timestamp:t})),z(Object(a.a)(Object(a.a)({},N),{},{color:C,key:n.address,username:U,timestamp:t})),Y(W.concat([Object(a.a)(Object(a.a)({},N),{},{color:C,key:n.address,username:U,timestamp:t})]).sort((function(e,t){return parseFloat(t.timestamp)-parseFloat(e.timestamp)}))),H("Status Updated ! ",{variant:"success"}),X("")):H("User decliend the message !",{variant:"error"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe=function(){var e=Object(o.a)(i.a.mark((function e(){var t,r,a,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window,r=t.ethereum,a=new f.a(window.ethereum),console.log(N),c={domain:{chainId:re.toString(),name:"Ether Mail",verifyingContract:"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",version:"1"},message:{contents:N.color,from:{name:U,wallets:[n.toString()]},to:[{name:"OSFD Network 1.0",wallets:["0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB","0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57","0xB0B0b0b0b0b0B000000000000000000000000000"]}]},primaryType:"Mail",types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Group:[{name:"name",type:"string"},{name:"members",type:"Person[]"}],Mail:[{name:"from",type:"Person"},{name:"to",type:"Person[]"},{name:"contents",type:"string"}],Person:[{name:"name",type:"string"},{name:"wallets",type:"address[]"}]}},e.prev=4,e.next=7,a.eth.getAccounts();case 7:return o=e.sent,e.next=10,r.request({method:"eth_signTypedData_v4",params:[o[0],JSON.stringify(c)]});case 10:u=e.sent,oe((function(e){return[].concat(Object(s.a)(e),[{signedData:u}])})),console.log(ie),ue=!0,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.error(e.t0);case 19:be();case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"top-left",style:{fontSize:"1em",display:"flex",alignItems:"center",margin:6,justifyContent:"space-between"},children:[Object(r.jsx)("b",{children:"Network "}),"\xa0",Object(r.jsxs)(j.a,{value:Z,label:"version",onChange:function(e){var t;return console.log(e.target.value),2===e.target.value?t="https://adventurepizza.github.io/Network2/":3===e.target.value&&(t="https://adventurepizza.github.io/Network3/"),window.location.href=t,null},children:[Object(r.jsxs)(p.a,{value:1,children:[" ",F[1]]}),Object(r.jsxs)(p.a,{value:2,children:[" ",F[2]]}),Object(r.jsxs)(p.a,{value:3,children:[" ",F[3]]})]}),"\xa0 \ud83d\udce0",Object(r.jsx)(m.a,{style:{marginLeft:"auto"},onClick:le,children:n?"Signed as: ".concat(n):"Connect With Metamask"})]}),Object(r.jsx)("div",{style:{fontSize:"0.9em",marginTop:13,marginLeft:13},children:Object(r.jsx)("b",{children:"History"})}),Object(r.jsx)("div",{style:{display:"flex",width:"90%",marginLeft:"auto",marginRight:"auto",overflowX:"scroll"},children:ie?W&&W.map((function(e){return Object(r.jsxs)("div",{style:{textAlign:"center",margin:6},children:[Object(r.jsx)("div",{style:{width:80,height:20,backgroundColor:e.color,border:"solid 4px ",marginInline:4}}),Object(r.jsxs)(m.a,{title:e.key,size:"small",onClick:Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:navigator.clipboard.writeText(e.key),H("Address copied ! "+e.key,{variant:"success"});case 2:case"end":return t.stop()}}),t)}))),children:[e.username," "]})]},e.timestamp)})):""}),Object(r.jsx)("div",{style:{fontSize:"0.9em",marginTop:6,marginLeft:13},children:Object(r.jsx)("b",{children:"Recent Status"})}),Object(r.jsxs)("div",{style:{display:"flex",width:"90%",marginLeft:"auto",marginRight:"auto",overflowX:"scroll"},children:[Object(r.jsxs)("div",{style:{textAlign:"center",margin:6},children:[Object(r.jsx)("div",{style:{width:80,height:20,backgroundColor:N.color,border:"solid 4px ",marginInline:4}}),Object(r.jsxs)(m.a,{title:N.key,size:"small",onClick:Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.clipboard.writeText(N.key),H("Address copied ! "+N.key,{variant:"success"});case 2:case"end":return e.stop()}}),e)}))),children:[N.username," "]})]}),M&&M.map((function(e){return(!n||e.key!==n.address)&&Object(r.jsxs)("div",{style:{textAlign:"center",margin:6},children:[Object(r.jsx)("div",{style:{width:80,height:20,backgroundColor:e.color,border:"solid 4px ",marginInline:4}}),Object(r.jsxs)(m.a,{title:e.key,size:"small",onClick:Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:navigator.clipboard.writeText(e.key),H("Address copied ! "+e.key,{variant:"success"});case 2:case"end":return t.stop()}}),t)}))),children:[e.username," "]})]},e.key)}))]}),Object(r.jsxs)("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"},children:[Object(r.jsx)(x.a,{color:C,onChange:S}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)(h.a,{id:"outlined-basic",label:"info",variant:"outlined",placeholder:"Status",size:"small",onChange:function(e){e.target.value.length<25?X(e.target.value):X(e.target.value.slice(0,25))},value:U,onKeyPress:function(e){"Enter"===e.key&&be()}}),Object(r.jsxs)(m.a,{size:"small",title:"update status",onClick:function(){fe()},children:[" ",Object(r.jsx)("u",{children:"update status"})]})]})]}),Object(r.jsx)("div",{className:"bottom-left",style:{position:"absolute"},children:Object(r.jsxs)(m.a,{title:"Adventure Networks",size:"small",onClick:function(){},children:[" ",Object(r.jsxs)("div",{style:{textAlign:"left"},children:[" ","Adventure ",Object(r.jsx)("br",{}),"Networks"," "]})," "]})})]})},z=n(21),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,436)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};n.n(z).a.render(Object(r.jsx)(C,{children:Object(r.jsx)(B.a,{maxSnack:3,children:Object(r.jsx)(T,{})})}),document.getElementById("root")),D()}},[[385,1,2]]]);
//# sourceMappingURL=main.be4b713e.chunk.js.map