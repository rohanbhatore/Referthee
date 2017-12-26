<template>
  <div class="home">
    <div class = "container">
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
  data(){
    return {
      profileDetails:{
        id: "",
        firstName: "",
        lastName: "",
        emailAddress: ""
      }
  }
  },
  methods: {
  }
}
</script>
