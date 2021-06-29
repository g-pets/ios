<template lang="pug">
navigation-bar(title="Favorites")
	template(#left)
		navigation-bar-button(label="Edit")
	template(#right)
		navigation-bar-button(glyph="plus")
list-view(:list="favorites" v-slot="favorites")
	.list-item(@click="openContact(favorites.item.id)")
		.full-name
			span.last-name {{favorites.item.lastName}}&nbsp;
			span.first-name {{favorites.item.firstName}}
		glyph(name="arrow_more")
</template>


<script>
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/buttons/navigationBarButton.vue'
import listView from "~/components/ui/listView.vue"
import useStore from "~/store/store"
import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
	name: "recentCalls",
	components: {navigationBar, navigationBarButton, listView},
	// computed: {
	// 	sortedContacts() {
	// 		return this.$sortObjects(this.favorites, 'lastName')
	// 	}
	// },
	setup() {
		document.title = "Favorite Contacts | iOS"
		const { records } = useStore('contacts')
		const router = useRouter()
		const favorites = computed(() => {
			return records.value.filter(contact => contact.favorite)
		})
		function openContact(id) {
			router.push({name: 'phoneApp_contact', params: {id}})
		}
		return {favorites, openContact}
	}
}
</script>


