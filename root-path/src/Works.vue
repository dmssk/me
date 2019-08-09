<template>
  <div id="Works">
    <div class="grid">
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
    padding: 130px;

    .grid {
      width: 100%;
      height: 100%;
      display: grid;
      grid: 1fr 1fr 1fr / 1fr 1fr 1fr;
      grid-gap: 4px 4px;

      .grid__item {

        &:nth-child(1) {
          background: #793c3c;
        }
        &:nth-child(2) {
          background: #5c8792;
        }
        &:nth-child(3) {
          background: #7b3b75;
        }
        &:nth-child(4) {
          background: #411d80;
        }
        &:nth-child(5) {
          background: #b5bf43;
        }
        &:nth-child(6) {
          background: #156558;
        }
        &:nth-child(7) {
          background: #9ef57e;
        }
        &:nth-child(8) {
          background: #000;
        }
        &:nth-child(9) {
          background: #000;
        }
      }
    }
  }
</style>
