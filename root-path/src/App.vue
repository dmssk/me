<template>
  <div id="app">

    <button><menu-icon></menu-icon></button>
    <nav>
      <ul>
        <li>
          <router-link to="/gallery">Перейти к Gallery</router-link>
        </li>
        <li>
          <router-link to="/">Перейти к Home</router-link>
        </li>
      </ul>
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
      return {}
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
