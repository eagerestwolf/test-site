<template>
  <div class="home">
    <hero-image image="https://www.pexels.com/photo/316093/download/?search_query=urban%20abstract&tracking_id=a83q0ngi3l7" textColor="#fff">
      <h1>We are some cool artists</h1>
      <h3>and this is our website</h3>
    </hero-image>
    <article>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue';
import HeroImage from '../components/HeroImage.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HeroImage,
  },
};
</script>

<style lang="scss" scoped>
article {
  margin: 0;
  padding: 2rem 5%;
  background-color: #555;
  color: white;
}
</style>
