<template>
  <div id="app">

    <nav id="nav" class="nav" :class="{ active: isActive }">
      <ul class="nav__list">
        <li class="nav__list__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav__list__item">
          <router-link to="/gallery">Gallery</router-link>
        </li>
      </ul>
      <button id="menuButton" class="menu-button" @click="toggleMenu()">
        <menu-icon class="menu-button__icon" id="menuIcon"></menu-icon>
      </button>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  import MenuIcon from "vue-material-design-icons/Menu.vue"

  export default {
    components: {
      MenuIcon
    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
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
    0% {transform: translateY(-100px)}
    30% {transform: translateY(-90px)}
    100% {transform: translateY(0)}
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    nav {
      text-align: center;
      background: #d1f2f3;
      padding-bottom: 15px;
      transform: translateY(-95px);
      transition: 0.3s;

      &.active {
        animation: menuDown 0.5s;
        animation-fill-mode: forwards;
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
  }

</style>
