<template>
	<div>
		<h1><span class="yellow">md</span> Breakpoint 테스트</h1>

		<v-container fluid>
			<v-row class="pink">
				<v-col md="12">
					<v-card class="pa-3" outlined> md: 12 </v-card>
				</v-col>
			</v-row>

			<v-row class="blue">
				<v-col md="10">
					<v-card class="pa-3" outlined> md: 10 </v-card>
				</v-col>
			</v-row>

			<v-row class="green">
				<v-col md="8">
					<v-card class="pa-3" outlined> md: 8 </v-card>
				</v-col>
			</v-row>

			<v-row class="pink">
				<v-col md="6">
					<v-card class="pa-3"> md: 6 </v-card>
				</v-col>
			</v-row>

			<v-row class="blue">
				<v-col md="4">
					<v-card class="pa-3" outlined> md: 4 </v-card>
				</v-col>
			</v-row>

			<v-row class="green">
				<v-col md="2">
					<v-card class="pa-3" outlined> md: 2 </v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	//
};
</script>

<style></style>
