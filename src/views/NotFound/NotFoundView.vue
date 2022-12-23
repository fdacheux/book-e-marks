<script setup lang="ts">
import pageNotFoundWebp from "../../assets/404.webp";
import pageNotFoundPng from "../../assets/404.png";
</script>
<template>
  <main>
    <h1 class="m-3">The page you asked for does not seem to exist ...</h1>
    <picture>
      <source :srcset="pageNotFoundWebp" type="image/webp" />
      <img :src="pageNotFoundPng" alt="404 page not found" />
    </picture>
    <div class="link">
      <router-link to="/" class="my-4">Bring me back home</router-link>
    </div>
  </main>
</template>

<style scoped src="./NotFoundView.css"></style>
