<template>
	<v-list-item
		:to="item.to"
		link
		:class="{ purple: item.myCustom }"
		:active-class="item.myCustom ? 'blue' : 'primary'"
		class="py-1"
	>
		<v-list-item-icon>
			<v-icon>{{ item.icon }}</v-icon>
		</v-list-item-icon>

		<v-list-item-content>
			<v-list-item-title>{{ item.title }}</v-list-item-title>
		</v-list-item-content>
	</v-list-item>
</template>

<script>
export default {
	name: "DefaultListItem",
	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style></style>
