webpackJsonp([1],{"+Gxq":function(t,e,s){"use strict";var a=s("fnDg").a,i=s("VU/8")(a,null,!1,function(t){s("9YXS")},null,null);e.a=i.exports},"+tTi":function(t,e){},"00LR":function(t,e){},"7lk1":function(t,e){},"9M+g":function(t,e){},"9YXS":function(t,e){},EO8r:function(t,e){},"HUt/":function(t,e,s){"use strict";var a=s("qRo1").a,i=s("VU/8")(a,null,!1,function(t){s("dIGf")},null,null);e.a=i.exports},JCpY:function(t,e,s){"use strict";var a=s("rKsW").a,i=s("VU/8")(a,null,!1,function(t){s("hj9i")},null,null);e.a=i.exports},JDVb:function(t,e,s){"use strict";var a=s("9NuQ").a,i=s("VU/8")(a,null,!1,function(t){s("itwp")},null,null);e.a=i.exports},JL9e:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};s.d(a,"getUserDetails",function(){return V}),s.d(a,"getLoggedIn",function(){return q}),s.d(a,"getFirstName",function(){return z});var i={};s.d(i,"UPDATE_USER",function(){return J}),s.d(i,"UPDATE_USERLOGIN",function(){return G}),s.d(i,"UPDATE_FIRSTNAME",function(){return W}),s.d(i,"UPDATE_PROFILE",function(){return Y}),s.d(i,"UPDATE_PROFILESTATUS",function(){return K}),s.d(i,"UPDATE_APISENDING",function(){return X});var n=s("7+uW"),r=s("e6fC"),o=s("mvHQ"),l=s.n(o),c=s("mtWM"),d=s.n(c),p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",{staticClass:"parallax"},[s("div",{staticStyle:{"padding-top":"30px"},attrs:{name:"home"}},[s("b-jumbotron",{staticClass:"bg-transparent",staticStyle:{padding:"19px 10px 10px 1px"},attrs:{"bg-variant":"white","text-variant":"dark",align:"center"}},[s("template",{slot:"header"},[s("pre",{staticClass:"display-2",staticStyle:{color:"white","font-family":"Arial"}},[t._v("Get recommended!")])]),t._v(" "),s("template",{slot:"lead"},[s("h5",{staticStyle:{color:"white","font-family":"Exo"}},[t._v("Add credibility to your profile with a recommendation")])]),t._v(" "),s("hr",{staticClass:"my-4",attrs:{width:"40%"}}),t._v(" "),s("pre",{staticStyle:{color:"white","font-size":"25px","font-family":"Exo"},attrs:{align:"center"}},[t._v("A recommendation from your supervisor or peer makes you twice\n         as likely to land a job within one month\n\n         As a freelancer or consultant, positive recommendations significantly\n         increase your chances to get new projects\n       ")]),t._v(" "),s("hr",{staticClass:"my-2",attrs:{width:"40%"}}),t._v(" "),s("b-container",{staticClass:"bv-example-row",staticStyle:{padding:"0px 0px 0px 0px"}},[s("b-row",{staticClass:"justify-content-md-center bg-transparent outline-*"},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{col:"",lg:"5"}},[s("div",{staticClass:"container",attrs:{align:"center"}},[s("p",{staticStyle:{color:"white","font-size":"21px","font-family":"Arial"}},[t._v("Share the details of your recommender and we notify him with a questionnaire.")]),s("br"),t._v(" "),s("router-link",{staticClass:"btn btn-success btn-block button3",attrs:{to:"/user-profile",tag:"b-button",type:"button"},nativeOn:{click:function(e){t.onRequestRecoClick()}}},[s("strong",[t._v(" REQUEST RECOMMENDATION")])])],1)]),t._v(" "),s("b-col",{staticClass:"bg-transparent ",attrs:{cols:"12",md:"auto"}},[s("pre")]),t._v(" "),s("b-col",{staticClass:"bg-transparent",staticStyle:{border:"transparent"},attrs:{col:"",lg:"5"}},[s("div",{staticClass:"container",attrs:{align:"center"}},[s("p",{staticStyle:{color:"white","font-size":"21px","font-family":"Arial"}},[t._v("Write a recommendation for someone you care about and earn good karma :)")]),s("br"),t._v(" "),s("router-link",{staticClass:"btn btn-success btn-block button3",attrs:{to:"/user-profile",tag:"b-button",type:"button"},nativeOn:{click:function(e){t.onRequestRecoClick()}}},[s("strong",[t._v(" WRITE RECOMMENDATION")])])],1)])],1)],1)],2)],1)])},staticRenderFns:[]},u=s("VU/8")({name:"home",props:[""],components:{},data:function(){return{}},beforeMount:function(){},methods:{onRequestRecoClick:function(){this.$parent.$options.methods.callThis(this)}}},p,!1,function(t){s("00LR")},null,null).exports,m={name:"app-header",components:{},props:[],data:function(){return{loginTooltip:"Paleez login from here"}},methods:{displayLoginModal:function(){var t=this;this.$swal({imageUrl:"https://s13.postimg.org/6w4o09d07/rw_logo2.png",imageWidth:90,imageHeight:80,showCloseButton:!1,title:'<p style="font-size: 35px; color:black; font-family:Montserrat">refer<strong style="color:#42B398">worthy</strong></p><h6>Create an account to personalize your homepage,<br>follow your favorite authors and publications,  applaud stories you love, and more.</h6> ',text:"<b-button v-on:click = onButtonClick()></b-button>",html:!0,width:500,height:400,padding:60,showCancelButton:!1,showConfirmButton:!0,confirmButtonText:"",focusConfirm:!1,confirmButtonClass:"linked"}).then(function(e){e.value&&t.onButtonClick()})},onButtonClick:function(){this.$router.push("user-profile"),this.$emit("buttonClicked",this)},logoutUser:function(){this.$store.commit("UPDATE_USERLOGIN",!1),this.$store.commit("UPDATE_USER",""),IN.User.logout()}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-header",staticStyle:{height:"30px"}},[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"white",fixed:"top"}},[s("router-link",{staticClass:"title",staticStyle:{"font-size":"30px",color:"black"},attrs:{to:"/home"}},[t._v("Refer"),s("a",{staticStyle:{"font-size":"30px",color:"#42B398"}},[t._v("worthy")])]),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.loggedIn,expression:"!$store.state.loggedIn"}],staticClass:"m-2 button2",attrs:{size:"sm"},on:{click:function(e){t.displayLoginModal()}}},[t._v("Sign In")]),t._v(" "),s("b-dropdown",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.loggedIn,expression:"$store.state.loggedIn"}],staticClass:"m-2",attrs:{id:"ddown",text:t.$store.state.firstName,align:"right"}},[s("b-dropdown-item",{attrs:{href:"#"}},[s("router-link",{attrs:{to:"/user-profile"}},[t._v("Profile")])],1),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[s("router-link",{attrs:{to:"/job-search"}},[t._v("Job Search")])],1),t._v(" "),s("b-dropdown-divider"),t._v(" "),s("b-dropdown-item",{attrs:{href:"/"},on:{click:function(e){t.logoutUser()}}},[t._v("Sign Out")])],1)],1)],1)],1)},staticRenderFns:[]},h=s("VU/8")(m,b,!1,function(t){s("+tTi")},null,null).exports,f={name:"spinner",props:{message:{type:String,default:"Loading..."}},data:function(){return{}},methods:{}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-container"},[e("div",{staticClass:"spinner-content"},[e("svg",{staticClass:"spinner",attrs:{width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"}})]),this._v(" "),e("br"),this._v(" "),e("div",{staticClass:"spinner-message"},[this._v(this._s(this.message))])])])},staticRenderFns:[]},g=s("VU/8")(f,v,!1,function(t){s("uTOh")},null,null).exports,_={name:"user-profile",computed:{user:function(){return this.$store.state.userDetails}},components:{Spinner:g},props:[],data:function(){return{copyData:"https://goo.gl/35q8vF",tabIndex:0,shown:!1}},methods:{linkClass:function(t){return this.tabIndex===t?["bg-dark","text-light"]:["bg-transparent","text-dark"]},updateData:function(t,e){this.firstName=this.$store.state.firstName},displayCopyLinkModal:function(){this.$swal({position:"center",type:"success",title:"Your link has been copied",showConfirmButton:!1,timer:1500})}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",{staticClass:"parallax"},[t.$store.state.loggedIn?s("div",{staticClass:"user-profile",staticStyle:{"padding-top":"40px"}},[s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-sm-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto"}},[s("div",{staticStyle:{padding:"20px"}},[s("b-img",{attrs:{src:t.user.pictureUrl,fluid:"",alt:"Responsive image"}})],1)]),t._v(" "),s("b-col",{attrs:{cols:"12",md:"auto"}},[s("pre",{staticStyle:{"padding-top":"2px",color:"white"},attrs:{align:"center"}},[t._v("\n       "+t._s(t.user.firstName+" "+t.user.lastName)+"\n       "+t._s(t.user.headline)+"\n       "),s("a",{attrs:{href:t.user.publicProfileUrl,target:"_blank"}},[s("img",{staticStyle:{"padding-top":"2px","border-radius":"5px"},attrs:{src:"https://pbs.twimg.com/profile_images/614583061448036352/CBpFkPaz.png",align:"center",width:"30px",height:"30px"}})]),t._v("\n       ")])]),t._v(" "),s("b-col",{attrs:{cols:"12",md:"auto"}},[s("div",{staticStyle:{padding:"20px"}},[s("br"),s("br")])])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-tabs",{model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{attrs:{title:"Received Recommendations","title-link-class":t.linkClass(0)}},[s("br"),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent","font-size":"20px",color:"white","font-family":"Montserrat"},attrs:{cols:"4"}},[t._v("Traits people use to describe "+t._s(t.user.firstName)+":-")]),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}}),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}})],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"12",md:"auto"}},[s("b-row",[s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1)],1)],1)],1)],1),t._v(" "),s("hr",{attrs:{width:"20%"}}),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent","font-size":"20px",color:"white","font-family":"Montserrat"},attrs:{cols:"4"}},[t._v("Received recommendations (3)")]),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}}),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}})],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"6"}},[s("pre",{staticStyle:{padding:"2px",color:"white"},attrs:{align:"center"}},[t._v("        "+t._s(t.user.firstName+" "+t.user.lastName)+"\n        "+t._s(t.user.headline)+"\n       ")])]),t._v(" "),s("b-col",{attrs:{cols:"2"}},[s("div",{staticStyle:{padding:"20px"}},[s("b-img",{attrs:{src:t.user.pictureUrl,fluid:"",alt:"Responsive image"}})],1)])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"8"}},[s("p",{staticStyle:{padding:"2px",color:"white"},attrs:{align:"center"}},[t._v("\n        "+t._s(t.user.summary)+"\n      ")])])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"4"}},[s("div",{staticStyle:{padding:"20px"}},[t._v("\n     ding ding\n   ")])]),t._v(" "),s("b-col",{attrs:{cols:"4"}},[s("div",{staticStyle:{padding:"20px"}},[t._v("\n   ding ding\n ")])])],1)],1)],1),t._v(" "),s("b-tab",{attrs:{title:"Request-recommendation","title-link-class":t.linkClass(1),active:""}},[s("br"),t._v(" "),s("b-container",[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto",align:"center"}},[s("div",{staticStyle:{padding:"20px"}},[s("h3",[t._v("ADD CREDIBILITY TO YOUR PROFILE")]),t._v(" "),s("h5",[t._v("Join thousands of professionals showcasing their references on referworthy")])])])],1)],1),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.shown,expression:"!shown"}],staticClass:"button5",on:{click:function(e){t.shown=!t.shown}}},[t._v("Request Recommendation")]),t._v(" "),s("b-container",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticStyle:{}},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto",align:"center"}},[s("div",{staticStyle:{padding:"20px"}},[s("h5",[t._v("\n        Share the link below with your co-workers, peers, clients to get a recommendation for your work\n      ")]),t._v(" "),s("input",{attrs:{type:"text",value:"https://goo.gl/35q8vF"}}),t._v(" "),s("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.copyData,expression:"copyData"}],staticClass:"btn btn-outline-transparent button4",attrs:{target:"_blank"},on:{click:function(e){t.displayCopyLinkModal()}}},[t._v("Copy text")]),t._v(" "),s("br"),t._v(" "),s("a",{attrs:{href:"fb-messenger://share/?link=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ&app_id=133023260728475",title:"messenger"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/wquhwlws7/facebook-messenger1.png"}})]),t._v("     \n      "),s("a",{attrs:{href:"slack://send?text=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ",title:"slack"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/nvtnm4iaf/slack.png"}})]),t._v("   \n      "),s("a",{attrs:{href:"https://twitter.com/home?status=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ",title:"twitter"}},[s("img",{attrs:{id:"fb",width:"1.5%",height:"1.5%",src:"https://s13.postimg.org/qfpag3viv/twitter_nulled.png"}})]),t._v("    \n      "),s("a",{attrs:{href:"whatsapp://send?text=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ",title:"whatsapp"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/4dz0695xz/whatsapp.png"}})]),t._v("     \n      "),s("a",{attrs:{href:"https://hrefshare.com/ba494",title:"linkedin"}},[s("img",{attrs:{id:"fb",width:"1%",height:"1%",src:"https://s13.postimg.org/6ijd7cupz/linkedin.png"}})]),t._v(" "),s("br"),s("br"),t._v(" "),s("h5",[t._v("\n        Or send a personalised Email to your recommender\n      ")]),t._v(" "),s("a",{staticClass:"typeform-share button button5",attrs:{href:"https://referworthy.typeform.com/to/bs9fN4","data-mode":"popup",target:"_blank"}},[t._v("Create Message ")])])])],1)],1)],1)],1)],1)],1)],1):s("div",{staticStyle:{"padding-top":"80px"}},[s("spinner")],1)])},staticRenderFns:[]},w=s("VU/8")(_,y,!1,function(t){s("7lk1")},null,null).exports,C={name:"user-profile",computed:{users:function(){return this.$store.state.profileDetails}},components:{Spinner:g},data:function(){return{copyData:"https://goo.gl/35q8vF",tabIndex:0,shown:!1}},beforeCreate:function(){var t=this;d.a.get("https://referworthyintern.herokuapp.com/details/1").then(function(e){t.profileDetails=e.data,console.log(t.profileDetails),t.$store.commit("UPDATE_PROFILE",t.profileDetails),console.log("mounted vala"+t.$store.state.profileDetails),t.$store.commit("UPDATE_PROFILESTATUS",!0)}).catch(function(t){console.log("user details mein error aa gaya")})},methods:{linkClass:function(t){return this.tabIndex===t?["bg-dark","text-light"]:["bg-transparent","text-dark"]},updateData:function(t,e){this.firstName=this.$store.state.firstName},displayCopyLinkModal:function(){this.$swal({position:"center",type:"success",title:"Your link has been copied",showConfirmButton:!1,timer:1500})},displayLogin:function(){this.$emit("buttonClicked",this),window.location=this.$store.state.profileDetails.shortendUrl}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",{staticClass:"parallax",staticStyle:{"background-image":"url('./src/assets/images/bg.jpg')"}},[t.$store.state.apiResult?s("div",{staticClass:"user-profile",staticStyle:{"padding-top":"80px"}},[s("b-container",{staticClass:"bv-example-row"},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto"}},[s("div",{staticStyle:{padding:"20px"}},[s("b-img",{attrs:{src:t.users.pictureUrl,fluid:"",alt:"Responsive image"}})],1)]),t._v(" "),s("b-col",{attrs:{cols:"12",md:"auto"}},[s("pre",{staticStyle:{"padding-top":"2px",color:"white"},attrs:{align:"center"}},[t._v("\n       "+t._s(t.users.firstName+" "+t.users.lastName)+"\n       "+t._s(t.users.title)+"\n       "),s("a",{attrs:{href:t.users.linkedinUrl,target:"_blank"}},[s("img",{staticStyle:{"padding-top":"2px","border-radius":"5px"},attrs:{src:"https://pbs.twimg.com/profile_images/614583061448036352/CBpFkPaz.png",align:"center",width:"30px",height:"30px"}})]),t._v("\n       ")])]),t._v(" "),s("b-col",{attrs:{cols:"12",md:"auto"}},[s("div",{staticStyle:{padding:"20px"}},[s("br"),s("br")])])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-tabs",{model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{attrs:{title:"Received Recommendations","title-link-class":t.linkClass(0)}},[s("br"),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent","font-size":"20px",color:"white","font-family":"Montserrat"},attrs:{cols:"4"}},[t._v("Traits people use to describe Vikas:-")]),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}}),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}})],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"12",md:"auto"}},[s("b-row",[s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1),t._v(" "),s("b-col",[s("b-button",{staticStyle:{color:"white"},attrs:{variant:"success"}},[t._v("Not Disabled\n              ")])],1)],1)],1)],1)],1),t._v(" "),s("hr",{attrs:{width:"20%"}}),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent","font-size":"20px",color:"white","font-family":"Montserrat"},attrs:{cols:"4"}},[t._v("Received recommendations (3)")]),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}}),t._v(" "),s("b-col",{staticClass:"bg-transparent border-white",staticStyle:{border:"transparent"},attrs:{cols:"2"}})],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"6"}},[s("pre",{staticStyle:{padding:"2px",color:"white"},attrs:{align:"center"}},[t._v("         Vikas Bansal\n         VP, Products at Flipkart\n       ")])]),t._v(" "),s("b-col",{attrs:{cols:"2"}},[s("div",{staticStyle:{padding:"20px"}},[s("b-img",{attrs:{src:"https://lorempixel.com/100/100/",fluid:"",alt:"Responsive image"}})],1)])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"8"}},[s("p",{staticStyle:{padding:"2px",color:"white"},attrs:{align:"center"}},[t._v("\n        Vikas was a fellow placement committee member at IIM Bangalore. The work required running one of the most complex processes with greatest of finesse and\n        handling multiple companies top executives. Vikas is a person who would never drop the ball and can be trusted with most arduous of tasks. He is a great\n        team player and has strong people handling skills. He also stands out due to his sharp acumen and crisis handling abilities. I am sure, Vikas would do \n        wonderfully well in a senior management role.\n      ")])])],1)],1),t._v(" "),s("b-container",{staticClass:"bv-example-row "},[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"4"}},[s("div",{staticStyle:{padding:"20px"}},[t._v("\n     ding ding\n   ")])]),t._v(" "),s("b-col",{attrs:{cols:"4"}},[s("div",{staticStyle:{padding:"20px"}},[t._v("\n   ding ding\n ")])])],1)],1)],1),t._v(" "),s("b-tab",{attrs:{title:"Write-recommendation","title-link-class":t.linkClass(1),active:""}},[s("br"),t._v(" "),s("b-container",[s("b-row",{staticClass:"justify-content-md-center",staticStyle:{color:"white","font-family":"Montserrat"}},[s("b-col",{attrs:{cols:"12",md:"auto",align:"center"}},[s("div",{staticStyle:{padding:"20px"}},[s("h3"),t._v(" "),s("h5",[t._v("Refer "+t._s(t.users.firstName))])])])],1)],1),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[t.shown?t._e():s("b-button",{staticClass:"button5",on:{click:function(e){t.displayLogin()}}},[t._v("Write Recommendation")])],1)],1)],1)],1)],1):s("div",{staticStyle:{"padding-top":"80px"}},[s("spinner")],1)])},staticRenderFns:[]},S=s("VU/8")(C,x,!1,function(t){s("dqfq")},null,null).exports,k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",[s("div",{attrs:{claSs:"jumbotron flex-container",id:"surf"}},[s("div",{staticClass:"slicers col-sm-3",staticStyle:{display:"inline-block","vertical-align":"top"}},[s("div",{staticClass:"slicerhead",staticStyle:{"font-weight":"bold"}},[t._v("Skills")]),t._v(" "),t._l(t.slicers,function(e){return s("div",[s("label",{staticClass:"container"},[s("input",{attrs:{type:"checkbox",checked:"checked"}}),t._v(" "),s("span",{staticClass:"checkmark"}),t._v(" "),s("div",{staticStyle:{margin:"10px"}},[t._v(t._s(e.job))])])])}),t._v(" "),s("div",{staticClass:"slicerhead",staticStyle:{"font-weight":"bold"}},[t._v("City")]),t._v(" "),t._l(t.slicers,function(e){return s("div",[s("label",{staticClass:"container"},[s("input",{attrs:{type:"checkbox",checked:"checked"}}),t._v(" "),s("span",{staticClass:"checkmark"}),t._v(" "),s("div",{staticStyle:{margin:"10px"}},[t._v(t._s(e.city))])])])})],2),t._v(" "),s("div",{staticClass:"jl_list_item_container"},[s("p",[t._v("Find your Dream Job")]),t._v(" "),t._l(t.users,function(e){return s("div",[s("router-link",{attrs:{to:"/job-description"}},[s("div",{staticClass:"list_item"},[s("div",{staticClass:"list_item_img_container"},[s("span",{staticClass:"item_content_img"},[s("img",{staticStyle:{"max-width":"120px","max-height":"80px"},attrs:{src:e.img,fluid:"",alt:"Responsive image"}})])]),t._v(" "),s("div",{staticClass:"job_result_item_section",staticStyle:{color:"black"}},[s("div",{staticClass:"jl_in"},[s("div",{staticStyle:{flex:"1 1 0%"}},[t._v(t._s(e.text))]),t._v(" "),s("div",[t._v(t._s(e.desc))])])]),t._v(" "),s("div",{staticClass:"job_result_item_section_2"},[s("div",{staticClass:"jl_in"},[s("div",{staticClass:"jriel"},[s("i",{staticClass:"material-icons work-exp-icon"},[t._v("work")]),t._v("\t\n       \t\t\t\t"+t._s(e.exp)+"\n       \t\t\t")]),t._v(" "),s("div",{staticClass:"location_container"},[s("i",{staticClass:"material-icons location"},[t._v("place")]),t._v(" "),s("span",{staticClass:"jrilc"},[t._v("\n       \t\t\t\t\t"+t._s(e.location)+"\n       \t\t\t\t")])])])]),t._v(" "),s("div",{staticClass:"job_result_item_section_3"},[s("i",{staticClass:"material-icons"},[t._v("chevron_right")])])])])],1)})],2)])])},staticRenderFns:[]},U=s("VU/8")({name:"job-search",components:{},computed:{users:function(){return this.$store.state.availableJobs},slicers:function(){return this.$store.state.slicers}},methods:{}},k,!1,function(t){s("iIyf")},null,null).exports,I={render:function(){var t=this.$createElement;return(this._self._c||t)("body")},staticRenderFns:[]},R=s("VU/8")({name:"job-description",components:{},computed:{users:function(){return this.$store.state.availableJobs},slicers:function(){return this.$store.state.slicers}},methods:{}},I,!1,null,null,null).exports,E=s("yXtV"),N=s.n(E),D={name:"app",data:function(){return{}},components:{Home:u,AppHeader:h,UserProfile:w,Profile:S,JobSearch:U,JobDescription:R},methods:{callThis:function(t){var e=IN.User.isAuthorized(),s=n.a.ls.get("loggedInUser")&&e;if(console.log(s),s){t.$store.commit("UPDATE_USERLOGIN",s);var a=n.a.ls.get("userDetails");t.$store.commit("UPDATE_USER",a),t.$store.commit("UPDATE_FIRSTNAME",a.firstName)}else this.nowCallThis(t);return s},nowCallThis:function(t){function e(e){var s=this;t.$store.commit("UPDATE_USERLOGIN",!0),t.$store.commit("UPDATE_USER",e),t.$store.commit("UPDATE_FIRSTNAME",e.firstName),n.a.ls.set("userDetails",e),n.a.ls.set("loggedInUser",!0),null==data.pictureUrl&&(data.pictureUrl=""),d()({method:"post",url:"https://referworthy-api.herokuapp.com/push",data:e}).then(function(t){console.log(t),s.shortenedUrl=l()(t)}).catch(function(t){console.log("post call mein error aaya")})}function s(){this.error="yolo error aa gaya, Nacho BC!!",console.log(error)}IN.UI.Authorize().place(),IN.Event.on(IN,"auth",function(){IN.API.Raw("/people/~:(email-address,first-name,id,industry,last-name,location,num-connections,picture-url,positions,summary,public-profile-url,headline)?format=json").result(e).error(s)})}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("app-header",{ref:"header",on:{buttonClicked:function(e){t.callThis(e)}}}),t._v(" "),s("router-view",{staticClass:"parallax",on:{buttonClicked:function(e){t.callThis(e)}}})],1)},staticRenderFns:[]},A=s("VU/8")(D,j,!1,function(t){s("EO8r")},null,null).exports,T=(s("Hhv2"),s("/ocq")),$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],staticClass:"form-control",attrs:{type:"text","data-id":"login.username",placeholder:"Enter your username"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{"data-id":"login.submit"},on:{click:function(e){t.submit()}}},[t._v("\n      Login   "),s("i",{staticClass:"fa fa-arrow-circle-o-right"})]),t._v(" "),s("br"),s("br"),s("br"),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("Forgot your password?")]),s("br"),t._v("\n    Don’t have an account?  "),s("a",{attrs:{href:"#"}},[t._v("Sign up here.")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Modal Heading")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])}]};s("VU/8")({name:"login",data:function(){return{credentials:{username:"",password:""},loggingIn:!1,error:""}},methods:{submit:function(){this.loggingIn=!0,this.credentials.username,this.credentials.password}}},$,!1,null,null,null).exports;n.a.use(T.a);var F=new T.a({mode:"history",routes:[{path:"/",name:"home",component:u,beforeEnter:function(t,e,s){var a=F.app.$options.store.state.loggedIn;console.log("beforeenetrerrouter"+a),s(a?{path:"/user-profile",query:{redirect:t.fullPath}}:{path:"/home"})}},{path:"/home",name:"home",component:u},{path:"/user-profile",name:"user-profile",component:w},{path:"/profile/:profileId",name:"profile",component:S},{path:"/job-search",name:"job-search",component:U},{path:"/job-description",name:"job-description",component:R}]}),P=F,M=s("wmV6"),L=s("NYxO"),B=s("hpwS"),O=s.n(B),V=function(t){t.userDetails},q=function(t){t.loggedIn},z=function(t){t.firstName},H=s("mUbh"),J=function(t,e){t.userDetails=e},G=function(t,e){t.loggedIn=e},W=function(t,e){t.firstName=e},Y=function(t,e){t.profileDetails=e},K=function(t,e){t.apiResult=e},X=function(t,e,s,a,i,n){t.apiSending.firstName=e,t.apiSending.lastName=s,t.apiSending.linkedinUrl=a,t.apiSending.pictureUrl=i,t.apiSending.title=n};n.a.use(L.a);var Q=new L.a.Store({state:{userDetails:"",loggedIn:!1,firstName:"Not logged In",profileDetails:"",availableJobs:[{text:"Referworthy",img:"https://d1qb2nb5cznatu.cloudfront.net/startups/i/4988339-ef63c03905fa83b3c98e89cf7e1072fd-medium_jpg.jpg?buster=1511947430",desc:"javascript",exp:"2-5 years",location:"Hyderabad"},{text:"Learn Vue",img:"https://d1qb2nb5cznatu.cloudfront.net/startups/i/4988339-ef63c03905fa83b3c98e89cf7e1072fd-medium_jpg.jpg?buster=1511947430",desc:"javascript",exp:"2-5 years",location:"Hyderabad"},{text:"Build something awesome",img:"https://d1qb2nb5cznatu.cloudfront.net/startups/i/4988339-ef63c03905fa83b3c98e89cf7e1072fd-medium_jpg.jpg?buster=1511947430",desc:"javascript",exp:"2-5 years",location:"Hyderabad"}],slicers:[{job:"UI/UX",city:"Bangalore"},{job:"Graphic, Art direction",city:"Hyderabad"},{job:"Automotive and industrial",city:"Mumbai"},{job:"Web and Mobile deveopment",city:"Delhi"},{job:"Animation, motion and Post production",city:"Chennai"},{job:"Fashion",city:"Noida"}],apiResult:!1},getters:a,actions:H,mutations:i,plugins:[O()({predicate:["UPDATE_USER","UPDATE_USERLOGIN","UPDATE_FIRSTNAME"]})]}),Z=s("Rf8U"),tt=s.n(Z),et=s("M4fF"),st=s.n(et),at=s("NETs"),it=s.n(at),nt=s("Yk46"),rt=s.n(nt),ot=(s("Jmt5"),s("9M+g"),s("oYt9"));n.a.use(it.a,st.a),n.a.use(tt.a,d.a),n.a.config.productionTip=!1,n.a.use(r.a),n.a.use(T.a),n.a.use(M.a),n.a.use(rt.a),n.a.use(ot.a),n.a.use(N.a);new n.a({el:"#app",store:Q,router:P,VueLocalStorage:N.a,components:{App:A},template:"<App/>"})},UdIB:function(t,e){},dIGf:function(t,e){},dqfq:function(t,e){},hj9i:function(t,e){},iIyf:function(t,e){},itwp:function(t,e){},mUbh:function(t,e){},r15W:function(t,e,s){"use strict";var a=s("E9Zr").a,i=s("VU/8")(a,null,!1,function(t){s("JL9e")},null,null);e.a=i.exports},uTOh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7a9442dac36465b8c581.js.map