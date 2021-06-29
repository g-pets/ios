<template lang="pug">
navigation-bar(title="All Contacts")
	template(#right)
		navigation-bar-button(glyph="plus" v-slot:right)
list-view(:list="sortedContacts" v-slot="sortedContacts")
	.list-item(@click="openContact(sortedContacts.item.id)")
		.full-name
			span.last-name {{sortedContacts.item.lastName}}&nbsp;
			span.first-name {{sortedContacts.item.firstName}}
</template>


<script>
import useStore from "~/store/store"
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/buttons/navigationBarButton.vue'
import toggleButton from '~/components/buttons/toggleButton.vue'
import listView from "~/components/ui/listView.vue"
export default {
	name: "Contacts",
	components: {navigationBar, navigationBarButton, toggleButton, listView},
	computed: {
		sortedContacts() {
			return this.$sortObjects(this.records, 'lastName')
		}
	},
	methods: {
		openContact(id) {
			this.$router.push({name: 'phoneApp_contact', params: {id}})
		},
	},
	setup() {
		document.title = "Contacts | iOS"
		const { records } = useStore('contacts')
		return { records }
	}
}
</script>
