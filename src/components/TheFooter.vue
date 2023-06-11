<template>
  
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <router-link to="/">
            <img src="../assets/img/logo-img.png" alt="footer__logo" class="footer__logo">  
          </router-link>
          <div class="footer__content">
            <div class="footer__cities">
              <div class="footer__cities-col">
                <router-link to="/" class="footer__city-link">Алматы</router-link>
                <a href="#" class="footer__city-link">Астана</a>
                <a href="#" class="footer__city-link">Павлодар</a>
              </div>
              <div class="footer__cities-col">
                <a href="#" class="footer__city-link">Петропавловск</a>
                <a href="#" class="footer__city-link">Семей</a>
                <a href="#" class="footer__city-link">Караганда</a>
              </div>
              <div class="footer__cities-col">
                <a href="#" class="footer__city-link">Тараз</a>
                <a href="#" class="footer__city-link">Усть-Каменогорск</a>
                <a href="#" class="footer__city-link">Актобе</a>
              </div>
            </div>
            <div class="footer__about">
              <router-link to="/second" class="footer__about-link">О нас</router-link>
              <span class="footer__about-rights">Все права защищены © 2022</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  
</template>

<style scoped>
  .footer {
    height: 271px;
    padding-top: 70px;
    border-top: 3px dashed #F9CD02;
  }
  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .footer__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer__cities {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }
  .footer__cities-col {
    display: flex;
    flex-direction: column;
  }
  .footer__cities-col:not(:last-child) {
    margin-right: 92px;
  }
  .footer__city-link, .footer__about-link {
    text-decoration: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #5C5754;
  }
  .footer__city-link:not(:nth-child(1n+3)) {
    padding-bottom: 9px;
  }
  .footer__about {
    display: flex;
    justify-content: space-between;
  }
  .footer__about-rights {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #5C5754;
  }

  @media (max-width: 390px) {
    .footer__wrapper {
      padding: 0 15px;
    }
    .footer__logo {
      display: none;
    }
    .footer__cities-col:not(:last-child) {
    margin-right: 30px;
    }
    .footer__city-link, .footer__about-link {
      font-size: 14px;
    }
    .footer__city-link:not(:nth-child(1n+3)) {
    padding-bottom: 3px;
  }
  }
</style>