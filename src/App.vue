<template>
  <profile-header></profile-header>

  <nav class="mainnav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader";

export default {
  name: "app",
  components: { ProfileHeader },
  methods: {
    async logout() {
      await this.$auth.signOut();
    },
  },
};
</script>

<style>
.mainnav {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 320px;
  height: 620px;
}
* {
  padding: 0;
  margin: 0;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
