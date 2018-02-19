<template>
	<body >
		<div claSs = "jumbotron flex-container" id = "surf" >
			<div style = "display:inline-block; vertical-align:top; " class="slicers col-sm-3" >
				<div style = "font-weight: bold;" class = "slicerhead">Skills</div>
				<div v-for= "fil in slicers">
				<label class="container" >
  					<input type="checkbox" checked="checked">
  					<span class="checkmark"></span>
  					<div style = "margin:10px">{{fil.job}}</div>
				</label>
			</div>
				<div style = "font-weight: bold" class = "slicerhead">City</div>
				<div v-for= "fil in slicers">
				<label class="container" >
  					<input type="checkbox" checked="checked">
  					<span class="checkmark"></span>
  					<div style = "margin:10px">{{fil.city}}</div>
				</label>
			</div>

			</div>

					
					<div  class = "jl_list_item_container" >
						<p>Find your Dream Job</p>
						<div v-for = "todo in users">
							<router-link to = '/job-description'>
							<div class = "list_item" >
								<div  class = "list_item_img_container" >
								<span class = "item_content_img">
									<img :src="todo.img" fluid alt="Responsive image" style="max-width:120px; max-height:80px; " >
								</span>
  						</div>
      <!--<b-col cols="12" md="auto">-->
  		<div style = "color:black;" class = "job_result_item_section">
  			<div class = "jl_in">
  				<div style="flex: 1 1 0%;">{{todo.text}}</div>
       			<div>{{todo.desc}}</div>
  			</div>
       	    
       	</div>
       	<div class="job_result_item_section_2">
       		<div class = "jl_in">

       			<div class = "jriel">
       				<i class="material-icons work-exp-icon">work</i>	
       				{{todo.exp}}
       			</div>	
       			<div class = "location_container">
       		    	<i class="material-icons location">place</i>
       				<span class = "jrilc">
       					{{todo.location}}
       				</span>
       			</div>	
       		</div>
       </div>
       	<div class = "job_result_item_section_3">
       		<i class="material-icons">chevron_right</i>
       	</div>
       	
       </div>
       	</router-link>
		</div>
	</div>

			</div>
			
		
	</body>
</template>
<script type="text/javascript">
import axios from 'axios';
	export default {
		name: 'job-search',
		components:{},
		computed:{
		users () {
			return this.$store.state.availableJobs;
		},
	slicers(){
			return this.$store.state.slicers;
		}
	},/*,
		beforeCreate(){//api call to get job details
			axios.get(url)
			.then((respoonse) => {
				this.profileDetails = respoonse;
				this.$store.commit('UPDATE_AVAILJOBS', this.profileDetails);
			})
			 .catch((response)=>{
          console.log("job details mein error aa gaya");
        })
		}*/
		/*beforeCreate(){
			debugger;
			axios.get('https://authenticjobs.com/api/?api_key=15830df45c0d41fed9dfb46a1a1834bc&method=aj.jobs.search&format=json',{
				headers: {
	  					'Access-Control-Allow-Origin' : 'domain',
	  					 'Access-Control-Allow-Credentials' : 'true',

	  					'Content-Type': 'application/json',
			}
			})
			.then((response) =>{
				this.profileDetails = response;
				this.$store.commit('UPDATE_AVAILJOBS', profileDetails);
			})
			.catch((response)=>{
				console.log("job details mein error aa gaya");

			})
		},*/
		methods:{
			

		}
	}
</script>
<style>
	.jl_list_item_container{
		flex: auto;
    float: right;
    margin-top: 0px;
    padding-top: 30px;
    margin-right: 60px;
    min-width: 700px;
	}
	.jl_list_item_wrpr{
		margin-bottom: 130px;
	}
	
	.well{
		background-color: white;
	}
	.router-link{
		text-decoration: none;
		outline:none;
		color:inherit;
	}
	.jrilc{
		opacity: .5;
    	color: #131418;
    	font-size: 14px;
	}
	.location_container{
		align-items: center;
		display: flex;
	}
	.location{
		font-size: 16px;
    	opacity: .5;
    	color: #131418;
    	margin-right: 5px;
	}
	
	.material-icons{
		font-family: 'Material Icons';
    	font-weight: normal;
    	font-style: normal;
    	line-height: 1;
    	letter-spacing: normal;
    	text-transform: none;
    	display: inline-block;
    	white-space: nowrap;
    	word-wrap: normal;
    	direction: ltr;
	}
	.work-exp-icon{

    font-size: 16px;
    opacity: .6;
    color: #131418;
    margin-right: 5px;
	}
	.jriel{
		display: flex;
		color: #131418;   
    	align-items: center;
    	line-height: 19px;
    	margin-bottom: 5px;
    	opacity: .6;
	}
	/*styling for Job div*/
	.list_item{
		align-self: flex-start;
		padding:20px;
		margin: 10px 12px;
		display: flex;
		position: relative;
		background-color: white;
		align-items: center;

	}
	.item_content_img{
		align-self: start;
    	text-align: center;
    	margin-left: auto;
    	margin-right: auto;
	}
	.list_item_img_container{
		width:200px;
		height:auto;
		display: flex;
		float:left;
		flex: none;
	}
	.job_result_item_section{
		display: flex;
		width: 100%;
		flex:1 1;
		overflow: hidden;
		padding-left: 10px;
		word-wrap: break-word;
	}
	.jl_in{
		width:100%;
	}

	.job_result_item_section_2{
		display: flex;
    	
    	flex: 1 1;
    	width: 100%;
    	overflow: hidden;
    	padding-left: 10px;
    	word-wrap: break-word;
	}
	.job_result_item_section_3{
		flex: none;
    	display: flex;
    	align-self: center;
	}

	.slicerhead{
		padding-bottom:15px;
	}
	.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: white;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #3EC2A2;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.job-desc{
	margin-right: 10px;
}
	/*#output{
		background-color:white;
		padding:25px;
		margin:25px;
		margin-top:10px;
		overflow:auto;
		float:right;
		
	}*/
	.flex-container{
		display:flex;
		
	}
	 
      #surf{
      	padding: 5px;
      	margin: 20px;
      	overflow: auto;

      }
      
      .filters{
      	padding:20px;
      	margin:5px;
      }
</style>
