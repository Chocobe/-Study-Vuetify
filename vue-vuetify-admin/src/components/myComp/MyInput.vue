<template>
	<div class="myInput">
		<slot name="header" v-bind="headerData">
			<div>
				<p>{{ headerData.val1 }}</p>
				<p>{{ headerData.val2 }}</p>
			</div>
		</slot>

		<slot v-bind="defaultData">
			<div>
				<p>{{ defaultData.val1 }}</p>
				<p>{{ defaultData.val2 }}</p>
			</div>
		</slot>

		<slot name="footer" v-bind="footerData">
			<div>
				<p>{{ footerData.val1 }}</p>
				<p>{{ footerData.val2 }}</p>
			</div>
		</slot>

		<input
			type="text"
			:value="value"
			@input="emitInput"
			class="myInput_input"
		/>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: null,
		},
	},

	data: () => {
		return {
			headerData: {
				val1: "header val 1",
				val2: "header val 2",
			},

			defaultData: {
				val1: "default val 1",
				val2: "default val 2",
			},

			footerData: {
				val1: "footer val 1",
				val2: "footer val 2",
			},
		};
	},

	methods: {
		emitInput(event) {
			const value = event.target.value;
			this.$emit("input", value);
		},
	},
};
</script>

<style>
.myInput_input {
	padding: 0.5rem;

	border: 3px solid #777;
}
</style>
