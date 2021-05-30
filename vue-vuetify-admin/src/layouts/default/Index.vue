<template>
	<v-app>
		<!-- 헤더 -->
		<DefaultAppBar @openMenu="openMenu"></DefaultAppBar>

		<!-- 메뉴 -->
		<DefaultDrawer v-model="isOpenMenu"></DefaultDrawer>

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
		isOpenMenu: true,
	}),

	methods: {
		// 메뉴 토글 함수
		openMenu() {
			this.isOpenMenu = !this.isOpenMenu;
		},
	},
};
</script>

<style></style>
