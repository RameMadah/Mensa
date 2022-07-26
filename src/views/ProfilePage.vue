<template>
  <div class="space"></div>
  <div class="profile">
    <h1 class="ui header">
      <i aria-hidden="true" class="drivers license outline icon"> </i>
      My User Profile (ID Token Claims)
    </h1>
    <p>
      This route is protected with the <code>onAuthRequired</code>, navigation
      guard which will ensure that this page cannot be accessed until you have
      authenticated.
    </p>
    <table class="ui table">
      <thead>
        <tr>
          <th>Names</th>
          <th>prices</th>
        </tr>
        <tr v-for="like in likes" :key="like.id">
          <th>{{ like.name }}</th>
          <th>{{ like.prices }}</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import Localbase from "localbase";

let db = new Localbase("db");
export default {
  name: "ProfilePage",
  data() {
    return {
      claims: [],
      likes: [],
    };
  },
  async created() {
    this.claims = await Object.entries(await this.$auth.getUser()).map(
      (entry) => ({ claim: entry[0], value: entry[1] })
    );
  },
  async mounted() {
    var lk = await db
      .collection("meals")
      .get()
      .then((like) => {
        return like;
      });
    this.likes = lk;
  },
};
</script>

<style scoped>
.space {
  height: 60px;
}
</style>
