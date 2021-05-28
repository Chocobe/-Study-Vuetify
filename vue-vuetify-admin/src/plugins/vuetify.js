import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	breakpoint: {
		// mobileBreakpoint: "xs",
	},

	theme: {
		themes: {
			light: {
				primary: "#FF9800",
				secondary: "#EA80FC",
			},
		},
	},
});
