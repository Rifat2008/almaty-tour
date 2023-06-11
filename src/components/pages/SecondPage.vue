<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" rel="stylesheet">
  <link href="https://allfont.ru/allfont.css?fonts=komika-axis" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="assets/fonts.css">
  
  <about-project></about-project>
  <Map></Map>

</template>

<script>
import AboutProject from '../AboutProject.vue';
import Map from '../Map.vue';

export default {
  components: {
    AboutProject,
    Map
  }
}

</script>