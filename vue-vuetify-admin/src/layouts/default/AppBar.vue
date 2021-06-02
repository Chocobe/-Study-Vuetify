<template>
	<v-app-bar app color="primary" dark>
		<v-app-bar-nav-icon @click="isOpenMenu = !isOpenMenu"></v-app-bar-nav-icon>
	</v-app-bar>
</template>

<script>
export default {
	name: "AppBar",

	computed: {
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
