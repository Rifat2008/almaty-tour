import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/pages/MainPage.vue';
import SecondPage from '../components/pages/SecondPage.vue';
import PlaceOnePage from '../components/pages/places/PlaceOnePage.vue';
import PlaceTwoPage from '../components/pages/places/PlaceTwoPage.vue';
import PlaceThreePage from '../components/pages/places/PlaceThreePage.vue';
import PlaceFourPage from '../components/pages/places/PlaceFourPage.vue';
import PlaceFivePage from '../components/pages/places/PlaceFivePage.vue';
import PlaceSixPage from '../components/pages/places/PlaceSixPage.vue';
import PlaceSevenPage from '../components/pages/places/PlaceSevenPage.vue';
import PlaceEightPage from '../components/pages/places/PlaceEightPage.vue';
import PlaceNinePage from '../components/pages/places/PlaceNinePage.vue';



const routes = [
    {
      path: '/',
      alias: '/main',
      name: 'main',
      component: MainPage
    },
    {
      path: '/second',
      name: 'second',
      component: SecondPage
    },
    {
      path: '/place-1',
      name: 'place-1',
      component: PlaceOnePage
    },
    {
      path: '/place-2',
      name: 'place-2',
      component: PlaceTwoPage
    },
    {
      path: '/place-3',
      name: 'place-3',
      component: PlaceThreePage
    },
    {
      path: '/place-4',
      name: 'place-4',
      component: PlaceFourPage
    },
    {
      path: '/place-5',
      name: 'place-5',
      component: PlaceFivePage
    },
    {
      path: '/place-6',
      name: 'place-6',
      component: PlaceSixPage
    },
    {
      path: '/place-7',
      name: 'place-7',
      component: PlaceSevenPage
    },
    {
      path: '/place-8',
      name: 'place-8',
      component: PlaceEightPage
    },
    {
      path: '/place-9',
      name: 'place-9',
      component: PlaceNinePage
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  