<template>
  <div id="app">
    <navbar />
    <side-navigation />

    <main>
      <router-view />
    </main>

    <footer>
      Copyright &copy; {{ currentYear }} Trio Valley Creations. All rights reserved.
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import SideNavigation from './components/SideNavigation.vue';

export default {
  name: 'app-layout',
  components: {
    Navbar,
    SideNavigation,
  },
  computed: {
    currentYear: () => (new Date().getFullYear()),
  },
};
</script>

<style lang="scss">
@import './styles/main';
</style>
