<template>
  <div id="app">
   <app-header ref = "header" @buttonClicked = 'callThis($event)'></app-header>
   <router-view @buttonClicked = 'callThis($event)'></router-view>
 </div>
</template>
//<script type="text/javascript" src="./script.js"></script>
<script>
import axios from 'axios'
import Vue from 'vue'
import Home from './components/Home'
import AppHeader from './components/AppHeader'
import UserProfile from './components/UserProfile'
import Profile from './components/Profile'
//import script from'./assets/theme/js/script'

export default {
  name: 'app',

  data(){
    return {
    }
  },

  components: {
    Home,
    AppHeader,
    UserProfile,
    Profile
  },

  methods: {

    callThis: function(that){
      
      IN.UI.Authorize().place();
       
      var loggedInUser = IN.User.isAuthorized();
      console.log(loggedInUser);

      if(!loggedInUser){
        this.nowCallThis(that);
      } else{
        that.$store.commit(
        'UPDATE_USERLOGIN', loggedInUser)
        //console.log(loggedInUser);
        

      }
      //loggedInUser = that.$store.loggedIn;

      return loggedInUser;
    },

    nowCallThis: function(that){

      IN.Event.on(IN, "auth", getProfileData);

      function getProfileData(){
        IN.API.Raw("/people/~:(email-address,first-name,id,industry,last-name,location,num-connections,picture-url,positions,summary,public-profile-url,headline)?format=json").result(onSuccess).error(onError);
      }

      function onSuccess(data) {
        //debugger;
        console.log(data);
        var profileDetails = JSON.stringify(data);
        var loggedInUser = true;
        // committing the value of loggedInUser if the user is logging in
        that.$store.commit(
          'UPDATE_USERLOGIN',loggedInUser)

        that.$store.commit(
          'UPDATE_USER', data);
          console.log(that.$store.state.userDetails);
          that.$store.commit(
          'UPDATE_FIRSTNAME', data.firstName);
          //console.log(this.$store.state.userDetails);
          //console.log(typeof(that.$store.state.firstName));
          //$("#userName").html(that.$store.state.firstName);
          //that.user-profile.methods.updateData(that.$store.state.firstName, data.headline);
          //return loggedInUser;
        //POST API call to send the linkedin data
       axios
        .post('https://referworthyintern.herokuapp.com/push', {
          body: data
        })
        .then((response) =>{
          console.log(response);
          this.shortenedUrl = JSON.stringify(response);
        })
        .catch((response) => {
          console.log("post call mein error aaya");
        })
      }

    

      function onError() {
        this.error = "yolo error aa gaya, Nacho BC!!"
        console.log(error);
      }
    }
  }
}

</script>
<!--
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.parallax{ 
  background-image: url("https://s13.postimg.org/qhaau1s2v/rodion-kutsaev-41022_1.jpg"); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*&:before {*/
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right,#AABA68,#27788A);
    
    /*}*/
  }
  </style>
-->
