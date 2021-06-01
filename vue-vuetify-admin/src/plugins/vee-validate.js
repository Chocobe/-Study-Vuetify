import Vue from "vue";

import { ValidationObserver, ValidationProvider } from "vee-validate";

import { extend } from "vee-validate";
import {
	max,
	required,
	email,
	digits,
	numeric,
	confirmed,
} from "vee-validate/dist/rules";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

extend("max", {
	...max,
	message: (fieldName, placeholders) => {
		return `${fieldName}은(는) ${placeholders.length}자를 넘을 수 없습니다.`;
	},
});

extend("required", {
	...required,
	message: fieldName => {
		return `${fieldName}은(는) 필수 항목 입니다.`;
	},
});

extend("email", {
	...email,
	message: () => {
		return `Email 형식이 맞지 않습니다.`;
	},
});

extend("digits", {
	...digits,
	message: (fieldName, placeholders) => {
		return `${fieldName}은(는) ${placeholders.length}자가 되야 합니다.`;
	},
});

extend("numeric", {
	...numeric,
	message: fieldName => {
		return `${fieldName}은(는) 숫자만 입력할 수 있습니다.`;
	},
});

extend("confirmed", {
	...confirmed,
	message: fieldName => {
		return `${fieldName}이(가) 일치하지 않습니다.`;
	},
});
