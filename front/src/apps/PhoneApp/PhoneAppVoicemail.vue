<template lang="pug">
.app-view.phone-app-voicemail.flex-column-container
	navigation-bar(title="Voicemail")
		template(#left)
			navigation-bar-button(label="Greeting")
		template(#right)
			navigation-bar-button(label="Speaker")
	.coming-soon.section-scrolled
		h2 Coming Soon
</template>


<script>
export default {
	setup() {
		document.title = "Phone App - Voicemail | iOS"
	}
}
</script>