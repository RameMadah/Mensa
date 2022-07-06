<template>
  <div class="homepage">
    <profile-header></profile-header>
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
.homepage {
  width: 320px;
  height: 620px;
}
</style>
