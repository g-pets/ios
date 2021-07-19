<template lang="pug">
.app-view.phone-app-recents.flex-column-container.coming-soon
	h2 Coming Soon
	//- navigation-bar
	//- 	template(#center)
	//- 		toggle-button(id="recents-calls" :data="sections" v-model="section")
	//- 	template(#right)
	//- 		navigation-bar-button(label="Clear" @click="deleteAllRecords")
	//- table-view(:list="sortedRecords" v-slot="sortedRecords")
	//- 	.list-item(@click="callContact(sortedRecords.item.phoneNumber.raw)" :class="{missed:sortedRecords.item.missed}")
	//- 		.full-name(v-if="sortedRecords.item.lastName")
	//- 			span.last-name {{sortedRecords.item.lastName}}&nbsp;
	//- 			span.first-name {{sortedRecords.item.firstName}}
	//- 		.phone-number(v-else) {{$phoneNumber(sortedRecords.item.phoneNumber.raw)}}
</template>

<script>
// import { ref, computed } from "vue"
// import useStore from "~/store/store"
// import AppFunctions from "~/core/AppFunctions"
// import { sortObjectsByInt } from "~/core/AppHelpers"
export default {
	setup() {
		document.title = "Phone App - Recents | iOS 1.0"
		// const { records, deleteAllRecords } = useStore("calls")
		// const { callContact } = AppFunctions()
		// const section = ref({value: "all", title: "All"})
		// const sections = [
		// 	{value: "all", title: "All"},
		// 	{value: "missed", title: "Missed"}
		// ]
		// const sortedRecords = computed(() => {
		// 	if(section.value.value == "all") {
		// 		return sortObjectsByInt(records.value, "date")
		// 	} else {
		// 		let missed = records.value.filter(call => call.missed)
		// 		return sortObjectsByInt(missed, "date")
		// 	}
		// })

		// return { sortedRecords, deleteAllRecords, section, sections, callContact }
	}
}
</script>

<style lang="stylus" scoped>
// .phone-number
// 	font-weight: bold
// .missed
// 	color: red
</style>

