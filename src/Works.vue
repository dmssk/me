<template>
  <div id="Works">
    <div class="grid container">
      <div class="grid__item"></div>
      <div class="grid__item"></div>
      <div class="grid__item"></div>
      <div class="grid__item"></div>
      <div class="grid__item"></div>
      <div class="grid__item"></div>
      <div class="grid__item"></div>
      <div class="grid__item"></div>
      <div class="grid__item"></div>
    </div>
  </div>
</template>

<script>

</script>


<style lang="scss">
  #Works {
    width: 100%;
    height: 100%;
    padding: 88px 0 20px 0;

    .container {
      width: 1170px;
      max-width: 100%;
      margin: 0 auto;
    }
    .grid {
      height: 100%;
      display: grid;
      grid: 1fr 1fr 1fr / 1fr 1fr 1fr;
      grid-gap: 6px 6px;

      .grid__item {

        background: #fff;
        box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
      }
    }
  }
</style>
