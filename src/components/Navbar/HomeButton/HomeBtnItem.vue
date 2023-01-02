<script setup lang="ts">
import defaultImage from "../../../assets/default-image.png";
</script>
<template>
  <div class="nav-item mobile-link icon-link mt-4">
    <router-link to="/" aria-label="click to homepage" class="home-btn-link">
      <div class="default-logo_container">
        <img :src="defaultImage" class="home-button" />
      </div>
    </router-link>
    <p>Welcome</p>
  </div>
</template>
<style scoped src="./HomeBtnItem.css"></style>
