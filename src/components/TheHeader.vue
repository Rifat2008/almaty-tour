<template>
  
    <header class="header" :class="{ header_active: isActive }">
      <div class="container">
        <div class="header__container">
          <router-link to="/">
            <img src="../assets/img/logo-img.png" alt="header__logo" class="header__logo">
          </router-link>
          <nav class="header__menu">
            <ul class="header__menu-list">
              <li class="header__menu-item">
                <router-link to="/"
                  class="header__menu-link"
                  :class="{ 'header__menu-link_active': isActive }"
                >
                  Алматы
                </router-link>
              </li>
              <li class="header__menu-item">
                <a href="" class="header__menu-link" :class="{ 'header__menu-link_active': isActive }">Астана</a>
              </li>
              <li class="header__menu-item">
                <a href="" class="header__menu-link" :class="{ 'header__menu-link_active': isActive }">Другие</a>
              </li>
              <li class="header__menu-item">
                <router-link to="/second"
                  class="header__menu-link"
                  :class="{ 'header__menu-link_active': isActive }"
                >
                  О нас<span>&#8595;</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 150) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  }
  
}
</script>

<style scoped>
.header {
  padding: 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_active {
  background-color: #e0d9d5;
  opacity: 0.8;
}
.header__menu {
  display: flex;
  text-align: center;
}
.header__menu-list {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .header__menu-link {
    text-decoration: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #5C5754;
  }
  .header__menu-link_active {
    color: #5C5754;
  }
  .header__menu-item:not(:last-child) {
    margin-right: 50px;
  }

  @media (max-width: 390px) {
  .header {
  position: static;
  }
  .header__logo {
    width: 75%;
  }
  .header__container {
    flex-direction: column;
  }
  .menu__list {
  justify-content: space-between;
}
.header__menu-item:not(:last-child) {
    margin-right: 20px;
  }
}

</style>