<template>
  <div class="place-page">
    <img :src="'/places/' + places[5].img + '.png'" alt=""> 
    <h1 class="place-page__name">{{places[5].name}}</h1>
  </div>
</template>

<script>
  export default {
    inject: ['places']
  }
</script>

