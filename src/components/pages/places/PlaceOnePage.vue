<template>
  <div class="place-page">
    <img :src="'/places/' + places[0].img + '.png'" alt=""> 
    <h1 class="place-page__name">{{places[0].name}}</h1>
  </div>
</template>

<script>
  export default {
    inject: ['places']
  }
</script>

<style>
  .place-page {
    padding: 400px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .place-page__name {
    margin-left: 50px;
  }
</style>