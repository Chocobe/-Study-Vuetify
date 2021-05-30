<template>
	<v-app-bar app color="primary" dark>
		<v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
	</v-app-bar>
</template>

<script>
export default {
	name: "AppBar",

	methods: {
		toggleMenu() {
			this.$emit("toggleMenu");
		},
	},
};
</script>

<style></style>
