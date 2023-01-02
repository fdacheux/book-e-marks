<script setup lang="ts"></script>

<template>
  <ul class="links-group">
    <li class="nav-item views-links home-link">
      <router-link to="/">Home </router-link>
    </li>
    <li class="nav-item views-links about-link">
      <router-link to="/about" class="nav-link">About</router-link>
    </li>
  </ul>
</template>
<style scoped src="./LinksGroupItem.css"></style>
