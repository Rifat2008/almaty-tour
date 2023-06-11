<template>
  <div class="place-page">
    <img :src="'/places/' + places[7].img + '.png'" alt=""> 
    <h1 class="place-page__name">{{places[7].name}}</h1>
  </div>
</template>

<script>
  export default {
    inject: ['places']
  }
</script>

