<template>
	<v-container class="fill-height">
		<v-row justify="center">
			<v-col cols="auto">
				<router-link to="/">
					<v-img
						src="@/assets/image/moon-menu.jpg"
						width="100"
						height="80"
						position="top"
						class="mx-auto mb-6"
					></v-img>
				</router-link>

				<v-card width="460">
					<v-card-text class="text-center px-12 py-16">
						<ValidationObserver v-slot="{ invalid }" ref="observer">
							<v-form @submit.prevent="signUp">
								<div class="text-h4 font-weight-black mb-10">회원가입</div>

								<ValidationProvider
									v-slot="{ errors }"
									name="이메일"
									:rules="{ email: true, required: true }"
								>
									<v-text-field
										v-model="userEmail"
										label="이메일"
										prepend-icon="mdi-email"
										clearable
										:error-messages="errors"
									></v-text-field>
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors }"
									name="비밀번호"
									:rules="{ required: true, max: { length: 10 } }"
								>
									<v-text-field
										v-model="userPassword"
										clearable
										label="비밀번호"
										prepend-icon="mdi-lock-outline"
										:error-messages="errors"
									></v-text-field>
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors }"
									name="비밀번호 확인"
									:rules="{
										required: true,
										confirmed: { target: '비밀번호' },
									}"
								>
									<v-text-field
										v-model="rePassword"
										clearable
										prepend-icon="mdi-lock"
										label="비밀번호 확인"
										:error-messages="errors"
									></v-text-field>
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors, validate }"
									name="커스텀"
									:rules="{ required: true, max: { length: 5 } }"
								>
									<p>커스텀 메시지: {{ errors }}</p>

									커스텀 입력:
									<input type="text" :value="myCustom" @input="validate" />
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors }"
									name="커스텀 검사2"
									:rules="{ required: true }"
									ref="myCustom2Provider"
								>
									<p>커스텀2 메시지: {{ errors }}</p>

									커스텀2 입력:
									<input
										type="text"
										:value="myCustom2"
										@input.stop="onChangeMyCustom2"
									/>
								</ValidationProvider>

								<v-btn
									type="submit"
									x-large
									color="primary"
									block
									rounded
									class="mt-6"
									:disabled="invalid"
								>
									가입하기
								</v-btn>
							</v-form>
						</ValidationObserver>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => {
		return {
			userEmail: null,
			userPassword: null,
			rePassword: null,

			myCustom: null,
			myCustom2: null,
		};
	},

	methods: {
		/**
		 * param { FormEvent } a
		 */
		async signUp(a) {
			console.log("a: ", a);
			const observer = this.$refs.observer;

			if (await observer.validate()) {
				alert("회원가입 요청");
			} else {
				console.log("회원가입 유효성 검사 실패");
			}
		},

		async onChangeMyCustom2(event) {
			console.log("event: ", event);

			this.myCustom2 = event.target.value;
			console.log("myCustom2: ", this.myCustom2);

			const provider = this.$refs.myCustom2Provider;
			const { valid } = await provider.validate(event);

			console.log("resultObj: ", valid);

			if (valid) {
				console.log("(통과) valid: ", valid);
			} else {
				console.log("(실패) valid: ", valid);
			}
		},
	},
};
</script>

<style></style>
