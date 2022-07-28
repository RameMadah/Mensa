<template>
  <div class="space_meals"></div>
  <div class="mensainfo">
    <p class="t">Mensa :</p>
    <p class="h">{{ gmensa.name }}</p>
    <p class="h">{{ gmensa.city }}</p>
    <p class="h">{{ gmensa.address }}</p>
  </div>
  <div class="dropdown">
    <a
      class="btn btn-secondary dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Mensa Auswahl
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li
        class="list-group-item"
        v-for="men in mensa"
        :key="men.id"
        @click="mensaId(men.id)"
      >
        <div class="list-group-item1">{{ men.name }}</div>
      </li>
    </ul>
  </div>
  <div class="element">
    <p class="weeklymeal">Speiseplan der Woche :</p>
    <div class="Hlayout">
      <button id="d" class="Mon" @click="mealOfDay('5')">Montag</button>
      <button id="d" class="dien" @click="mealOfDay('6')">Dienstag</button>
      <button id="d" class="Mittw" @click="mealOfDay('7')">Mittwoch</button>
    </div>
    <div class="H2layout">
      <button id="d" class="Donner" @click="mealOfDay('8')">Donnerstag</button>
      <button id="d" class="Frei" @click="mealOfDay('9')">Freitag</button>
      <button id="d" class="Sams" @click="mealOfDay('1')">Samstag</button>
    </div>
    <div class="text">Den Tag besondere Rezepte :</div>
  </div>
  <div>
    <img class="platz" src="@/assets/ra.png" alt="platz" />
  </div>
  <li class="list-group-item" v-for="meal in meals" :key="meal.id">
    <img class="mpic" src="@/assets/Vfood.jpg" alt="MealPicture" />
    <p class="mealname">{{ meal.name }}</p>
    <p class="price">Preis : {{ meal.prices.students }}€</p>
    <button
      class="bb btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling"
    >
      Bewerten
    </button>
    <button
      class="br btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      style="float: right"
    >
      Rezepte
    </button>

    <button class="like" @click="addMeal(meal.id)">like</button>
  </li>
  <div class="sblock"></div>
  <div class="el">
    <div
      class="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="Structure">
          <router-link to="/HomePage">
            <button class="weiter">Eingeben</button>
          </router-link>

          <div class="mensaback">
            <div class="htw">hi</div>
            <div class="htwback"></div>
            <img
              class="backgroundLayout"
              src="@/assets/pngwing.com.png"
              alt="logo"
            />
            <div>
              <img class="logoh" src="@/assets/Vfood.jpg" alt="meal" />

              <span class="dot"></span>
              <div class="subtitle"></div>
              <div class="description">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                  />
                </svg>
              </div>
            </div>
            <div class="appintro">Bewerten :</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      v-for="meal in meals"
      :key="meal.id"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="Structure">
          <router-link to="/HomePage">
            <button class="weiter">Home</button>
          </router-link>

          <div class="mensaback">
            <div class="htw">hi</div>
            <div class="htwback"></div>
            <img
              class="backgroundLayout"
              src="@/assets/pngwing.com.png"
              alt="logo"
            />
            <div>
              <img class="logoh" src="@/assets/Vfood.jpg" alt="meal" />
              <span class="dot"></span>
              <div class="subtitle">Gericht Komponente</div>
              <div class="description">{{ meal.category }}</div>
              <div class="description1">{{ meal.notes }}</div>
            </div>
            <div class="appintro">Rezepte :</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Localbase from "localbase";
let db = new Localbase("db");

export default {
  name: "MealIngredients",
  data() {
    return {
      mensa: [],
      gmensa: [],
      mid: "1",
      meals: [],
      day: "1",
      like: "",
      likes: [],
    };
  },
  methods: {
    async addMeal(mealid) {
      /* Notification Stelle  */

      this.$toast.success(
        "Dieses Gericht wurde in die Liste der Lieblingsgerichte hinzugefügt.",
        {
          // override the global option
          position: "bottom",
        }
      );
      setTimeout(this.$toast.clear, 9000000);
      /***********************/
      const likedMeal = await fetch(
        "https://openmensa.org/api/v2/canteens/" +
          this.mid +
          "/days/2021-11-1" +
          this.day +
          "/meals/" +
          mealid
      )
        .then((res) => res.json())
        .then((li) => (this.like = li))
        .catch((err) => console.log(err));
      this.likes.push(this.like);
      db.collection("meals").add(likedMeal);
    },
    async saveThis(id) {
      var likedMeal = await this.meals.find((item) => item.id === id);
      return likedMeal;
    },
    mensaId(id) {
      this.gmensa = null;
      this.gmensa = [];
      this.meals = null;
      this.meals = [];
      console.log(typeof id);
      this.mid = id;
      console.log(this.mid);
      var MealsDay = fetch(
        "https://openmensa.org/api/v2/canteens/" +
          this.mid +
          "/days/" +
          "2021-11-1" +
          this.day +
          "/meals"
      )
        .then((res) => res.json())
        .then((data) =>
          data.forEach((meal) => {
            this.meals.push(meal);
          })
        )
        .catch((err) => console.log(err.message()));
      console.log("Meals of the day are fetched:" + MealsDay);

      fetch("https://openmensa.org/api/v2/canteens/" + this.mid + "/")
        .then((res) => res.json())
        .then((mensa) => (this.gmensa = mensa))
        .catch((err) => console.log(err.message()));
    },
    mealOfDay(day) {
      this.gmensa = null;
      this.gmensa = [];
      this.meals = null;
      this.meals = [];
      this.day = day;
      fetch(
        "https://openmensa.org/api/v2/canteens/" +
          this.mid +
          "/days/2021-11-1" +
          this.day +
          "/meals"
      )
        .then((res) => res.json())
        .then((data) =>
          data.forEach((meal) => {
            this.meals.push(meal);
          })
        )
        .catch((err) => console.log(err.message()));

      const can = fetch(
        "https://openmensa.org/api/v2/canteens/" + this.mid + "/"
      )
        .then((res) => res.json())
        .then((mensa) => (this.gmensa = mensa))
        .catch((err) => console.log(err.message()));
      console.log(can);
    },
  },
  async mounted() {
    fetch(
      "https://openmensa.org/api/v2/canteens/" +
        this.mid +
        "/days/2021-11-1/meals"
    )
      .then((res) => res.json())
      .then((data) =>
        data.forEach((meal) => {
          this.meals.push(meal);
        })
      )
      .catch((err) => console.log(err.message()));

    const can = fetch("https://openmensa.org/api/v2/canteens/" + this.mid + "/")
      .then((res) => res.json())
      .then((mensa) => (this.gmensa = mensa))
      .catch((err) => console.log(err.message()));

    console.log(can);

    var rk = await db
      .collection("canteens")
      .get()
      .then((canteenss) => {
        return canteenss[0];
      });
    this.mensa = rk;
    console.log(rk);
  },
};
</script>

<style scoped>
/* For Mobile */
@media screen and (max-width: 320px) {
  .space_meals {
    display: block;
    background-color: white;
    height: 400px;
  }
  #d {
    border: 3px solid rgb(116 171 96);
    margin-left: -8%;
    width: 45%;
    font-size: 13px;
    padding-left: 5%;
  }
  .like:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .like:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like {
    z-index: 4;
    -webkit-box-align: start;
    margin: 0px 1px 10px 3px;
    top: 90px;
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    align-items: start;
    justify-content: center;
  }
  .t {
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }
  .mensainfo {
    font-family: "Roboto", sans-serif;
    z-index: 1;
    text-align: left;
    margin-left: 5px;
    height: 85px;
    width: 230px;
    color: black;
    position: absolute;
    top: 70px;
    left: 10%;
    font-size: 12px;
    backface-visibility: revert;
    font-weight: 600;
    border-radius: 5px;
  }
  .text {
    position: absolute;
    left: -10px;
    width: 250px;
    top: 105px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 530;
    font-size: 17px;
    line-height: 41px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .element {
    position: absolute;
    top: 270px;
  }
  .weeklymeal {
    gap: 1px 10px;
    padding: 1px 20px 1px 1px;
    position: absolute;
    left: 2px;
    width: 200px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .Mon {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .dien {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Mittw {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Donner {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 90px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Frei {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Sams {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Hlayout {
    /* Auto Layout Horizontal */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 11%;
    position: absolute;
    width: 200px;
    height: 93px;
    left: 20px;
    top: 35px;
  }
  .H2layout {
    /* Auto Layout Horizontal */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 11%;
    position: absolute;
    width: 200px;
    height: 93px;
    left: 35px;
    top: 75px;
  }
  #dropdownMenuLink {
    z-index: 4;
    background: #56973e;
    border-radius: 50px;
    position: absolute;
    left: 22px;
    top: -175px;
    box-shadow: 3px 3px 5px rgba(24, 28, 22, 0.1),
      3px 3px 4px rgba(122, 194, 80, 0.4);
  }
  .platz {
    height: 150px;
    width: 90%;
    position: absolute;
    top: 60px;
    left: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(24, 28, 22, 0.1),
      3px 3px 4px rgba(122, 194, 80, 0.4);
  }
  .list-group-item {
    width: 90%;
    margin: 5%;
    top: 56%;
    padding: 10px;
    border-radius: 10px;
    background: rgba(145, 255, 5, 0.34);
    box-shadow: 3px 3px 3px rgba(163, 177, 198, 0.3),
      2px 2px 2px rgba(122, 194, 80, 0.3);
  }
  .mealname {
    font-size: 12px;
    width: 180px;
    text-align: left;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  .mpic {
    position: absolute;
    height: 65px;
    width: 65px;
    left: 200px;
    top: 10px;
    filter: drop-shadow(-13px 0.97px 20px rgba(51, 160, 0, 0.41));
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(163, 177, 198, 0.3),
      2px 2px 2px rgba(122, 194, 80, 0.3);
  }
  .sblock {
    display: none;
    position: absolute;
    width: 90%;
    right: 5%;
    height: 22%;
    top: 365px;
    background: rgba(145, 255, 5, 0.34);
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(24, 28, 22, 0.2),
      3px 3px 4px rgba(122, 194, 80, 0.3);
  }
  .price {
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.185px;
    line-height: 41px;
    margin-top: 10px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .br:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .br:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br {
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    top: 90px;
  }
  .br:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .bb {
    -webkit-box-align: start;
    top: 90px;
    margin-left: -10px;
    margin-right: 6px;
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    align-items: start;
    justify-content: center;
  }
  .bb:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .bb:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .bb:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .bb:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .list-group-item1 {
    width: 90%;
    margin: 1%;
    align-content: space-between;
    text-align: center;
    margin-right: 2px;
    top: 56%;
    border-radius: 10px;
    text-shadow: 1px 6px 6px lightgreen;
  }
}
@media screen and (min-width: 321px) {
  .space_meals {
    display: block;
    background-color: white;
    height: 400px;
  }
  #d {
    border: 3px solid rgb(116 171 96);
    margin-left: -8%;
    width: 45%;
    font-size: 13px;
    padding-left: 5%;
  }
  .like:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .like:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like {
    z-index: 4;
    -webkit-box-align: start;
    margin: 0px 1px 10px 3px;
    top: 90px;
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    align-items: start;
    justify-content: center;
  }
  .t {
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }
  .mensainfo {
    font-family: "Roboto", sans-serif;
    z-index: 1;
    text-align: left;
    margin-left: 5px;
    height: 85px;
    width: 230px;
    color: black;
    position: absolute;
    top: 70px;
    left: 12%;
    font-size: 12px;
    backface-visibility: revert;
    font-weight: 600;
    border-radius: 5px;
  }
  .text {
    position: absolute;
    left: -10px;
    width: 250px;
    top: 105px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 530;
    font-size: 17px;
    line-height: 41px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .element {
    position: absolute;
    top: 270px;
  }
  .weeklymeal {
    gap: 1px 10px;
    padding: 1px 20px 1px 1px;
    position: absolute;
    left: 2px;
    width: 200px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .Mon {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .dien {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Mittw {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Donner {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 90px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Frei {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Sams {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Hlayout {
    /* Auto Layout Horizontal */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 11%;
    position: absolute;
    width: 200px;
    height: 93px;
    left: 20px;
    top: 35px;
  }
  .H2layout {
    /* Auto Layout Horizontal */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 11%;
    position: absolute;
    width: 200px;
    height: 93px;
    left: 35px;
    top: 75px;
  }
  #dropdownMenuLink {
    z-index: 4;
    background: #56973e;
    border-radius: 50px;
    position: absolute;
    left: 22px;
    top: -175px;
    box-shadow: 3px 3px 5px rgba(24, 28, 22, 0.1),
      3px 3px 4px rgba(122, 194, 80, 0.4);
  }
  .platz {
    height: 150px;
    width: 90%;
    position: absolute;
    top: 60px;
    left: 5%;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(24, 28, 22, 0.1),
      3px 3px 4px rgba(122, 194, 80, 0.4);
  }
  .list-group-item {
    width: 90%;
    margin: 5%;
    top: 56%;
    padding: 10px;
    border-radius: 10px;
    background: rgba(145, 255, 5, 0.34);
    box-shadow: 3px 3px 3px rgba(163, 177, 198, 0.3),
      2px 2px 2px rgba(122, 194, 80, 0.3);
  }
  .mealname {
    font-size: 12px;
    width: 180px;
    text-align: left;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  .mpic {
    position: absolute;
    height: 65px;
    width: 65px;
    left: 80%;
    top: 10px;
    filter: drop-shadow(-13px 0.97px 20px rgba(51, 160, 0, 0.41));
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(163, 177, 198, 0.3),
      2px 2px 2px rgba(122, 194, 80, 0.3);
  }
  .sblock {
    display: none;
    position: absolute;
    width: 90%;
    right: 5%;
    height: 22%;
    top: 365px;
    background: rgba(145, 255, 5, 0.34);
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(24, 28, 22, 0.2),
      3px 3px 4px rgba(122, 194, 80, 0.3);
  }
  .price {
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.185px;
    line-height: 41px;
    margin-top: 10px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .br:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .br:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br {
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    top: 90px;
  }
  .br:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .bb {
    -webkit-box-align: start;
    top: 90px;
    margin-left: -10px;
    margin-right: 6px;
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    align-items: start;
    justify-content: center;
  }
  .bb:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .bb:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .bb:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .bb:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .list-group-item1 {
    width: 90%;
    margin: 1%;
    align-content: space-between;
    text-align: center;
    margin-right: 2px;
    top: 56%;
    border-radius: 10px;
    text-shadow: 1px 6px 6px lightgreen;
  }
}
@media screen and (min-width: 521px) {
  .space_meals {
    display: block;
    background-color: white;
    height: 400px;
  }
  #d {
    border: 3px solid rgb(116 171 96);
    margin-left: -8%;
    width: 45%;
    font-size: 13px;
    padding-left: 5%;
  }
  .like:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .like:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .like {
    z-index: 4;
    -webkit-box-align: start;
    margin: 0px 1px 10px 3px;
    top: 90px;
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    align-items: start;
    justify-content: center;
  }
  .t {
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }
  .mensainfo {
    font-family: "Roboto", sans-serif;
    z-index: 1;
    text-align: left;
    margin-left: 5px;
    height: 85px;
    width: 230px;
    color: black;
    position: absolute;
    top: 70px;
    left: 12%;
    font-size: 12px;
    backface-visibility: revert;
    font-weight: 600;
    border-radius: 5px;
  }
  .text {
    position: absolute;
    left: 10%;
    margin-right: 30%;
    width: 250px;
    top: 105px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 530;
    font-size: 17px;
    line-height: 41px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .element {
    position: absolute;
    top: 270px;
    left: 22%;
  }
  .weeklymeal {
    gap: 1px 10px;
    padding: 1px 20px 1px 1px;
    position: absolute;
    left: 2%;
    margin-left: 70%;
    width: 200px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .Mon {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .dien {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Mittw {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Donner {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 90px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Frei {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Sams {
    /* Auto Layout Vertical */
    /* Auto layout */
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 70px;
    height: 30.96px;
    background: #cbeebf;
    border-color: white;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0.3rem 0.5rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    transition-duration: 0.4s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  }
  .Hlayout {
    /* Auto Layout Horizontal */
    /* Auto layout */
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 11%;
    position: absolute;
    width: 200px;
    height: 93px;
    left: -100px;
    top: 35px;
  }
  .H2layout {
    /* Auto Layout Horizontal */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 11%;
    position: absolute;
    width: 200px;
    height: 93px;
    left: 190px;
    top: 35px;
  }
  #dropdownMenuLink {
    z-index: 4;
    background: #56973e;
    border-radius: 50px;
    position: absolute;
    left: 30%;
    top: -175px;
    box-shadow: 3px 3px 5px rgba(24, 28, 22, 0.1),
      3px 3px 4px rgba(122, 194, 80, 0.4);
  }
  .platz {
    height: 150px;
    width: 90%;
    position: absolute;
    top: 60px;
    left: 5%;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(24, 28, 22, 0.1),
      3px 3px 4px rgba(122, 194, 80, 0.4);
  }
  .list-group-item {
    width: 90%;
    margin: 5%;
    top: 56%;
    padding: 10px;
    border-radius: 10px;
    background: rgba(145, 255, 5, 0.34);
    box-shadow: 3px 3px 3px rgba(163, 177, 198, 0.3),
      2px 2px 2px rgba(122, 194, 80, 0.3);
  }
  .mealname {
    font-size: 12px;
    width: 180px;
    text-align: left;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  .mpic {
    position: absolute;
    height: 65px;
    width: 65px;
    left: 80%;
    top: 10px;
    filter: drop-shadow(-13px 0.97px 20px rgba(51, 160, 0, 0.41));
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(163, 177, 198, 0.3),
      2px 2px 2px rgba(122, 194, 80, 0.3);
  }
  .sblock {
    display: none;
    position: absolute;
    width: 90%;
    right: 5%;
    height: 22%;
    top: 365px;
    background: rgba(145, 255, 5, 0.34);
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgba(24, 28, 22, 0.2),
      3px 3px 4px rgba(122, 194, 80, 0.3);
  }
  .price {
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.185px;
    line-height: 41px;
    margin-top: 10px;
    /* identical to box height */
    letter-spacing: -0.597208px;
    color: #000000;
  }
  .br:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .br:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .br {
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    top: 90px;
  }
  .br:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .bb {
    -webkit-box-align: start;
    top: 90px;
    margin-left: -10px;
    margin-right: 6px;
    padding: 0.1rem 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    color: White;
    transition-duration: 0.4s;
    background-color: #56973e;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
    align-items: start;
    justify-content: center;
  }
  .bb:hover {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .bb:active {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .bb:active:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .bb:focus {
    color: #56973e;
    background-color: white;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border-color: white;
  }
  .list-group-item1 {
    width: 90%;
    margin: 1%;
    align-content: space-between;
    text-align: center;
    margin-right: 2px;
    top: 56%;
    border-radius: 10px;
    text-shadow: 1px 6px 6px lightgreen;
  }
}
</style>
