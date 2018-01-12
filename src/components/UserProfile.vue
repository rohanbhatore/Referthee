<template>
  <body class="parallax">
   <div v-if = '$store.state.loggedIn' class = "user-profile" style = "padding-top: 80px;">
    <b-container class="bv-example-row ">
      <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat;">
        <b-col cols="12" md="auto" >
         <div style="padding:20px">
          <b-img src="https://lorempixel.com/100/100/" fluid alt="Responsive image" />
        </div>
      </b-col>
      <b-col cols="12" md="auto">
       <pre style="padding:2px; color:white" align="center">
        Vikas Bansal
        VP, Products at Flipkart
      </pre>
    </b-col>
    <b-col cols="12" md="auto">
      <div style="padding:20px" >
        <br><br>
        <b-button :pressed="false" variant="success">RECOMMEND ME!</b-button>
      </div>
    </b-col>
  </b-row>
</b-container>
<!--middle secctionm-->
<b-container class="bv-example-row">
  <b-tabs v-model="tabIndex">
    <b-tab title="Received Recommendations" :title-link-class="linkClass(0)" active>
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
<b-tab title="Request-recommendation" :title-link-class="linkClass(1)">
  <br>
  <!--social sharing buttons // part-1-->
  <b-container>
   <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat;">
    <b-col cols="12" md="auto" align="center">
     <div style="padding:20px">
      <h3>ADD CREDIBILITY TO YOUR PROFILE</h3>
      <h5>Join thousands of professionals showcasing their references on referworthy</h5>
    </div>
  </b-col>
</b-row>
</b-container>
<!--social sharing buttons // part-1-->
<b-container>
  <b-row class="justify-content-md-center" style="color:white; font-family:Montserrat;">
    <b-col cols="12" md="auto" align="center">
     <div style="padding:20px">
      <h5>
        Share the link below with your co-workers, peers, clients to get a recommendation for your work
      </h5>
      <input type="text" value="https://goo.gl/35q8vF">
      <button v-on:click="displayCopyLinkModal()" v-clipboard="copyData" class="btn btn-outline-transparent button4"  target="_blank">Copy text</button>
      <br>
      <!-- social sharing buttons-->
      <a href="fb-messenger://share/?link=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ&app_id=133023260728475" title="messenger" >
        <img id="fb" width="1%" height="1%" src="https://s13.postimg.org/wquhwlws7/facebook-messenger1.png">
      </a>&nbsp; &nbsp; &nbsp;
      <a href="slack://send?text=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ" title="slack" >
        <img id="fb" width="1%" height="1%" src="https://s13.postimg.org/nvtnm4iaf/slack.png">
      </a>&nbsp; &nbsp;
      <a href="https://twitter.com/home?status=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ" title="twitter" >
        <img id="fb" width="1.5%" height="1.5%" src="https://s13.postimg.org/qfpag3viv/twitter_nulled.png">
      </a>&nbsp; &nbsp; 
      <a href="whatsapp://send?text=Hi+there%2C+I+am+building+my+professional+profile+on+Referworthy.+Please+write+me+a+recommendation+using+this+link%3A%0D%0A+https%3A%2F%2Freferworthy.typeform.com%2Fto%2FKLsrBJ" title="whatsapp" >
        <img id="fb" width="1%" height="1%" src="https://s13.postimg.org/4dz0695xz/whatsapp.png">
      </a>&nbsp; &nbsp; &nbsp;
      <a href="https://hrefshare.com/ba494" title="linkedin" >
        <img id="fb" width="1%" height="1%" src="https://s13.postimg.org/6ijd7cupz/linkedin.png">
      </a>
      <br><br>
      <h5>
        Or send a personalised Email to your recommender
      </h5>     
      <!--email button-->
      <a class="typeform-share button button5" href="https://referworthy.typeform.com/to/bs9fN4" data-mode="popup"  target="_blank">Create Message </a> 
      <!-- social sharing button ends-->
    </div>
  </b-col>
</b-row>
</b-container>
</b-tab>
</b-tabs>
</b-container>
</div>
</div>
<!-- Conditional Rendering -->
<div v-else style = "padding-top: 80px;">
  <spinner></spinner>
</div>
</body>
</template>

<script>
import Spinner from './Spinner'
export default {
  name: 'user-profile',

  components: {
    Spinner
  },

  data () {
    return {
      copyData: 'https://goo.gl/35q8vF',
      tabIndex: 0
    }
  },

  methods:{

    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-dark', 'text-light']
      } else {
        return ['bg-transparent', 'text-dark']
      }
    },

    displayCopyLinkModal: function(){ //opens when copy text button is clicked
      this.$swal({
        position: 'center',
        type: 'success',
        title: 'Your link has been copied',
        showConfirmButton: false,
        timer: 1500
      });
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

</style>