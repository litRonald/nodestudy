<template>
	<view class="content">
    test api
    <p>{{message}}</p>
  </view>
	
</template>
 
<script>

  import axios from 'axios' 
	export default {
		data() {
			return {
				message: 'message'
			}
		},
		onLoad() {
			
		},
		methods: {
      getApi () {
        let that = this;
        axios.get("http://localhost:8082/list_user", function(d){
          console.log(d)
					that.message = d;
				});

      }
     
    },
    created () {
      this.getApi()
    }
 
	}
</script>
 