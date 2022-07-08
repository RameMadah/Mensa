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
          <th>Claim</th>
          <th>Value</th>
        </tr>
        <tr v-for="like in likes" :key="like.id">
          {{
            like.name
          }}
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
    var rk = await db
      .collection("meals")
      .get()
      .then((meals) => {
        return meals;
      });
    this.likes = rk;
  },
};
</script>

<style scoped>
.space {
  height: 60px;
}
</style>
