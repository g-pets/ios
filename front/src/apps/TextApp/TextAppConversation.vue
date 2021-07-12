<template lang="pug">
navigation-bar(title="Messages")
	template(#left)
		navigation-bar-button(label="Messages" @click="goToConversations()")
	template(#right)
		navigation-bar-button(label="Clear")
.messages.section-scrolled(ref="messagesContainer" v-if="conversation" :class="{visible}")
	.message(v-for="message in conversation.messages" :class="{recieved:message.recieved, unread:message.unread}")
		p(v-for="p in message.text") {{p}}
</template>


<script>
import { ref, computed, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import useStore from "~/store/store"
import navigationBar from "~/components/ui/navigationBar.vue"
import navigationBarButton from "~/components/Buttons/NavigationBarButton.vue"
import listView from "~/components/ui/listView.vue"
export default {
	components: {navigationBar, navigationBarButton, listView},
	setup() {
		document.title = "Text App - Messages | iOS"
		const visible = ref(false)
		const messagesContainer = ref(null)
		const router = useRouter()
		const route = useRoute()
		const { records } = useStore("conversations")
		const goToConversations = () => router.push({name: "TextAppConversations"})
		const conversation = computed(() => records.value.find(record => record.contactID === route.params.id))
		onMounted(() => {
			let container = messagesContainer.value
			container.scrollTo(0,container.scrollHeight)
			visible.value = true
		})
		return { visible, messagesContainer, conversation, goToConversations }
	}

}
</script>


<style lang="stylus" scoped>
.messages
	padding: 0.7em
	display: flex
	flex-direction: column
	align-items: flex-end
	gap: 0.8em
	color: #000
	background: #DBE1EE
	visibility: hidden
	opacity: 0
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
	&.visible
		visibility: visible
		opacity: 1
</style>

