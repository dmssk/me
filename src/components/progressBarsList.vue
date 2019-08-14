<template>
  <ul class="experience-list" id="progressList">
    <li class="experience-list__item" v-for="(value, key) in items">
      <div class="progress-bar__wrap" :style="`width: calc(${value}% - 100px)`">
        <div class="progress-bar__item">
          <span title="points">{{value}}</span>
        </div>
      </div>
      <p>{{key}}</p>
    </li>
  </ul>
</template>

<script>

  export default {
    name: 'progressBarsList',
    props: ['items'],
    data() {
      return {}
    }
  }

</script>

<style lang="scss">
  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .experience {
    .experience-header {
      font-size: 16px;
      margin: 1em;
    }

    .experience-list {
      padding: 0;
      margin: 0;
      list-style: none;

      .experience-list__item {
        position: relative;
        margin: 0 0 0 0;
        padding: 0;
        height: 50px;
        width: 100%;
        background: #e3ffd5;
        box-shadow: 0 7px 15px -5px rgba(0, 0, 0, 0.2) inset;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        p {
          font-size: 16px;
          margin: 0 10px;
        }

      }
    }
  }

  .progress-bar__wrap {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;


    .progress-bar__item {
      position: absolute;
      top: 10%;
      left: 0;
      height: 80%;
      width: 100%;
      background: linear-gradient(to left, #d1f2f3, #39ffd6);
      z-index: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      animation: slideIn 1s 2s both ease-in-out;
      overflow: hidden;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

      span {
        font-size: 16px;
        font-weight: 600;
        margin: 5px;
        color: #fff;
        text-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>
