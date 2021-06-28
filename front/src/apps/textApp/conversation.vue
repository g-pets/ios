<template lang="pug">
navigation-bar(title="Messages")
	template(#left)
		navigation-bar-button(label="Messages" @click="goBack()")
	template(#right)
		navigation-bar-button(label="Clear")
.messages.section-scrolled(v-if="conversation")
	.message(v-for="message in conversation.messages" :class="{recieved:message.recieved}")
		p(v-for="p in message.text") {{p}}	
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
		goBack() {
			this.$router.push({name: 'textApp_conversations'})
		},
		openConversation(id) {
			this.$router.push({name: 'textApp_conversation', params: {id}})
		}
	},
	computed: {
		conversation() {
			let id = this.$route.params
			let conversation = this.records.find(record => record.contactID === id.id)
			
			return conversation
		}
	},
	setup() {
		document.title = "All Messages | iOS"
		const {records, getRecords} = useStore('conversations')
		onMounted(() => {
			getRecords()
		})
		return {records}
	}

}
</script>

<style lang="stylus" scoped>
#last
	height: 1px
.messages
	padding: 0.7em
	display: flex
	flex-direction: column
	align-items: flex-end
	gap: 0.8em
	color: #000
	background: #DBE1EE
	.message
		padding: 0.5em
		line-height: 1.2
		border-radius: 1em
		border-bottom-right-radius: 0
		max-width: 70%
		background: #B1D552
		box-shadow: 0 2px 3px rgba(#000,0.5)
		&.recieved
			align-self: flex-start
			border-radius: 1em
			border-bottom-left-radius: 0
			background: #E5E5E5
</style>

