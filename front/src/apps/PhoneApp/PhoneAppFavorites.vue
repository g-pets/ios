<template lang="pug">
.app-view.phone-app-favorites.flex-column-container
	navigation-bar(title="Favorites")
		template(#left)
			navigation-bar-button(label="Edit")
		template(#right)
			navigation-bar-button(glyph="plus")
	table-view(:list="favorites" v-slot="favorites")
		.list-item(@click="openContact(favorites.item.id)")
			.full-name
				span.last-name {{favorites.item.lastName}}&nbsp;
				span.first-name {{favorites.item.firstName}}
			glyph(name="arrow_more")
</template>


<script>
import { computed } from "vue"
import { useRouter } from "vue-router"
import useStore from "~/store/store"
export default {
	setup() {
		document.title = "Phone App - Favorites | iOS"
		const { records } = useStore("contacts")
		const router = useRouter()
		const favorites = computed(() => records.value.filter(contact => contact.favorite))
		const openContact = (id) => router.push({name: "PhoneAppContact", params: {id}})
		return { favorites, openContact }
	}
}
</script>


