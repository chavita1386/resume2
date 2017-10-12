<template>
  <div id="app">
    <app-header :name="name" :last="last" :job="job" :ready="ready"></app-header>
    <app-main v-if="ready" :ready="ready"></app-main>
  </div>
</template>

<script>
import axios from 'axios'

import appHeader from './components/appHeader/appHeader.vue'
import appMain from './components/appMain/appMain.vue'

export default {
  name: 'app',
  components: { appHeader, appMain },
  data() {
    return {
      ready: false,
      name: '',
      last: '',
      job: 'Web Developer',
      birthday: '',
      title: '',
      phone: '',
      cell: '',
      email: '',
      ready: ''
    }
  },
  mounted() {
    //setTimeout(() => { this.ready = true}, 2000)
    axios.get('http://chetur.com/api/user/')
      .then((response) => {
        const data = response.data.users[0];
        this.name = data.name;
        this.last = data.last;
        this.birthday = data.birthday;
        this.title = data.title;
        this.phone = data.phone;
        this.cell = data.phone;
        this.email = data.email;
        this.ready = true;
      })
      .catch((response) => {
        //console.error(reponse);
      });
  }
}
</script>

<style lang="scss">
@import './scss/_base.scss';
body {
  text-rendering: optimizeLegibility;
  --webkit-font-smoothing: antialiased;

  
}

#app {
  font-family: $font-text;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
