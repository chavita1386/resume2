<template>
  <div class="education__card">
    <h4 class="title" :class="ready ? 'in':''">
      <span>{{title}}</span>
    </h4>
    <h5 class="school">{{school}}</h5>
    <div>
      <span class="icon-calendar"></span>
      <span class="time">{{time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'school', 'time', 'ready'],
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.education__card {    
  @include edItem(100,50);
  text-align: center;

}

.title,
.school,
.time {
  margin: 0;
  padding: 0;
  
}

.title {
  margin: 5px 0 0 0;
  overflow: hidden;
  padding: 5px 0;
  transition: width .5s;
  


  span {
    position: relative;
    top: -100px;
    color: $color3;
    font-size: 1.1rem;
    transition-property: top;
    transition-duration: .5s;
    transition-timing-function: linear;
    transition-delay: .3s;
  }

  &.in {
    top: 0;
    span {
      top: 0;
    }
  }
}

.school {
  margin: 5px 0;
  color: darken($color4, 20%);
  font-weight: normal;
}

.time {
  font-size: .85em;
  margin: 8px 0;  
  font-size: .8rem;
  color: darken($color2, 15%);    
  position: relative;
  top: -3px;
}
</style>