<template>
  <div id="app">

    <nav id="nav" class="nav" :class="{ active: isActive, inactive: firstState }" v-click-outside="closeNav">
      <ul class="nav__list">
        <li class="nav__list__item" @click="toggleMenu()">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav__list__item" @click="toggleMenu()">
          <router-link to="/works">Gallery</router-link>
        </li>
      </ul>
      <button id="menuButton" class="menu-button" @click="toggleMenu()">
        <menu-icon />
      </button>
    </nav>

    <div class="lang-list" :class="{active: lang}" v-click-outside="closeLang">
      <button class="lang-list__item" @click="changeLanguage('eu')"><country-flag country='eu' size='normal'/></button>
      <button class="lang-list__item" @click="changeLanguage('ru')"><country-flag country='ru' size='normal'/></button>
      <button class="lang-list__item" @click="changeLanguage('ua')"><country-flag country='ua' size='normal'/></button>
      <button class="lang-list__arrow" @click="toggleLang()"><Arrow-right-bold class="arrow-right" /></button>
    </div>

    <router-view class="router"></router-view>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside'
  import MenuIcon from "vue-material-design-icons/Menu.vue"
  import ArrowRightBold from "vue-material-design-icons/ArrowRightBold.vue"
  import CountryFlag from 'vue-country-flag'
  export default {
    directives: {
      ClickOutside
    },
    components: {
      MenuIcon,
      ArrowRightBold,
      CountryFlag
    },
    data() {
      return {
        isActive: false,
        lang: false,
        firstState: true
      }
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
        this.firstState = false;
      },
      toggleLang() {
        this.lang = !this.lang;
      },
      closeLang() {
        this.lang = false;
      },
      closeNav(){
        this.isActive = false;
      },
      changeLanguage(val){
        this.$i18n.locale = val
      }
    }
  }

</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #f9f9f9;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  html,
  body {
    height: 100%;
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
  }

  @keyframes menuDown {
    0% {transform: translateY(-110px)}
    50% {transform: translateY(-120px)}
    100% {transform: translateY(-15px)}
  }
  @keyframes menuUp {
    0% {transform: translateY(-15px)}
    50% {transform: translateY(0px)}
    100% {transform: translateY(-110px)}
  }

  @keyframes newWindow {
    0% {
      transform: translateY(100%) scale(0);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;

    nav {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      background: #d1f2f3;
      padding: 15px 0;
      z-index: 1;
      transition: 0.3s;
      animation: menuUp 0.5s;
      animation-fill-mode: both;

      &.active {
        animation: menuDown 0.5s;
        animation-fill-mode: forwards;
      }
      &.inactive {
        animation: none;
        transform: translateY(-110px);
      }


      .nav__list {
        margin: 0;
        padding: 0;
        list-style: none;
        padding-bottom: 15px;

        .nav__list__item {
          color: #000;
          font-size: 2rem;

          a {
            display: block;
            padding: 10px 0;
            transition: .2s all;

            &:hover {
              background: #6cbdbf;
              color: #fff;
            }
            &:focus {
              transition: none;
              outline: 2px solid #6cbdbf;
            }
          }
        }
      }
      #menuButton {
        border: none;
        font-size: 25px;
        padding: 5px 15px;
        background: #fff;
        cursor: pointer;
        box-shadow: 0 0 10px 0 rgba(39, 119, 121, 0.5);
        transition: 0.2s;
        outline: none;

        &:hover {
          box-shadow: 0 0 7px 2px rgba(39, 119, 121, 1);
        }
        &:active {
          background: #eee;
          transition: none;
          box-shadow: 0 0 7px 2px rgba(39, 119, 121, 1);
        }
        &:focus {
          transition: none;
          outline: 2px solid #6cbdbf;
        }
      }
    }
    .router {
      animation: newWindow 1s 0.2s both;
    }
    .lang-list {
      position: absolute;
      top: 20%;
      display: flex;
      flex-direction: column;
      z-index: 2;
      background: #fff;
      transform: translateX(-90%);
      transition: 0.3s;

      &.active {
        transform: translateX(0);

        .lang-list__arrow {
          .arrow-right {
            transform: rotate(180deg);
          }
        }
      }

      .lang-list__item {
        background: #fff;
        margin: 1px 0;
        border: 1px solid #ccc;
        cursor: pointer;
      }
      .lang-list__arrow {
        position: absolute;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 102%;
        top: 0;
        bottom: 0;
        margin: auto;
        border: 1px solid #ccc;
        font-size: 17px;
        cursor: pointer;

        &:active,
        &:focus {
          outline: 1px skyblue solid;
        }

        .arrow-right {
          transition: 0.2s;
          transform-origin: center center;

          .material-design-icon__svg {
            bottom: 0;
          }
        }
      }
    }
  }

</style>
