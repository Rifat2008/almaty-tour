<template>
  <div class="container">
    <div class="tour">
      <div class="tour__content">
        <div class="tour__img-wrapper">
          <img src="../assets/img/city-image.png" alt="image" class="tour__img">
        </div>
        <div class="tour__info">
          <p class="tour__text">
            Немецкая история Верного – Алма-Аты – Алматы начинается буквально с момента основания города в 1854 г. С середины 19 в. здесь в молодом городе Туркестанского края жили и работали не только чиновники немецкого происхождения, но и немецкие ученые и путешественники: ботаник-натуралист А.Шренк, путешественник, врач и исследователь растительного мира Туркестанского края Иоганн-Альберт Регель, садовод К.Штольц, лесоводы братья Баум и другие.
          </p>
          <p class="tour__text">
            В советский период истории в нашем городе жили и работали немцы – представители творческой и научной интеллигенции, архитекторы, известные спортсмены, врачи и многие другие. Многие из них были депортированы в 1941 г. из различных мест проживания этнических немцев в СССР и расселены в разных областях Казахской ССР, а с ослаблением режима спецпоселения, когда появилась возможностью работать и учиться в столице Казахстана, переехали в Алма-Ату. 
          </p>
          <p class="tour__text tour__text_bold">
            Надеемся, что наша экскурсия поможет вам в осмыслении исторического прошлого своего народа и сохранении достойной памяти о нем!
          </p>
        </div>
      </div>
      <div class="tour__route">
        <p class="tour__route-text">Скачать маршрут: Увлекательный маршрут по городу</p>
        <a href="/pdf/test.pdf" download>
          <img src="../assets/img/pdf-icon.png" alt="pdf-title" class="tour__pdf-title">
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  .tour {
    display: flex;
    flex-direction: column;
    padding: 160px 0;
  }
  .tour__content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;
  }
  .tour__img-wrapper {
    width: 100%;
    height: auto;
  }
  .tour__img {
    max-width: 100%;
    height: auto;
    min-width: 460px;
  }
  .tour__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 55px;
  }
  .tour__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 154%;
    color: #72767E;
  }
  .tour__text_bold {
    font-weight: 700;
  }
  .tour__route {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 23px 0;
    border: 3px dashed #AB9995;
    border-radius: 30px;
  }
  .tour__route-text {
    margin-right: 34px;
    font-family: 'Comic Sans MS', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 154%;
    color: #5C5754;
  }
  
  @media (max-width: 390px) {
    .tour {
      padding: 50px 0;
    }
    .tour__img-wrapper {
      display: none;
    }
    .tour__info {
      height: 300px;
      overflow: scroll;
      padding: 0 20px;
    }
    .tour__route {
      margin: 0 15px;
      padding: 10px 15px;
    }
  }

  
</style>