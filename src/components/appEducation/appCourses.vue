<template>
  <div class="courses">		
			<h2 class="courses__title" v-text="title"></h2>
			<div class="courses__text" v-html="content"></div>		
	</div>
</template>

<script>  
  export default {
    props: ['title', 'content'],
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.courses {
  @include edContainer;
}

.courses__title {
  @include edItem(100);
  text-align: center;
  margin: 1.5rem 0;
}

.courses__text {
  @include edContainer;
  text-align: center;
}

.card {  
  margin:  0 0 15px 0;  
  @include edItem(100, 50, 1/3);
}

.card__content {
  border: 4px solid $gray;
  padding: 5px 10px;

  &::before {
    content: "\4e";
    @include iconFont;
    font-weight: bold;
    font-size: 1.2rem;
    color: $red;
    display: inline-block;
    margin: 6px;
  }
  h4, h5 {
    margin: 10px 0;
    padding: 0;
  }

  h4 {
    font-weight: 600;
    font-size: 1rem;
    border-bottom: 1px solid rgba($color1, .3);
  }

  h5 {
    font-weight: normal;
  }

  h5:nth-child(3) {
    &::before {
      content: "\47";            
      display: inline-block;
      font-family: "chavitaicon" !important;    
      font-style: normal !important;
      font-weight: normal !important;
      font-variant: normal !important;
      text-transform: none !important;
      position: relative;
      top: 1px;
      margin: 0 5px 0 0;
      opacity: .8;
    }
  }
}
</style>