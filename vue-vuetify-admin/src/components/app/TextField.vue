<template>
	<label>
		{{ label }}
		<v-text-field
			class="mt-1"
			dense
			outlined
			v-bind="$attrs"
			v-on="$listeners"
		></v-text-field>
	</label>
</template>

<script>
export default {
	inheritAttrs: false,
	name: "AppTextField",

	props: {
		value: {
			type: String,
			default: null,
		},

		label: {
			type: String,
			required: false,
			default: "레이블",
		},
	},

	methods: {
		emitValue(inputValue) {
			this.$emit("input", inputValue);
		},
	},

	created() {
		console.log("this.$attrs: ", this.$attrs);
		console.log("this.$listeners: ", this.$listeners);
	},
};
</script>

<style></style>
