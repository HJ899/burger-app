(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(40),o=n.n(i),c=(n(64),n(2)),l=n(3),u=n(5),s=n(4),d=n(6),p=n(114),h=n(45),m=n(112),g=n(113),f=n(41),E=n.n(f),v=n(42),b=n.n(v),_=n(43),y=n.n(_),C=function(e){return a.a.createElement("div",{className:y.a.Logo},a.a.createElement("img",{src:b.a,alt:"BurgerApp"}))},I=n(24),O=n.n(I),S=n(44),k=n.n(S),T=n(27),N=n.n(T),j=n(115),A=function(e){return a.a.createElement("li",{className:N.a.NavigationItem},a.a.createElement(j.a,{to:e.link,activeClassName:N.a.active,exact:e.exact},e.children))},w=function(e){return a.a.createElement("ul",{className:k.a.NavigationItems},a.a.createElement(A,{link:"/",exact:!0},"Burger Builder"),e.isAuth?[a.a.createElement(A,{link:"/orders"},"Orders"),a.a.createElement(A,{link:"/logout"},"Logout")]:a.a.createElement(A,{link:"/auth"},"Authenticate"))},D=n(46),B=n.n(D),R=function(e){return a.a.createElement("div",{className:B.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},H=function(e){return a.a.createElement("header",{className:O.a.Toolbar},a.a.createElement(R,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:O.a.Logo},a.a.createElement(C,null)),a.a.createElement("nav",{className:O.a.DesktopOnly},a.a.createElement(w,{isAuth:e.isAuth})))},P=n(17),U=n.n(P),x=n(47),L=n.n(x),F=function(e){return e.show?a.a.createElement("div",{className:L.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[U.a.SideDrawer,U.a.Close];return e.open&&(t=[U.a.SideDrawer,U.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:U.a.Logo},a.a.createElement(C,null)),a.a.createElement("nav",null,a.a.createElement(w,{isAuth:e.isAuth}))))},G=n(8),q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(M,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:E.a.Content},this.props.children))}}]),t}(r.Component),z=Object(G.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(q),Y=n(12),V=n(30),W=n.n(V),J=n(18),Z=n.n(J),$=function(e){return a.a.createElement("div",{className:Z.a.BuildControl},a.a.createElement("div",{className:Z.a.Label},e.label),a.a.createElement("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:Z.a.More,onClick:e.added},"More"))},X=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return a.a.createElement("div",{className:W.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),X.map(function(t){return a.a.createElement($,{key:t.label,label:t.label,added:e.ingredientAdded.bind(void 0,t.type),removed:e.ingredientRemoved.bind(void 0,t.type),disabled:e.disabledInfo[t.type]})}),a.a.createElement("button",{className:W.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},K=n(58),ee=n(49),te=n.n(ee),ne=n(14),re=n.n(ne),ae=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:re.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:re.a.BreadTop},a.a.createElement("div",{className:re.a.Seeds1}),a.a.createElement("div",{className:re.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:re.a.Meat});break;case"cheese":e=a.a.createElement("div",{className:re.a.Cheese});break;case"salad":e=a.a.createElement("div",{className:re.a.Salad});break;case"bacon":e=a.a.createElement("div",{className:re.a.Bacon});break;default:e=null}return e}}]),t}(r.Component),ie=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(K.a)(Array(e.ingredients[t])).map(function(e,n){return a.a.createElement(ae,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredients!")),a.a.createElement("div",{className:te.a.Burger},a.a.createElement(ae,{type:"bread-top"}),t,a.a.createElement(ae,{type:"bread-bottom"}))},oe=n(50),ce=n.n(oe),le=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{show:this.props.show,clicked:this.props.clicked}),a.a.createElement("div",{className:ce.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-200%)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(r.Component),ue=n(31),se=n.n(ue),de=function(e){return a.a.createElement("button",{className:[se.a.Button,se.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},pe=function(e){var t=Object.keys(e.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price : ",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(de,{btnType:"Danger",clicked:e.canceled},"CANCEL"),a.a.createElement(de,{btnType:"Success",clicked:e.continue},"CONTINUE"))},he=n(23),me=n.n(he),ge=me.a.create({baseURL:"https://burger-app-1b0b1.firebaseio.com/"}),fe=n(51),Ee=n.n(fe),ve=function(e){return a.a.createElement("div",{className:Ee.a.Loader},"Loading...")},be=function(e,t){return function(n){function r(){var e,t;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(r)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(d.a)(r,n),Object(l.a)(r,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(le,{show:this.state.error,clicked:this.errorConfirmedHandler},this.state.error?this.state.error.message:null,";"),a.a.createElement(e,this.props))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}}]),r}(r.Component)},_e=function(){return{type:"PURCHASE_BURGER_START"}},ye=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},Ce=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},Ie=function(e){return function(t){setTimeout(function(){t(Ce())},1e3*e)}},Oe=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Se=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1,loading:!1,error:!1},n.checkPurchasableHandler=function(){var e=Object(Y.a)({},n.props.ing);return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0},n.purchasingHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.cancelPurchasingHandler=function(){n.setState({purchasing:!1})},n.continuePurchasingHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.isAuthenticated&&this.props.building&&"/"!==this.props.authRedirectPath?this.props.history.replace("/checkout"):this.props.initIngredients()}},{key:"render",value:function(){var e=Object(Y.a)({},this.props.ing);for(var t in e)e[t]=e[t]<=0;var n=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(ve,null),r=null;return this.props.ing&&(n=a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,{ingredients:this.props.ing}),a.a.createElement(Q,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientDeleted,disabledInfo:e,price:this.props.totalPrice,isAuth:this.props.isAuthenticated,purchasable:this.checkPurchasableHandler(),ordered:this.purchasingHandler})),r=a.a.createElement(pe,{ingredients:this.props.ing,canceled:this.cancelPurchasingHandler,continue:this.continuePurchasingHandler,price:this.props.totalPrice})),this.state.loading&&(r=a.a.createElement(ve,null)),a.a.createElement(a.a.Fragment,null,a.a.createElement(le,{show:this.state.purchasing,clicked:this.cancelPurchasingHandler},r),n)}}]),t}(r.Component),ke=Object(G.b)(function(e){return{ing:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token,building:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onIngredientAdded:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ingredientName:e}}(t))},onIngredientDeleted:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ingredientName:e}}(t))},initIngredients:function(){return e(function(e){ge.get("https://burger-app-1b0b1.firebaseio.com/ingredients.json").then(function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})}).catch(function(t){return e({type:"FETCH_INGREDIENTS_FAILED"})})})},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Oe(t))}}})(be(Se,ge)),Te=n(52),Ne=n.n(Te),je=function(e){return a.a.createElement("div",{className:Ne.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes well!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(ie,{ingredients:e.ingredients})),a.a.createElement(de,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),a.a.createElement(de,{btnType:"Success",clicked:e.checkoutContinue},"CONTINUE"))},Ae=n(13),we=n(53),De=n.n(we),Be=n(25),Re=n.n(Be),He=function(e){var t=null,n=[Re.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Re.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{value:e.value,key:e.value},e.displayValue)}));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:Re.a.Input},a.a.createElement("label",null,e.label),t)},Pe=function(e,t){return Object(Y.a)({},e,t)},Ue=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.trim().length>=t.minLength&&n),t.maxLength&&(n=e.trim().length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},xe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipcode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var r in n.state.orderForm)t[r]=n.state.orderForm[r].value;var a={ingredients:n.props.ings,price:n.props.totalPrice,order:t,userId:n.props.userId};n.props.onOrderHandler(a,n.props.token)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"inputChangedHandler",value:function(e,t){var n=Pe(this.state.orderForm[t],{value:e.target.value,touched:!0,valid:Ue(e.target.value,this.state.orderForm[t].validation)}),r=Pe(this.state.orderForm,Object(Ae.a)({},t,n)),a=!0;for(var i in r)a=a&&r[i].valid;this.setState({orderForm:r,formIsValid:a})}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return a.a.createElement(He,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),a.a.createElement(de,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER NOW"));return this.props.loading&&(r=a.a.createElement(ve,null)),a.a.createElement("div",{className:De.a.ContactData},a.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),t}(r.Component),Le=Object(G.b)(function(e){return{ings:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderHandler:function(t,n){return e(function(e,t){return function(n){n(_e()),ge.post("/orders.json?auth="+t,e).then(function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){return n({type:"PURCHASE_BURGER_FAIL",error:e})})}}(t,n))}}})(be(xe,ge)),Fe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).checkoutCancelledHandler=function(){n.props.setAuthRedirectPath(),n.props.history.replace("/")},n.checkoutContinueHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=a.a.createElement(m.a,{to:"/"});if(this.props.ings){if(this.props.purchased)return e;e=a.a.createElement("div",null,a.a.createElement(je,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinue:this.checkoutContinueHandler}),a.a.createElement(h.a,{path:this.props.match.path+"/contact-data",component:Le}))}return e}}]),t}(r.Component),Me=Object(G.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}},function(e){return{setAuthRedirectPath:function(){return e(Oe("/"))}}})(Fe),Ge=n(54),qe=n.n(Ge),ze=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map(function(e){return a.a.createElement("span",{key:e.name},e.name," (",e.amount,")")});return a.a.createElement("div",{className:qe.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))))},Ye=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=a.a.createElement(ve,null);return this.props.loading||(e=this.props.orders.map(function(e){return a.a.createElement(ze,{key:e.id,ingredients:e.ingredients,price:e.price})})),a.a.createElement("div",null,e)}}]),t}(r.Component),Ve=Object(G.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(t){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var r="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');ge.get("/orders.json"+r).then(function(e){var t=[];for(var r in e.data)t.push(Object(Y.a)({},e.data[r],{id:r}));n({type:"FETCH_ORDERS_SUCCESS",orders:t})}).catch(function(e){return n({type:"FETCH_ORDERS_FAIL",error:e})})}}(t))}}})(be(Ye,ge)),We=n(55),Je=n.n(We),Ze=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!1},n.inputChangedHandler=function(e,t){var r=Pe(n.state.controls,Object(Ae.a)({},t,Pe(n.state.controls[t],{value:e.target.value,valid:Ue(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:r})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignUp)},n.switchAuthModeHandler=function(){n.setState(function(e){return{isSignUp:!e.isSignUp}})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.building||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map(function(t){return a.a.createElement(He,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(r=a.a.createElement(ve,null));var i=null;return this.props.error&&(i=a.a.createElement("p",null,this.props.error.message)),a.a.createElement("div",{className:Je.a.Auth},i,a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement(de,{btnType:"Success"},this.state.isSignUp?"SIGN UP":"SIGN IN")),a.a.createElement(de,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignUp?"SIGN IN":"SIGN UP"))}}]),t}(r.Component),$e=Object(G.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,building:e.burgerBuilder.building}},function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START"});var a={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="),i+="AIzaSyDnFhBU9hxI451wo47X5Z5qg5EIzIzdi7g",me.a.post(i,a).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.userId),r(ye(e.data.idToken,e.data.localId)),r(Ie(e.data.expiresIn))}).catch(function(e){return r({type:"AUTH_FAIL",error:e.response.data.error})})}}(t,n,r))},onSetAuthRedirectPath:function(){return e(Oe("/"))}}})(Ze),Xe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(m.a,{to:"/"})}}]),t}(r.Component),Qe=Object(G.b)(null,function(e){return{onLogout:function(){return e(Ce())}}})(Xe),Ke=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignin()}},{key:"render",value:function(){var e=a.a.createElement(p.a,null,a.a.createElement(h.a,{path:"/auth",component:$e}),a.a.createElement(h.a,{path:"/",exact:!0,component:ke}),a.a.createElement(m.a,{to:"/"}));return this.props.isAuth&&(e=a.a.createElement(p.a,null,a.a.createElement(h.a,{path:"/checkout",component:Me}),a.a.createElement(h.a,{path:"/orders",component:Ve}),a.a.createElement(h.a,{path:"/logout",component:Qe}),a.a.createElement(h.a,{path:"/",exact:!0,component:ke}),a.a.createElement(m.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(z,null,e))}}]),t}(r.Component),et=Object(g.a)(Object(G.b)(function(e){return{isAuth:null!==e.auth.token}},function(e){return{onTryAutoSignin:function(){return e(function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(Ce());else{var r=localStorage.getItem("userId");e(ye(t,r)),e(Ie((n.getTime()-(new Date).getTime())/1e3))}}else e(Ce())})}}})(Ke));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt=n(111),nt=n(16),rt={salad:.5,cheese:.4,meat:1.3,bacon:.7},at={ingredients:null,totalPrice:4,error:!1,building:!1},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return function(e,t){return Pe(e,{ingredients:Pe(e.ingredients,Object(Ae.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+rt[t.ingredientName],building:!0})}(e,t);case"REMOVE_INGREDIENT":return function(e,t){return Pe(e,{ingredients:Pe(e.ingredients,Object(Ae.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-rt[t.ingredientName],building:!0})}(e,t);case"SET_INGREDIENTS":return function(e,t){return Pe(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1})}(e,t);case"FETCH_INGREDIENTS_FAILED":return function(e,t){return Pe(e,{error:!0})}(e);default:return e}},ot={orders:[],loading:!1,purchased:!1},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return function(e,t){return Pe(e,{purchased:!1})}(e);case"PURCHASE_BURGER_START":return function(e,t){return Pe(e,{loading:!0})}(e);case"PURCHASE_BURGER_SUCCESS":return function(e,t){var n=Object(Y.a)({},t.orderData,{id:t.orderId});return Pe(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})}(e,t);case"PURCHASE_BURGER_FAIL":return function(e,t){return Pe(e,{loading:!1})}(e);case"FETCH_ORDERS_START":return function(e,t){return Pe(e,{loading:!0})}(e);case"FETCH_ORDERS_SUCCESS":return function(e,t){return Pe(e,{loading:!1,orders:t.orders})}(e,t);case"FETCH_ORDERS_FAIL":return function(e,t){return Pe(e,{loading:!1})}(e);default:return e}},lt={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return Pe(e,{loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return Pe(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return Pe(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return Pe(e,{token:null,userId:null})}(e);case"SET_AUTH_REDIRECT_PATH":return function(e,t){return Pe(e,{authRedirectPath:t.path})}(e,t);default:return e}},st=n(57),dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||nt.d,pt=Object(nt.c)({burgerBuilder:it,order:ct,auth:ut}),ht=Object(nt.e)(pt,dt(Object(nt.a)(st.a))),mt=a.a.createElement(G.a,{store:ht},a.a.createElement(tt.a,null,a.a.createElement(et,null)));o.a.render(mt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},14:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom--HuxZP",BreadTop:"BurgerIngredient__BreadTop--10-cT",Seeds1:"BurgerIngredient__Seeds1--3xHtz",Seeds2:"BurgerIngredient__Seeds2--1cUso",Meat:"BurgerIngredient__Meat--13nAN",Cheese:"BurgerIngredient__Cheese--1FxeY",Salad:"BurgerIngredient__Salad--1iTJE",Bacon:"BurgerIngredient__Bacon--3vrAI"}},17:function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer--21TuB",Open:"SideDrawer__Open--1pVYR",Close:"SideDrawer__Close--3Yv1l",Logo:"SideDrawer__Logo--3TkPv"}},18:function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl--1jYc3",Label:"BuildControl__Label--33Z-p",Less:"BuildControl__Less--377MJ",More:"BuildControl__More--28-hQ"}},24:function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar--2JJW-",Logo:"Toolbar__Logo--1efBD",DesktopOnly:"Toolbar__DesktopOnly--WADUd"}},25:function(e,t,n){e.exports={Input:"Input__Input--s67N0",Label:"Input__Label--_n-1m",InputElement:"Input__InputElement--2-aFx",Invalid:"Input__Invalid--1sl1p"}},27:function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem--23bcu",active:"NavigationItem__active--2zJdO"}},30:function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls--3_01f",OrderButton:"BuildControls__OrderButton--myBwT",enable:"BuildControls__enable--3jYIq"}},31:function(e,t,n){e.exports={Button:"Button__Button--QI7b2",Success:"Button__Success--2dHUt",Danger:"Button__Danger--2xnhN"}},41:function(e,t,n){e.exports={Content:"Layout__Content--3pLYC"}},42:function(e,t,n){e.exports=n.p+"static/media/127 burger-logo.b8503d26.png"},43:function(e,t,n){e.exports={Logo:"Logo__Logo--19WaN"}},44:function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems--_yd_d"}},46:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle--26to0"}},47:function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop--efy1y"}},49:function(e,t,n){e.exports={Burger:"Burger__Burger--3K4F-"}},50:function(e,t,n){e.exports={Modal:"Modal__Modal--32_-a"}},51:function(e,t,n){e.exports={Loader:"Spinner__Loader--1DDwY",load2:"Spinner__load2--1N7mg"}},52:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary--1xBm4"}},53:function(e,t,n){e.exports={ContactData:"ContactData__ContactData--1J81r"}},54:function(e,t,n){e.exports={Order:"Order__Order--4yi4Z"}},55:function(e,t,n){e.exports={Auth:"Auth__Auth--2YUr1"}},59:function(e,t,n){e.exports=n(110)},64:function(e,t,n){}},[[59,2,1]]]);
//# sourceMappingURL=main.dbec756d.chunk.js.map