<template>
	<v-app>
		<!-- 헤더 -->
		<DefaultAppBar @toggleMenu="toggleMenu"></DefaultAppBar>

		<!-- 메뉴 -->
		<DefaultDrawer :is-drawer="isDrawer"></DefaultDrawer>

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

	data: () => ({
		// 메뉴 (v-navigation-drawer) 상태값
		isDrawer: true,
	}),

	methods: {
		// 메뉴 토글 함수
		toggleMenu() {
			this.isDrawer = !this.isDrawer;
		},
	},
};
</script>

<style></style>
