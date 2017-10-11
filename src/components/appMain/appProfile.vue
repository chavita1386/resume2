<template>
  <div class="profile">
    <h2 class="profile__title" v-text="title" v-if="ready"></h2>
    <p class="profile__text" v-html="content"></p>
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

.profile__title {
  @include edItem(100);
  margin: 0;
  padding: 0;
  text-align: center;
  margin: 1.5rem 0;
  color: $black;
  position: relative;  
}

.profile__text {
  @include edItem(100);
  margin: 0;
  padding: 0;
  color: $black;
  font-size: 1.2rem;
  line-height: 1.4;
  padding: 0 1.1rem;
}

</style>


