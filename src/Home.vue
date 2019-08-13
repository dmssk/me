<i18n>
  {
    "eu": {
      "hello": "Hi, nice to meet You!",
      "about": "qwe",
      "experienceHeader1": "qwe"
    },
    "ru": {
      "hello": "Привет, рад знакомству!",
      "about": "qwe",
      "experienceHeader1": "qwe"
    },
    "ua": {
      "hello": "Привіт, радий знайомству!",
      "about": "qwe",
      "experienceHeader1": "qwe"
    }
  }
</i18n>

<template>
  <div id="Home">
    <div class="grid container">
      <div class="grid__item header">
        <h1>{{$t('hello')}}</h1>
        <p></p>
      </div>
      <div class="grid__item"></div>
      <div class="grid__item experience">
        <div class="experience-item">
          <h3 class="experience-header">
            Lorem ipsum dolor sit amet.
          </h3>
          <ul class="experience-list">
            <li class="experience-list__item">
              <div class="progress-bar__wrap" id="css">
                <div class="progress-bar__item">
                  <span>90</span>
                </div>
              </div>
              <p>CSS</p>
            </li>
            <li class="experience-list__item">
              <div class="progress-bar__wrap" id="html">
                <div class="progress-bar__item">
                  <span>80</span>
                </div>
              </div>
              <p>HTML</p>
            </li>
            <li class="experience-list__item">
              <div class="progress-bar__wrap" id="js">
                <div class="progress-bar__item">
                  <span>70</span>
                </div>
              </div>
              <p>JS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
  .container {
    width: 1170px;
    max-width: 100%;
    margin: 0 auto;
  }
  #Home {
    width: 100%;
    height: 100%;
    padding: 88px 0 20px 0;

    .grid {
      height: 100%;
      display: grid;
      grid: 3fr 12fr / 1fr 1fr;
      grid-gap: 6px 6px;

      .grid__item {

        background: #fff;
        box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);

        &.header {
          grid-column: 1/3;
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

        &#css {
          width: 90%;
        }
        &#html {
          width: 80%;
        }
        &#js {
          width: 70%;
        }


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
            text-shadow: 0px 0px 7px rgba(0,0,0,0.3);
          }
        }
      }
      .header {
        padding: 20px 0 0 30px;

        h1 {
          font-size: 22px;
          margin: 0;
        }
      }
    }
  }
</style>
