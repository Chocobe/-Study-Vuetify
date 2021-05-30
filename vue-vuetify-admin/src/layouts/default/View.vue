<template>
	<v-main>
		<v-container fluid>
			<v-fade-transition mode="out-in">
				<router-view></router-view>
			</v-fade-transition>
		</v-container>
	</v-main>
</template>

<script>
export default {
	name: "DefaultView",
};
</script>

<style></style>
