
<template>
    <yandex-map 
      :coords="center"
      :zoom="15" 
    >

      <ymap-marker 
        v-for="marker in places" 
        :key="marker.id"
        :markerId="marker.id"
        :coords="marker.coords" 
        hint-content="some hint" 
        :icon="getIcon(marker.id + 1)"
        @click="goToPlace(marker.id + 1)"
      ></ymap-marker>

      <ymap-marker 
        v-for="marker in places" 
        :key="marker.id"
        :markerId="marker.id"
        :coords="marker.coords" 
        hint-content="some hint" 
        :icon="getPicture(marker.id + 1)"
        @click="goToPlace(marker.id + 1)"
      ></ymap-marker>
      
    </yandex-map>
  </template>
  
  <script>
  import { yandexMap, ymapMarker } from 'vue-yandex-maps';
  
  export default {
    inject: ['places'],
    components: { yandexMap, ymapMarker },
    data: () => ({
      center: [43.247165074523586,76.94570749999993],
    }),
    methods: {
      goToPlace(number) {
        this.$router.push('/place-' + number);
      },
      getIcon(number) {
        return {
          layout: 'default#imageWithContent',
          imageHref: '/marker-icon.png',
          imageSize: [42, 53],
          imageOffset: [0, 0],
          content: number,
          contentOffset: [16, 13]
        }
      },
      getPicture(number) {
        return {
          layout: 'default#imageWithContent',
          imageHref: '/balloons/balloon-' + number + '.png',
          imageSize: [200, 200],
          imageOffset: [30, 30]
        }
      }
    },
  }
    
  </script>
  
  
  <style>
  #app {
    width: 100%;
    height: 100vh;
  }
  
  .ymap-container {
    height: 725px;
  }

  @media (max-width: 390px) { 
    .ymap-container {
      height: 500px;
    }
  }
  </style>