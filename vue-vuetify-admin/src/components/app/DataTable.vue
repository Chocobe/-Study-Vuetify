<template>
	<v-card>
		<v-card-title>{{ title }}</v-card-title>

		<v-data-table v-bind="$attrs" v-on="$listeners" ref="my">
			<template v-for="(slot, name) in $scopedSlots" v-slot:[name]="item">
				<slot :name="name" v-bind="item"></slot>
			</template>
		</v-data-table>
	</v-card>
</template>

<script>
export default {
	name: "AppDataTable",
	inheritAttrs: false,

	props: {
		title: {
			type: String,
			default: "App 테이블",
		},
	},
};
</script>

<style></style>
