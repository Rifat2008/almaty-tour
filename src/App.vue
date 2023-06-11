<template>
  <main-wrapper></main-wrapper>
</template>

<script>

import mainWrapper from './components/mainWrapper.vue';

  export default {
    name: 'app',
    components: {mainWrapper},
    data() {
      return {
        places: [
        {
          id: 0,
          name: 'Роща Баума',
          img: 'place-1',
          balloon_img: 'balloon-1',
          coords: [43.307457557435,76.95013649999997]
        },
        {
          id: 1,
          name: 'Дом Баума',
          img: 'place-2',
          balloon_img: 'balloon-2',
          coords: [43.248137074526056,76.93217899999993]
        },
        {
          id: 2,
          name: 'Академия наук',
          img: 'place-3',
          balloon_img: 'balloon-3',
          coords: [43.246377074521526,76.95309199999996]
        },
        {
          id: 3,
          name: 'Памятник Г.К. Бельгеру',
          img: 'place-4',
          balloon_img: 'balloon-4',
          coords: [43.248938,  76.952722]
        },
        {
          id: 4,
          name: 'Немецкий Дом',
          img: 'place-5',
          balloon_img: 'balloon-5',
          coords: [43.227468074522406,76.95737699999994]
        },
        {
          id: 5,
          name: 'Мемориальная доска Э.Ф. Айриху',
          img: 'place-6',
          balloon_img: 'balloon-6',
          coords: [43.252059, 76.950939]
        },
        {
          id: 6,
          name: 'Стадион «Динамо»',
          img: 'place-7',
          balloon_img: 'balloon-7',
          coords: [43.246797074522576,76.93634750000002]
        },
        {
          id: 7,
          name: 'Казахстанско-Немецкий университет',
          img: 'place-8',
          balloon_img: 'balloon-8',
          coords: [43.24429507451619,76.947774]
        },
        {
          id: 8,
          name: 'Музеи',
          img: 'place-9',
          balloon_img: 'balloon-9',
          coords: [43.23580357451909,76.91947699999999]
        }
        ],
        slides: [
              '/photos/almaty-image-2.jpg',
              '/photos/almaty-image-3.jpg',
              '/photos/city-image.png',
        ],
        lines: [
          {
            id: 0,
            img: 'line-1.png',
          },
          {
            id: 1,
            img: 'line-2.png',
          },
          {
            id: 2,
            img: 'line-3.png',
          },
          {
            id: 3,
            img: 'line-4.png',
          },
          {
            id: 4,
            img: 'line-5.png',
          },
          {
            id: 5,
            img: 'line-6.png',
          },
          {
            id: 6,
            img: 'line-7.png',
          },
          {
            id: 7,
            img: 'line-8.png',
          },
        ]
      }
    },
    provide() {
      return {
        places: this.places,
        slides: this.slides,
        lines: this.lines
      }
    }

  }

</script>



