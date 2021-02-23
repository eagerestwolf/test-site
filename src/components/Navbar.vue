<template>
  <nav>
    <button @click="$store.commit('toggleSideNavigation')">
      <i class="fas fa-bars"></i>
    </button>
    <a class="logo" href="/">Some Cool Artists</a>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

nav {
  align-items: stretch;
  background-color: $color-navbar-background;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100vw;

  button {
    background: none;
    border: 0;
    box-shadow: none;
    color: $color-navbar-text;
    display: none;
    margin: 0;
    padding: $font-size-base;

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
    display: unset;
    flex: auto;
    padding: $size-navbar-item-padding-x $size-navbar-item-padding-y;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    &.logo {
      font-family: $font-family-logo;
      font-size: $font-size-base;
      text-align: center;

      &:hover {
        background: none;
      }
    }

    &:hover, &.router-link-active, &.router-link-exact-active {
      background-color: $color-navbar-background-hover;
      color: $color-navbar-text-hover
    }
  }
}

@media screen and (max-width: 48 * $font-size-base) {
  nav {
    button {
      display: unset;
    }

    a:not(.logo) {
      display: none;
    }
  }
}
</style>
