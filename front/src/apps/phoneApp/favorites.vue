<template lang="pug">
.favorites
	navigation-bar(title="Favorites")
		template(#left)
			navigation-bar-button(label="Edit")
		template(#right)
			navigation-bar-button(glyph="plus")
	list-view(:list="sortedContacts")
		template(#default="sortedContacts")
			.full-name
				span.last-name {{sortedContacts.item.lastName}}&nbsp;
				span.first-name {{sortedContacts.item.firstName}}
			glyph(name="arrow_more")
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
	computed: {
		sortedContacts() {
			return this.$sortObjects(this.favorites, 'lastName')
		}
	},
	setup() {
		document.title = "Favorite Contacts | iOS"
		const {records, getRecords} = useStore('contacts')
		onMounted(() => getRecords())
		const favorites = computed(() => {
			return records.value.filter(contact => contact.favorite)
		})
		return {favorites}
	}
}
</script>

<style lang="stylus" scoped>
.favorites
	height: 100%
</style>

