export const UPDATE_USER = function(state, profileDetails) {
  state.userDetails = profileDetails;
}

export const UPDATE_USERLOGIN = function(state, loggedInUser){
  state.loggedIn = loggedInUser;
}


/*export const mutations = {
  setUser (state, profileDetails) {
  	state.userDetails = profileDetails
  },

 
}*/