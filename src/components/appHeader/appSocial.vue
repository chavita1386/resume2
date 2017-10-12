<template>
  <div class="social">
    <a class="social-link" :href="item.url" v-for="item in list" :key="item.idSocialNetwork">
      <span class="social-link__icon" :class="css(item.name)"></span>
      <span class="social-link__text" :class="ready ? 'active': ''">{{item.name}}</span>
    </a>
  </div>
</template>

<script>
import axios from 'axios'
export default {  
  props: ['ready'],
  data() {
    return {      
      list: {}
    }
  },
  methods: {
    css(name) {      
      let ready = this.ready ? 'active' : ''
      return ready + ' icon-' + name + '-square'
    }
  },
  created() {
    axios.get('http://chetur.com/api/social/2')
      .then((response) => {
        const data = response.data.social
        this.list = data;        
      })
      .catch((error) => {
        console.log(error);
      })
  },
  mounted() {
    console.info('mounted ready +' + this.list)
  }
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.social {
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 100%;
  text-align: center;
  font-family: $font-text;
  background: rgba(darken($color1, 7%), .6);
  border-radius: 0 0 7px 7px;

  @include from(l) {
    position: absolute;
    top: 0;
    right: 40px;
    width: auto;
    height: 35px;
    text-align: center;
    font-family: $font-text;
    background: darken($color1, 7%);
    border-radius: 0 0 7px 7px;
  }
}

.social-link {
  padding: 3px;
  margin-left: 2px;
  position: relative;
  font-size: 1.3rem;
  width: 90px;
  display: inline-block;
  text-align: center;
  color: $white;

  @include from(l) {
    padding: 5px;
    margin-left: 2px;
    position: relative;
    font-size: 1.1rem;
    width: 105px;
    display: inline-block;
    text-align: center;
    color: $white;
  }

  &:hover {
    text-decoration: none;
  }

  &:hover &__text,
  &:hover &__icon {
    opacity: 1;
  }

  &__text {
    font-size: 1rem;
    opacity: .7;
    position: relative;
    top: 70px;
    transition: top .7s .5s;

    @include from(l) {
      top: -70px;            
    }

    &.active {
      top: -1px;
    }
  }
  &__icon {
    position: relative;
    top: 70px;
    opacity: .7;
    transition: top .7s .2s;

    @include from(l) {
      top: -70px;            
    }

    &.active {
      top: 3px;
    }
  }
}
</style>

