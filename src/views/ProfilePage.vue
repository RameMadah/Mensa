<template>
  <div class="space"></div>
  <div class="coulmns"></div>
  <div class="profile">
    <h1 class="ui header">
      <i aria-hidden="true" class="drivers license outline icon"> </i>
      Der Benutzer Profil
    </h1>
    <p>
      Hier können Sie Ihre <code>Lieblingsgerichte </code> mit den Preisen
      anschauen
    </p>
    <table class="ui table">
      <thead>
        <tr class="coulmns">
          <th>Names</th>
          <th>prices</th>
        </tr>
        <tr v-for="like in likes" :key="like.id">
          <th>{{ like.name }}</th>
          <th>{{ like.prices.students }}</th>
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
.coulmns {
  background-color: #56973e;
}
</style>
