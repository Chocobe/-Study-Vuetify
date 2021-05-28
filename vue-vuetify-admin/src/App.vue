<template>
	<v-app>
		<!-- 헤더 -->
		<v-app-bar app color="primary" dark>
			<v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
		</v-app-bar>

		<!-- 메뉴 -->
		<v-navigation-drawer v-model="isDrawer" app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6"> Application </v-list-item-title>
					<v-list-item-subtitle> subtext </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider />

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<v-container fluid>
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		// 메뉴 (v-navigation-drawer) 상태값
		isDrawer: true,

		// 메뉴 리스트 데이터
		items: [
			{
				title: "Dashboard",
				icon: "mdi-view-dashboard",
				to: "/",
			},
			{
				title: "Grid System",
				icon: "mdi-image",
				to: "/grid-system",
			},
			{
				title: "Grid List Page",
				icon: "mdi-view-dashboard",
				to: "/grid-list-page",
			},
			{
				title: "Breakpoint",
				icon: "mdi-image",
				to: "/breakpoint",
			},

			{
				title: "Breakpoint2",
				icon: "mdi-help-box",
				to: "/breakpoint2",
			},
		],
		right: null,
	}),

	methods: {
		// 메뉴 토글 함수
		toggleMenu() {
			this.isDrawer = !this.isDrawer;
		},
	},
};
</script>
