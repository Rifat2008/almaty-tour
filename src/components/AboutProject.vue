<template>
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__content">
          <div class="about__titles">
            <h1 class="about__title">О проекте</h1>
            <p class="about__subtitle">
              Наш проект создан для каких-то важных целей и поможет вам
            </p>
          </div>
          <p class="about__text">
            Даже самый заядлый путешественник откроет для себя в Казахстане много интересного и прекрасного: горные вершины, покрытые снегом, обширные плоскогорья, глубокие реки, засушливые пустыни, бескрайние поля, покрытые цветам и девственные заповедные леса.
            <br/><br/>
            Невозможно рассказать обо всех живописных уголках страны на нескольких страницах. Незабываемы наскальные рисунки и скульптуры национального парка Баянаул, природный заповедник Кургалжин, где можно увидеть более чем 300 видов растений и самую северную в мире колонию фламинго.
          </p>
        </div>
        <div class="about__img-wrapper">
          <img src="../assets/img/tower-foto.png" alt="tower" class="about__img">
          <img src="../assets/img/figure-1.png" alt="about__img" class="about__img-fig1">
          <img src="../assets/img/figure-2.png" alt="about__img" class="about__img-fig2">
          <img src="../assets/img/figure-yellow.png" alt="about__img" class="about__img-fig3">
          <img src="../assets/img/figure-red.png" alt="about__img" class="about__img-fig4">
          <img src="../assets/img/figure-grey.png" alt="about__img" class="about__img-fig5">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about {
    padding: 241px 0px 100px 0px;
  }
  .about__wrapper {
    display: flex;
    justify-content: space-between;
  }
  .about__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .about__title {
    font-family: 'Comic Sans MS', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 53px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #5C5754;
  }
  .about__subtitle {
    max-width: 313px;
    font-family: 'Comic Sans MS', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 180%;
    color: #AB9995;
  }
  .about__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 138.9%;
    color: #72767E;
    padding-right: 58px;
  }
  .about__img-wrapper {
    width: 100%;
    height: auto;
    position: relative;
  }
  .about__img {
    max-width: 100%;
    height: auto;
    min-width: 497px;
    position: relative;
    z-index: 2;
  }
  .about__img-fig1 {
    position: absolute;
    left: 150px;
    top: 20px;
  }
  .about__img-fig2 {
    position: absolute;
    z-index: 3;
    left: 300px;
    top: 10px;
  }
  .about__img-fig3 {
    position: absolute;
    z-index: 3;
    left: -15px;
    top: 500px;
  }
  .about__img-fig4 {
    position: absolute;
    z-index: 4;
    left: 45px;
    top: 570px;
  }
  .about__img-fig5 {
    position: absolute;
    left: 120px;
    top: 100px;
  }

  @media (max-width: 390px) {
    .about {
    padding: 25px 0px 50px 0px;
  }
  .about__wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .about__content {
    align-items: center;
    padding: 0 15px;
  } 
  .about__titles {
    padding-bottom: 25px;
  }
  .about__img-wrapper {
    display: none;
  }
  .about__text {
    padding-right: 0;
  }
  
  }
</style>