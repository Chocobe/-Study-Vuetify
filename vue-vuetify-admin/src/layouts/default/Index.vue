<template>
	<v-app>
		<!-- 헤더 -->
		<DefaultAppBar></DefaultAppBar>

		<!-- 메뉴 -->
		<DefaultDrawer></DefaultDrawer>

		<!-- 컨텐츠 -->
		<DefaultView></DefaultView>
	</v-app>
</template>

<script>
import DefaultAppBar from "@/layouts/default/AppBar.vue";
import DefaultDrawer from "@/layouts/default/Drawer.vue";
import DefaultView from "@/layouts/default/View.vue";

export default {
	name: "DefaultLayout",

	components: {
		DefaultAppBar,
		DefaultDrawer,
		DefaultView,
	},
};
</script>

<style></style>
