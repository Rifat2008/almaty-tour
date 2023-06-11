<template>
    <router-link :to="'/place-' + number" class="balloon">
      <img :src="'/ballons/' + image + '.png'" alt="place-image" class="balloon__image">
      <p class="balloon__name">{{ name }}</p>
    </router-link>
</template>

<script>

export default {
  inject: ['places']
}
</script>

<style scoped>
  .balloon {
    width: 200px;
    height: 200px;
    
  }
</style>