<template>
	<v-main>
		<v-fade-transition mode="out-in">
			<router-view></router-view>
		</v-fade-transition>
	</v-main>
</template>

<script>
export default {
	name: "AuthenticationView",
};
</script>

<style></style>
