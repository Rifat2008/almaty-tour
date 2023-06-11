<template>
  <div class="main-wrapper">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>    
</template>

<script>
  import TheHeader from './TheHeader.vue';
  import TheFooter from './TheFooter.vue';

  export default {
    name: 'main-wrapper',
    components: {TheHeader, TheFooter}
  }
</script>

<style>
    .main-wrapper {
        min-height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column; 
    }
</style>
