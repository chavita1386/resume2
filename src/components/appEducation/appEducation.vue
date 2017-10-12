<template>
  <main class="main">
    <transition name="fade">
      <div class="education" v-if="education">
        <div class="content__wrapper">
          <h2 class="content__title">Education</h2>
          <div class="content__text">
            <app-item-education v-for="item in education" :key="item.idEducation" :title="item.title" :school="item.school" :time="item.time" :ready="ready"></app-item-education>
          </div>
        </div>
      </div>      
    </transition>
    <transition name="fade">
      <app-courses :content="courses.contentText" :title="courses.title" v-if="courses"></app-courses>
    </transition>
  </main>
</template>

<script>
import axios from 'axios'
import appItemEducation from './appItemEducation.vue'
import appCourses from './appCourses.vue'

export default {
  components: { appItemEducation, appCourses },
  data() {
    return {
      education: null,
      courses: null,
      ready: false
    }
  },
  mounted() {
    axios.get('http://chetur.com/api/education/2')
      .then((response) => {
        const data = response.data.education;
        this.education = data;
        console.log('get http://chetur.com/api/education/2')
        setTimeout(() => { this.ready = true }, 200)
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('http://chetur.com/api/content/2')
      .then((response) => {
        const data = response.data.content;
        this.courses = data[2];            
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.education {
  @include edContainer;

  .content__wrapper {
    width: 100%;
  }

  .content__text {
    @include edContainer;
    margin: 0;
  }
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