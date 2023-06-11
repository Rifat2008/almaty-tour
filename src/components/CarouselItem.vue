<template>
    <div class="carousel-item" v-show="currentSlide === index">
      <img :src="slide" class="carousel-item-image">
    </div>
</template>

<script>
export default {
  props: ['slide', 'currentSlide', 'index'],
}

</script>

<style scoped>
.carousel-item {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.carousel-item-image {
  max-width: 100%;
  height: auto;
  min-width: 460px;
}

@media (max-width: 390px) {
  .carousel-item {
  max-width: 390px;
  min-height: 448px;
}
.carousel-item-image {
  min-width: 0;
}
}
</style>