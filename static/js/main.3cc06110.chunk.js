(this["webpackJsonpreact-application"]=this["webpackJsonpreact-application"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),r=n.n(i),c=(n(62),n(63),n(18)),l=n(19),o=n(14),d=n(21),u=n(20),h=n(102),j=n(101),b=Object(h.a)(j.a)({margin:"10px"}),m={counterValue:{margin:"0 10px",fontSize:"20px"}},p=n(6),O=n(2);var C=Object(p.a)(m)((function(e){var t=e.handleIncrementClick,n=e.handleDecrementClick,a=e.handleResetClick,s=e.counterValue,i=e.classes;return Object(O.jsxs)("div",{children:[Object(O.jsx)(b,{variant:"contained",className:"button incrementButton",onClick:t,children:"increment"}),Object(O.jsx)(b,{variant:"contained",className:"button decrementButton",onClick:n,children:"decrement"}),Object(O.jsx)(b,{variant:"contained",className:"button resetButton",onClick:a,children:"reset"}),Object(O.jsx)("span",{className:i.counterValue,children:s})]})})),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={counterValue:0},a.props=e,a.handleIncrementClick=a.handleIncrementClick.bind(Object(o.a)(a)),a.handleDecrementClick=a.handleDecrementClick.bind(Object(o.a)(a)),a.handleResetClick=a.handleResetClick.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){console.log("UNSAFE_componentWillReceiveProps in CounterContainer"),e.countersCount>this.props.countersCount&&this.handleEvenValue(),e.countersCount<this.props.countersCount&&this.handleOddValue()}},{key:"incrementValue",value:function(){this.setState((function(e){return{counterValue:e.counterValue+1}}))}},{key:"decrementValue",value:function(){this.setState((function(e){return{counterValue:e.counterValue-1}}))}},{key:"handleIncrementClick",value:function(e){this.incrementValue()}},{key:"handleDecrementClick",value:function(e){this.decrementValue()}},{key:"handleResetClick",value:function(e){this.setState((function(e){return{counterValue:0}}))}},{key:"handleEvenValue",value:function(){this.state.counterValue%2===0&&this.incrementValue()}},{key:"handleOddValue",value:function(){this.state.counterValue%2===1&&this.decrementValue()}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate in CounterContainer"),t.counterValue===this.state.counterValue?(console.log("shouldComponentUpdate in CounterContainer returns false"),!1):(console.log("shouldComponentUpdate in CounterContainer returns true"),!0)}},{key:"render",value:function(){return console.log("render in CounterContainer"),Object(O.jsx)(C,{handleIncrementClick:this.handleIncrementClick,handleDecrementClick:this.handleDecrementClick,handleResetClick:this.handleResetClick,counterValue:this.state.counterValue})}}]),n}(s.a.Component),x={counterWrapper:{display:"flex",flexDirection:"column",alignItems:"center"},counterListItems:{listStyle:"none",paddingInlineStart:"0px"}},k=n(31),g={navbarLinks:{display:"flex",justifyContent:"space-evenly",listStyle:"none",padding:"15px"},navbarLink:{display:"block",textDecoration:"none",color:"black",backgroundColor:"blanchedalmond",padding:"20px",borderRadius:"10px"},activeLink:{backgroundColor:"darksalmon",color:"white",borderRadius:"10px"}};var f=Object(p.a)(g)((function(e){var t=e.classes;return Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:t.navbarLinks,children:[Object(O.jsx)("li",{className:t.navbarLinkBlock,children:Object(O.jsx)(k.b,{to:"/about",className:t.navbarLink,activeClassName:t.activeLink,children:"About Us"})}),Object(O.jsx)("li",{className:t.navbarLinkBlock,children:Object(O.jsx)(k.b,{to:"/counters",className:t.navbarLink,activeClassName:t.activeLink,children:"Counters"})}),Object(O.jsx)("li",{className:t.navbarLinkBlock,children:Object(O.jsx)(k.b,{to:"/login",className:t.navbarLink,activeClassName:t.activeLink,children:"Login"})}),Object(O.jsx)("li",{className:t.navbarLinkBlock,children:Object(O.jsx)(k.b,{to:"/login-redux",className:t.navbarLink,activeClassName:t.activeLink,children:"Login with Redux"})})]})})}));var w=Object(p.a)(x)((function(e){for(var t=e.handleAddCounterClick,n=e.handleRemoveCounterClick,a=e.handleRestartCountersClick,s=e.countersCount,i=e.classes,r=[],c=0;c<s;c++)r.push(Object(O.jsx)("li",{children:Object(O.jsx)(v,{countersCount:s})},c.toString()));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsxs)("div",{className:i.counterWrapper,children:[Object(O.jsxs)("div",{className:i.counterWrapperControls,children:[Object(O.jsx)(b,{variant:"contained",color:"primary",onClick:t,children:"Add Counter"}),Object(O.jsx)(b,{variant:"contained",color:"primary",onClick:n,children:"Remove Counter"}),Object(O.jsx)(b,{variant:"contained",color:"primary",onClick:a,children:"Restart Counters"})]}),Object(O.jsx)("div",{className:i.controlsList,children:Object(O.jsx)("ul",{className:i.counterListItems,children:r})})]})]})})),y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={countersCount:1},a.handleAddCounterClick=a.handleAddCounterClick.bind(Object(o.a)(a)),a.handleRemoveCounterClick=a.handleRemoveCounterClick.bind(Object(o.a)(a)),a.handleRestartCountersClick=a.handleRestartCountersClick.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleAddCounterClick",value:function(e){this.setState((function(e){return{countersCount:++e.countersCount}}))}},{key:"handleRemoveCounterClick",value:function(e){this.state.countersCount>1&&this.setState((function(e){return{countersCount:--e.countersCount}}))}},{key:"handleRestartCountersClick",value:function(e){this.setState((function(e){return{countersCount:1}}))}},{key:"render",value:function(){return console.log("render in CounterWrapperContainer"),Object(O.jsx)(w,{handleAddCounterClick:this.handleAddCounterClick,handleRemoveCounterClick:this.handleRemoveCounterClick,handleRestartCountersClick:this.handleRestartCountersClick,countersCount:this.state.countersCount})}}]),n}(s.a.Component),N=n.p+"static/media/logo.6ce24c58.svg",S={aboutBlock:{display:"flex",flexDirection:"column",alignItems:"center"},aboutTextBlock:{display:"flex",flexGrow:"1",justifyContent:"center"},aboutDescriptionBlock:{maxWidth:"50%"},aboutDescriptionText:{textAlign:"center"}};var E=Object(p.a)(S)((function(e){var t=e.classes;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsxs)("div",{className:t.aboutBlock,children:[Object(O.jsx)("div",{className:t.aboutTextBlock,children:Object(O.jsx)("div",{className:t.aboutDescriptionBlock,children:Object(O.jsx)("p",{className:t.aboutDescriptionText,children:"Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the five Big Tech companies along with Amazon, Facebook, Apple, and Microsoft."})})}),Object(O.jsx)("div",{className:t.AppHeader,children:Object(O.jsx)("img",{src:N,className:"App-logo",alt:"logo"})})]})]})})),L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)(E,{})}}]),n}(s.a.Component),R={notFoundBlock:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},notFoundText:{fontSize:"40px"}};var V=Object(p.a)(R)((function(e){var t=e.classes;return Object(O.jsx)("div",{className:t.notFoundBlock,children:Object(O.jsx)("p",{className:t.notFoundText,children:"404 - Page Not Found"})})})),D=n(43),I={loginBlock:{display:"flex",flexDirection:"column",alignItems:"center"},textField:{margin:"10px"}},A=n(99);var B=Object(p.a)(I)((function(e){var t=e.handleSubmit,n=e.handleChange,a=e.email,s=e.password,i=e.classes;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsxs)("div",{className:i.loginBlock,children:[Object(O.jsxs)("form",{onSubmit:t,className:i.loginBlock,children:[Object(O.jsx)(A.a,{className:i.textField,type:"text",name:"email",value:a,onChange:n,label:"Enter Email",variant:"outlined"}),Object(O.jsx)(A.a,{className:i.textField,type:"password",name:"password",value:s,onChange:n,label:"Enter Password",variant:"outlined"}),Object(O.jsx)(j.a,{variant:"contained",color:"secondary",type:"submit",children:"Log In"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["email: ",JSON.stringify(a)]}),Object(O.jsxs)("p",{children:["password: ",JSON.stringify(s)]})]})]})]})})),F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",errors:{email:"",password:""}},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){this.handleValidation()?(console.log("email: ".concat(this.state.email,", password ").concat(this.state.password)),this.setState({email:"",password:""})):(this.state.errors.email&&alert("".concat(this.state.errors.email)),this.state.errors.password&&alert("".concat(this.state.errors.password))),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"handleValidation",value:function(){var e=this.state.email,t=this.state.password,n=this.state.errors,a=!0;return e?this.validateEmail(e)?n.email="":(a=!1,n.email="Invalid email"):(a=!1,n.email="Email Required"),t?t.length<6?(a=!1,n.password="Password must be more than 6 characters"):n.password="":(a=!1,n.password="Password required"),this.setState({errors:n}),a}},{key:"render",value:function(){return Object(O.jsx)(B,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,email:this.state.email,password:this.state.password})}}]),n}(s.a.Component),P=n(44),_={loginBlock:{display:"flex",flexDirection:"column",alignItems:"center"},textField:{margin:"10px"}};var T=Object(p.a)(_)((function(e){var t=e.handleSubmit,n=e.handleEmailChange,a=e.handlePasswordChange,s=e.email,i=e.password,r=e.classes;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsxs)("div",{className:r.loginBlock,children:[Object(O.jsxs)("form",{onSubmit:t,className:r.loginBlock,children:[Object(O.jsx)(A.a,{className:r.textField,type:"text",name:"email",value:s,onChange:n,label:"Enter Email",variant:"outlined"}),Object(O.jsx)(A.a,{className:r.textField,type:"password",name:"password",value:i,onChange:a,label:"Enter Password",variant:"outlined"}),Object(O.jsx)(j.a,{variant:"contained",color:"secondary",type:"submit",children:"Log In"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["email: ",JSON.stringify(s)]}),Object(O.jsxs)("p",{children:["password: ",JSON.stringify(i)]})]})]})]})})),U="LOGIN-REDUX/HANDLE_CHANGE_EMAIL",z="LOGIN-REDUX/HANDLE_CHANGE_PASSWORD";var W=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={errors:{email:"",password:""}},a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleEmailChange=a.handleEmailChange.bind(Object(o.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.handleValidation()?(console.log("email: ".concat(this.props.email,", password ").concat(this.props.password)),this.props.changeEmail(""),this.props.changePassword("")):(this.state.errors.email&&alert("".concat(this.state.errors.email)),this.state.errors.password&&alert("".concat(this.state.errors.password)))}},{key:"handleEmailChange",value:function(e){this.props.changeEmail(e.target.value)}},{key:"handlePasswordChange",value:function(e){this.props.changePassword(e.target.value)}},{key:"handleValidation",value:function(){var e=this.props.email,t=this.props.password,n=this.state.errors,a=!0;return e?this.validateEmail(e)?n.email="":(a=!1,n.email="Invalid email"):(a=!1,n.email="Email Required"),t?t.length<6?(a=!1,n.password="Password must be more than 6 characters"):n.password="":(a=!1,n.password="Password required"),this.setState({errors:n}),a}},{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"render",value:function(){return Object(O.jsx)(T,{handleSubmit:this.handleSubmit,handleEmailChange:this.handleEmailChange,handlePasswordChange:this.handlePasswordChange,email:this.props.email,password:this.props.password})}}]),n}(s.a.Component),G={changeEmail:function(e){return{type:U,payload:e}},changePassword:function(e){return{type:z,payload:e}}},H=Object(P.b)((function(e){return{email:e.login.email,password:e.login.password}}),G)(W),J=n(11);var X=function(){return Object(O.jsx)(k.a,{children:Object(O.jsxs)(J.d,{children:[Object(O.jsx)(J.b,{path:"/react-application",children:Object(O.jsx)(f,{})}),Object(O.jsx)(J.b,{path:"/about",children:Object(O.jsx)(L,{})}),Object(O.jsx)(J.b,{path:"/counters",children:Object(O.jsx)(y,{})}),Object(O.jsx)(J.b,{path:"/login",children:Object(O.jsx)(F,{})}),Object(O.jsx)(J.b,{path:"/login-redux",exact:!0,children:Object(O.jsx)(H,{})}),Object(O.jsx)(J.b,{path:"/404",children:Object(O.jsx)(V,{})}),Object(O.jsx)(J.a,{from:"/",to:"/404"})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))},Z=n(38),M=n(39),$={email:"",password:""};var K=Object(Z.a)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(M.a)(Object(M.a)({},e),{},{email:t.payload});case z:return Object(M.a)(Object(M.a)({},e),{},{password:t.payload});default:return e}}}),Q=Object(Z.c)(K,Object(Z.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));r.a.render(Object(O.jsx)(P.a,{store:Q,children:Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(X,{})})}),document.getElementById("root")),q()}},[[70,1,2]]]);
//# sourceMappingURL=main.3cc06110.chunk.js.map