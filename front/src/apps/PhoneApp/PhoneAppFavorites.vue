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
import { computed } from "vue"
import { useRouter } from "vue-router"
import useStore from "~/store/store"
import navigationBar from "~/components/ui/navigationBar.vue"
import navigationBarButton from "~/components/Buttons/NavigationBarButton.vue"
import listView from "~/components/ui/listView.vue"
export default {
	components: { navigationBar, navigationBarButton, listView },
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


