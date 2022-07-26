<template>
  <div class="Structure">
    <router-link to="/HomePage">
      <router-link to="/login" v-if="authState && !authState.isAuthenticated"
        ><button class="weiter">Weiter</button></router-link
      >
    </router-link>
    <router-link to="/Homepage" v-if="authState && authState.isAuthenticated"
      ><button class="weiter">Weiter</button></router-link
    >

    <div class="mensaback">
      <div class="htw">hi</div>
      <div class="htwback"></div>
      <img class="backgroundLayout" src="@/assets/pngwing.com.png" alt="logo" />
      <div>
        <img class="logoh" src="@/assets/HTW.png" alt="logo" />

        <span class="dot"></span>
        <div class="subtitle">Unirest Platform</div>
        <div class="description">
          Unsere Mensen bieten werktags frisch zubereitete Speisen, einen
          Aktionsstand sowie belegte Brötchen, Kuchen, Kalt- und Heißgetränke am
          Backshop. Schaut doch einfach mal rein! :
        </div>
      </div>
      <div class="appintro">Die Mensen Platform</div>
    </div>
  </div>
</template>

<script>
import Localbase from "localbase";

let db = new Localbase("db");
export default {
  name: "StartPage",
  data: function () {
    return {
      claims: "",
      mensa: [],
      save: false,
    };
  },
  created() {
    this.setup();
  },
  async mounted() {
    var rk = await db
      .collection("canteens")
      .get()
      .then((canteenss) => {
        return canteenss[0];
      });
    this.mensa = rk;
    // check if there is content stored in DB

    const can = fetch("https://openmensa.org/api/v2/canteens?page=1")
      .then((res) => res.json())
      .then((mensa) => (this.mensa = mensa))
      .catch((err) => console.log(err.message()));
    /*add canteens to the Database */
    db.collection("canteens").add(can);

    const can2 = fetch("https://openmensa.org/api/v2/canteens?page=2")
      .then((res) => res.json())
      .then((mensa) => (this.mensa = mensa))
      .catch((err) => console.log(err.message()));
    /*add canteens to the Database */
    db.collection("canteens").add(can2);

    const can3 = fetch("https://openmensa.org/api/v2/canteens?page=3")
      .then((res) => res.json())
      .then((mensa) => (this.mensa = mensa))
      .catch((err) => console.log(err.message()));
    /*add canteens to the Database */
    db.collection("canteens").add(can3);
  },
  methods: {
    async setup() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
      }
    },
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
    width: 100px;
    height: 114px;
    left: 110px;
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
    left: 35px;
    top: 400px;

    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.0969px;
    line-height: 20px;
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
    width: 200px;
    height: 77px;
    left: 23%;
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
    left: 0px;
    top: 195px;
    padding: 0px;
    margin: 0px;
    background: rgba(145, 255, 5, 0.34);
  }

  .mensaback {
    background: #3e7314;
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
    width: 100px;
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
    background: #3e7314;
    display: flex;
  }
  .Structure {
    width: 375px !important;
    height: 620px !important;
  }
}
@media screen and (min-width: 424px) {
  .backgroundLayout {
    width: 100%;
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
    width: 150px;
    height: 114px;
    left: 31%;
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
    left: 18%;
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
  .dot {
    position: fixed;
    align-content: center;
    right: -58%;
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
    left: 50px;
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
    left: 90px;
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
    width: 100%;
    height: 7%;
    left: 0px;
    top: 195px;
    padding: 0px;
    margin: 0px;
    background: rgba(145, 255, 5, 0.34);
  }

  .mensaback {
    position: absolute;
    background: #3e7314;
    width: 100%;
  }
  .Structure {
    width: 375px !important;
    height: 620px !important;
  }
}

@media screen and (min-width: 767px) {
  .backgroundLayout {
    width: 100%;
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
    width: 190px;
    height: 114px;
    left: 41%;
    top: 330px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-size: 24.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;

    color: white;
    font-weight: 555;
  }

  .description {
    /* description */
    position: absolute;
    width: 290px;
    height: 114px;
    left: 30%;
    top: 390px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.4);
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;

    color: #000000;
  }
  .dot {
    position: fixed;
    align-content: center;
    right: -58%;
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
    display: none;
    position: absolute;
    width: 320px;
    height: 77px;
    left: 50px;
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
    left: 280px;
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
    width: 100%;
    height: 7%;
    left: 0px;
    top: 195px;
    padding: 0px;
    margin: 0px;
    background: rgba(145, 255, 5, 0.34);
  }

  .mensaback {
    position: absolute;
    background: #3e7314;
    width: 100%;
  }
  .Structure {
    width: 375px !important;
    height: 620px !important;
  }
}
@media screen and (min-width: 1023px) {
  .backgroundLayout {
    width: 100%;
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
    width: 190px;
    height: 114px;
    left: 41%;
    top: 330px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-size: 24.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;

    color: white;
    font-weight: 555;
  }

  .description {
    /* description */
    position: absolute;
    width: 290px;
    height: 114px;
    left: 35%;
    top: 390px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.4);
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16.0969px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.597208px;

    color: #000000;
  }
  .dot {
    position: fixed;
    align-content: center;
    right: -58%;
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
    display: none;
    position: absolute;
    width: 320px;
    height: 77px;
    left: 50px;
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
    left: 380px;
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
    width: 100%;
    height: 7%;
    left: 0px;
    top: 195px;
    padding: 0px;
    margin: 0px;
    background: rgba(145, 255, 5, 0.34);
  }

  .mensaback {
    position: absolute;
    background: #3e7314;
    width: 100%;
  }
  .Structure {
    width: 375px !important;
    height: 620px !important;
  }
}
</style>
