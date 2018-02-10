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

export const UPDATE_PROFILESTATUS = function(state, result) {
	state.apiResult = result;
}

export const UPDATE_APISENDING = function(state, firstName, lastName, linkedinUrl, pictureUrl, title) {
	state.apiSending.firstName = firstName;
	state.apiSending.lastName = lastName;
	state.apiSending.linkedinUrl = linkedinUrl;
	state.apiSending.pictureUrl = pictureUrl;
	
	state.apiSending.title = title;
}