<template>
  <div class="place-page">
    <img :src="'/places/' + places[2].img + '.png'" alt=""> 
    <h1 class="place-page__name">{{places[2].name}}</h1>
  </div>
</template>

<script>
  export default {
    inject: ['places']
  }
</script>

