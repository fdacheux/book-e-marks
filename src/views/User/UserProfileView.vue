<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>
<template>
  <section class="user-profile_section">
    <h1>Profile</h1>
    <RouterView></RouterView>
  </section>
</template>
