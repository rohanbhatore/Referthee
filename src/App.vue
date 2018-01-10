<template>
  <div id="app">
   <app-header></app-header>
   <router-view></router-view>
 </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Home from './components/Home'
import AppHeader from './components/AppHeader'
import UserProfile from './components/UserProfile'

export default {

  name: 'app',
  data(){
    return {
    }
  },

  components: {
    Home,
    AppHeader,
    UserProfile
  },

  methods: {

    callThis: function(that){

      IN.UI.Authorize().place();
      var loggedInUser = IN.User.isAuthorized();

      if(!loggedInUser){
        this.nowCallThis(that);
      }

      that.$store.commit(
        'UPDATE_USERLOGIN', loggedInUser)

      return loggedInUser;
    },

    nowCallThis: function(that){

      IN.Event.on(IN, "auth", getProfileData);

      function getProfileData(){
        IN.API.Raw("/people/~:(email-address,first-name,id,industry,last-name,location,num-connections,picture-url,positions,summary,public-profile-url,headline)?format=json").result(onSuccess).error(onError);
      }

      function onSuccess(data) {

        var profileDetails = JSON.stringify(data);
        var loggedInUser = true;
        // committing the value of loggedInUser if the user is logging in
        that.$store.commit(
          'UPDATE_USERLOGIN',loggedInUser)

        that.$store.commit(
          'UPDATE_USER', profileDetails);

        //POST API call to send the linkedin data
       /* axios
        .post('https://referworthyintern.herokuapp.com/push', {
          body: this.profileDetails
        })
        .then((response) =>{
          this.shortenedUrl = JSON.stringify(response);
        })
        .catch((response) => {
          console.log("post call mein error aaya");
        })
      }*/
    }

      function onError() {
        this.error = "yolo error aa gaya, Nacho BC!!"
        console.log(error);
      }
    }
  }
}

</script>
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
