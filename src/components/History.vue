<template>
  <div class="container">
    <div class="history">
      <h2 class="route__title">текст с заголовком</h2>
      <div class="history__content">
        <div class="history__info">
          <p class="history__text">
            Немецкая история Верного – Алма-Аты – Алматы начинается буквально с момента основания города в 1854 г. С середины 19 в. здесь в молодом городе Туркестанского края жили и работали не только чиновники немецкого происхождения, но и немецкие ученые и путешественники: ботаник-натуралист А.Шренк, путешественник, врач и исследователь растительного мира Туркестанского края Иоганн-Альберт Регель, садовод К.Штольц, лесоводы братья Баум и другие. 
          </p>
          <p class="history__text">
            В советский период истории в нашем городе жили и работали немцы – представители творческой и научной интеллигенции, архитекторы, известные спортсмены, врачи и многие другие. Многие из них были депортированы в 1941 г. из различных мест проживания этнических немцев в СССР и расселены в разных областях Казахской ССР, а с ослаблением режима спецпоселения, когда появилась возможностью работать и учиться в столице Казахстана, переехали в Алма-Ату. 
          </p>
          <p class="history__text history__text_bold">
            Надеемся, что наша экскурсия поможет вам в осмыслении исторического прошлого своего народа и сохранении достойной памяти о нем!
          </p>
        </div>
        <carousel-item
          v-for="(slide, index) in slides" 
          :slide="slide"
          :key="index"
          :current-slide="currentSlide"
          :index="index"
        ></carousel-item>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';

export default {
  props: ['slides'],
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
    }
  },
  mounted() {
    this.slideInterval = setInterval(() => {
      const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    }, 3000)
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    }
  },
  components: {
    CarouselItem
  }
}
</script>

<style scoped>
  .history {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 160px 0;
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
    padding-bottom: 55px;
  }
  .history__content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;
  }
  .history__info {
    min-width: 700px;
    display: flex;
    flex-direction: column;
    padding-right: 55px;
  }
  .history__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 154%;
    color: #72767E;
  }
  .history__text:not(:last-child) {
    margin-bottom: 28px;
  }
  .history__text_bold {
    font-weight: 700;
  }
  .history__route {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 23px 0;
    border: 3px dashed #AB9995;
    border-radius: 30px;
  }
  .history__route-text {
    margin-right: 34px;
    font-family: 'Comic Sans MS', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 154%;
    color: #5C5754;
  }
  @media (max-width: 390px) {
    .history {
    padding: 200px 0 0;
    justify-content: center;
    }
    .history__content {
      flex-direction: column-reverse;
    }
    .history__info {
    min-width: 0;
    max-height: 300px;
    padding-right: 0;
    max-width: 85%;
    padding: 10px;
    overflow: scroll;
  }
  
  }
</style>