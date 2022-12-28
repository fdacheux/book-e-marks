<script setup lang="ts">
import { ref } from "vue";
import UserMenuButton from "./UserMenuButton/UserMenuButtonItem.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import usersAvatar from "../../assets/10509029_AV.jpg";
// const userAvatar = usersAvatar;
// const userAvatar = usersAvatar ? usersAvatar : undefined;

const emit = defineEmits(["toggle"]);
const isAuthenticated = ref(false);
</script>
<template>
  <div class="nav-container">
    <div class="layer" @click.self="emit('toggle')"></div>
    <nav class="navbar">
      <ul class="links-list">
        <li class="nav-item desktop-link">
          <router-link to="/">Home </router-link>
        </li>
        <li class="nav-item about-link">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <button class="btn btn-signup">Signup</button>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <button class="btn btn-login">Login</button>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <UserMenuButton />
        </li>
        <li class="nav-item mobile-link">
          <router-link to="/" aria-label="click to homepage">
            <font-awesome-icon icon="fa-solid fa-house" class="home-button" />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped src="./NavbarItem.css"></style>
