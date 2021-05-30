<template>
	<v-app>
		<!-- 헤더 -->
		<v-app-bar app color="primary" dark>
			<v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
		</v-app-bar>

		<!-- 메뉴 -->
		<v-navigation-drawer
			v-model="isDrawer"
			app
			dark
			src="./assets/image/moon-menu.jpg"
		>
			<template v-slot:img="imgProps">
				<v-img v-bind="imgProps" :gradient="gradient"></v-img>
			</template>

			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6"> Application </v-list-item-title>
					<v-list-item-subtitle> subtext </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider />

			<v-list dense nav>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					:to="item.to"
					link
					:class="{ purple: item.myCustom }"
					:active-class="item.myCustom ? 'blue' : 'primary'"
					class="py-1"
				>
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
// import "@/styles/overrides.scss";

export default {
	data: () => ({
		// 메뉴 (v-navigation-drawer) 상태값
		isDrawer: true,

		// 메뉴 배경 Gradient
		gradient: "rgba(0, 0, 0, 0.7), rgba(55, 100, 222, 0.7)",

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
				title: "Typography",
				icon: "mdi-data-matrix-scan",
				to: "/typography",
			},
			{
				title: "Tables",
				icon: "mdi-file-table-box-multiple-outline",
				to: "/tables",
			},
			{
				title: "Buttons",
				icon: "mdi-gesture-tap-button",
				to: "/buttons",
			},
			{
				title: "Forms",
				icon: "mdi-format-float-right",
				to: "/forms",
			},
			{
				title: "Icons",
				icon: "mdi-emoticon-lol-outline",
				to: "/icons",
			},

			// 추가 연습용 페이지
			{
				title: "Breakpoint2",
				icon: "mdi-basket-minus-outline",
				to: "/breakpoint2",
				myCustom: true,
			},
			{
				title: "Slot Props",
				icon: "mdi-share-variant-outline",
				to: "/slot-props",
				myCustom: true,
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
