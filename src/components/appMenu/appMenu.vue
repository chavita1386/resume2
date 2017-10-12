<template>
  <nav class="main-menu">
    <ul class="menu">
      <li class="menu__li">
        <router-link to="/" class="menu-link" exact>
          <span class="menu-link__icon icon-user"></span>
          <span class="menu-link__text">Profile</span>
        </router-link>
      </li>
      <li class="menu__li">
        <router-link to="/education" class="menu-link" exact>
          <span class="menu-link__icon icon-graduation-cap"></span>
          <span class="menu-link__text">Education</span>
        </router-link>
      </li>
      <li class="menu__li">
        <router-link to="/skills" class="menu-link" exact>
          <span class="menu-link__icon icon-flask"></span>
          <span class="menu-link__text">Skills</span>
        </router-link
      </li>
      <li class="menu__li">
        <router-link to="/experience" class="menu-link" exact>
          <span class="menu-link__icon icon-briefcase"></span>
          <span class="menu-link__text">Experience</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
@import '../../scss/_base.scss';

.main-menu {
  border: 1px solid darken($color1, 5%);
  background: $color1;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;  
  box-shadow: 0px 1px 5px 0px rgba(97, 97, 97, 1);

  @include from(l) {
    top: 0;
    width: 100px;
    z-index: 1;
    background: $light-gray;
  }
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;  

  @include from(l) {
    flex-wrap: wrap;
  }

  .menu__li {
    flex-grow: 1;
    border: 0px solid blue;
    text-align: center;

    @include from(l) {
      width: 100%;
    }
  }
}

.menu-link {
  color: $white;
  display: block;
  padding: 7px 0;

  @include from(l) {
    color: $black;
  }

  &:hover {
    text-decoration: none;
  }

  &__icon {
    width: 100%;
    display: block;
  }

  &__text {
    font-size: .8rem;
    font-family: $font-title;
  }
  
}

.router-link-active {
  box-shadow: inset 0px 0px 5px 1.5px rgba(0,0,0,0.75);
  background: lighten($color1, 10%);
  color: darken($white, 20%);

  @include from(l) {
    box-shadow: inset 0px 0px 5px 1.5px rgba(0,0,0,0.5);
    background: darken($light-gray, 10%);
    color: lighten($black, 20%);
  }
}
</style>

