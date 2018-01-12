<template>
  <body class="parallax">
    <div name="home"  style = "padding-top: 60px;">
      <b-jumbotron bg-variant="white" text-variant="dark"  align="center" class="bg-transparent" style="padding:19px 10px 10px 1px">
        <template slot="header">
          <pre class="display-2" style="color:white; font-family:Arial;">Get recommended!</pre>
        </template>
        <template slot="lead">
          <h5 style="color:white; font-family:Exo;">Add credibility to your profile with a recommendation</h5>
        </template>
        <hr class="my-4" width="40%" >
        <pre style="color:white; font-size: 25px; font-family:Exo;" align="center">A recommendation from your supervisor or peer makes you twice
         as likely to land a job within one month

         As a freelancer or consultant, positive recommendations significantly
         increase your chances to get new projects
       </pre>
       <hr class="my-2" width="40%" >
       <!-- middle content-->
       <b-container class="bv-example-row" style="padding:0px 0px 0px 0px" >
        <b-row class="justify-content-md-center bg-transparent outline-*">
          <b-col col lg="5" class="bg-transparent border-white" style="border:transparent">
           <div class="container" align="center">
            <p style="color:white; font-size:21px; font-family:Arial">Share the details of your recommender and we notify him with a questionnaire.</p><br>
            <router-link  v-on:click.native = "onRequestRecoClick()" to = "/user-profile" tag="b-button" type="button"  class="btn btn-success btn-block button3"><strong> REQUEST RECOMMENDATION</strong></router-link>
          </div>
        </b-col>
        <b-col cols="12" md="auto" class="bg-transparent "><pre></pre> </b-col>
        <b-col col lg="5" class="bg-transparent" style="border:transparent">
         <div class="container" align="center">
          <p style="color:white; font-size:21px; font-family:Arial">Write a recommendation for someone you care about and earn good karma :)</p><br>
          <router-link v-on:click.native = "onRequestRecoClick()" to = "/user-profile" tag = "b-button" type="button"  class="btn btn-success btn-block button3"><strong> WRITE RECOMMENDATION</strong></router-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</b-jumbotron>
</div>
</body>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',

  props: [''],

  components: {
  },

  data(){
    return {
    }
  },

  beforeMount(){
         //API call to get the user details to be rendered on profile page
         /*axios
         .get('https://referworthyintern.herokuapp.com/details/1')
         .then((response) => {
          this.profileDetails = response;
          console.log(this.profileDetails);
          this.$store.commit('UPDATE_USER', this.profileDetails)
          console.log("mounted vala" +this.$store.state.userDetails)
        })
         .catch((response)=>{
          console.log("user details mein error aa gaya");
        })*/
      },

      methods: {

        onRequestRecoClick: function(){ //called on click of request reco and write reco button
          var that = this;
          //console.log(that);

          //API call to get the user details to be rendered on profile page
          axios
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
          })

          var loggedInUser = this.$parent.$options.methods.callThis(that);
        }
      }
    }
    </script>

    <style>
    .button3{
      /*v-bind:style="{ hover: ['background-color:#000000'] }"*/  /*style="*/font-size: 15px;
      padding: 10px 50px; background-color:#114539; border-radius: 30px;  border: 1px solid #114539; width:80%/*;"*/
    }
    .button3:hover {
      font-size: 15px;
      background-color: #3EC2A2;
      border: 1px solid #3EC2A2;

    }
    </style>
