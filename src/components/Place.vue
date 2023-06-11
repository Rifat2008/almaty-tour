<template>
  
    <router-link :to="'/place-' + number" class="place" :class="'place_pos-' + number">
      <img src="../assets/img/wrapper.svg" alt="place__wrapper" class="place__wrapper">
      <img :src="'/places/' + image + '.png'" alt="place-image" class="place__image">
      <h3 class="place__name">{{ name }}</h3>
      <div class="place__number-wrapper">
        <img src="../assets/img/number-wrapper.png" alt="" class="place__number-bg">
        <span class="place__number">{{ number }}</span>
      </div>
    </router-link>
  
</template>

<script>
  export default {
    props: ['name', 'image', 'number', 'line'],
    
  }
</script>

<style scoped>
.place {
  position: relative;
  z-index: 2;
}
.place__name {
  font-family: 'Comic Sans MS', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: #5C5754;
  text-align: center;
}
.place__image {
  position: absolute;
  top: 28px;
  left: 46px;
}
.place__number-wrapper {
  position: absolute;
  top: 45px;
  left: 57px;
}
.place__number {
  position: absolute;
  top: 11px;
  left: 25px;
  font-family: 'Comic Sans MS', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 157%;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #5C5754;
}
.place_pos-1 {
  position: absolute;
  top: 72px;
  left: 33px;
}
.place_pos-2 {
  position: absolute;
  top: 132px;
  left: 581px;
}
.place_pos-3 {
  position: absolute;
  top: 545px;
  left: 26px;
}
.place_pos-4 {
  position: absolute;
  top: 601px;
  left: 766px;
}
.place_pos-5 {
  position: absolute;
  top: 902px;
  left: 421px;
}
.place_pos-6 {
  position: absolute;
  top: 1092px;
  left: 0;
}
.place_pos-7 {
  position: absolute;
  top: 1315px;
  left: 800px;
}
.place_pos-8 {
  position: absolute;
  top: 1632px;
  left: 156px;
}
.place_pos-9 {
  position: absolute;
  top: 1752px;
  left: 639px;
}
@media (max-width: 390px) {
  .place {
   left: 10px;
  }
  .place_pos-2 {
    top: 470px;
  }
  .place_pos-3 {
    top: 870px;
  }
  .place_pos-4 {
    top: 1270px;
  }
  .place_pos-5 {
    top: 1670px;
  }
  .place_pos-6 {
    top: 2070px;
  }
  .place_pos-7 {
    top: 2470px;
  }
  .place_pos-8 {
    top: 2870px;
  }
  .place_pos-9 {
    top: 3300px;
  }
}
</style>

