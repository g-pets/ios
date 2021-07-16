<template lang="pug">
.app-view.phone-app-contacts.flex-column-container
	navigation-bar(title="All Contacts")
		template(#right)
			navigation-bar-button(glyph="plus" v-slot:right)
	list-view(:list="sortedRecords" v-slot="sortedRecords")
		.list-item(@click="openRecord(sortedRecords.item.id)")
			.full-name
				span.last-name {{sortedRecords.item.lastName}}&nbsp;
				span.first-name {{sortedRecords.item.firstName}}
</template>


<script>
import { computed } from "vue"
import useStore from "~/store/store"
import { useRouter } from "vue-router"
import { sortObjects } from "~/core/AppHelpers"
import navigationBar from "~/components/ui/navigationBar.vue"
import navigationBarButton from "~/components/Buttons/NavigationBarButton.vue"
import listView from "~/components/ui/listView.vue"
export default {
	components: { navigationBar, navigationBarButton, listView },
	setup() {
		document.title = "Phone App - Contacts | iOS"
		const router = useRouter()
		const { records } = useStore("contacts")
		const sortedRecords = computed(() => sortObjects(records.value, "lastName"))
		const openRecord = (id) => router.push({name: "PhoneAppContact", params: {id}})
		return { sortedRecords, openRecord }
	}
}
</script>
