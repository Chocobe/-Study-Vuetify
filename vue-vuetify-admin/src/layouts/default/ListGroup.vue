<template>
	<v-list-group :prepend-icon="item.icon">
		<template v-slot:activator>
			<v-list-item-content>
				<v-list-item-title>
					{{ item.title }}
				</v-list-item-title>
			</v-list-item-content>
		</template>

		<template v-for="(child, index) in item.items">
			<div :key="index" class="pl-3">
				<template v-if="child.items">
					<DefaultListGroup
						:key="`sub-group-${index}`"
						:item="child"
					></DefaultListGroup>
				</template>

				<template v-else>
					<DefaultListItem
						:key="`child-${index}`"
						:item="child"
					></DefaultListItem>
				</template>
			</div>
		</template>
	</v-list-group>
</template>

<script>
import DefaultListItem from "@/layouts/default/ListItem.vue";

export default {
	name: "DefaultListGroup",

	components: {
		DefaultListItem,
	},

	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style></style>
