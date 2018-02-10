<template>
	<body>
		
	</body>
</template>
<script type="text/javascript">
import axios from 'axios';
	export default {
		name: 'job-description',
		components:{},
		computed:{
		users () {
			return this.$store.state.availableJobs;
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