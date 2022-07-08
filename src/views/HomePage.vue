<template>
  <profile-header class="ham"></profile-header>
  <div class="homepage">
    <meal-ingredients></meal-ingredients>
  </div>
</template>

<script>
import MealIngredients from "@/components/MealIngredients";
import ProfileHeader from "@/components/ProfileHeader";
export default {
  name: "HomePage",
  components: {
    ProfileHeader,
    MealIngredients,
  },
};
</script>

<style scoped>
.ham {
  z-index: 6;
}
.homepage {
  width: 320px;
  height: 620px;
}
</style>
