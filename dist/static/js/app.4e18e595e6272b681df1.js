webpackJsonp([1],{"+Gxq":function(t,e,s){"use strict";var a=s("fnDg").a,n=s("VU/8")(a,null,!1,function(t){s("9YXS")},null,null);e.a=n.exports},"9M+g":function(t,e){},"9YXS":function(t,e){},GV1A:function(t,e){},"HUt/":function(t,e,s){"use strict";var a=s("qRo1").a,n=s("VU/8")(a,null,!1,function(t){s("dIGf")},null,null);e.a=n.exports},JCpY:function(t,e,s){"use strict";var a=s("rKsW").a,n=s("VU/8")(a,null,!1,function(t){s("hj9i")},null,null);e.a=n.exports},JDVb:function(t,e,s){"use strict";var a=s("9NuQ").a,n=s("VU/8")(a,null,!1,function(t){s("itwp")},null,null);e.a=n.exports},JL9e:function(t,e){},Jmt5:function(t,e){},L6yn:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};s.d(a,"userDetails",function(){return N}),s.d(a,"loggedIn",function(){return $});var n={};s.d(n,"UPDATE_USER",function(){return L}),s.d(n,"UPDATE_USERLOGIN",function(){return P});var o,r=s("7+uW"),i=s("e6fC"),l=s("mvHQ"),c=s.n(l),d=s("mtWM"),p=s.n(d),u=s("bOdI"),m=s.n(u),h=(o={name:"home",props:[""],components:{},data:function(){return{}}},m()(o,"props",[""]),m()(o,"mounted",function(){var t=this;p.a.get("https://referworthyintern.herokuapp.com/details/1").then(function(e){t.profileDetails=c()(e),console.log(t.profileDetails),t.$store.commit("UPDATE_USER",t.profileDetails),console.log("mounted vala"+t.$store.state.userDetails)}).catch(function(t){console.log("user details mein error aa gaya")})}),m()(o,"methods",{onRequestRecoClick:function(){console.log(this);this.$parent.$options.methods.callThis(this)}}),o),f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",{staticClass:"parallax"},[s("div",{staticStyle:{"padding-top":"60px"},attrs:{name:"home"}},[s("b-jumbotron",{staticClass:"bg-transparent",staticStyle:{padding:"19px 10px 10px 1px"},attrs:{"bg-variant":"white","text-variant":"dark",align:"center"}},[s("template",{slot:"header"},[s("pre",{staticClass:"display-2",staticStyle:{color:"white","font-family":"Montserrat"}},[t._v("Get recommended!")])]),t._v(" "),s("template",{slot:"lead"},[s("h5",{staticStyle:{color:"white","font-family":"Montserrat"}},[t._v("Add credibility to your profile with a recommendation")])]),t._v(" "),s("hr",{staticClass:"my-4",attrs:{width:"40%"}}),t._v(" "),s("pre",{staticStyle:{color:"white","font-size":"21px","font-family":"Montserrat"},attrs:{align:"center"}},[t._v("A recommendation from your supervisor or peer makes you twice\n         as likely to land a job within one month \n\n         As a freelancer or consultant, positive recommendations significantly\n         increase your chances to get new projects      \n       ")]),t._v(" "),s("hr",{staticClass:"my-2",attrs:{width:"40%"}}),t._v(" "),s("b-container",{staticClass:"bv-example-row",staticStyle:{padding:"0px 0px 0px 0px"}},[s("b-row",{staticClass:"justify-content-md-center bg-transparent outline-*"},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{col:"",lg:"5"}},[s("div",{staticClass:"container",attrs:{align:"center"}},[s("p",{staticStyle:{color:"white","font-size":"21px","font-family":"Montserrat"}},[t._v("Share the details of your recommender and we notify him with a questionnaire.")]),s("br"),t._v(" "),s("router-link",{staticClass:"btn btn-success btn-block button3",attrs:{to:"/user-profile",tag:"b-button",type:"button"},nativeOn:{click:function(e){t.onRequestRecoClick()}}},[s("strong",[t._v(" REQUEST RECOMMENDATION")])])],1)]),t._v(" "),s("b-col",{staticClass:"bg-transparent ",attrs:{cols:"12",md:"auto"}},[s("pre")]),t._v(" "),s("b-col",{staticClass:"bg-transparent",staticStyle:{border:"transparent"},attrs:{col:"",lg:"5"}},[s("div",{staticClass:"container",attrs:{align:"center"}},[s("p",{staticStyle:{color:"white","font-size":"21px","font-family":"Montserrat semi bold"}},[t._v("Write a recommendation for someone you care about and earn good karma :)")]),s("br"),t._v(" "),s("router-link",{staticClass:"btn btn-success btn-block button3",attrs:{to:"/user-profile",tag:"b-button",type:"button"},nativeOn:{click:function(e){t.onRequestRecoClick()}}},[s("strong",[t._v(" WRITE RECOMMENDATION")])])],1)])],1)],1)],2)],1)])},staticRenderFns:[]},b=s("VU/8")(h,f,!1,function(t){s("L6yn")},null,null).exports,v={name:"app-header",components:{},props:[],data:function(){return{tooltipdta:"Reco lo Reco do par Login karke :P"}},methods:{displayLoginModal:function(){this.$swal({imageUrl:"https://s13.postimg.org/6w4o09d07/rw_logo2.png",imageWidth:90,imageHeight:80,showCloseButton:!1,title:'<p style="font-size: 35px; color:black; font-family:Montserrat">refer<strong style="color:#42B398">worthy</strong></p><h6>Create an account to personalize your homepage,<br>follow your favorite authors and publications,  applaud stories you love, and more.</h6> ',text:"<b-button v-on:click = onButtonClick()></b-button>",html:!0,width:500,height:400,padding:60,showCancelButton:!1,showConfirmButton:!1,focusConfirm:!1})},onButtonClick:function(){console.log(this),this.$parent.$options.methods.callThis(this)}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-header"},[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"white",fixed:"top"}},[s("b-navbar-brand",{staticStyle:{"font-size":"30px",color:"black"},attrs:{href:"#"}},[t._v("refer"),s("a",{staticStyle:{color:"#42B398"}},[t._v("worthy")])]),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.loggedIn,expression:"!$store.state.loggedIn"}],staticClass:"m-2 button2",attrs:{size:"sm"},on:{click:function(e){t.displayLoginModal()}}},[t._v("Sign In")]),t._v(" "),s("b-dropdown",{staticClass:"m-2",attrs:{id:"ddown",align:"right",text:"loggedin user"}},[s("b-dropdown-item",{attrs:{href:"#"}},[t._v("Action")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),s("b-dropdown-divider"),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("signout ")])],1)],1)],1)],1)},staticRenderFns:[]},w=s("VU/8")(v,g,!1,function(t){s("xCqZ")},null,null).exports,y={name:"spinner",props:{message:{type:String,default:"Loading..."}},data:function(){return{}},methods:{}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-container"},[e("div",{staticClass:"spinner-content"},[e("svg",{staticClass:"spinner",attrs:{width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"}})]),this._v(" "),e("br"),this._v(" "),e("div",{staticClass:"spinner-message"},[this._v(this._s(this.message))])])])},staticRenderFns:[]},C={name:"user-profile",components:{Spinner:s("VU/8")(y,_,!1,function(t){s("iXLi")},null,null).exports},data:function(){return{copyData:"https://goo.gl/35q8vF",tabIndex:0}},methods:{linkClass:function(t){return this.tabIndex===t?["bg-dark","text-light"]:["bg-transparent","text-dark"]},displayCopyLinkModal:function(){this.$swal({position:"center",type:"success",title:"Your link has been copied",showConfirmButton:!1,timer:1500})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",{staticClass:"parallax"},[t.$store.state.loggedIn?s("div",{staticClass:"user-profile",staticStyle:{"padding-top":"80px"}},[s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto"}},[s("div",{staticStyle:{padding:"20px"}},[s("b-img",{attrs:{src:"https://lorempixel.com/100/100/",fluid:"",alt:"Responsive image"}})],1)]),t._v(" "),s("b-col",{attrs:{cols:"12",md:"auto"}},[s("pre",{staticStyle:{padding:"2px",color:"white"},attrs:{align:"center"}},[t._v("        Vikas Bansal\n        VP, Products at Flipkart\n      ")])]),t._v(" "),s("b-col",{attrs:{cols:"12",md:"auto"}},[s("div",{staticStyle:{padding:"20px"}},[s("br"),s("br"),t._v(" "),s("b-button",{attrs:{pressed:!1,variant:"success"}},[t._v("RECOMMEND ME!")])],1)])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-tabs",{model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{attrs:{title:"Received Recommendations","title-link-class":t.linkClass(0),active:""}},[s("br"),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent","font-size":"20px",color:"white","font-family":"Montserrat"},attrs:{cols:"4"}},[t._v("Traits people use to describe Vikas:-")]),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}}),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}})],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"12",md:"auto"}},[s("b-row",[s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1)],1)],1)],1)],1),t._v(" "),s("hr",{attrs:{width:"20%"}}),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent","font-size":"20px",color:"white","font-family":"Montserrat"},attrs:{cols:"4"}},[t._v("Received recommendations (3)")]),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}}),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}})],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"6"}},[s("pre",{staticStyle:{padding:"2px",color:"white"},attrs:{align:"center"}},[t._v("         Vikas Bansal\n         VP, Products at Flipkart\n       ")])]),t._v(" "),s("b-col",{attrs:{cols:"2"}},[s("div",{staticStyle:{padding:"20px"}},[s("b-img",{attrs:{src:"https://lorempixel.com/100/100/",fluid:"",alt:"Responsive image"}})],1)])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"8"}},[s("p",{staticStyle:{padding:"2px",color:"white"},attrs:{align:"center"}},[t._v("\n        Vikas was a fellow placement committee member at IIM Bangalore. The work required running one of the most complex processes with greatest of finesse and\n        handling multiple companies top executives. Vikas is a person who would never drop the ball and can be trusted with most arduous of tasks. He is a great\n        team player and has strong people handling skills. He also stands out due to his sharp acumen and crisis handling abilities. I am sure, Vikas would do \n        wonderfully well in a senior management role.\n      ")])])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"4"}},[s("div",{staticStyle:{padding:"20px"}},[t._v("\n     ding ding\n   ")])]),t._v(" "),s("b-col",{attrs:{cols:"4"}},[s("div",{staticStyle:{padding:"20px"}},[t._v("\n   ding ding\n ")])])],1)],1)],1),t._v(" "),s("b-tab",{attrs:{title:"Request-recommendation","title-link-class":t.linkClass(1)}},[s("br"),t._v(" "),s("b-container",[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto",align:"center"}},[s("div",{staticStyle:{padding:"20px"}},[s("h3",[t._v("ADD CREDIBILITY TO YOUR PROFILE")]),t._v(" "),s("h5",[t._v("Join thousands of professionals showcasing their references on referworthy")])])])],1)],1),t._v(" "),s("b-container",[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto",align:"center"}},[s("div",{staticStyle:{padding:"20px"}},[s("h5",[t._v("\n        Share the link below with your co-workers, peers, clients to get a recommendation for your work\n      ")]),t._v(" "),s("input",{attrs:{type:"text",value:"https://goo.gl/35q8vF"}}),t._v(" "),s("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.copyData,expression:"copyData"}],staticClass:"btn btn-outline-transparent button4",attrs:{target:"_blank"},on:{click:function(e){t.displayCopyLinkModal()}}},[t._v("Copy text")]),t._v(" "),s("br"),t._v(" "),s("a",{attrs:{href:"fb-messenger://share/?link=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ&app_id=133023260728475",title:"messenger"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/wquhwlws7/facebook-messenger1.png"}})]),t._v("     \n      "),s("a",{attrs:{href:"slack://send?text=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ",title:"slack"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/nvtnm4iaf/slack.png"}})]),t._v("   \n      "),s("a",{attrs:{href:"https://twitter.com/home?status=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ",title:"twitter"}},[s("img",{attrs:{id:"fb",width:"1.5%",height:"1.5%",src:"https://s13.postimg.org/qfpag3viv/twitter_nulled.png"}})]),t._v("    \n      "),s("a",{attrs:{href:"whatsapp://send?text=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ",title:"whatsapp"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/4dz0695xz/whatsapp.png"}})]),t._v("     \n      "),s("a",{attrs:{href:"https://hrefshare.com/ba494",title:"linkedin"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/6ijd7cupz/linkedin.png"}})]),t._v(" "),s("br"),s("br"),t._v(" "),s("h5",[t._v("\n        Or send a personalised Email to your recommender\n      ")]),t._v(" "),s("a",{staticClass:"typeform-share button button5",attrs:{href:"https://referworthy.typeform.com/to/bs9fN4","data-mode":"popup",target:"_blank"}},[t._v("Create Message ")])])])],1)],1)],1)],1)],1)],1):s("div",{staticStyle:{"padding-top":"80px"}},[s("spinner")],1)])},staticRenderFns:[]},k=s("VU/8")(C,x,!1,function(t){s("SuQ6")},null,null).exports,S={name:"app",data:function(){return{}},components:{Home:b,AppHeader:w,UserProfile:k},methods:{callThis:function(t){IN.UI.Authorize().place();var e=IN.User.isAuthorized();return e||this.nowCallThis(t),t.$store.commit("UPDATE_USERLOGIN",e),e},nowCallThis:function(t){function e(e){var s=c()(e);t.$store.commit("UPDATE_USERLOGIN",!0),t.$store.commit("UPDATE_USER",s)}function s(){this.error="yolo error aa gaya, Nacho BC!!",console.log(error)}IN.Event.on(IN,"auth",function(){IN.API.Raw("/people/~:(email-address,first-name,id,industry,last-name,location,num-connections,picture-url,positions,summary,public-profile-url,headline)?format=json").result(e).error(s)})}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},R=s("VU/8")(S,I,!1,function(t){s("GV1A")},null,null).exports,E=(s("Hhv2"),s("/ocq")),D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],staticClass:"form-control",attrs:{type:"text","data-id":"login.username",placeholder:"Enter your username"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{"data-id":"login.submit"},on:{click:function(e){t.submit()}}},[t._v("\n      Login   "),s("i",{staticClass:"fa fa-arrow-circle-o-right"})]),t._v(" "),s("br"),s("br"),s("br"),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("Forgot your password?")]),s("br"),t._v("\n    Don’t have an account?  "),s("a",{attrs:{href:"#"}},[t._v("Sign up here.")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Modal Heading")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])}]};s("VU/8")({name:"login",data:function(){return{credentials:{username:"",password:""},loggingIn:!1,error:""}},methods:{submit:function(){this.loggingIn=!0,this.credentials.username,this.credentials.password}}},D,!1,null,null,null).exports;r.a.use(E.a);var A=new E.a({routes:[{path:"/",name:"home",component:b,beforeEnter:function(t,e,s){var a=A.app.$options.store.state.loggedIn;console.log("beforeenetrerrouter"+a),s(a?{path:"/user-profile",query:{redirect:t.fullPath}}:{path:"/home"})}},{path:"/home",name:"home",component:b},{path:"/user-profile",name:"user-profile",component:k}]}),M=A,U=s("wmV6"),F=s("NYxO"),N=function(t){t.userDetails},$=function(t){t.loggedIn},V=s("mUbh"),L=function(t,e){t.userDetails=e},P=function(t,e){t.loggedIn=e};r.a.use(F.a);var T=new F.a.Store({state:{userDetails:"",loggedIn:!1},getters:a,actions:V,mutations:n}),B=s("Rf8U"),O=s.n(B),j=s("M4fF"),q=s.n(j),H=s("NETs"),z=s.n(H),J=s("Yk46"),G=s.n(J),Y=(s("Jmt5"),s("9M+g"),s("oYt9"));r.a.use(z.a,q.a),r.a.use(O.a,p.a),r.a.config.productionTip=!1,r.a.use(i.a),r.a.use(E.a),r.a.use(U.a),r.a.use(G.a),r.a.use(Y.a),new r.a({el:"#app",store:T,router:M,components:{App:R},template:"<App/>"})},SuQ6:function(t,e){},UdIB:function(t,e){},dIGf:function(t,e){},hj9i:function(t,e){},iXLi:function(t,e){},itwp:function(t,e){},mUbh:function(t,e){},r15W:function(t,e,s){"use strict";var a=s("E9Zr").a,n=s("VU/8")(a,null,!1,function(t){s("JL9e")},null,null);e.a=n.exports},xCqZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4e18e595e6272b681df1.js.map