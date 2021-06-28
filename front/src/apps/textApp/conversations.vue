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
				.message-badge(:class="{unread: records.item.unreadMessage}")
				.message-body
					.header
						.full-name
							span.last-name {{records.item.lastName}}&nbsp;
							span.first-name {{records.item.firstName}}
						.time {{$unixTime(records.item.lastMessageDate)}}
					.message {{messagePreview(records.item.messages[records.item.messages.length-1].text[0])}}
				glyph(name="arrow_more")
	
	
</template>


<script>
import useStore from "~/store/store"
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/buttons/navigationBarButton.vue'
import toggleButton from '~/components/buttons/toggleButton.vue'
import listView from "~/components/ui/listView.vue"
import {onMounted} from 'vue'
export default {
	name: "textMessages",
	components: {navigationBar, navigationBarButton, toggleButton, listView},
	methods: {
		openConversation(id) {
			this.$router.push({name: 'textApp_conversation', params: {id}})
		},
		messagePreview(message) {
			return message.substring(0, 60) + '...'
		}
	},
	setup() {
		document.title = "All Messages | iOS"
		const {records, getRecords, sortRecords} = useStore('conversations')
		onMounted(() => getRecords())
		sortRecords('lastMessageDate')
		return {records}
	}

}
</script>

<style lang="stylus" scoped>
.recents
	height: 100%
</style>

