(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{157:function(e,t){},235:function(e,t,n){},237:function(e,t,n){},267:function(e,t){},269:function(e,t){},279:function(e,t){},281:function(e,t){},308:function(e,t){},310:function(e,t){},311:function(e,t){},317:function(e,t){},319:function(e,t){},337:function(e,t){},339:function(e,t){},351:function(e,t){},354:function(e,t){},385:function(e,t,n){"use strict";n.r(t);var r=n(13),a=(n(235),n(57)),s=n(12),c=n(0),i=n.n(c),o=n(44),u=n(17),l=(n(237),n(1)),b=n.n(l),d=n(138),f=n.n(d),j=n(431),p=n(435),m=n(429),h=n(433),O=n(219),x=n.n(O),v=n(24),g=n(222),y=n(432),k=b.a.createContext({getProfileFB:function(){return Promise.resolve({isSuccessful:!1})},setProfileFB:function(){return Promise.resolve({isSuccessful:!1})},getAllProfilesFB:function(){return Promise.resolve({isSuccessful:!1})}}),w="https://network1-backend.herokuapp.com",C=function(e){var t=e.children,n=Object(l.useCallback)(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/users/profile/".concat(t),{method:"GET"});case 2:if(!(n=e.sent).ok){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),a=Object(l.useCallback)(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/users/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({profile:t})});case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",{isSuccessful:!0});case 5:return e.abrupt("return",{isSuccessful:!1,message:n.statusText});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),s=Object(l.useCallback)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/users/allProfiles",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=7;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),[]);return Object(r.jsx)(k.Provider,{value:{getProfileFB:n,setProfileFB:a,getAllProfilesFB:s},children:t})},B=n(108),S="localhost"===window.location.hostname?"ws://localhost:8000":"wss://network1-backend.herokuapp.com",F=x()(S,{transports:["websocket"]}),P=(new v.i({name:"Beacon Docs"}),["0","v1.0","v2.0","v3.0"]),A=Object(y.a)();var E=function(){var e=Object(l.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],d=Object(l.useState)("sync"),O=Object(u.a)(d,2),x=(O[0],O[1],Object(l.useState)(!1)),v=Object(u.a)(x,2),y=v[0],w=(v[1],Object(l.useState)("#FFFF00")),C=Object(u.a)(w,2),S=C[0],E=C[1],D=Object(l.useContext)(k),z=(D.getProfileFB,D.setProfileFB),T=D.getAllProfilesFB,I=Object(l.useState)({color:S,timestamp:Date.now(),key:A,username:""}),N=Object(u.a)(I,2),L=N[0],q=N[1],J=Object(l.useState)([{color:"blue",timestamp:Date.now(),key:A,username:"user x"}]),M=Object(u.a)(J,2),R=M[0],G=M[1],_=b.a.useState(""),H=Object(u.a)(_,2),U=H[0],X=H[1],K=Object(B.b)().enqueueSnackbar,V=Object(l.useState)([]),W=Object(u.a)(V,2),Q=W[0],Y=W[1],Z=Object(l.useState)(1),$=Object(u.a)(Z,1)[0],ee=Object(l.useState)(""),te=Object(u.a)(ee,2),ne=(te[0],te[1],Object(l.useState)("")),re=Object(u.a)(ne,2),ae=re[0],se=re[1],ce=Object(l.useState)(""),ie=Object(u.a)(ce,2),oe=(ie[0],ie[1]);Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,G(t.recentStatus),Y(t.history);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[T]),Object(l.useEffect)((function(){var e=function(e){Y(Q.concat(e).sort((function(e,t){return parseFloat(t.timestamp)-parseFloat(e.timestamp)}))),R.find((function(t,n){return t.key===e.key&&(G([].concat(Object(s.a)(R.slice(0,n)),[e],Object(s.a)(R.slice(n+1)))),!0)}))};return F.on("profile",e),function(){F.off("profile",e)}}),[R,G,Q]),Object(l.useEffect)((function(){var e=new f.a(window.ethereum);e.currentProvider.selectedAddress&&c(e.currentProvider.selectedAddress)}),[]);var ue=function(){window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){c(e),se(window.ethereum.networkVersion)}))};function le(){return be.apply(this,arguments)}function be(){return(be=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:return e.next=4,de();case 4:n&&(t=Date.now(),console.log(t),q(Object(a.a)(Object(a.a)({},L),{},{color:S,key:n.address,username:U,timestamp:t})),F.emit("profile",Object(a.a)(Object(a.a)({},L),{},{color:S,key:n.address,username:U,timestamp:t})),z(Object(a.a)(Object(a.a)({},L),{},{color:S,key:n.address,username:U,timestamp:t})),Y(Q.concat([Object(a.a)(Object(a.a)({},L),{},{color:S,key:n.address,username:U,timestamp:t})]).sort((function(e,t){return parseFloat(t.timestamp)-parseFloat(e.timestamp)}))),K("Status Updated ! ",{variant:"success"}),X(""));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,r,a,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window,n=t.ethereum,r=new f.a(window.ethereum),a={domain:{chainId:ae.toString(),name:"Ether Mail",verifyingContract:"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",version:"1"},message:{contents:"Hello, User!",from:{name:"OSFD Intern DAO",wallets:["0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826","0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF"]},to:[{name:"Bob",wallets:["0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB","0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57","0xB0B0b0b0b0b0B000000000000000000000000000"]}]},primaryType:"Mail",types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Group:[{name:"name",type:"string"},{name:"members",type:"Person[]"}],Mail:[{name:"from",type:"Person"},{name:"to",type:"Person[]"},{name:"contents",type:"string"}],Person:[{name:"name",type:"string"},{name:"wallets",type:"address[]"}]}},e.prev=3,e.next=6,r.eth.getAccounts();case 6:return s=e.sent,e.next=9,n.request({method:"eth_signTypedData_v4",params:[s[0],JSON.stringify(a)]});case 9:c=e.sent,oe(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"top-left",style:{fontSize:"1em",display:"flex",alignItems:"center",margin:6,justifyContent:"space-between"},children:[Object(r.jsx)("b",{children:"Network "}),"\xa0",Object(r.jsxs)(j.a,{value:$,label:"version",onChange:function(e){var t;return console.log(e.target.value),2===e.target.value?t="https://adventurepizza.github.io/Network2/":3===e.target.value&&(t="https://adventurepizza.github.io/Network3/"),window.location.href=t,null},children:[Object(r.jsxs)(p.a,{value:1,children:[" ",P[1]]}),Object(r.jsxs)(p.a,{value:2,children:[" ",P[2]]}),Object(r.jsxs)(p.a,{value:3,children:[" ",P[3]]})]}),"\xa0 \ud83d\udce0",Object(r.jsx)(m.a,{style:{marginLeft:"auto"},onClick:ue,children:n?"Sigend as: ".concat(n):"Connect With Metamask"})]}),Object(r.jsx)("div",{style:{fontSize:"0.9em",marginTop:13,marginLeft:13},children:Object(r.jsx)("b",{children:"History"})}),Object(r.jsx)("div",{style:{display:"flex",width:"90%",marginLeft:"auto",marginRight:"auto",overflowX:"scroll"},children:Q&&Q.map((function(e){return Object(r.jsxs)("div",{style:{textAlign:"center",margin:6},children:[Object(r.jsx)("div",{style:{width:80,height:20,backgroundColor:e.color,border:"solid 4px ",marginInline:4}}),Object(r.jsxs)(m.a,{title:e.key,size:"small",onClick:Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:navigator.clipboard.writeText(e.key),K("Address copied ! "+e.key,{variant:"success"});case 2:case"end":return t.stop()}}),t)}))),children:[e.username," "]})]},e.timestamp)}))}),Object(r.jsx)("div",{style:{fontSize:"0.9em",marginTop:6,marginLeft:13},children:Object(r.jsx)("b",{children:"Recent Status"})}),Object(r.jsxs)("div",{style:{display:"flex",width:"90%",marginLeft:"auto",marginRight:"auto",overflowX:"scroll"},children:[Object(r.jsxs)("div",{style:{textAlign:"center",margin:6},children:[Object(r.jsx)("div",{style:{width:80,height:20,backgroundColor:L.color,border:"solid 4px ",marginInline:4}}),Object(r.jsxs)(m.a,{title:L.key,size:"small",onClick:Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.clipboard.writeText(L.key),K("Address copied ! "+L.key,{variant:"success"});case 2:case"end":return e.stop()}}),e)}))),children:[L.username," "]})]}),R&&R.map((function(e){return(!n||e.key!==n.address)&&Object(r.jsxs)("div",{style:{textAlign:"center",margin:6},children:[Object(r.jsx)("div",{style:{width:80,height:20,backgroundColor:e.color,border:"solid 4px ",marginInline:4}}),Object(r.jsxs)(m.a,{title:e.key,size:"small",onClick:Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:navigator.clipboard.writeText(e.key),K("Address copied ! "+e.key,{variant:"success"});case 2:case"end":return t.stop()}}),t)}))),children:[e.username," "]})]},e.key)}))]}),Object(r.jsxs)("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"},children:[Object(r.jsx)(g.a,{color:S,onChange:E}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)(h.a,{id:"outlined-basic",label:"info",variant:"outlined",placeholder:"Status",size:"small",onChange:function(e){e.target.value.length<25?X(e.target.value):X(e.target.value.slice(0,25))},value:U,onKeyPress:function(e){"Enter"===e.key&&le()}}),Object(r.jsxs)(m.a,{size:"small",title:"update status",onClick:function(){le()},children:[" ",Object(r.jsx)("u",{children:"update status"})]})]})]}),Object(r.jsx)("div",{className:"bottom-left",style:{position:"absolute"},children:Object(r.jsxs)(m.a,{title:"Adventure Networks",size:"small",onClick:function(){},children:[" ",Object(r.jsxs)("div",{style:{textAlign:"left"},children:[" ","Adventure ",Object(r.jsx)("br",{}),"Networks"," "]})," "]})}),Object(r.jsxs)("div",{className:"bottom-right",style:{position:"absolute",display:"flex",alignItems:"center"},children:[y&&Object(r.jsxs)(m.a,{size:"small",title:"unsync",onClick:function(){unsync()},children:[Object(r.jsx)("u",{children:"unsync"})," "]}),y&&Object(r.jsx)("div",{children:" | "})]})]})},D=n(21),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,436)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};n.n(D).a.render(Object(r.jsx)(C,{children:Object(r.jsx)(B.a,{maxSnack:3,children:Object(r.jsx)(E,{})})}),document.getElementById("root")),z()}},[[385,1,2]]]);
//# sourceMappingURL=main.68e51d1f.chunk.js.map