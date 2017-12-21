<template>
  <div class="home">

    <div class = "container">
        <b-navbar type="light" variant="success" toggleable = "md">
    
    <b-navbar-brand href="#" class = "col-sm-6"><h3 align = "left">referWorthy</h3></b-navbar-brand>

         <b-navbar-nav class="ml-auto">

      <b-nav-form>
       
          <router-link to="/login" tag="b-button">Login</router-link>
        <router-link to="/signup" tag="b-button">Sign Up</router-link>
      </b-nav-form>
</b-navbar-nav> 
  </b-navbar>
 <b-jumbotron header="Get Recommended" lead="Get recommendations from your colleagues and share them on Linkedin or with your job application!" align = "center"></b-jumbotron>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Share the details of your recommender and we notify him with a questionnaire.</h4><br>
        <a href="#" class="btn btn-primary">Request a Reco</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Write a recommendation for someone you care about and earn good karma :)</h4><br>
        <a href="#" class="btn btn-primary">Write a Reco</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'home',
}
</script>