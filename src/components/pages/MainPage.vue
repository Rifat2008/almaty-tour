<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" rel="stylesheet">
  <link href="https://allfont.ru/allfont.css?fonts=komika-axis" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="assets/fonts.css">
  
  <almaty></almaty>
  <tour :places="places"></tour>
  <route :places="places" :lines="lines"></route>
  <history :slides="slides"></history>

</template>

<script>

import TheHeader from '../TheHeader.vue';
import Almaty from '../Almaty.vue';
import Tour from '../Tour.vue';
import Route from '../Route.vue';
import History from '../History.vue';
import TheFooter from '../TheFooter.vue';

export default {
  inject: ['places', 'slides', 'lines'],
  components: {
    TheHeader,
    Almaty,
    Tour,
    Route,
    History,
    TheFooter
  }
}

</script>

<style>

@font-face {
  font-family: 'Comic Sans MS';
  src: url('../fonts/comic-sans.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
* {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
.container {
  max-width: 1223px;
  margin: 0 auto;
}

</style>