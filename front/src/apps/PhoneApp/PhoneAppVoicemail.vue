<template lang="pug">
navigation-bar(title="Voicemail")
	template(#left)
		navigation-bar-button(label="Greeting")
	template(#right)
		navigation-bar-button(label="Speaker")
.coming-soon.section-scrolled
	h2 Coming Soon
</template>


<script>
import navigationBar from "~/components/ui/navigationBar.vue"
import navigationBarButton from "~/components/Buttons/NavigationBarButton.vue"
export default {
	components: { navigationBar, navigationBarButton },
	setup() {
		document.title = "Phone App - Voicemail | iOS"
	}
}
</script>