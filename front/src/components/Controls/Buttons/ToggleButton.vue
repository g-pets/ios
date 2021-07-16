<template lang="pug">
.toggle-button
	.switches
		label.switch(v-for="option in data" :title="option.title")
			input(type="radio" :name="`radio_group_${id}`" class="input-real" :checked="modelValue.value == option.value" @click="selectOption(option)")
			.name {{option.title}}
</template>

<script>
export default {
	emits: ['update:modelValue'],
	props: {
		modelValue: Object,
		id: String,
		data: Array
	},
	methods: {
		selectOption(option) {
			this.$emit('update:modelValue', option)
		}
	}
}
</script>

<style lang="stylus" scoped>
.toggle-button
	font-size: 0.75em
	width: 100%
	.switches
		display: flex
		border-radius: 0.4em
		box-shadow: 0 1px 0 rgba(#fff,0.2)
		border: 1px solid rgba(#000,0.3)
		overflow: hidden
		.switch
			flex: 1 0 50%
			overflow: hidden
			.input-real
				height: 0
				width: 0
				visibility: hidden
				display: none
			.name
				line-height: 1
				text-shadow: 0px -0.05em 0 rgba(#000,.5)
				padding: 0.6em 0.9em 0.6em
				font-weight: bold
				color: #fefefe
				cursor: pointer
			+ .switch
				border-left: 0.1em solid rgba(#000,0.3)
			input:checked + .name
				background: linear-gradient(180deg, #96a6bd 0%, #617ca1 50%, #43608a 100%)
</style>