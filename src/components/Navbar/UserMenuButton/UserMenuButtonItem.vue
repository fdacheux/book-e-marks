<script setup lang="ts">
// import usersAvatar from "../../../assets/10509029_AV.jpg";
import { ref } from "vue";
import usersAvatar from "../../../assets/nain.png";
// const userAvatar = usersAvatar;
const userAvatar = usersAvatar ? usersAvatar : undefined;
// const userAvatar = undefined;
const username = ref("Jean-Eudes");
</script>

<template>
  <div class="btn-user-container">
    <button
      class="btn btn-user"
      data-bs-toggle="popover"
      aria-label="Show menu for user"
    >
      <img v-if="userAvatar" :src="userAvatar" alt="avatar" class="avatar" />
      <font-awesome-icon
        icon="fa-solid fa-user"
        class="default-avatar"
        v-else
      />
    </button>
    <div class="username">
      <p>{{ username }}</p>
    </div>
  </div>
</template>

<style scoped src="./UserMenuButtonItem.css"></style>
