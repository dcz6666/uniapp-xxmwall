<template>
	<view class="classLayout pageBg">
		<view class="classify">
			<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { apiGetClassify} from "@/api/apis.js"
let classifyList = ref([])
const getClassify = async () => {
	let res = await apiGetClassify({
		pageSize:15
	});
	classifyList.value = res.data
}
getClassify()
</script>

<style lang="scss" scoped>
	.classify {
		padding: 30rpx;
		display: grid;
		gap:15rpx;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
