<template>
  <p class="jara">
    {{ canteen.name }}
  </p>
  <div class="Structure">
    <router-link to="/HomePage">
      <button class="weiter">Zurück</button>
    </router-link>

    <div class="mensaback">
      <div class="htwback"></div>
      <img class="backgroundLayout" src="@/assets/pngwing.com.png" alt="logo" />
      <div>
        <img class="logoh" src="@/assets/HTW.png" alt="logo" />
        <span class="dot"></span>
        <div class="subtitle">
          Information über Die Mensa am HTW Treskowaalle
        </div>
        <div class="row1">Addresse</div>
        <div class="description">
          Treskowallee 8 10318 Berlin (Bezirk: Lichtenberg)
        </div>
        <div class="row2">Email</div>
        <div class="description2">mensen@stw.berlin</div>
        <div class="row3">Anrufen</div>
        <div class="description3">030 93939 - 7550</div>
        <div class="row4">Öffnungszeiten</div>
        <div class="description4">
          Mo. – Fr. 08:00 – 14:30 Uhr Mittagstisch 11 - 14:30 Uhr
        </div>
      </div>
      <div class="appintro">Standort</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPage",
  data() {
    return {
      canteen: [],
      mid: "5",
    };
  },
  methods: {},
  mounted() {
    console.log("fetching...");
    const can = fetch("https://openmensa.org/api/v2/canteens/" + this.mid + "/")
      .then((res) => res.json())

      .then((canteen) => (this.canteen = canteen))

      .catch((err) => console.log(err.message()));

    console.log(can);
  },
};
</script>

<style scoped>
/* For Mobile */
@media screen and (max-width: 320px) {
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
    padding: 10px 10px;
    color: #ffffff;
    font-size: 18px;
    position: absolute;
    width: 50%;
    height: 7%;
    left: 25%;
    top: 550px;
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
    /* Die Mensa App */
    position: absolute;
    width: 150px;
    height: 77px;
    left: 28%;
    top: 220px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 29.0969px;
    line-height: 77px;
    /* identical to box height */
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
    top: 550px;
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
