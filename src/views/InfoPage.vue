<template>
  <div class="Structure">
    <router-link to="/HomePage">
      <button class="weiter">Zurück</button>
    </router-link>
    <div class="mensaback">
      <div class="htwback"></div>
      <img class="backgroundLayout" src="@/assets/pngwing.com.png" alt="logo" />
      <img class="logoh" src="@/assets/HTW.png" alt="logo" />
      <div class="appintro">Mensen Übersicht</div>
    </div>
    <div class="sicht" v-for="canti in canteen" :key="canti.id">
      <a>{{ canti.name }}<br /></a>
      <a>{{ canti.city }}<br /></a>
      <a>{{ canti.address }}<br /></a>
      <a>{{ canti.coordinates }}</a>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
import Localbase from "localbase";
let db = new Localbase("db");

export default {
  name: "InfoPage",
  data() {
    return {
      canteen: [],
    };
  },
  methods: {},
  async mounted() {
    var rk = await db
      .collection("canteens")
      .get()
      .then((canteenss) => {
        return canteenss[0];
      });
    this.canteen = rk;
  },
};
</script>

<style scoped>
/* For Mobile */
@media screen and (max-width: 320px) {
  .space {
    height: 3px;
    width: 100%;
    margin-top: 10px;
    padding-bottom: 6px;
    background-color: chartreuse;
    box-shadow: 1px -2px 4px darkslategrey !important;
    border-radius: 522222px;
  }
  .sicht {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    padding: 11px;
    color: cornsilk;
    font-weight: 600;
    background-color: #4cc355;
    box-shadow: 22px 0px 3px green;
    width: 100%;
  }
  #Startpage {
    width: 320px;
    height: 620px;
  }
  .row1 {
    /* row */
    position: absolute;
    width: 270px;
    height: 114px;
    left: -20%;
    top: 400px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
    z-index: 3;
  }
  .row2 {
    /* row */
    position: absolute;
    width: 270px;
    height: 114px;
    left: -20%;
    top: 440px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
    z-index: 3;
  }
  .row3 {
    /* row */
    position: absolute;
    width: 270px;
    height: 114px;
    left: -20%;
    top: 470px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
    z-index: 3;
  }
  .row4 {
    /* row */
    position: absolute;
    width: 270px;
    height: 114px;
    left: -20%;
    top: 500px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
    z-index: 3;
  }
  .backgroundLayout {
    max-width: 100%;
  }
  .weiter {
    /* Auto Layout Horizontal */
    /* Auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 3px 3px;
    color: #ffffff;
    font-size: 18px;
    position: absolute;
    width: 25%;
    height: 6%;
    left: 37%;
    top: 280px;
    z-index: 1;
    background: #56973e;
    border-radius: 80px;
    border-color: #ffffff;
  }
  .subtitle {
    /* Mensa HTW Treskowallee */
    position: absolute;
    width: 200px;
    height: 114px;
    left: 60px;
    top: 330px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;

    color: #000000;
  }

  .description {
    /* description */
    position: absolute;
    width: 170px;
    height: 114px;
    left: 115px;
    top: 400px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.0969px;
    line-height: 13px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .description2 {
    /* description */
    position: absolute;
    width: 170px;
    height: 114px;
    left: 115px;
    top: 440px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.0969px;
    line-height: 13px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .description3 {
    /* description */
    position: absolute;
    width: 170px;
    height: 114px;
    left: 115px;
    top: 470px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.0969px;
    line-height: 13px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .description4 {
    /* description */
    position: absolute;
    width: 170px;
    height: 114px;
    left: 115px;
    top: 500px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.0969px;
    line-height: 13px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .dot {
    position: fixed;
    align-content: center;
    right: -90%;
    top: 47%;
    height: 700px;
    width: 900px;
    background-color: #ffffff;
    border-radius: 50%;
    display: inline-block;
    color: #ffffff;
  }

  .appintro {
    /* Mensa übersicht */
    position: absolute;
    width: 200px;
    height: 27px;
    left: 18%;
    top: 220px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20.0969px;
    line-height: 77px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #ffffff;
  }

  .logoh {
    /* Logo_HTW_Berlin 2 */
    position: absolute;
    width: 230px;
    height: 100px;
    left: 60px;
    top: 109px;
    mix-blend-mode: normal;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0.7, 0.7));
  }

  .htw {
    /* Rectangle */
    position: absolute;
    width: 320px;
    height: 10px;
    left: -272px;
    top: -24px;
  }

  .htwback {
    /* Rectangle 3 */
    position: absolute;
    display: flex;
    width: 320px;
    height: 7%;
    top: 195px;
    background: rgba(145, 255, 5, 0.34);
  }

  .mensaback {
    background: #56973e;
    display: flex;
  }
  .Structure {
    width: 320px !important;
    height: 620px !important;
  }
}
/* For Mobile */
@media screen and (min-width: 321px) {
  #Startpage {
    width: 375px;
    height: 620px;
  }
  .backgroundLayout {
    width: 375px;
  }
  .weiter {
    /* Auto Layout Horizontal */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 10px;
    color: #ffffff;
    font-size: 18px;
    position: absolute;
    width: 50%;
    height: 7%;
    left: 25%;
    top: 50px;
    z-index: 1;
    background: #56973e;
    border-color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .subtitle {
    /* Mensa HTW Treskowallee */
    position: absolute;
    width: 200px;
    height: 114px;
    left: 35%;
    top: 330px;

    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;

    color: #000000;
  }

  .description {
    /* description */
    position: absolute;
    width: 270px;
    height: 114px;
    left: 15%;
    top: 390px;

    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;

    color: #000000;
  }
  .roww {
    /* row */
    position: absolute;
    width: 270px;
    height: 114px;
    left: 15%;
    top: 290px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;
    color: #000000;
    z-index: 3;
  }
  .dot {
    position: fixed;
    align-content: center;
    right: -68%;
    top: 50%;
    height: 700px;
    width: 900px;
    background-color: #ffffff;
    border-radius: 50%;
    display: inline-block;
    color: #ffffff;
  }

  .appintro {
    /* Die Mensa App */
    position: absolute;
    width: 320px;
    height: 77px;
    left: 20px;
    top: 220px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 21.0969px;
    line-height: 77px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.597208px;
    color: #ffffff;
  }

  .logoh {
    /* Logo_HTW_Berlin 2 */
    position: absolute;
    width: 250px;
    height: 100px;
    left: 70px;
    top: 109px;
    mix-blend-mode: normal;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0.7, 0.7));
  }

  .htw {
    /* Rectangle */

    position: absolute;
    width: 375px;
    height: 10px;
    left: -272px;
    top: -24px;
  }

  .htwback {
    /* Rectangle 3 */
    position: absolute;
    display: flex;
    width: 375px;
    height: 7%;
    left: 0px;
    top: 195px;
    padding: 0px;
    margin: 0px;
    background: rgba(145, 255, 5, 0.34);
  }

  .mensaback {
    background: #56973e;
    display: flex;
  }
  .Structure {
    width: 375px !important;
    height: 620px !important;
  }
}
</style>
