<template>
	<v-card class="error lighten-4">
		<v-card-title>
			{{ title }}
		</v-card-title>

		<v-card-text>
			<MyInput v-bind="$attrs" v-on="$listeners">
				<template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotProps">
					<slot :name="name" v-bind="slotProps"></slot>
				</template>
			</MyInput>
		</v-card-text>
	</v-card>
</template>

<script>
import MyInput from "@/components/myComp/MyInput.vue";

export default {
	inheritAttrs: false,

	components: {
		MyInput,
	},

	props: {
		title: {
			type: String,
			default: "래퍼 컴포넌트",
		},
	},
};
</script>

<style></style>
