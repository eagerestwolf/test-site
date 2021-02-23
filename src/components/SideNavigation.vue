<template>
  <aside id="side-navigation">
    <div class="background" @click="toggleSideNavigation" v-if="isSideNavigationOpen" />
    <transition name="slide">
      <nav v-if="isSideNavigationOpen">
        <button @click="toggleSideNavigation"><i class="fas fa-times"></i></button>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </transition>
  </aside>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'side-navigation',
  computed: {
    ...mapState(['isSideNavigationOpen']),
  },
  methods: {
    ...mapMutations(['toggleSideNavigation']),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
  transition: all 0.3ms ease-in 0s;
}

.background {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

nav {
  align-items: stretch;
  background-color: $color-navbar-background;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100vh;
  justify-content: flex-start;
  left: 0;
  margin: 0;
  max-width: 30 * $font-size-base;
  min-width: 20 * $font-size-base;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  top: 0;
  width: 60%;
  z-index: 999;

  button {
    background: none;
    border: 0;
    box-shadow: none;
    color: $color-navbar-text;
    margin: 0;
    padding: $size-navbar-item-padding-x $size-navbar-item-padding-y;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      border: 1px solid $color-navbar-text;
      outline: none;
    }

    &:active {
      background-color: $color-navbar-background-hover;
      color: $color-navbar-text-hover;
    }
  }

  a {
    background-color: $color-navbar-background;
    color: $color-navbar-text;
    padding: $size-navbar-item-padding-x $size-navbar-item-padding-y;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    &:hover, &.router-link-active, &.router-link-exact-active {
      background-color: $color-navbar-background-hover;
      color: $color-navbar-text-hover
    }
  }
}
</style>
