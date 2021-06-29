<template lang="pug">
navigation-bar(title="Messages")
	template(#left)
		navigation-bar-button(label="Edit")
	template(#right)
		navigation-bar-button(glyph="plus")
list-view(:list="records" v-slot="records")
	.list-item.message-preview(@click="openConversation(records.item.contactID)")
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
		const { records } = useStore('conversations')
		return { records }
	}

}
</script>

<style lang="stylus" scoped>
.view
	display: flex
	flex-direction: column
	height: 100%
	// height: 80vh
	// grid-template-columns: 1fr
	// grid-template-rows: max-content 1fr
	// overflow: scroll
	.navigation-bar
		// position: sticky
		// top: 0
		flex: 1 0 max-content
	.list-view
		flex: 1 1 auto
		overflow-y: auto
		min-height: 0px

// .recents
// 	height: 100%
// 	// display: flex
</style>

