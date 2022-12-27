<script setup lang="ts">
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/NavbarItem.vue";
</script>
<template>
  <header>
    <img :src="logo" alt="" class="img-thumbnail" />
    <Navbar />
  </header>
</template>
<style scoped src="./HeaderItem.css"></style>
