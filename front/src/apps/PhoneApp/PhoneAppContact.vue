<template lang="pug">
.app-view.phone-app-contact.flex-column-container
	navigation-bar(title="Info")
		template(#left)
			navigation-bar-button(label="All Contacts" @click="goToContacts()")
		template(#right)
			navigation-bar-button(label="Edit")

	.contact.section-scrolled(v-if="contact")
		.header
			picture-item.portrait(:photo="contact.portrait")
			.name {{contact.firstName}} {{contact.lastName}}
		.contact-section(v-if="contact.phones")
			.phone-number(v-for="number in contact.phones" @click="callContact(number.raw)")
				.type {{number.type}}
				.number {{number.formatted}}
			.phone-number
				.type ringtone
				.number Ascending
		.contact-section(v-if="contact.emails")
			.phone-number(v-for="number in contact.emails")
				.type {{number.type}}
				.number {{number.email}}
		.actions-block
			.action-block Text Message
			.action-block Share Contact
			template(v-if="contact.favorite")
				.action-block Remove from Favorites
			template(v-else="contact.favorite")
				.action-block Add to Favorites
</template>


<script>
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import useStore from "~/store/store"
import AppFunctions from "~/core/AppFunctions"
export default {
	setup() {
		document.title = "Phone App - Contact | iOS"
		const { callContact } = AppFunctions()
		const router = useRouter()
		const route = useRoute()
		const { records } = useStore("contacts")
		const contact = computed(() => records.value.find(record => record.id === route.params.id))
		const goToContacts = () => router.push({name: "PhoneAppContacts"})
		return { contact, callContact, goToContacts }
	}
}
</script>


<style lang="stylus" scoped>
.contact
	padding: 1em 0.5em
	background: repeating-linear-gradient(90deg, #C5CCD2, #C5CCD2 6px, #CAD1D8 7px, #CAD1D8 8px)
	.header
		display: flex
		align-items: center
		.portrait
			width: 65px
			height: 65px
			object-fit: cover
			overflow: hidden
			border-radius: 0.2em
			background: #fff
			border: 1px solid #898E91
		.name
			font-weight: bold
			font-size: 1.2em
			color: #1B212B
			line-height: 1
			padding-left: 1.5em
			text-align: center
	.contact-section
		margin-top: 1.3rem
		border-radius: 1rem
		background: #fff
		font-weight: bold
		border: 1px solid #A2A7A9
		line-height: 1
		overflow: hidden
		.phone-number
			display: flex
			justify-content: center
			align-items: center
			padding: 0.8em 0.3em
			.type
				font-size: 0.8em
				color: #525C75
				text-align: right
				flex: 0 0 25%
			.number
				font-size: 0.9em
				flex: 0 0 75%
				color: #1C1C1C
				padding-left: 0.5em
				padding-right: 0.5em
				
			+ .phone-number
				border-top: 1px solid #BABABA
	.actions-block
		display: flex
		margin-top: 1.3rem
		font-weight: bold
		.action-block
			flex: 1 1 auto
			border-radius: 1rem
			padding: 0.6em 1em
			background: #fff
			line-height: 1.2
			text-align: center
			color: #57647D
			font-size: 0.8em
			border: 1px solid #A2A7A9
			+ .action-block
				margin-left: 1.3rem
</style>
