<template>
	<v-container class="fill-height">
		<v-row justify="center">
			<v-col cols="auto">
				<v-card width="460">
					<v-card-text class="text-center px-12 py-16">
						<ValidationObserver v-slot="{ invalid }" ref="observer">
							<v-form @submit.prevent="login">
								<div class="text-h4 font-weight-black mb-10">로그인</div>

								<ValidationProvider
									v-slot="{ errors }"
									name="이메일"
									:rules="{ required: true, email: true }"
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
									:rules="{ required: true }"
								>
									<v-text-field
										v-model="userPassword"
										label="비밀번호"
										prepend-icon="mdi-lock-outline"
										clearable
										type="password"
										:error-messages="errors"
									></v-text-field>
								</ValidationProvider>

								<v-btn
									block
									color="primary"
									rounded
									x-large
									class="mt-6"
									type="submit"
									:disabled="invalid"
									>로그인</v-btn
								>

								<div class="mt-5">
									<router-link to="/" class="text-decoration-none">
										홈
									</router-link>
									|
									<router-link
										to="/authentication/signup"
										class="text-decoration-none"
									>
										회원가입
									</router-link>
								</div>
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
		};
	},

	methods: {
		async login() {
			const observer = this.$refs.observer;

			if (await observer.validate()) {
				alert("로그인 요청");
			} else {
				console.log("로그인 유효성 검사 실패");
			}
		},
	},
};
</script>

<style></style>
