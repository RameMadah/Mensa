<template>
  <div class="block">
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
        <p class="userName" v-if="authState && !authState.isAuthenticated">
          Willkomen
        </p>
        <p class="userName" v-if="authState && authState.isAuthenticated">
          Willkomen {{ claim.name }}
        </p>
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <router-link to="/"><a class="dropdown-item">Home</a></router-link>
        </li>
        <li>
          <router-link to="/InfoPage"
            ><a class="dropdown-item">Mensa Übersicht</a></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><a
              ><router-link
                to="/profile"
                v-if="authState && authState.isAuthenticated"
              >
                <button class="dropdown-item">profile</button>
              </router-link></a
            ></router-link
          >
        </li>
        <li>
          <router-link
            class="dropdown-item"
            to="/login"
            v-if="authState && !authState.isAuthenticated"
            ><button>Login</button></router-link
          >
        </li>
        <li>
          <button
            class="dropdown-item"
            v-if="authState && authState.isAuthenticated"
            v-on:click="logout()"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader",
  data() {
    return {
      claims: [],
      claim: "",
    };
  },
  async created() {
    this.claims = await Object.entries(await this.$auth.getUser()).map(
      (entry) => ({ claim: entry[0], value: entry[1] })
    );
    this.claim = await this.$auth.getUser();
  },
  methods: {
    async logout() {
      await this.$auth.signOut();
    },
  },
};
</script>

<style scoped>
/* For Mobile */
@media screen and (max-width: 320px) {
  .userName {
    color: black;
    position: absolute;
    left: 60px;
    top: 2px;
  }
  .dropdown-toggle::after {
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    display: none;
  }
  .hmenu {
    z-index: 5;
    margin-top: -4px;
    margin-left: -8px;
    height: 30px;
    width: 30px;
  }

  #dropdownMenuLink {
    color: white;
    background-color: #56973e;
    border-radius: 50px;
    position: absolute;
    top: 3px;
    left: 5%;
    width: 40px;
    height: 37px;
    z-index: 8;
  }
  .dropdown {
    z-index: 1;
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
@media screen and (min-width: 321px) {
  .userName {
    color: black;
    position: absolute;
    left: 60px;
    top: 2px;
  }
  .dropdown-toggle::after {
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    display: none;
  }
  .hmenu {
    z-index: 5;
    margin-top: -4px;
    margin-left: -8px;
    height: 30px;
    width: 30px;
  }

  #dropdownMenuLink {
    color: white;
    background-color: #56973e;
    border-radius: 50px;
    position: absolute;
    top: 3px;
    left: 5%;
    width: 40px;
    height: 37px;
    z-index: 8;
  }
  .dropdown {
    z-index: 1;
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
