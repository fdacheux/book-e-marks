<script setup lang="ts">
import { ref } from "vue";
// import usersAvatar from "../../assets/10509029_AV.jpg";
// const userAvatar = usersAvatar;
// const userAvatar = usersAvatar ? usersAvatar : undefined;
const userAvatar = undefined;

const isAuthenticated = ref(false);
</script>
<template>
  <nav class="navbar">
    <ul class="links-list">
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li v-if="!isAuthenticated" class="nav-item">
        <button class="btn">Signup</button>
      </li>
      <li v-if="!isAuthenticated" class="nav-item">
        <button class="btn">Login</button>
      </li>
      <li class="nav-item">
        <button
          class="btn btn-user"
          data-bs-toggle="popover"
          aria-label="Show menu for user"
        >
          <img
            v-if="userAvatar"
            :src="userAvatar"
            alt="avatar"
            class="avatar"
          />
          <font-awesome-icon
            icon="fa-solid fa-user"
            class="default-avatar"
            v-else
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
<style scoped src="./NavbarItem.css"></style>
