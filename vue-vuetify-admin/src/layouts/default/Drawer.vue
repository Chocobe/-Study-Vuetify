<template>
	<v-navigation-drawer
		v-model="isOpenMenu"
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

import { mapState } from "vuex";

export default {
	name: "DefaultDrawer",

	components: {
		DefaultDrawerHeader,
		DefaultDrawerList,
	},

	computed: {
		...mapState("app", {
			gradient: "gradient",
			items: "items",
		}),

		isOpenMenu: {
			get() {
				return this.$store.getters["app/getIsOpenMenu"];
			},
			set(newValue) {
				this.$store.dispatch("app/toggleIsOpenMenu", newValue);
			},
		},
	},
};
</script>

<style></style>
