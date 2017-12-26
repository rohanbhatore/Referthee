<template>
  <div class="app-header">
    <div class = "container">
        <b-navbar v-if = "linkedinLogin" type="light" variant="success" toggleable = "md">
          <b-navbar-brand href="#" class = "col-sm-6"><h3 align = "left">referWorthy</h3></b-navbar-brand>
             <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-button v-on:click="callLinkedInApi()">Sign In with LinkedIn</b-button>
<!--         <router-link to="/signup" tag="b-button">Sign Up</router-link> -->
              </b-nav-form>
            </b-navbar-nav>
       </b-navbar>
  </div>
</div>
</template>

<script>
  export default {
  name: 'app-header',
  data(){
    return{
      linkedinLogin: ""
    }
  },
  methods: {
    callLinkedInApi: function() {
      this.$http
      .get('')
      .then((response) =>{
        this.linkedinLogin = "loggedIn";
      })
      .catch((response)=>{
        this.error = "Not logged In";
      })
    }
  }
}
</script>