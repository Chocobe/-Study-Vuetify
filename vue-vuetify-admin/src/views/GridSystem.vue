<template>
	<div>
		<!-- v-row, v-col 테스트 -->
		<v-container fluid>
			<h1 class="mb-3">v-row, v-col</h1>
			<v-row>
				<v-col>
					<v-card class="pa-3" outlined> Column 0 - 0 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 0 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 0 - 2 </v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-col>
					<v-card class="pa-3" outlined> Column 1 - 0 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 1 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 1 - 2 </v-card>
				</v-col>
			</v-row>
		</v-container>

		<!-- v-space 테스트 -->
		<h1 class="mt-3">v-space</h1>

		<v-card class="mt-5 pa-3" outlined>
			<v-row>
				<v-col>
					<v-card class="pa-3" outlined> Column 2 - 0 </v-card>
				</v-col>

				<v-spacer></v-spacer>

				<v-col>
					<v-card class="pa-3" outlined> Column 2 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 2 - 2 </v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-spacer></v-spacer>

				<v-col>
					<v-card class="pa-3" outlined> Column 3 - 0 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 3 - 1 </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined> Column 3 - 2 </v-card>
				</v-col>
			</v-row>
		</v-card>

		<!-- align 속성 테스트 -->
		<h1 class="mt-5">align 속성</h1>

		<v-card class="mt-5 pa-3" outlined>
			<v-row class="green" style="height: 150px">
				<v-col>
					<v-card class="pa-3" outlined>align: start</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: start</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: start</v-card>
				</v-col>
			</v-row>

			<v-row class="pink" style="height: 150px" align="end">
				<v-col>
					<v-card class="pa-3" outlined>align: end</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: end</v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3" outlined>align: end</v-card>
				</v-col>
			</v-row>

			<v-row class="purple" style="height: 150px" align="center">
				<v-col>
					<v-card class="pa-3"> align: center </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3"> align: center </v-card>
				</v-col>

				<v-col>
					<v-card class="pa-3"> align: center </v-card>
				</v-col>
			</v-row>
		</v-card>

		<!-- align-self 테스트 -->
		<h1 class="mt-5">align-self 테스트</h1>

		<v-card class="pa-3" outlined>
			<v-row class="cyan" style="height: 150px">
				<v-col align-self="start">
					<v-card class="pa-3"> align-self: start </v-card>
				</v-col>

				<v-col align-self="end">
					<v-card class="pa-3" outlined> align-self: end </v-card>
				</v-col>

				<v-col align-self="center">
					<v-card class="pa-3" outlined> align-self: center </v-card>
				</v-col>
			</v-row>
		</v-card>

		<!-- justify 테스트 -->
		<h1 class="mt-5">justify 테스트</h1>

		<v-card class="mt-5 pa-3">
			<v-row class="green" justify="start">
				<v-col md="4">
					<v-card class="pa-3"> justify: start </v-card>
				</v-col>

				<v-col md="4">
					<v-card class="pa-3"> justify: start </v-card>
				</v-col>
			</v-row>

			<v-row class="pink" justify="end">
				<v-col md="4">
					<v-card class="pa-3" outlined> justify: end </v-card>
				</v-col>

				<v-col md="4">
					<v-card class="pa-3" outlined> justify: end </v-card>
				</v-col>
			</v-row>

			<v-row class="purple" justify="center">
				<v-col md="4">
					<v-card class="pa-3" outlined> justify: center </v-card>
				</v-col>

				<v-col md="4">
					<v-card class="pa-3" outlined> justify: center </v-card>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>

<script>
export default {
	//
};
</script>

<style scoped></style>
