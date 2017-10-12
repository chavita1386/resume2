<template>
  <main class="main">
    <transition name="fade">
      <app-profile v-if="profile" :title="profile.title" :ready="ready" :content="profile.contentText" v-cloak></app-profile>
    </transition>
  </main>
</template>

<script>
import axios from 'axios'
import appProfile from "./appProfile.vue"

export default {
  components: {
    appProfile
  },
  props: ['ready'],
  data() {
    return {
      profile: null
    }
  },
  mounted() {
    axios.get('http://chetur.com/api/content/2')
      .then((response) => {
        const data = response.data.content;
        this.profile = data[0];
        //this.ready = true      
      })
      .catch((error) => {
        console.log(error)
      })
  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';
.main {
  margin: 0;
  padding: 0;  
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>


