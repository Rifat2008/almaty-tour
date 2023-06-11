<template>
  <div class="route">
    <div class="container">
      <div class="route__wrapper" :class="'route__wrapper_' + places.length">
        <h2 class="route__title">Увлекательный маршрут по городу</h2>
          
            <place 
              v-for="(item, index) in places"
              :key="index" 
              :image="item.img"
              :name="item.name"
              :number="index + 1"
            ></place>

            <Line
              v-for="(line, idx) in lines"
              :key="idx"
              :line="line.img"
              :number="idx"
              :places="places"
            />
          
      </div>
    </div>
  </div>
</template>

<script>
  import Place from './Place.vue';
  import Line from './Line.vue';

  export default {
    props: ['places', 'lines'],
    components: {
      Place,
      Line
    }
  }
</script>

<style scoped>
  .route__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .route__wrapper_9 {
    height: 2172px;
  }
  .route__wrapper_8 {
    height: 2020px;
  }
  .route__wrapper_7 {
    height: 1700px;
  }
  .route__wrapper_6 {
    height: 1500px;
  }
  .route__wrapper_5 {
    height: 1300px;
  }
  .route__wrapper_4 {
    height: 1000px;
  }
  .route__wrapper_3 {
    height: 950px;
  }
  .route__title {
    font-family: 'Comic Sans MS', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #5C5754;
    padding-bottom: 41px;
  }

  @media (max-width: 390px) {
    .route__wrapper_9 {
    height: 3500px;
    }
    .route__wrapper_8 {
    height: 3050px;
    }
    .route__wrapper_7 {
    height: 2650px;
    }
    .route__wrapper_6 {
    height: 2250px;
    }
    .route__wrapper_5 {
    height: 1830px;
    }
    .route__wrapper_4 {
    height: 1430px;
    }
    .route__wrapper_3 {
    height: 1030px;
    }
  }
</style>