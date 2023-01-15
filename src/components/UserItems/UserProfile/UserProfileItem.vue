<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>
<template>
  <section class="user-profile">
    <h2>Hey user {{ id }}</h2>
    <div class="user-info"></div>
  </section>
</template>
