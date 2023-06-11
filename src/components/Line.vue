<template>
    <img
      v-if="number < places.length - 1" 
      :src="'/lines/' + line" 
      :alt="'Line' + number"
      class="line" 
      :class="'line_' + (number + 1)"
    >
</template>

<script>
export default {
  props: ['line', 'number', 'places']
}
</script>

<style scoped>
  .line_1 {
    position: absolute;
    top: 170px;
    left: 160px;
  }
  .line_2 {
    position: absolute;
    top: 340px;
    left: 260px;
  }
  .line_3 {
    position: absolute;
    top: 710px;
    left: 300px;
  }
  .line_4 {
    position: absolute;
    top: 820px;
    left: 500px;
  }
  .line_5 {
    position: absolute;
    top: 1040px;
    left: 240px;
  }
  .line_6 {
    position: absolute;
    top: 1300px;
    left: 270px;
  }
  .line_7 {
    position: absolute;
    top: 1410px;
    left: 420px;
  }
  .line_8 {
    position: absolute;
    top: 1800px;
    left: 420px;
  }
  @media (max-width: 390px) {
    .line {
      display: none;
    }
  }
</style>

