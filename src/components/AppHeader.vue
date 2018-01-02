<template>
  <div class="app-header">
    <div class = "container">
        <b-navbar  type="light" variant="success" toggleable = "md">
          <b-navbar-brand href="#" class = "col-sm-6"><h3 align = "left">referWorthy</h3></b-navbar-brand>
             <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-button v-on:click = "onButtonClick()" v-b-tooltip = 'tooltipdta'>Sign In with LinkedIn</b-button>  
              </b-nav-form>
            </b-navbar-nav>
       </b-navbar>
       <home></home>
  </div>
  </div>
</template>

<script>
  export default {
  name: 'app-header',
  components: { 
  },
  props: [],
  data(){
    return{
      hideButton: false,
      tooltipdta: "bhai login kar pehle"
    }
  },
  
  beforeMount(){
      this.hideButton = false;
      console.log("before moutn hidebuton : "+this.hideButton);
  },

  updated(){
    console.log("updated hide button : "+this.hideButton);
  },

  methods: {

    onButtonClick: function(){
      this.hideButton = this.$parent.$options.methods.callThis();
      console.log("onbutton click before if : "+this.hideButton);
      if(!this.hideButton){
        this.$parent.$options.methods.nowCallThis();
      }

    },

    callLinkedInApi: function() {
      this.$http
      .get('')
      .then((response) =>{
      })
      .catch((response)=>{
      })
    }
  }
}
</script>
