<template>
	<v-navigation-drawer
		v-bind="$attrs"
		app
		dark
		src="../../assets/image/moon-menu.jpg"
	>
		<template v-slot:img="imgProps">
			<v-img v-bind="imgProps" :gradient="gradient"></v-img>
		</template>

		<DefaultDrawerHeader></DefaultDrawerHeader>

		<v-divider />

		<DefaultDrawerList :items="items"></DefaultDrawerList>
	</v-navigation-drawer>
</template>

<script>
import DefaultDrawerHeader from "@/layouts/default/DrawerHeader.vue";
import DefaultDrawerList from "@/layouts/default/DrawerList.vue";

export default {
	name: "DefaultDrawer",

	components: {
		DefaultDrawerHeader,
		DefaultDrawerList,
	},

	data: () => {
		return {
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
					title: "Pages",
					icon: "mdi-menu",
					items: [
						// Authentication
						{
							title: "Authentication",
							icon: "mdi-security",
							items: [
								{
									title: "SignIn",
									icon: "mdi-login-variant",
									to: "/authentication/signin",
								},
								{
									title: "SignUp",
									icon: "mdi-clipboard-account-outline",
									to: "/authentication/signup",
								},
							],
						},

						// Page
						{
							title: "ProductList",
							icon: "mdi-inbox-full",
							to: "/page/product-list",
						},
					],
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
					items: [
						{
							title: "BasicTable",
							icon: "mdi-table",
							to: "/tables/basic-tables",
						},
						{
							title: "AppTable",
							icon: "mdi-table",
							to: "/tables/app-tables",
						},
					],
				},
				{
					title: "Buttons",
					icon: "mdi-gesture-tap-button",
					to: "/buttons",
				},
				{
					title: "Forms",
					icon: "mdi-format-float-right",
					items: [
						{
							title: "AppForm",
							icon: "mdi-format-float-down",
							to: "/forms/app-forms",
						},
						{
							title: "ValidationForm",
							icon: "mdi-format-float-up",
							to: "/forms/validation-forms",
						},
					],
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

				{
					title: "TransparentWrapperPage",
					icon: "mdi-cog",
					to: "/practice/transparent-wrapper-page",
				},
			],
			right: null,
		};
	},
};
</script>

<style></style>
