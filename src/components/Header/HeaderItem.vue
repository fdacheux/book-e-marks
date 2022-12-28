<script setup lang="ts">
import logo from "../../assets/logo.png";
import DesktopMenu from "./DesktopMenu/DesktopMenuItem.vue";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenuItem.vue";
</script>
<template>
  <header>
    <HamburgerMenu class="burger-menu" />
    <img :src="logo" alt="" class="img-thumbnail" />
    <DesktopMenu class="desktop-menu" />
  </header>
</template>
<style scoped src="./HeaderItem.css"></style>
