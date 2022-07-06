<template>
  <sticky-top class="app" top="20" :scroll-y="scrollY">
    <div class="block">
      <router-link to="/">
        <img class="us" src="@/assets/user.png" alt="user"
      /></router-link>
      <router-link to="/">
        <img class="inf" src="@/assets/info.png" alt="info" />
      </router-link>
      <router-link to="/">
        <img class="hm" src="@/assets/hom.png" alt="home" />
      </router-link>
    </div>
  </sticky-top>
</template>

<script>
export default {
  name: "MainPanel",
};
</script>

<style scoped>
/* For Mobile */
@media screen and (max-width: 320px) {
  .hm {
    z-index: 2;
    position: absolute;
    left: 120px;
    height: 75px;
    width: 75px;
  }

  .inf {
    z-index: 2;
    left: 260px;
    height: 35px;
    width: 35px;
  }

  .us {
    z-index: 2;
    top: 580px;
    left: 20px;
    height: 35px;
    width: 35px;
  }

  .block {
    z-index: 1;
    width: 100%;
    height: 10%;
    background: rgba(253, 251, 251, 0.7);
    box-shadow: 0px 0px 2px rgba(1, 1, 1, 0.7),
      3px 3px 4px rgba(22, 22, 80, 0.4);
  }

  .app {
    z-index: 3;
    position: relative;
    top: 60%;
  }
}
</style>
