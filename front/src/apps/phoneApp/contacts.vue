<template lang="pug">
navigation-bar(title="All Contacts")
	template(#right)
		navigation-bar-button(glyph="plus")
list-view(:list="sortedContacts")
	template(#default="sortedContacts")
		.full-name
			span.last-name {{sortedContacts.item.lastName}}&nbsp;
			span.first-name {{sortedContacts.item.firstName}}
		//- glyph(name="arrow_more")
</template>


<script>
import useStore from "~/store/store"
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/buttons/navigationBarButton.vue'
import toggleButton from '~/components/buttons/toggleButton.vue'
import listView from "~/components/ui/listView.vue"
import {onMounted} from 'vue'
export default {
	name: "Recents",
	components: {navigationBar, navigationBarButton, toggleButton, listView},
	computed: {
		sortedContacts() {
			return this.$sortObjects(this.contacts, 'lastName')
		}
	},
	setup() {
		document.title = "Contacts | iOS"
		const {records, getRecords} = useStore('contacts')
		onMounted(() => getRecords())
		return {contacts: records}
	}
}
</script>
