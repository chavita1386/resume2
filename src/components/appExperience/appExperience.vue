<template>
  <main class="main">
    <transition name="fade">
      <div class="experience" v-if="experienceList">
        <div class="content__wrapper">
          <h2 class="content__title">Experience</h2>
          <div v-html="experienceList.contentText"></div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      experienceList: null
    }
  },
  mounted() {
    axios.get('http://chetur.com/api/content/2')
      .then((response) => {
        const data = response.data.content;
        this.experienceList = data[1];
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.experience {
  @include edContainer;

  .content__wrapper {
    width: 100%;
  }

  .content__text {
    @include edContainer;
    margin: 0;
  }
}

.info__container {
  @include edContainer;
}

.info__data {
  @include edItem(100,25);
}

.info__desc {
  @include edItem(100,75);  
}

.info__title {
  margin: 1.55rem 0 .4rem 0;
}

.info__text {
  line-height: 1.6;
  font-size: 1.1rem;
}

.info__date {
  font-size: .8rem;
  margin: 0;
  padding: 0;
}
</style>