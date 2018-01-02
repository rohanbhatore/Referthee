<template>
  <div id="app">
     <app-header></app-header>
     <!-- <home></home> -->
     <router-view></router-view>
 </div>
</template>

<script>
import Home from './components/Home'
import AppHeader from './components/AppHeader'
import {bus} from './main'


export default {
  name: 'app',
  data(){
    return{
      loggedInUser: false,
      appData: ""
    }
  },
  components: {
    Home,
    AppHeader,
  },

 /* beforeDestroy(){
    console.log("before destry logged  asfb:" +this.loggedInUser);
  },*/
  updated(){
    //this.loggedInUser = true;
    console.log(" updated loggedInUser : " +this.loggedInUser);
  },
  beforeMount(){
    console.log("before mounte loggedInUser : " +this.loggedInUser)
  },
  methods: {

  callThis: function(){

      this.loggedInUser = IN.User.isAuthorized();
      console.log("callthis: "+this.loggedInUser);
      if(this.loggedInUser){
        bus.$emit('handleRoute');
      }
      return this.loggedInUser;
    },
    
    nowCallThis: function(){
      //if(!this.loggedInUser){

      IN.UI.Authorize().place();
      IN.Event.on(IN, "auth", getProfileData);

      function onSuccess(data) {
         this.appData = JSON.stringify(data);
         this.logInSuccess = true;
         console.log("on sucess lofgin user : " +this.loggedInUser)
         console.log(appData);

         bus.$emit('linkedinAuthDone');
         //console.log("sucess: " +loggedInUser);
     }
        // Handle an error response from the API call
        function onError() {
          this.error = "yolo error aa gaya, Nacho BC!!"
            console.log(error);
        }

        // Use the API call wrapper to request the member's basic profile data
        function getProfileData() {
            IN.API.Raw("/people/~:(email-address,first-name,id,industry,last-name,location,num-connections,picture-url,positions,summary,public-profile-url,headline)?format=json").result(onSuccess).error(onError);
          }
        
        console.log("nowCallThis :" +this.loggedInUser)
        return this.loggedInUser;
    }
    },
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
