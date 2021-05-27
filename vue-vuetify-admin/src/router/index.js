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
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
