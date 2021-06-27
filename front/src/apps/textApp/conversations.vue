<template lang="pug">
.recents
	navigation-bar(:title="`Messages (${records.length})`")
		template(#left)
			navigation-bar-button(label="Edit")
		template(#right)
			navigation-bar-button(glyph="plus")
	list-view(:list="records")
		template(#default="records")
			.message-preview(@click="openConversation(records.item.contactID)")
				.unread
				.message-body
					.header
						.full-name
							span.last-name {{records.item.lastName}}&nbsp;
							span.first-name {{records.item.firstName}}
						.time {{$unixTime(records.item.created)}}
					.message {{records.item.messages[0].text[0]}}
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
	name: "textMessages",
	components: {navigationBar, navigationBarButton, toggleButton, listView},
	methods: {
		openConversation(id) {
			this.$router.push({name: 'textApp_conversation', params: {id}})
		}
	},
	setup() {
		document.title = "All Messages | iOS"
		const {records, getRecords} = useStore('messages')
		onMounted(() => getRecords())
		return {records}
	}

}
</script>

<style lang="stylus" scoped>
.recents
	height: 100%
</style>

