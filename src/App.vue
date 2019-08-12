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

</style>
