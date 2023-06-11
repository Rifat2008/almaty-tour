<template>
  <div class="place-page">
    <img :src="'/places/' + places[6].img + '.png'" alt=""> 
    <h1 class="place-page__name">{{places[6].name}}</h1>
  </div>
</template>

<script>
  export default {
    inject: ['places']
  }
</script>

