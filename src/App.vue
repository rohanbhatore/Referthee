<template>
  <div id="app">
   <app-header ref = "header" @buttonClicked = 'callThis($event)'></app-header>
   <router-view @buttonClicked = 'callThis($event)' class = 'parallax'></router-view>
 </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Home from './components/Home'
import AppHeader from './components/AppHeader'
import UserProfile from './components/UserProfile'
import Profile from './components/Profile'
import JobSearch from './components/JobSearch'
import JobDescription from './components/JobDescription'
import VueLocalStorage from 'vue-ls'
//import script from'./assets/theme/js/script'

export default {
  name: 'app',

  data(){
    return {
    }
  },

  components : {
    Home,
    AppHeader,
    UserProfile,
    Profile,
    JobSearch,
    JobDescription
  },

  methods: {

    callThis: function(that){
      
      
      var login = IN.User.isAuthorized(); 
      var loggedInUser = Vue.ls.get('loggedInUser') && login;
      console.log(loggedInUser);

      if(!loggedInUser){
        this.nowCallThis(that);
      } else{
        that.$store.commit(
        'UPDATE_USERLOGIN', loggedInUser);
        var data = Vue.ls.get('userDetails');
        //console.log(loggedInUser);
        that.$store.commit(
          'UPDATE_USER', data);
        that.$store.commit(
          'UPDATE_FIRSTNAME', data.firstName);

      }
      //loggedInUser = that.$store.loggedIn;

      return loggedInUser;
    },

    nowCallThis: function(that){
      IN.UI.Authorize().place();
      IN.Event.on(IN, "auth", getProfileData);

      function getProfileData(){
        IN.API.Raw("/people/~:(email-address,first-name,id,industry,last-name,location,num-connections,picture-url,positions,summary,public-profile-url,headline)?format=json").result(onSuccess).error(onError);
      }

      function onSuccess(result) {
        //debugger;
        //console.log(data.positions);
        var details = result;
        var loggedInUser = true;
        // committing the value of loggedInUser if the user is logging in
        that.$store.commit(
          'UPDATE_USERLOGIN',loggedInUser)

        that.$store.commit(
          'UPDATE_USER', result);
          
          that.$store.commit(
          'UPDATE_FIRSTNAME', result.firstName);
          //function to store data locally
          Vue.ls.set('userDetails',result);
          Vue.ls.set('loggedInUser',true);
          
        //POST API call to send the linkedin data
          if(data.pictureUrl == null){
            data.pictureUrl = ''
          }
          //debugger;
       axios({
        method:'post',
        url: 'https://referworthy-api.herokuapp.com/push',
        data: result
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

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  /*color: #2c3e50;*/
  
}
.parallax{ 
  background-color: black/*url("https://s13.postimg.org/qhaau1s2v/rodion-kutsaev-41022_1.jpg")*/; 
  /*background-attachment: fixed;*/
  /*background-position: center;*/
  background-repeat: repeat;
  /*background-size: cover;*/
  /*&:before {*/
    
    /*position: absolute;
   
    /*background-image: linear-gradient(to bottom right,#AABA68,#27788A);
    
    /*}*/
  }
  </style>

