<template>
  <div id="app">
   <app-header ref = "header" @buttonClicked = 'callThis($event)'></app-header>
   <router-view @buttonClicked = 'callThis($event)'></router-view>
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

      function onSuccess(data) {
        //debugger;
        //console.log(data.positions);
        var details = data;
        //var positions = JSON.parse(JSON.stringify(data,['emailAddress','firstname','headline','id', 'industry','lastName','location',,'_total'],4 ));
        for(var i=0; i<data['positions']['_total']; i++){
              delete data.positions.values[i].location.country;
        }
        //var positions = JSON.parse(JSON.stringify(data.positions, [total, values], 4));
          //data['positions'] = positions;
          //console.log(data);
        //console.log(profileDetails['positions']['_total']);
        details['emailId'] = details['emailAddress'];
        delete details['emailAddress'];
        details['linkedinId'] = details['id'];
        delete details['id'];
        var loggedInUser = true;
        // committing the value of loggedInUser if the user is logging in
        that.$store.commit(
          'UPDATE_USERLOGIN',loggedInUser)

        that.$store.commit(
          'UPDATE_USER', data);
          //console.log(that.$store.state.userDetails);
          that.$store.commit(
          'UPDATE_FIRSTNAME', data.firstName);
          //that.$store.commit('UPDATE_APISENDING', data.firstName, data.last-name, data.publicProfileUrl, data.pictureUrl,data.headline);
          console.log(details);
          //console.log(typeof(that.$store.state.firstName));
          //$("#userName").html(that.$store.state.firstName);
          //that.user-profile.methods.updateData(that.$store.state.firstName, data.headline);
          //return loggedInUser;
          //function to store data locally
          Vue.ls.set('userDetails',data);
          Vue.ls.set('loggedInUser',true);
        //POST API call to send the linkedin data
          /*if(data.pictureUrl == null){
            data.pictureUrl = ''
          }*/
          debugger;
       axios({
          method:'post',
          url:'https://referworthy-api.herokuapp.com/push',
          data:{
          "firstName": data.firstName,
          "lastName": data.lastName,
          "linkedinId": data.linkedinId,
          "emailId": data.emailId,
          "location": data.location,
          "numConnections": data.numConnections,
          "pictureUrl": data.pictureUrl,
          "summary": data.summary,
          "industry": data.industry,
          "positions": data.positions,
          "headline": data.headline,
          "publicProfileUrl": data.publicProfileUrl
        }
      }
        )
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
<style type="text/css">
body{
  background-image: url('assets/images/bg.jpg');
  background-repeat: repeat-y;
}
   
</style>
