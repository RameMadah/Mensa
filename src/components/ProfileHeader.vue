<template>
  <div class="dropdown">
    <a
      class="btn btn-secondary dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img class="hmenu" src="@/assets/icon.png" alt="hmenu" />
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li>
        <router-link to="/"><a class="dropdown-item">Home</a></router-link>
      </li>
      <li>
        <router-link to="/"><a class="dropdown-item">Info</a></router-link>
      </li>
      <li>
        <router-link to="/"><a class="dropdown-item">Profile</a></router-link>
      </li>
    </ul>
  </div>
  <div class="block"></div>
</template>

<script>
export default {
  name: "ProfileHeader",
};
</script>

<style scoped>
/* For Mobile */
@media screen and (max-width: 320px) {
  .hmenu {
    margin-left: -8px;
    margin-top: -3px;
    z-index: 3;
    height: 30px;
    width: 30px;
  }

  #dropdownMenuLink {
    color: white;
    background-color: #56973e;
    border-radius: 50px;
    position: absolute;
    top: -3px;
    left: 5%;
    width: 40px;
    height: 37px;
  }
  .dropdown {
    z-index: 5;
    color: #56973e;
  }

  .block {
    z-index: 1;
    width: 90%;
    height: 7%;
    background: rgba(253, 251, 251, 0.7);
    box-shadow: 0px 0px 2px rgba(1, 1, 1, 0.7),
      3px 3px 4px rgba(22, 22, 80, 0.4);
    position: absolute;
    display: block;
    left: 9px;
    right: 5%;
    top: 10px;
    border-radius: 10px;
  }
}
@media screen and (min-width: 374px) {
  .hmenu {
    margin-left: -8px;
    margin-top: -3px;
    z-index: 3;
    height: 30px;
    width: 30px;
  }

  #dropdownMenuLink {
    color: white;
    background-color: #56973e;
    border-radius: 50px;
    position: absolute;
    top: -3px;
    left: 5%;
    width: 40px;
    height: 37px;
  }
  .dropdown {
    z-index: 5;
    color: #56973e;
  }

  .block {
    z-index: 1;
    width: 90%;
    height: 7%;
    background: rgba(253, 251, 251, 0.7);
    box-shadow: 0px 0px 2px rgba(1, 1, 1, 0.7),
      3px 3px 4px rgba(22, 22, 80, 0.4);
    position: absolute;
    display: block;
    left: 9px;
    right: 5%;
    top: 10px;
    border-radius: 10px;
  }
}
</style>
