<!-- 国内折扣 -->
<template>
	<div>
		<NormHeader title="国内折扣"></NormHeader>
		<router-view></router-view>
	</div>
</template>
<script>
	import NormHeader from '../common/NormHeader.vue'
	export default {
		name:'InlandDiscount',
		components:{
			NormHeader
		}
	}
</script>