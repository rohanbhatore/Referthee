<template>
  <div class="app-header">
    <b-navbar toggleable="md" type="dark" variant="white" fixed = "top">
      <b-navbar-brand href="#" style="font-size: 30px; color:black">refer<a style="color:#42B398" >worthy</a></b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">  
        <b-button v-show = '!$store.state.loggedIn' size="sm" v-on:click="displayLoginModal()" class="m-2 button2">Sign In</b-button>
        <b-dropdown id="ddown" :text = '$store.state.firstName' align="right" class="m-2">
         <b-dropdown-item href="#">Action</b-dropdown-item>
         <b-dropdown-item href="#">Another action</b-dropdown-item>
         <b-dropdown-divider></b-dropdown-divider>
         <b-dropdown-item href="/" v-on:click = "logoutUser()">Sign Out</b-dropdown-item>
       </b-dropdown>
     </b-navbar-nav>
   </b-navbar>
 </div>
</template>

<script>
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
        showConfirmButton: false,
        focusConfirm: false,     
      })
    },

    onButtonClick: function(){ //called on click of Sign In button, not being called right now
      var that = this;
      console.log(that);
      this.$parent.$options.methods.callThis(that);
    },

    logoutUser: function(){ //called on click of Sign Out in dropdown
      console.log(this);
      var loginStatus = false;
      this.$store.commit(
        'UPDATE_USERLOGIN',loginStatus)
    }
  }
}
</script>

<style>
.button {
  background-color: #500000; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  width: 210px;

}

.button1:hover {
  opacity:0.9;

}
.button2 {
  font-size: 15px;
  padding: 10px 20px;
  background-color:#114539;

}

.button2:hover {
  font-size: 15px;
  background-color: #3EC2A2;
  
}
