<template>
	<div>
		<!-- cols 개수 설정 -->
		<h1>cols 개수 설정</h1>

		<v-container class="mt-3" fluid>
			<v-row>
				<template v-for="i in 12">
					<v-col :key="i" cols="12" sm="6" md="4" lg="3">
						<v-card class="pa-3"> Column {{ i }} </v-card>
					</v-col>
				</template>
			</v-row>
		</v-container>

		<!-- cols="auto" 설정 -->
		<h1 class="mt-5">cols="auto" 설정</h1>

		<v-container class="mt-3" fluid>
			<v-row>
				<template v-for="i in 12">
					<v-col :key="i" cols="auto">
						<v-card class="pa-3" outlined> Column {{ i }} </v-card>
					</v-col>
				</template>
			</v-row>
		</v-container>

		<!-- Breakpoint 별 cols 설정 -->
		<h1 class="mt-5">Breakpoint 별 cols 설정</h1>

		<v-container class="mt-3" fluid>
			<v-row>
				<template v-for="i in 12">
					<v-col :key="i" cols="2" sm="6" md="4" lg="3" xl="1">
						<v-card class="pa-3"> Column {{ i }} </v-card>
					</v-col>
				</template>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
