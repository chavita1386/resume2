<template>
	<div class="profile">
		<div class="profile__wrapper">
			<h2 class="profile__title" v-text="title" v-if="ready"></h2>
			<p class="profile__text" v-html="content"></p>
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

.profile__wrapper {
			box-shadow: 0 1px 4px rgba(0,0,0,0.2);
			margin: 1.5rem 1rem 0 1rem;
}

.profile__title {
	@include edItem(100);
	text-align: center;
	padding: .7rem;
	color: $black;
	position: relative;
	border: 1px solid $gray;
	background-color: $light-gray;
	
}

.profile__text {
	@include edItem(100);
	color: $black;
	font-size: 1.2rem;
	line-height: 1.4;
	padding: 1.5rem 1.8rem;
	background-color: $gray;
	border-top: 1px solid darken($gray, 8%);
}
</style>


