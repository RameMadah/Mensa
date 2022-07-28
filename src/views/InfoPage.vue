<template>
  <div class="Structure">
    <router-link to="/HomePage">
      <button class="weiter">Zurück</button>
    </router-link>
    <div class="mensaback">
      <div class="htwback"></div>
      <div class="space_XL"></div>
      <img class="backgroundLayout" src="@/assets/pngwing.com.png" alt="logo" />
      <img class="logoh" src="@/assets/HTW.png" alt="logo" />
      <div class="appintro">Mensen Übersicht</div>
    </div>
    <GMapMap class="mapDiv" :center="center" :zoom="7" map-type-id="terrain">
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
    <div class="sicht" v-for="canti in canteen" :key="canti.id">
      <a @click="googleLocation(canti.coordinates)">{{ canti.name }}<br /></a>
      <a @click="googleLocation(canti.coordinates)">{{ canti.city }}<br /></a>
      <a @click="googleLocation(canti.coordinates)"
        >{{ canti.address }}<br
      /></a>
      <a @click="googleLocation(canti.coordinates)">{{ canti.coordinates }}</a>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
import Localbase from "localbase";
/*import { Loader } from "@googlemaps/js-api-loader";*/
/*import { computed, ref } from "vue";*/

let db = new Localbase("db");
/* eslint-disable no-undef */
export default {
  name: "InfoPage",
  data() {
    return {
      canteen: [],
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }, // Along list of clusters
      ],
    };
  },
  methods: {
    googleLocation(coords) {
      console.log(coords);
      /*const text = coords.split(",");
      let lat = text[0].split("[");
      console.log(lat);
      let lng = text[1].split("]");
      console.log(lng);
      this.center.lat = lat[1];
      this.center.lng = lng[0];
      this.markers.position.lat = lat[1];
      this.markers.position.lat = lng[0];*/
    },
  },
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
  .mapDiv {
    z-index: 1;
    height: 40%;
    width: 100%;
    padding: 5px;
    background-color: greenyellow;
  }
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
  .backgroundLayout {
    max-width: 100%;
    height: 30%;
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
  .appintro {
    /* Mensa übersicht */
    position: absolute;
    width: 200px;
    height: 27px;
    left: 29%;
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
    left: 14%;
    top: 109px;
    mix-blend-mode: normal;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0.7, 0.7));
  }

  .htwback {
    /* Rectangle 3 */
    position: absolute;
    display: flex;
    width: 100%;
    height: 7%;
    top: 195px;
    background: rgba(145, 255, 5, 0.34);
  }

  .mensaback {
    background: #56973e;
    display: flex;
  }
  .Structure {
    width: 100% !important;
    height: 620px !important;
  }
}
/* For Mobile */
@media screen and (min-width: 321px) {
  .mapDiv {
    z-index: 1;
    height: 40%;
    width: 100%;
    padding: 5px;
    background-color: greenyellow;
  }
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
  .backgroundLayout {
    max-width: 100%;
    height: 20%;
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
  .appintro {
    /* Mensa übersicht */
    position: absolute;
    width: 200px;
    height: 27px;
    left: 28%;
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
    left: 25%;
    top: 109px;
    mix-blend-mode: normal;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0.7, 0.7));
  }
  .htwback {
    /* Rectangle 3 */
    position: absolute;
    display: flex;
    width: 100%;
    height: 7%;
    top: 195px;
    background: rgba(145, 255, 5, 0.34);
  }
  .mensaback {
    background: #56973e;
    display: flex;
  }
  .Structure {
    width: 100% !important;
    height: 620px !important;
  }
}
/* For Tab */
@media screen and (min-width: 540px) {
  .space_XL {
    display: block;
    background-color: #56973e;
    height: 400px;
  }
  .mapDiv {
    z-index: 1;
    height: 40%;
    width: 100%;
    padding: 5px;
    background-color: greenyellow;
  }
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
  .backgroundLayout {
    max-width: 100%;
    height: 10%;
    display: none;
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
  .appintro {
    /* Mensa übersicht */
    position: absolute;
    width: 200px;
    height: 27px;
    left: 35%;
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
    left: 34%;
    top: 109px;
    mix-blend-mode: normal;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0.7, 0.7));
  }
  .htwback {
    /* Rectangle 3 */
    position: absolute;
    display: flex;
    width: 100%;
    height: 7%;
    top: 195px;
    background: rgba(145, 255, 5, 0.34);
  }
  .mensaback {
    background: #56973e;
    display: flex;
  }
  .Structure {
    width: 100% !important;
    height: 620px !important;
  }
}
/* Desktop */
@media screen and (min-width: 950px) {
  .space_XL {
    display: block;
    height: 450px;
    background-color: #56973e;
  }
  .mapDiv {
    z-index: 99;
    height: 40%;
    width: 100%;
    padding: 5px;
    background-color: greenyellow;
  }
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
    display: none;
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
  .appintro {
    /* Mensa übersicht */
    position: absolute;
    width: 200px;
    height: 27px;
    left: 42%;
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
    left: 41%;
    top: 109px;
    mix-blend-mode: normal;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0.7, 0.7));
  }
  .htwback {
    /* Rectangle 3 */
    position: absolute;
    display: flex;
    width: 100%;
    height: 7%;
    top: 195px;
    background: rgba(145, 255, 5, 0.34);
  }
  .mensaback {
    background: #56973e;
    display: flex;
  }
}
</style>
