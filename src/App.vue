<template>
  <div id="app">
    <app-header :name="name" :last="last" :job="job" :ready="ready"></app-header>
    <!-- <app-main v-if="ready" :ready="ready"></app-main> -->
    <router-view></router-view>
    <app-menu></app-menu>    
  </div>
</template>

<script>
import axios from 'axios'

import appHeader from './components/appHeader/appHeader.vue'
import appMain from './components/appMain/appMain.vue'
import appMenu from './components/appMenu/appMenu.vue'

export default {
  name: 'app',
  components: { appHeader, appMain, appMenu },
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

.main {
  margin: 0 0 80px 0;
  padding: 0;

  @include from(l) {
    margin-left: 100px;
  }
}

.content__wrapper {	
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	margin: 1.5rem 1rem 0 1rem;	
}

.content__title {
	@include edItem(100);
	text-align: center;
	padding: .7rem;
	color: $black;
	position: relative;
	border: 1px solid $gray;
  background-color: $light-gray;
  font-size: 1.8rem;
}

.content__text {
	@include edItem(100);
	color: $black;
	font-size: 1.2rem;
	line-height: 1.4;
	padding: 1.5rem 1.8rem;
	background-color: $gray;
	border-top: 1px solid darken($gray, 8%);
}
</style>
