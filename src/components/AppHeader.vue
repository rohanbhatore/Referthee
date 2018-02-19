<template>
  <div class="app-header" style = "height:30px; opacity: 1">
    <b-navbar toggleable="md" type="dark" variant="white" fixed = "top">
      <router-link to="/home" style="font-size: 30px; color:black " class = "title">Refer<a style="font-size: 30px; color:#42B398" >worthy</a></router-link>
      <div class = "jriel">
              <i class="material-icons work-exp-icon">work</i>  
              Jobs
            </div>  
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">  
        <b-button v-show = '!$store.state.loggedIn' size="sm" v-on:click="displayLoginModal()" class="m-2 button2">Sign In</b-button>
        <!--<router-link  v-show = '!$store.state.loggedIn' v-on:click = "displayLoginModal()" to = "/login" tag="b-button" type="button"  class="btn btn-success btn-block m-2 button2">login</router-link>-->
        <b-dropdown id="ddown" v-show = '$store.state.loggedIn' :text = '$store.state.firstName' align="right" class="m-2">
         <b-dropdown-item href="#"><router-link to = '/user-profile'>Profile</router-link></b-dropdown-item>
         <b-dropdown-item href="#"><router-link to = '/job-search'>Job Search</router-link></b-dropdown-item>
         <b-dropdown-divider></b-dropdown-divider>
         <b-dropdown-item href="/" v-on:click = "logoutUser()">Sign Out</b-dropdown-item>
       </b-dropdown>
     </b-navbar-nav>
   </b-navbar>
 </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'app-header',

  components: { 
  },

  props: [],

  data(){
    return{
      loginTooltip: "Paleez login from here"
    }
  },

  methods: {

    displayLoginModal: function(){
      this.$swal({
        imageUrl: 'https://s13.postimg.org/6w4o09d07/rw_logo2.png',
        imageWidth: 90,
        imageHeight: 80,
        showCloseButton: false,
        title: '<p style="font-size: 35px; color:black; font-family:Montserrat">refer<strong style="color:#42B398">worthy</strong></p><h6>Create an account to personalize your homepage,<br>follow your favorite authors and publications,  applaud stories you love, and more.</h6> ',
        text: '<b-button v-on:click = onButtonClick()></b-button>',
        html: true,
        /*background: '#fff url(https://s13.postimg.org/3sur5bj93/contact-background.jpg)',*/
        width: 500,
        height: 400,
        padding: 60,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: '',
        focusConfirm: false,
        confirmButtonClass:'linked'     
      }).then(    //executed on clicking Signin with LinkedIn
      result=> {
        if(result.value){
          this.onButtonClick(); 
        }
        
      });
    },

    onButtonClick: function(){ //called on click of Sign In button, not being called right now
     /* axios
         .get('https://referworthyintern.herokuapp.com/details/1')
         .then((response) => {
          this.profileDetails = response;
          console.log(this.profileDetails);
          this.$store.commit('UPDATE_USER', this.profileDetails)
          this.$store.commit('UPDATE_FIRSTNAME', this.profileDetails.data.firstName)
          console.log("mounted vala" +this.$store.state.userDetails)
        })
         .catch((response)=>{
          console.log("user details mein error aa gaya");
        })*/
      var that = this;
      //console.log(that);
      this.$router.push('user-profile');
      this.$emit('buttonClicked',that);
      //this.$parent.$options.methods.callThis(that);//api call
    },
    
    logoutUser: function(){ //called on click of Sign Out in dropdown
      //console.log(this);
      var loginStatus = false;
      this.$store.commit(
        'UPDATE_USERLOGIN',loginStatus);
      this.$store.commit(
        'UPDATE_USER','');
        IN.User.logout();//logging out user from application
        //console.log(this.$store.state.loggedIn);
        
    }
    }
  }
</script>
<style>
.jriel{
    display: block;
    color: #131418;   
      align-items: center;
      line-height: 19px;
      margin-bottom: 5px;
      opacity: 1;
  }
  .jriel: hover{
    background-color: grey;
  }
.title, .title:active, .title:visited, .title:focus  {
    text-decoration:none;
    margin: 10px;
}
.title:hover{
  text-decoration: none;
  /*border-radius: 5px;
  border-color: green;
  border-style: solid;*/
  padding-left: 2px;
  padding-right: 2px;
  
}
.app-header{
  
  height:50px;
  opacity: 1;
  margin-bottom: 35px;
  background-color: #1A1A1E;
}

.button {
  background-color: #500000; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 5px;
  width: 210px;

}

.button1:hover {
  opacity:0.9;

}
.button2 {
  font-size: 10px;
  padding: 10px 20px;
  background-color:#114539;
  margin:4px;

}

.button2:hover {
  font-size: 15px;
  background-color: #3EC2A2;
  
}
.linked{
  background-image : url('https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png');
  width:215px;
  height:41px;
}
.button3{
        /*v-bind:style="{ hover: ['background-color:#000000'] }"*/  /*style="*/font-size: 15px;
        padding: 5px 50px; background-color:#114539; border-radius: 50%;  border: 1px solid #114539; width:80%/*;"*/
      }
      .button3:hover {
        font-size: 15px;
        background-color: #3EC2A2;
        border: 1px solid #3EC2A2;

      }
</style>
