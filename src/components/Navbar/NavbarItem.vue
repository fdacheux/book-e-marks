<script setup lang="ts">
import { isAuthenticated } from "@/stores/authenticationState";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import UserMenuItem from "./UserMenu/UserMenuItem.vue";
// import usersAvatar from "../../assets/10509029_AV.jpg";
// const userAvatar = usersAvatar;
// const userAvatar = usersAvatar ? usersAvatar : undefined;

const emit = defineEmits(["toggle"]);
// const isAuthenticated = ref(false);
</script>
<template>
  <div class="nav-container">
    <div class="layer" @click="emit('toggle')">
      <button aria-label="click to close menu" class="close-btn">
        <font-awesome-icon icon="fa-solid fa-circle-xmark" class="xmark-icon" />
      </button>
    </div>
    <nav class="navbar">
      <ul class="links-list">
        <li
          class="nav-item views-links mobile-link text-link"
          v-if="isAuthenticated.isAuthenticated"
        >
          <router-link to="/">Home </router-link>
        </li>
        <li class="nav-item views-links desktop-link">
          <router-link to="/">Home </router-link>
        </li>
        <li class="nav-item views-links about-link">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li v-if="!isAuthenticated.isAuthenticated" class="nav-item">
          <button class="btn btn-signup">Signup</button>
        </li>
        <li v-if="!isAuthenticated.isAuthenticated" class="nav-item">
          <button
            class="btn btn-login"
            @click="isAuthenticated.isAuthenticated = true"
          >
            Login
          </button>
        </li>
        <li class="nav-item" v-if="isAuthenticated.isAuthenticated">
          <UserMenuItem />
        </li>
        <li
          class="nav-item mobile-link icon-link"
          v-if="!isAuthenticated.isAuthenticated"
        >
          <router-link to="/" aria-label="click to homepage">
            <font-awesome-icon icon="fa-solid fa-house" class="home-button" />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped src="./NavbarItem.css"></style>
