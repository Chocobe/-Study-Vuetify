<template>
	<div>
		<ChildComponent>
			<template #childTitle="childData">
				부모 컴포넌트에서 출력한 타이틀: {{ childData }}
			</template>
		</ChildComponent>
	</div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";

export default {
	components: {
		ChildComponent,
	},
};
</script>
