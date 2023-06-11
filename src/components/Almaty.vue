<template>
  <div class="almaty">
    <div class="container">
      <div class="almaty__container">
        <div class="almaty__info">
          <h1 class="almaty__title">Алматы</h1>
          <p class="almaty__subtitle">прогулка по «немецкой» истории города</p>
        </div>
        <div class="almaty__img-wrapper">
          <img src="../assets/img/almaty-image.png" alt="almaty" class="almaty__img">
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
  .almaty {
    padding: 241px 0 100px 0px;
    font-family: 'Comic Sans MS', sans-serif;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    background: url(../assets/img/main-banner.jpg) no-repeat center;
    background-size: cover;
  }
  .almaty__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .almaty__info {
    display: flex;
    flex-direction: column;
  }
  .almaty__title {
    font-size: 56px;
    line-height: 157%;
    letter-spacing: 0.09em;
    color: #5C5754;
    padding-bottom: 9px;
  }
  .almaty__subtitle {
    font-size: 12px;
    line-height: 180%;
    color: #AB9995;
  }
  .almaty__img-wrapper {
    max-width: 621px;
    height: auto;
  }
  .almaty__img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 390px) {
    .almaty {
    padding: 75px 0 75px 0px;
  }
    .almaty__container {
    flex-direction: column;
  }
  .almaty__info {
    margin-bottom: 20px;
    align-items: center;
  }
  .almaty__title {
    font-size: 50px;
  }
  .almaty__img-wrapper {
    display: flex;
    justify-content: center;
  }
  .almaty__img {
    max-width: 75%;
  }
  }
</style>