import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: () => import("@/views/Dashboard.vue"),
	},
	{
		path: "/grid-system",
		component: () => import("@/views/GridSystem.vue"),
	},
	{
		path: "/grid-list-page",
		component: () => import("@/views/GridListPage.vue"),
	},
	{
		path: "/breakpoint",
		component: () => import("@/views/Breakpoint.vue"),
	},
	{
		path: "/typography",
		component: () => import("@/views/Typography.vue"),
	},
	{
		path: "/tables",
		component: () => import("@/views/Tables.vue"),
	},
	{
		path: "/forms",
		component: () => import("@/views/Forms.vue"),
	},
	{
		path: "/buttons",
		component: () => import("@/views/Buttons.vue"),
	},
	{
		path: "/icons",
		component: () => import("@/views/Icons.vue"),
	},

	// Breakpoint2
	{
		path: "/breakpoint2",
		component: () => import("@/views/Breakpoint2.vue"),
	},
	// Slot Props
	{
		path: "/slot-props",
		component: () => import("@/views/SlotPropsPage.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
