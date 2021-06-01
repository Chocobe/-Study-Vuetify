<template>
	<v-container fluid>
		<v-card class="mt-5">
			<v-card-text>
				<AppTextField
					v-model="customValue"
					label="이름"
					:counter="10"
					placeholder="이름을 입력해 주세요"
				></AppTextField>

				<!-- <AppTextField
					v-model="customValue"
					label="나이"
					:counter="10"
					placeholder="나이를 입력해 주세요"
				></AppTextField>

				<AppTextField
					v-model="customValue"
					label="닉네임"
					:counter="10"
					placeholder="닉네임을 입력해 주세요"
				></AppTextField> -->
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import AppTextField from "@/components/app/TextField.vue";

export default {
	name: "AppForms",

	components: {
		AppTextField,
	},

	data: () => {
		return {
			customValue: null,
		};
	},
};
</script>

<style></style>
