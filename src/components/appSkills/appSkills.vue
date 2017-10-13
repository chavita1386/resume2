<template>
  <main class="main">
    <transition name="fade">
      <div class="skill">
        <div class="content__wrapper" v-if="skills">
          <h2 class="content__title">Skills</h2>
          <div class="battery-container">
            <div class="battery__wrapper" v-for="skill in skills" :key="skill.idProfessionalSkill">
              <h4>{{skill.technology}}</h4>
              <div class="battery" :class="skill.percent">
                <!-- <span>{{skill.percent}}</span> -->
              </div>
            </div>
          </div>
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
      skills: null
    }
  },
  mounted() {
    axios.get('http://chetur.com/api/skill/2')
      .then((response) => {
        const data = response.data.skill;
        this.skills = data;
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.skill {
  @include edContainer;  

  .content__wrapper {
    width: 100%;
  }
}

.battery-container {
  @include edContainer;
  justify-content: center;  
}

.battery__wrapper {
  @include edItem(50);

  h4 {
    text-align: center;
    color: $black;
  }
}

.battery {
  $high: #097210;
  $middle: #febf00;
  $low: #cc1010;
  height: 40px;
  width: 90px;
  margin: 1rem auto;
  box-shadow: inset 0px 0px 0px 5px rgba(white, 1);
  display: flex;
  text-align: center;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;

  &.high {
    border: 4px solid $high; //background: $high;
    background: linear-gradient(to right, rgba($high, 1) 0%, rgba($high, 1) 20%,
    rgba(254, 254, 254, 1) 20%, rgba(255, 255, 255, 1) 25%,
    rgba($high, 1) 25%, rgba($high, 1) 45%,
    rgba(254, 254, 254, 1) 45%, rgba(255, 255, 255, 1) 50%,
    rgba($high, 1) 50%, rgba($high, 1) 70%,
    rgba(254, 254, 254, 1) 70%, rgba(255, 255, 255, 1) 75%,
    rgba($high, 1) 75%, rgba($high, 1) 95%);

    &::after {
      border-top: 3.7px solid $high;
      border-right: 3.7px solid $high;
      border-bottom: 3.7px solid $high;
    }
  }

  &.middle {
    border: 4px solid $middle;
    background: $middle;
    background: linear-gradient(to right, rgba($middle, 1) 0%, rgba($middle, 1) 20%,
    rgba(254, 254, 254, 1) 20%, rgba(255, 255, 255, 1) 25%,
    rgba($middle, 1) 25%, rgba($middle, 1) 45%,
    rgba(254, 254, 254, 1) 45%, rgba(255, 255, 255, 1) 50%,
    rgba($middle, 1) 50%, rgba($middle, 1) 70%,
    rgba(254, 254, 254, 1) 70%, rgba(255, 255, 255, 1) 100%);
    color: $black;


    &::after {
      border-top: 3.7px solid $middle;
      border-right: 3.7px solid $middle;
      border-bottom: 3.7px solid $middle;
    }
  }

  &.low {
    border: 4px solid $low;
    background: $low;
    background: linear-gradient(to right, rgba($low, 1) 0%, rgba($low, 1) 25%, transparent 25%, transparent 100%);
    color: $low;

    &::after {
      border-top: 3.7px solid $low;
      border-right: 3.7px solid $low;
      border-bottom: 3.7px solid $low;
    }
  }

  &::after {
    content: '';
    display: block;
    width: 8px;
    height: 55%; // border-top: 3.7px solid $high;
    // border-right: 3.7px solid $high;
    // border-bottom: 3.7px solid $high; //border-left: 5px solid $white;
    border-radius: 3px;
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  &::before {
    content: '';
    display: block;
    border: 1px solid $white;
    width: 6px;
    height: 12px;
    position: absolute;
    background: white;
    border-radius: 3px;
    right: -5px;
    top: 49%;
    transform: translateY(-50%);
    z-index: 3;
  }
}
</style>