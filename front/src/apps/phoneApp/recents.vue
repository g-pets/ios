<template lang="pug">
.recents
	navigation-bar
		template(#center)
			toggle-button(id="recents-calls" :data="sections" v-model="section")
		template(#right)
			navigation-bar-button(label="Clear" @click="deleteAllRecords")
	list-view(v-if="section.value == 'all'" :list="records")
	list-view(v-else :list="missedCalls")
//- .screenshot
</template>


<script>
import useStore from "~/store/store"
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/buttons/navigationBarButton.vue'
import toggleButton from '~/components/buttons/toggleButton.vue'
import listView from "~/components/ui/listView.vue"
import {onMounted, computed} from 'vue'
export default {
	name: "Recents",
	components: {navigationBar, navigationBarButton, toggleButton, listView},
	data() {
		return {
			section: {value: "all", title: "All"},
			sections: [
				{value: "all", title: "All"},
				{value: "missed", title: "Missed"}
			],
		}
	},
	setup() {
		document.title = "Recents - Phone App | iOS"
		const {records, getRecords, deleteAllRecords} = useStore('phoneApp')
		onMounted(() => getRecords())
		const missedCalls = computed(() => {
			let missedCalls = records.value.filter(call => call.missed)
			return missedCalls
		});
		
		return {records, missedCalls, deleteAllRecords}
	}
}
</script>

<style lang="stylus" scoped>
.screenshot
	position: absolute
	top:0px
	// left: 1px
	background-image: url("/screens/phoneApp_recents.jpg")
	width: 100%
	height: 100%
	background-repeat: no-repeat
	background-size: cover
	z-index: 3
	opacity: 1
	opacity: 0.5
.recents
	height: 100%
</style>

