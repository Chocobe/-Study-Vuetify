<template>
	<v-app>
		<!-- 헤더 -->
		<PageAppBar></PageAppBar>

		<!-- 컨텐츠 -->
		<PageView></PageView>
	</v-app>
</template>

<script>
import PageAppBar from "@/layouts/page/AppBar.vue";
import PageView from "@/layouts/page/View.vue";

export default {
	name: "PageLayout",

	components: {
		PageAppBar,
		PageView,
	},
};
</script>

<style></style>
