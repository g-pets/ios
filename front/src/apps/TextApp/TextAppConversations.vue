<template lang="pug">
navigation-bar(title="Messages")
	template(#left)
		navigation-bar-button(label="Edit")
	template(#right)
		navigation-bar-button(glyph="plus")
list-view(:list="records" v-slot="records")
	.list-item.message-preview(@click="openConversation(records.item.contactID)")
		.message-badge(:class="{unread: isUnread(records.item.messages)}")
		.message-body
			.header
				.full-name
					span.last-name {{records.item.lastName}}&nbsp;
					span.first-name {{records.item.firstName}}
				.time {{$unixTime(records.item.lastMessageDate)}}
			.message {{lastMessage(records.item.messages[records.item.messages.length-1].text[0])}}
		glyph(name="arrow_more")
</template>


<script>
import useStore from "~/store/store"
import { useRouter } from "vue-router"
import navigationBar from "~/components/ui/navigationBar.vue"
import navigationBarButton from "~/components/Buttons/NavigationBarButton.vue"
import toggleButton from "~/components/Buttons/ToggleButton.vue"
import listView from "~/components/ui/listView.vue"
export default {
	components: { navigationBar, navigationBarButton, toggleButton, listView },
	setup() {
		document.title = "All Messages | iOS"
		const router = useRouter()
		const { records } = useStore("conversations")
		const openConversation = (id) => router.push({name: "TextAppConversation", params: {id}})
		const lastMessage = (message) => message.substring(0, 60) + "..."
		const isUnread = (messages) => messages.filter(message => message.unread).length
		return { records, openConversation, lastMessage, isUnread }
	}
}
</script>


<style lang="stylus" scoped>
.view
	display: flex
	flex-direction: column
	height: 100%
	.navigation-bar
		flex: 1 0 max-content
	.list-view
		flex: 1 1 auto
		overflow-y: auto
		min-height: 0px
</style>

