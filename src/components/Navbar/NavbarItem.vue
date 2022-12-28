<script setup lang="ts">
import { ref } from "vue";
import UserMenuButton from "./UserMenuButton/UserMenuButtonItem.vue";
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
      </ul>
    </nav>
  </div>
</template>
<style scoped src="./NavbarItem.css"></style>
