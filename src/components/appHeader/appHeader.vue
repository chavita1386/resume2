<template>
  <div class="header">
    <div class="header__background">
    </div>
    <div class="header__content">
      <h1 class="header__name" v-text="name" :class="ready ? 'active': ''"></h1>
      <h2 class="header__last" v-text="last" :class="ready ? 'active': ''"></h2>
      <h3 class="header__job" v-text="job" :class="ready ? 'active': ''"></h3>
    </div>
    <app-social :ready="ready" v-cloak></app-social>
  </div>
</template>


<script>
import appSocial from './appSocial.vue'
export default {
  props: ['name', 'last', 'job', 'ready'],
  components: { appSocial },
  data() {
    return {      
      
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.header {
  font-family: $font-title;
  position: relative;
  z-index: 1;
  background: $color1;
  box-shadow: 0px 1px 13px 0px rgba(97, 97, 97, 1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  min-height: 225px;
  
  @include from(l) {    
    margin-left: 100px;
  }
}

.header__background {
  display: block;
  width: 100%;
  height: 100%;
  background: transparent url('../../assets/bg-samless-pattern.png') repeat;
  background-size: 450px 450px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: .2;
}

.header__content {
  @include edContainer;
  flex-wrap: wrap;
  height: 100%;  
  text-align: center;
  color: $white;
}

.header__name {
  width: 100%;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  line-height: 2.5rem;
  position: relative;
  left: -100%;
  transition: left .8s;
  font-size: 2.5rem;

  &.active {
    left:0;
  }

  @include from(l) {
    font-size: 3.2rem;
  }
}

.header__last {
  width: 100%;
  margin: 0;
  padding: 0; 
  position: relative;
  color: darken($white, 20%);
  right: 0;
  transform: scale(0);
  //transition: right .7s .3s;
  font-size: 1.8rem;

  &.active {
    animation: bounce-in 1s forwards .8s;
  }

  @include from(l) {
    font-size: 2.2rem;
  }
}

.header__job {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  bottom: -400px;
  transition: bottom .7s;
  font-family: $font-text;
  color: darken($white, 30%);
  font-size: 1rem;

  &.active {
    bottom:0;
  }

  @include from(l) {
    font-size: 1.2rem;
  }

}
</style>
