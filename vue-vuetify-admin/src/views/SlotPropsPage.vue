<template>
	<div>
		<h1>Slot Props</h1>

		<ParentComponent></ParentComponent>
	</div>
</template>

<script>
import ParentComponent from "../components/ParentComponent.vue";

export default {
	components: {
		ParentComponent,
	},
};
</script>
