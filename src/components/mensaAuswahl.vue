<template>
  <div>
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
        <li>
          <router-link to="/"><a class="dropdown-item">Berlin</a></router-link>
        </li>
        <li>
          <router-link to="/"
            ><a class="dropdown-item">Brandenburg</a></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><a class="dropdown-item">Saarland</a></router-link
          >
        </li>
      </ul>
    </div>
    <img class="platz" src="@/assets/img.png" alt="platz" />
  </div>
</template>

<script>
export default {
  name: "mensaAuswahl",
};
</script>

<style scoped>
/* For Mobile */
@media screen and (max-width: 320px) {
  #dropdownMenuLink {
    background: #56973e;
    border-radius: 50px;
    position: absolute;
    top: -1px;
    left: -12px;
    box-shadow: 3px 3px 5px rgba(24, 28, 22, 0.1),
      3px 3px 4px rgba(122, 194, 80, 0.4);
  }
  .dropdown {
    position: absolute;
    z-index: 1;
    top: 146px;
    left: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14.24px;
    width: 135px;
    color: white;
    height: 33.96px;
    background: #56973e;
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
}
</style>
