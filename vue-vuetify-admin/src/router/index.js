import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	// Default Layout
	{
		path: "/",
		component: () => import("@/layouts/default/Index.vue"),
		children: [
			{
				path: "/",
				name: "Dashboard",
				component: () => import("@/views/Dashboard.vue"),
			},
			{
				path: "/grid-system",
				name: "Grid System",
				component: () => import("@/views/GridSystem.vue"),
			},
			{
				path: "/grid-list-page",
				name: "Grid List Page",
				component: () => import("@/views/GridListPage.vue"),
			},
			{
				path: "/breakpoint",
				name: "Breakpoint",
				component: () => import("@/views/Breakpoint.vue"),
			},
			{
				path: "/typography",
				name: "Typography",
				component: () => import("@/views/Typography.vue"),
			},
			{
				path: "/buttons",
				name: "Buttons",
				component: () => import("@/views/Buttons.vue"),
			},
			{
				path: "/icons",
				name: "Icons",
				component: () => import("@/views/Icons.vue"),
			},

			// Breakpoint2
			{
				path: "/breakpoint2",
				name: "Breakpoint2",
				component: () => import("@/views/Breakpoint2.vue"),
			},
			// Slot Props
			{
				path: "/slot-props",
				name: "Slot Props",
				component: () => import("@/views/SlotPropsPage.vue"),
			},
		],
	},

	// Tables
	{
		path: "/tables",
		name: "Tables",
		component: () => import("@/layouts/default/Index.vue"),
		children: [
			{
				path: "basic-tables",
				component: () => import("@/views/tables/BasicTables.vue"),
			},
			{
				path: "app-tables",
				component: () => import("@/views/tables/AppTables.vue"),
			},
		],
	},

	// Forms
	{
		path: "/forms",
		name: "Forms",
		component: () => import("@/layouts/default/Index.vue"),
		children: [
			{
				path: "app-forms",
				component: () => import("@/views/forms/AppForms.vue"),
			},
			{
				path: "validation-forms",
				component: () => import("@/views/forms/ValidationForms.vue"),
			},
		],
	},

	// Authentication Layout
	{
		path: "/authentication",
		component: () => import("@/layouts/authentication/Index.vue"),
		children: [
			{
				path: "signin",
				name: "Sign In",
				component: () => import("@/views/authentication/SignIn.vue"),
			},
			{
				path: "signup",
				name: "Sign Up",
				component: () => import("@/views/authentication/SignUp.vue"),
			},
		],
	},

	// Page Layout
	{
		path: "/page",
		component: () => import("@/layouts/page/Index.vue"),
		children: [
			{
				path: "product-list",
				name: "Product List",
				component: () => import("@/views/page/ProductList.vue"),
			},
		],
	},

	// MyInputPage
	{
		path: "/practice",
		component: () => import("@/layouts/default/Index.vue"),
		children: [
			{
				path: "transparent-wrapper-page",
				component: () => import("@/views/TransparentWrapperPage.vue"),
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
