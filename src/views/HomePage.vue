<template>
  <profile-header class="ham"></profile-header>
  <meal-ingredients></meal-ingredients>
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
</style>
