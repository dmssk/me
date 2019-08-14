<i18n>
  {
    "eu": {
      "hello": "Hi, nice to meet You!",
      "about": "I'm Dima, 20 y.o. Love te create web applications with various levels of complexity. Right now working in Viseven company, at the position of junior Front-End developer.",
      "experienceHeader": "Experience in common web technologies"
    },
    "ru": {
      "hello": "Привет, рад знакомству!",
      "about": "qwe",
      "experienceHeader": "Опыт работы с основными web технологиями"
    },
    "ua": {
      "hello": "Привіт, радий знайомству!",
      "about": "qwe",
      "experienceHeader": "Досвід роботи з основними web технологіями"
    }
  }
</i18n>

<template>
  <div id="Home">
    <div class="grid container">
      <div class="grid__item header">
        <div class="header__text">
          <h1>{{$t('hello')}}</h1>
          <p>{{$t('about')}}</p>
        </div>
        <div class="header__picture">

        </div>
      </div>
      <div class="grid__item"></div>
      <div class="grid__item experience">
        <div class="experience-item">
          <h3 class="experience-header">
            {{$t('experienceHeader')}}
          </h3>
          <progress-bars-list :items="this.skills" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import styles from "./styles/home.scss"
  import ProgressBarsList from "./components/progressBarsList"
  export default {
    components: {
      styles,
      ProgressBarsList
    },
    data() {
      return {
        skills: {
          'CSS': 90,
          'HTML': 80,
          'JS': 70,
          'Adobe Photoshop': 80
        }
      }
    }
  }
</script>


<style lang="scss">

</style>
