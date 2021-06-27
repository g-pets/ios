<template lang="pug">
.favorites
	navigation-bar(title="Favorites")
		template(#left)
			navigation-bar-button(label="Edit")
		template(#right)
			navigation-bar-button(glyph="plus")
	list-view(:list="favorites")
		template(#default="favorites")
			.full-name
				span.last-name {{favorites.item.lastName}}&nbsp;
				span.first-name {{favorites.item.firstName}}
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

