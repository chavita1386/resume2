<template>
	<div class="profile">
		<div class="content__wrapper">
			<h2 class="content__title" v-text="title"></h2>
			<p class="content__text" v-html="content"></p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['title', 'content', 'ready'],
	data() {
		return {

		}
	},
	mounted() {

	}
}
</script>

<style lang="scss">
@import "../../scss/_base.scss";

.profile {
	@include edContainer;
}


</style>


