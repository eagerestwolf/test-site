<template>
  <div class="about">
    <hero-image image="https://www.pexels.com/photo/316093/download/?search_query=urban%20abstract&tracking_id=a83q0ngi3l7" textColor="#fff">
      <h1>Welcome to our website</h1>
      <h3>This is our about page</h3>
    </hero-image>
  </div>
</template>

<script>
import HeroImage from '../components/HeroImage.vue';

export default {
  name: 'AboutView',
  components: {
    HeroImage,
  },
};
</script>
