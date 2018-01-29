<template>
  <body class="parallax">
   <div class = "user-profile" style = "padding-top: 80px;">
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat; ">
        <b-col cols="12" md="auto">
         <div style="padding:20px">
          <b-img :src="users.pictureUrl" fluid alt="Responsive image" />
        </div>
      </b-col>
      <b-col cols="12" md="auto">
       <pre style="padding-top:2px; color:white" align="center">

       {{users.firstName+' '+users.lastName}}
       {{users.title}}
       <a :href= "users.publicProfileUrl" target="_blank"><img src = "https://pbs.twimg.com/profile_images/614583061448036352/CBpFkPaz.png" align = "center" width = "30px" height = "30px" style = "padding-top:2px; border-radius:5px" ></a>
       </pre>
       
    </b-col>
    <b-col cols="12" md="auto">
      <div style="padding:20px" >
        <br><br>
        <!--<b-button :pressed="false" variant="success">RECOMMEND ME!</b-button>-->
      </div>
    </b-col>
  </b-row>
</b-container>

<!--middle secctionm-->
<b-container class="bv-example-row">
  <b-tabs v-model="tabIndex">
    <b-tab title="Received Recommendations" :title-link-class="linkClass(0)">
      <br>
      <b-container class="bv-example-row">
        <b-row align-h="center" >
          <b-col cols="4"  class="bg-transparent border-white" style="border:transparent; font-size:20px; color:white; font-family:Montserrat;">Traits people use to describe Vikas:-</b-col>
          <b-col cols="2"  class="bg-transparent border-white" style="border:transparent"></b-col>
          <b-col cols="2"  class="bg-transparent border-white" style="border:transparent"></b-col>
        </b-row>
      </b-container>
      <!--second part-->
      <b-container class="bv-example-row ">
        <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat;">
          <b-col cols="12" md="auto" class="bg-transparent border-white" style="border:transparent"> 
           <b-row>
            <b-col>
              <b-button variant="success" style="color:white">Not Disabled
              </b-button>
            </b-col>
            <b-col>
              <b-button variant="success" style="color:white">Not Disabled
              </b-button>
            </b-col>
            <b-col>
              <b-button variant="success" style="color:white">Not Disabled
              </b-button>
            </b-col>
            <b-col>
              <b-button variant="success" style="color:white">Not Disabled
              </b-button>
            </b-col>
            <b-col>
              <b-button variant="success" style="color:white">Not Disabled
              </b-button> 
            </b-col>   
          </b-row>
        </b-col>
      </b-row> 
    </b-container>
    <hr width="20%">
    <!--third card-->
    <b-container class="bv-example-row">
      <b-row align-h="center" >
        <b-col cols="4"  class="bg-transparent border-white" style="border:transparent; font-size:20px; color:white; font-family:Montserrat;">Received recommendations (3)</b-col>
        <b-col cols="2"  class="bg-transparent border-white" style="border:transparent"></b-col>
        <b-col cols="2"  class="bg-transparent border-white" style="border:transparent"></b-col>
      </b-row>
    </b-container>
    <!--4th part-->
    <b-container class="bv-example-row ">
     <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat;">
      <b-col cols="6">
       <pre style="padding:2px; color:white" align="center">
         Vikas Bansal
         VP, Products at Flipkart
       </pre>
     </b-col>
     <b-col cols="2" >
       <div style="padding:20px">
         <b-img src="https://lorempixel.com/100/100/" fluid alt="Responsive image" />
       </div>
     </b-col>  
   </b-row>
 </b-container>
 <!--5th part-->
 <b-container class="bv-example-row ">
  <b-row class="justify-content-center" style="color:white; font-family:Montserrat;">
    <b-col cols="8">
      <p style="padding:2px; color:white" align="center">
        Vikas was a fellow placement committee member at IIM Bangalore. The work required running one of the most complex processes with greatest of finesse and
        handling multiple companies top executives. Vikas is a person who would never drop the ball and can be trusted with most arduous of tasks. He is a great
        team player and has strong people handling skills. He also stands out due to his sharp acumen and crisis handling abilities. I am sure, Vikas would do 
        wonderfully well in a senior management role.
      </p>
    </b-col>
  </b-row>
</b-container>
<!--last container-->
<b-container class="bv-example-row ">
  <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat;">
   <b-col cols="4">
    <div style="padding:20px">
     ding ding
   </div>
 </b-col>
 <b-col cols="4" >
  <div style="padding:20px">
   ding ding
 </div>
</b-col>  
</b-row>
</b-container>
</b-tab>
<b-tab title="Write-recommendation" :title-link-class="linkClass(1)"  active>
  <br>
  <!--social sharing buttons // part-1-->
  <b-container>
   <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat;">
    <b-col cols="12" md="auto" align="center">
     <div style="padding:20px">
      <h3></h3>
      <h5>Refer {{users.firstName}}</h5>

    </div>
  </b-col>
</b-row>
</b-container>
<div style = "text-align:center;">
<b-button class="button5" v-if = "!shown" v-on:click = "displayLogin()">Write Recommendation</b-button>
<!--social sharing buttons // part-1-->

</div>
</b-tab>
</b-tabs>
</b-container>
</div>
</div>
<!-- Conditional Rendering -->

</body>
</template>

<script>
import axios from 'axios'
import Spinner from './Spinner'
export default {
  name: 'user-profile',
  computed:{
  users () {
  return this.$store.state.profileDetails;
  },
  /*shown(){
  return false;
  }*/
  },
  components: {
    Spinner
  },
    data () {
    return {
      copyData: 'https://goo.gl/35q8vF',
      tabIndex: 0,
      shown:false
    }
    },
   beforeCreate () {
      
         axios
         .get('https://referworthyintern.herokuapp.com/details/1')
         .then((response) => {

          this.profileDetails = response.data;
          console.log(this.profileDetails);
          this.$store.commit('UPDATE_PROFILE', this.profileDetails);
          console.log("mounted vala" +this.$store.state.profileDetails);
        })
         .catch((response)=>{
          console.log("user details mein error aa gaya");
        })
      },

  methods:{
    

    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-dark', 'text-light']
      } else {
        return ['bg-transparent', 'text-dark']
      }
    },
    updateData: function(fullName, description){
      this.firstName = this.$store.state.firstName;
    },

    displayCopyLinkModal: function(){ //opens when copy text button is clicked
      this.$swal({
        position: 'center',
        type: 'success',
        title: 'Your link has been copied',
        showConfirmButton: false,
        timer: 1500
      });
    },
    displayLogin(){
      var that = this;
      this.$emit('buttonClicked', that);
      debugger;
        window.location=this.$store.state.profileDetails.shortendUrl;
      
    }
    
  }

}
</script>

<style>
#fb:hover{
  opacity:0.6;
} 
.button4{
 display:inline-block;
 text-decoration:none;
 background-color:#114539;
 color:white;
 cursor:pointer;
 font-family:Helvetica,Arial,sans-serif;
 font-size:18px;
 
 line-height:40px;
 text-align:center;
 margin:20px;
 height:40px;
 padding:0px 33px;
 border-radius:25px;
 max-width:100%;
 white-space:nowrap;
 overflow:hidden;
 text-overflow:ellipsis;
 font-weight:bold;
 -webkit-font-smoothing:antialiased;
 -moz-osx-font-smoothing:grayscale;

}
.button4:hover {
  font-size: 18px;
  background-color: #3EC2A2;
}
.button5{
  display:inline-block;
  text-decoration:none;
  background-color:#114539;
  color:white;
  cursor:pointer;
  font-family:Helvetica,Arial,sans-serif;
  font-size:18px;
  line-height:50px;
  text-align:center;
  margin:0;height:50px;
  padding:0px 33px;
  border-radius:25px;
  max-width:100%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  font-weight:bold;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
.button5:hover {
  font-size: 18px;
  background-color: #3EC2A2;
  display:inline-block;
  text-decoration:none;
  color:white;
  cursor:pointer;
  font-family:Helvetica,Arial,sans-serif;
  line-height:50px;
  text-align:center;
  margin:0;height:50px;
  padding:0px 33px;
  border-radius:25px;
  max-width:100%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  font-weight:bold;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
img.center {
    display: block;
    margin: 0 auto;
}

</style>