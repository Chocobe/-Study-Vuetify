<template>
	<v-app>
		<!-- 컨텐츠 -->
		<AuthenticationView></AuthenticationView>
	</v-app>
</template>

<script>
import AuthenticationView from "@/layouts/authentication/View.vue";

export default {
	name: "AuthenticationLayout",

	components: {
		AuthenticationView,
	},
};
</script>

<style></style>
