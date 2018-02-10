export const state = {
	userDetails: "",
	loggedIn: false,
	firstName: "Not logged In",
	profileDetails:"",
	availableJobs:[
      { text: 'Referworthy', img: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/4988339-ef63c03905fa83b3c98e89cf7e1072fd-medium_jpg.jpg?buster=1511947430', desc:"javascript", exp:"2-5 years", location:"Hyderabad"},
      { text: 'Learn Vue', img: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/4988339-ef63c03905fa83b3c98e89cf7e1072fd-medium_jpg.jpg?buster=1511947430', desc:"javascript", exp:"2-5 years",  location:"Hyderabad"},
      { text: 'Build something awesome', img: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/4988339-ef63c03905fa83b3c98e89cf7e1072fd-medium_jpg.jpg?buster=1511947430', desc:"javascript", exp:"2-5 years",  location:"Hyderabad" }
    ],
    slicers:[{job:'UI/UX', city: "Bangalore"}, {job:"Graphic, Art direction", city:"Hyderabad"}, {job:"Automotive and industrial", city:"Mumbai"}, {job:"Web and Mobile deveopment", city:"Delhi"}, {job:"Animation, motion and Post production", city:"Chennai"}, {job:"Fashion", city:"Noida"}],
	apiResult: false
	
}
