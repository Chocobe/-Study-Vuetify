<template>
	<v-container>
		<v-card class="pa-3">
			<v-card-title> Typography </v-card-title>

			<v-container>
				<v-card class="pa-3" outlined>
					<p class="text-h1">Header 1</p>
					<p class="text-h2">Header 2</p>

					<p class="text-h3 text-sm-h1">SubTitle 1</p>

					<p class="font-weight-black">Font Weight Black</p>
					<p class="font-weight-thin">Font- Weight Thin</p>

					<p class="text-justify">
						Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
						faucibus non, euismod id, nulla. Fusce convallis metus id felis
						luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque
						ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim.
						Praesent venenatis metus at tortor pulvinar varius. Donec venenatis
						vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut
						neque.
					</p>

					<p class="text-center">Center aligned text on all viewport sizes.</p>
					<p class="text-right">Right aligned text on all viewport sizes.</p>
				</v-card>
			</v-container>
		</v-card>

		<v-card class="mt-3">
			<v-card-title> Color </v-card-title>

			<v-container>
				<v-card class="pa-3 primary white--text font-weight-black" outlined>
					Primary
				</v-card>
				<v-card class="mt-3 pa-3 font-weight-black red--text lighten-1--text"
					>Secondary</v-card
				>
				<v-card class="mt-3 pa-3 accent">Accent</v-card>
				<v-card class="mt-3 pa-3 error">Error</v-card>
				<v-card class="mt-3 pa-3 info">Info</v-card>
				<v-card class="mt-3 pa-3 success">Success</v-card>
				<v-card class="mt-3 pa-3 warning">Warning</v-card>
			</v-container>
		</v-card>
	</v-container>
</template>

<script>
export default {};
</script>

<style></style>
