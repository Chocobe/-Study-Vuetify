<template>
	<v-list dense nav expand>
		<template v-for="(item, index) in items">
			<template v-if="item.items">
				<DefaultListGroup
					:key="`group-${index}`"
					:item="item"
				></DefaultListGroup>
			</template>

			<template v-else>
				<DefaultListItem :key="`item-${index}`" :item="item"></DefaultListItem>
			</template>
		</template>
	</v-list>
</template>

<script>
import DefaultListItem from "@/layouts/default/ListItem.vue";
import DefaultListGroup from "@/layouts/default/ListGroup.vue";

export default {
	name: "DefaultDrawerList",

	components: {
		DefaultListItem,
		DefaultListGroup,
	},

	props: {
		items: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style></style>
