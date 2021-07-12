<template lang="pug">
navigation-bar
	template(#center)
		toggle-button(id="recents-calls" :data="sections" v-model="section")
	template(#right)
		navigation-bar-button(label="Clear" @click="deleteAllRecords")
list-view(v-if="section.value == 'all'" :list="records" v-slot="records")
	.list-item(@click="openContact(records.item.id)")
		.full-name(v-if="records.item.lastName")
			span.last-name {{records.item.lastName}}&nbsp;
			span.first-name {{records.item.firstName}}
		.phone-number(v-else) {{$phoneNumber(records.item.phoneNumber.raw)}}
</template>


<script>
import { ref, computed } from "vue"
import useStore from "~/store/store"
import navigationBar from "~/components/ui/navigationBar.vue"
import navigationBarButton from "~/components/Buttons/NavigationBarButton.vue"
import toggleButton from "~/components/Buttons/ToggleButton.vue"
import listView from "~/components/ui/listView.vue"
export default {
	components: { navigationBar, navigationBarButton, toggleButton, listView },
	setup() {
		document.title = "Phone App - Recents | iOS"
		const { records, deleteAllRecords } = useStore("calls")
		const section = ref({value: "all", title: "All"})
		const sections = [
			{value: "all", title: "All"},
			{value: "missed", title: "Missed"}
		]
		const missedCalls = computed(() => records.value.filter(call => call.missed))
		return { records, missedCalls, deleteAllRecords, section, sections }
	}
}
</script>

<style lang="stylus" scoped>
.phone-number
	font-weight: bold
</style>

