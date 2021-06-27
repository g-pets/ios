<template lang="pug">
.voicemail
	navigation-bar(title="Voicemail")
		template(#left)
			navigation-bar-button(label="Greeting")
		template(#right)
			navigation-bar-button(label="Speaker")
	list-view
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
	setup() {
		document.title = "Voicemail | iOS"
		const {records, getRecords} = useStore('contacts')
		onMounted(() => getRecords())
		const contacts = records
		return {contacts}
	}
}
</script>

<style lang="stylus" scoped>
.voicemail
	height: 100%
</style>

