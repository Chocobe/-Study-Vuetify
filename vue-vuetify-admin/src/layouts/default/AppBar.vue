<template>
	<v-app-bar app color="primary" dark>
		<v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
	</v-app-bar>
</template>

<script>
export default {
	name: "AppBar",

	methods: {
		openMenu() {
			this.$emit("openMenu");
		},
	},
};
</script>

<style></style>
