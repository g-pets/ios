<template lang="pug">
.contacts
	navigation-bar(title="All Contacts")
		template(#right)
			navigation-bar-button(glyph="plus")
	list-view(:list="contacts")
		template(#default="contacts")
			.full-name
				span.last-name {{contacts.item.lastName}}&nbsp;
				span.first-name {{contacts.item.firstName}}
			//- glyph(name="arrow_more")
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
		document.title = "Contacts | iOS"
		const {records, getRecords} = useStore('contacts')
		onMounted(() => getRecords())
		const contacts = computed(() => {
			records.value.sort((a, b) => {
				let fa = a.lastName.toLowerCase(),
					fb = b.lastName.toLowerCase()

				if (fa < fb) {
					return -1;
				}
				if (fa > fb) {
					return 1;
				}
				return 0;
			});
			return records.value
		})
		// const contacts = records
		return {contacts}
	}
}
</script>

<style lang="stylus" scoped>

</style>

