<template>
  <!-- <div class="col-sm-4 offset-sm-4">
    <spinner v-show="loggingIn" message="Logging in..."></spinner>
    <p>username: <strong>demouser</strong> <br> password: <strong>testpass</strong></p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div> -->
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

<div class="modal-body">
      
    <div class="form-group">
      <input 
        type="text"
        data-id="login.username" 
        class="form-control"
        placeholder="Enter your username"
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
  </div>
  <div class="modal-footer">
    <button 
      data-id="login.submit"
      class="btn btn-primary" 
      @click="submit()"
    >
      Login &nbsp; <i class="fa fa-arrow-circle-o-right"></i>
    </button>
    <br><br><br>
    <a href="#">Forgot your password?</a><br>
    Don’t have an account? &nbsp;<a href="#">Sign up here.</a>
  </div>
</div>

  </div>
</template>

<script>
//import Spinner from './Spinner'
export default {
  name: 'login',
  //components: { Spinner },
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      loggingIn: false,
      error: ''
    }
  },
  methods: {
    submit () {
      this.loggingIn = true
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      // Auth.login() returns a promise. A redirect will happen on success.
      // For errors, use .then() to capture the response to output
      // error_description (if exists) as shown below:
      /*this.$auth.login(credentials, 'dashboard').then((response) => {
        this.loggingIn = false
        this.error = utils.getError(response)
      })*/
    }
  }
}
</script>
