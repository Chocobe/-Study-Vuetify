<template>
	<div>
		<h1>Transpare Wrapper Page</h1>

		<hr class="my-5" />

		<MyInput v-model="value1"></MyInput>

		<hr class="my-5" />

		<MyInputWrapper v-model="value2" title="Hello, Transparent Wrapper Pattern">
			<template v-slot:header="headerProps">
				<p>{{ headerProps }}</p>
			</template>

			<template v-slot="defaultProps">
				<p>{{ defaultProps }}</p>
			</template>

			<template v-slot:footer="footerProps">
				<p>{{ footerProps }}</p>
			</template>
		</MyInputWrapper>

		<hr class="my-5" />

		<MyInputWrapper v-model="value3" title="Hello World"></MyInputWrapper>
	</div>
</template>

<script>
import MyInput from "@/components/myComp/MyInput.vue";
import MyInputWrapper from "@/components/myComp/MyInputWrapper.vue";

export default {
	components: {
		MyInput,
		MyInputWrapper,
	},

	data: () => {
		return {
			value1: "asdf",
			value2: null,
			value3: null,
		};
	},
};
</script>

<style></style>
