export const UPDATE_USER = function(state, profileDetails) {
	state.userDetails = profileDetails;
}

export const UPDATE_USERLOGIN = function(state, loggedInUser){
	state.loggedIn = loggedInUser;
}

export const UPDATE_FIRSTNAME = function(state, fetched){
	state.firstName = fetched;
}

export const UPDATE_PROFILE = function(state, userDetails) {
	state.profileDetails = userDetails;
}