<template>
  <div class="element">
    <p class="weeklymeal">Speiseplan der Woche :</p>
    <div class="Hlayout">
      <button class="Mon">Montag</button>
      <button class="dien">Dienstag</button>
      <button class="Mittw">Mittwoch</button>
    </div>
    <div class="H2layout">
      <button class="Donner">Donnerstag</button>
      <button class="Frei">Freitag</button>
      <button class="Sams">Samstag</button>
    </div>
    <div class="text">Den Tag besondere Rezepte :</div>
  </div>
</template>

<script>
export default {
  name: "DaysOfTheWeek",
};
</script>

<style scoped>
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
  top: 220px;
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
  gap: 5px;
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
  gap: 5px;
  position: absolute;
  width: 200px;
  height: 93px;
  left: 35px;
  top: 75px;
}
</style>
