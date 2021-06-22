(this["webpackJsonpreact-application"]=this["webpackJsonpreact-application"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(9),i=n.n(s),r=(n(63),n(64),n(17)),l=n(106),o=n(105),d=Object(l.a)(o.a)({margin:"10px"}),j={counterValue:{margin:"0 10px",fontSize:"20px"}},u=n(6),b=n(2);var m=Object(u.a)(j)((function(e){var t=e.handleIncrementClick,n=e.handleDecrementClick,a=e.handleResetClick,c=e.counterValue,s=e.classes;return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{variant:"contained",className:"button incrementButton",onClick:t,children:"increment"}),Object(b.jsx)(d,{variant:"contained",className:"button decrementButton",onClick:n,children:"decrement"}),Object(b.jsx)(d,{variant:"contained",className:"button resetButton",onClick:a,children:"reset"}),Object(b.jsx)("span",{className:s.counterValue,children:c})]})})),h=n(5),O=n.n(h);function x(e){var t=e.countersCount,n=Object(a.useState)(0),c=Object(r.a)(n,2),s=c[0],i=c[1],l=Object(a.useRef)(t);Object(a.useEffect)((function(){t>l.current&&O(),t<l.current&&x(),l.current=t}),[t]);var o=function(){i(s+1)},d=function(){i(s-1)},j=function(){o()},u=function(){d()},h=function(){i(0)},O=function(){s%2===0&&o()},x=function(){s%2===1&&d()};return Object(a.useMemo)((function(){return Object(b.jsx)(m,{handleIncrementClick:j,handleDecrementClick:u,handleResetClick:h,counterValue:s})}),[s])}x.propTypes={countersCount:O.a.number.isRequired};var p=x,v={counterWrapper:{display:"flex",flexDirection:"column",alignItems:"center"},counterListItems:{listStyle:"none",paddingInlineStart:"0px"}},g=n(22),f={navbarLinks:{display:"flex",justifyContent:"space-evenly",listStyle:"none",padding:"15px"},navbarLink:{display:"block",textDecoration:"none",color:"black",backgroundColor:"blanchedalmond",padding:"20px",borderRadius:"10px"},activeLink:{backgroundColor:"darksalmon",color:"white",borderRadius:"10px"}};var C=Object(u.a)(f)((function(e){var t=e.classes;return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:t.navbarLinks,children:[Object(b.jsx)("li",{className:t.navbarLinkBlock,children:Object(b.jsx)(g.c,{to:"/about",className:t.navbarLink,activeClassName:t.activeLink,children:"About Us"})}),Object(b.jsx)("li",{className:t.navbarLinkBlock,children:Object(b.jsx)(g.c,{to:"/counters",className:t.navbarLink,activeClassName:t.activeLink,children:"Counters"})}),Object(b.jsx)("li",{className:t.navbarLinkBlock,children:Object(b.jsx)(g.c,{to:"/login",className:t.navbarLink,activeClassName:t.activeLink,children:"Login"})}),Object(b.jsx)("li",{className:t.navbarLinkBlock,children:Object(b.jsx)(g.c,{to:"/login-redux",className:t.navbarLink,activeClassName:t.activeLink,children:"Login with Redux"})})]})})}));var k=Object(u.a)(v)((function(e){for(var t=e.handleAddCounterClick,n=e.handleRemoveCounterClick,a=e.handleRestartCountersClick,c=e.countersCount,s=e.classes,i=[],r=0;r<c;r++)i.push(Object(b.jsx)("li",{children:Object(b.jsx)(p,{countersCount:c})},r.toString()));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsxs)("div",{className:s.counterWrapper,children:[Object(b.jsxs)("div",{className:s.counterWrapperControls,children:[Object(b.jsx)(d,{variant:"contained",color:"primary",onClick:t,children:"Add Counter"}),Object(b.jsx)(d,{variant:"contained",color:"primary",onClick:n,children:"Remove Counter"}),Object(b.jsx)(d,{variant:"contained",color:"primary",onClick:a,children:"Restart Counters"})]}),Object(b.jsx)("div",{className:s.controlsList,children:Object(b.jsx)("ul",{className:s.counterListItems,children:i})})]})]})}));function w(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsx)(k,{handleAddCounterClick:function(){c(n+1)},handleRemoveCounterClick:function(){n>1&&c(n-1)},handleRestartCountersClick:function(){c(1)},countersCount:n})}var N=n.p+"static/media/logo.6ce24c58.svg",y={aboutBlock:{display:"flex",flexDirection:"column",alignItems:"center"},aboutTextBlock:{display:"flex",flexGrow:"1",justifyContent:"center"},aboutDescriptionBlock:{maxWidth:"50%"},aboutDescriptionText:{textAlign:"center"}};var L=Object(u.a)(y)((function(e){var t=e.classes;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsxs)("div",{className:t.aboutBlock,children:[Object(b.jsx)("div",{className:t.aboutTextBlock,children:Object(b.jsx)("div",{className:t.aboutDescriptionBlock,children:Object(b.jsx)("p",{className:t.aboutDescriptionText,children:"Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the five Big Tech companies along with Amazon, Facebook, Apple, and Microsoft."})})}),Object(b.jsx)("div",{className:t.AppHeader,children:Object(b.jsx)("img",{src:N,className:"App-logo",alt:"logo"})})]})]})})),E={notFoundBlock:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},notFoundText:{fontSize:"40px"}};var S=Object(u.a)(E)((function(e){var t=e.classes;return Object(b.jsx)("div",{className:t.notFoundBlock,children:Object(b.jsx)("p",{className:t.notFoundText,children:"404 - Page Not Found"})})})),B={loginBlock:{display:"flex",flexDirection:"column",alignItems:"center"},textField:{margin:"10px"}},D=n(102);var I=Object(u.a)(B)((function(e){var t=e.handleSubmit,n=e.handleEmailChange,a=e.handlePasswordChange,c=e.email,s=e.password,i=e.classes;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsxs)("div",{className:i.loginBlock,children:[Object(b.jsxs)("form",{onSubmit:t,className:i.loginBlock,children:[Object(b.jsx)(D.a,{className:i.textField,type:"text",name:"email",value:c,onChange:n,label:"Enter Email",variant:"outlined"}),Object(b.jsx)(D.a,{className:i.textField,type:"password",name:"password",value:s,onChange:a,label:"Enter Password",variant:"outlined"}),Object(b.jsx)(o.a,{variant:"contained",color:"secondary",type:"submit",children:"Log In"})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["email: ",JSON.stringify(c)]}),Object(b.jsxs)("p",{children:["password: ",JSON.stringify(s)]})]})]})]})}));function F(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function A(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),l=i[0],o=i[1],d=Object(a.useState)({email:"",password:""}),j=Object(r.a)(d,2),u=j[0],m=j[1],h=function(){var e=u,t=!0;return n?F(n)?e.email="":(t=!1,e.email="Invalid email"):(t=!1,e.email="Email Required"),l?l.length<6?(t=!1,e.password="Password must be more than 6 characters"):e.password="":(t=!1,e.password="Password required"),m(e),t};return Object(b.jsx)(I,{handleEmailChange:function(e){c(e.target.value)},handlePasswordChange:function(e){o(e.target.value)},handleSubmit:function(e){h()?(console.log("email: ".concat(n,", password ").concat(l)),c(""),o("")):(u.email&&alert("".concat(u.email)),u.password&&alert("".concat(u.password))),e.preventDefault()},email:n,password:l})}var R=n(30),P={loginBlock:{display:"flex",flexDirection:"column",alignItems:"center"},textField:{margin:"10px"}},_=n(108);var T=Object(u.a)(P)((function(e){var t=e.handleSubmit,n=e.handleEmailChange,a=e.handlePasswordChange,c=e.email,s=e.password,i=e.classes;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsxs)("div",{className:i.loginBlock,children:[Object(b.jsxs)("form",{className:i.loginBlock,children:[Object(b.jsx)(D.a,{className:i.textField,type:"text",name:"email",value:c,onChange:n,label:"Enter Email",variant:"outlined"}),Object(b.jsx)(D.a,{className:i.textField,type:"password",name:"password",value:s,onChange:a,label:"Enter Password",variant:"outlined"}),Object(b.jsx)(_.a,{component:g.b,to:"/login-redux/success",onClick:t,children:"Log In"})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["email: ",JSON.stringify(c)]}),Object(b.jsxs)("p",{children:["password: ",JSON.stringify(s)]})]})]})]})})),z=n(107),H=Object(z.a)("HANDLE_CHANGE_EMAIL"),J=Object(z.a)("HANDLE_CHANGE_PASSWORD"),V=function(e){return e.login.email},q=function(e){return e.login.password};var W={changeEmail:H,changePassword:J},G=Object(R.b)((function(e){return{email:V(e),password:q(e)}}),W)((function(e){var t=e.email,n=e.password,c=e.changeEmail,s=e.changePassword,i=Object(a.useState)({email:"",password:""}),l=Object(r.a)(i,2),o=l[0],d=l[1],j=function(){var e=o,a=!0;return t?F(t)?e.email="":(a=!1,e.email="Invalid email"):(a=!1,e.email="Email Required"),n?n.length<6?(a=!1,e.password="Password must be more than 6 characters"):e.password="":(a=!1,e.password="Password required"),d(e),a};return Object(b.jsx)(T,{handleSubmit:function(e){j()||(e.preventDefault(),o.email&&alert("".concat(o.email)),o.password&&alert("".concat(o.password)))},handleEmailChange:function(e){c(e.target.value)},handlePasswordChange:function(e){s(e.target.value)},email:t,password:n})}));function M(e){var t=e.email,n=e.password;return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Email - ",t,", password - ",n]})})}var X=Object(R.b)((function(e){return{email:V(e),password:q(e)}}))((function(e){var t=e.email,n=e.password;return Object(b.jsx)(M,{email:t,password:n})})),U=n(12);var Z,$=function(){return Object(b.jsx)(g.a,{children:Object(b.jsxs)(U.d,{children:[Object(b.jsx)(U.b,{path:"/react-application",children:Object(b.jsx)(C,{})}),Object(b.jsx)(U.b,{path:"/about",children:Object(b.jsx)(L,{})}),Object(b.jsx)(U.b,{path:"/counters",children:Object(b.jsx)(w,{})}),Object(b.jsx)(U.b,{path:"/login",children:Object(b.jsx)(A,{})}),Object(b.jsx)(U.b,{path:"/login-redux",exact:!0,children:Object(b.jsx)(G,{})}),Object(b.jsx)(U.b,{path:"/login-redux/success",exact:!0,children:Object(b.jsx)(X,{})}),Object(b.jsx)(U.b,{path:"/404",children:Object(b.jsx)(S,{})}),Object(b.jsx)(U.a,{from:"/",to:"/404"})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},Q=n(39),Y=n(38),ee=n(40),te=n(104),ne=Object(te.a)((Z={},Object(Y.a)(Z,H,(function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{email:t.payload})})),Object(Y.a)(Z,J,(function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{password:t.payload})})),Z),{email:"",password:""}),ae=Object(Q.a)({login:ne}),ce=Object(Q.c)(ae,Object(Q.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(b.jsx)(R.a,{store:ce,children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)($,{})})}),document.getElementById("root")),K()}},[[71,1,2]]]);
//# sourceMappingURL=main.f6a520f8.chunk.js.map