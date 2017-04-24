<template>
	<div>
		<NormHeader></NormHeader>
		<router-view></router-view>
	</div>
</template>
<script>
	import NormHeader from './NormHeader.vue'
	export default {
		name:'InlandDiscount',
		components:{
			NormHeader
		}
	}
</script>