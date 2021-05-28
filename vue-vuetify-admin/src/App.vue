<template>
	<v-app>
		<!-- 헤더 -->
		<v-app-bar app color="primary" dark>
			<!-- <div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
				/>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
					width="100"
				/>
			</div> -->

			<v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>

			<v-spacer />

			<!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn> -->
		</v-app-bar>

		<!-- 메뉴 -->
		<!-- <v-navigation-drawer permanent> -->
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
				title: "GridSystem",
				icon: "mdi-image",
				to: "/grid-system",
			},

			{
				title: "Breakpoint",
				icon: "mdi-help-box",
				to: "/breakpoint",
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
