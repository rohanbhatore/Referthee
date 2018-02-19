<template>
	<body>
	   <div class = "container">
	   		<div class = "wrap">
	   			<h3>About Role</h3>
	   				<p>Design and user experience (UX) are at the forefront of everything we do. The job of an Interaction Designer is to envision how people experience our products and bring that vision to their work life in a way that feels inspired and refined. </p>
	   				
	   				<p>In a User Interaction Designer role, you’ll tackle complex tasks and transform them into intuitive, accessible and easy-to-use designs for billions of people around the world—from the first-time user to the sophisticated expert. Achieving this goal requires collaboration with teams of Designers, Researchers, Engineers and Product Managers throughout the design process—from creating user flows and wireframes to building user interface mockups and prototypes. At each stage, you will anticipate what our users need, advocate for them and ensure that the final product surprises and delights them.</p>
	   				
	   				<p>One of the many reasons Wheelseye consistently brings innovative, world-changing products to market is because of the collaborative work we do in Product Management. With eyes focused squarely on the future, our team works closely with creative and prolific engineers to help design and develop technologies that improve access to the world's information. We're responsible for guiding products throughout the execution cycle, focusing specifically on analyzing, positioning, packaging, promoting and tailoring our solutions to all the markets where Wheelseye does business</p>
	   				
	   				<p>At Wheelseye, we leave all egos at the door and concentrate on the job at hand. We value passionate, down to earth, “can do” people who enjoy fine-tuning small details, without losing sight of the big picture. We are looking for the type of person who feels uncomfortable when a day goes by without achieving something impactful. </p>
	   				<br>
	   			<h3>Responsibilities</h3>
	   				<ul>
	   					<li>Help to define the user model and user interface for new and existing Wheelseye products and features, custom-built for an emerging market audience.</li>
	   					<li>Develop high level and/or detailed storyboards, mockups, and prototypes to effectively communicate interaction and design ideas.</li>
	   					<li>Be responsible for all stages of design, thinking strategically while executing on objectives and demonstrating great attention to detail.</li>
	   					<li>Work with Product and Engineering to drive long-term vision as well as quarterly goals and decide the strategic priorities for the product.</li>
	   				</ul>
	   			<br>
	   			<h3>Qualifications</h3>
	   				<ul>
	   					<li>Bachelor / Masters degree in any Design Allied Field(e.g. interaction, graphic, visual communications, product, industrial), HCI, CS, or a practical work experience in related field.</li>
	   					<li>2-4 years of experience in UX Design and Research.</li>
	   					<li>Experience in designing usable mobile interfaces from pre- to post-launch, with 2 or more consumer apps launched.</li>
	   					<li>Experience in designing for emerging markets and closely tracking relevant UI trends.</li>
	   					<li>Demonstrated knowledge of HTML, CSS, JavaScript, and knowledge of frontend frameworks.</li>
	   					<li>Excellent leadership, communication and teamwork skills.</li>
	   				</ul>
	   			<br>
	   			<h3>Remuneration</h3>
	   				<ul>
	   					<li>INR 6,00,000 - INR 14,00,000 Annual </li>
	   					<li>Upto .1% ESOPS</li>
	   				</ul>
	   			<br>	
	   			<h4>About Company</h4>
	   			<p>Wheelseye offers technology to empower truckers. Our software helps save costs, build safe and secure infrastructure, automate operations and streamline your business. We provide end to end technology backend from basic things like GPS live location tracking to complex tasks like driving profitability and automation in your business.</p>
	   			
	   			<p>Our Software as a Service enables data driven decision making by reading a number of connected devices. We give highest priority to security and safety of your infrastructure & data. Our platform is fully customizable and can be tailored as per the needs of your business and targets. </p>
	   			
	   			<p>We are a young and energetic team of IIT graduates having rich industry and technology experience. Our mission to become the preferred technology partner to our business partners. It is our constant endeavour to constantly create and evolve data-driven software solutions that conquer business problems and inspire smarter decisions.</p>

	   		</div>
	   	
	   </div>
	       
			
	</body>
</template>
<script type="text/javascript">
import axios from 'axios';
	export default {
		name: 'job-description',
		components:{},
		computed:{
		users () {
			return this.$store.state.jds[0];
		},
	slicers(){
			return this.$store.state.slicers;
		}
	}/*,
		beforeCreate(){//api call to get job details
			axios.get(url)
			.then((respoonse) => {
				this.profileDetails = respoonse;
				this.$store.commit('UPDATE_AVAILJOBS', this.profileDetails);
			})
			 .catch((response)=>{
          console.log("job details mein error aa gaya");
        })
		}*/,
		methods:{
			

		}
	}
</script>
<style type="text/css">
	.wrap{
		background-color: white;
		margin-left: auto;
		margin-right:auto;
		padding-right: 60px;
		padding-left: 60px;
		padding-top: 30px;
	}
</style>