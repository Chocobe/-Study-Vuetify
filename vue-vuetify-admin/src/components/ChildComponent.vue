<template>
	<div>
		<slot name="childTitle" v-bind="{ title }"></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: false,
			default: "디폴트 title",
		},
	},
};
</script>
