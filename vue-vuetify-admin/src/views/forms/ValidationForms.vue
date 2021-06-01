<template>
	<v-container fluid>
		<v-card>
			<v-card-title> Form Validation </v-card-title>

			<v-card-text>
				<validation-observer v-slot="{ invalid }" ref="observer">
					<v-form @submit.prevent="submit">
						<validation-provider
							v-slot="{ errors }"
							name="Name"
							rules="required|max:10"
						>
							<v-text-field
								v-model="name"
								label="Name"
								counter="10"
								:error-messages="errors"
							></v-text-field>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							name="PhoneNumber"
							:rules="{ required: true, numeric: true, digits: 11 }"
						>
							<v-text-field
								v-model="phoneNumber"
								label="Phone Number"
								name="PhoneNumber"
								counter="11"
								:error-messages="errors"
							></v-text-field>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							name="E-Mail"
							:rules="{ required: true, email: true }"
						>
							<v-text-field
								v-model="email"
								label="E-Mail"
								name="Email"
								:error-messages="errors"
							></v-text-field>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							name="셀렉트"
							:rules="{ required: true }"
						>
							<v-select
								v-model="select"
								label="셀렉트"
								:error-messages="errors"
								:items="selectBoxList"
								item-text="key"
								item-value="val"
							></v-select>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							name="체크박스"
							:rules="{ required: { allowFalse: false } }"
						>
							<v-checkbox
								v-model="check"
								label="체크박스"
								:error-messages="errors"
							></v-checkbox>
						</validation-provider>

						<v-btn
							type="submit"
							class="mr-4"
							color="primary"
							:disabled="invalid"
						>
							전송
						</v-btn>

						<v-btn @click="clear">초기화</v-btn>
					</v-form>
				</validation-observer>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: "ValidationForms",

	data: () => {
		return {
			name: null,
			phoneNumber: null,
			email: null,
			select: null,
			check: false,

			selectBoxList: [
				{
					key: "아이템 1",
					val: 1,
				},
				{
					key: "아이템 2",
					val: 2,
				},
				{
					key: "아이템 3",
					val: 3,
				},
			],
		};
	},

	methods: {
		async submit() {
			const isValid = await this.$refs.observer.validate();

			if (isValid) {
				alert("양식 제출");
			}
		},

		clear() {
			this.name = null;
			this.phoneNumber = null;
			this.email = null;
			this.select = null;
			this.check = false;

			this.$nextTick(() => {
				this.$refs.observer.reset();
			});
		},
	},
};
</script>

<style></style>
