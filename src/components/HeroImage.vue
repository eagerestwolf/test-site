<template>
  <header :class="styles()">
    <slot></slot>
  </header>
</template>

<script>
import { css } from '@emotion/css';

export default {
  name: 'HeroImage',
  props: {
    image: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: false,
      default: '#000',
    },
  },
  methods: {
    styles() {
      return css`
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${this.image});
        color: ${this.textColor};
      `;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

header {
  align-items: center;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100vw;
}
</style>
