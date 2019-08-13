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
          <ul class="experience-list">
            <li class="experience-list__item">
              <div class="progress-bar__wrap" id="css">
                <div class="progress-bar__item">
                  <span title="points">90</span>
                </div>
              </div>
              <p>CSS</p>
            </li>
            <li class="experience-list__item">
              <div class="progress-bar__wrap" id="html">
                <div class="progress-bar__item">
                  <span title="points">80</span>
                </div>
              </div>
              <p>HTML</p>
            </li>
            <li class="experience-list__item">
              <div class="progress-bar__wrap" id="js">
                <div class="progress-bar__item">
                  <span title="points">70</span>
                </div>
              </div>
              <p>JS</p>
            </li>
            <li class="experience-list__item">
              <div class="progress-bar__wrap" id="ps">
                <div class="progress-bar__item">
                  <span title="points">80</span>
                </div>
              </div>
              <p>Adobe Photoshop</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import styles from "./styles/home.scss"

  export default {
    components: {
      styles
    }
  }
</script>


<style lang="scss">

</style>
