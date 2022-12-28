<script setup lang="ts">
// import usersAvatar from "../../assets/10509029_AV.jpg";
// const userAvatar = usersAvatar;
// const userAvatar = usersAvatar ? usersAvatar : undefined;
const userAvatar = undefined;
</script>

<template>
  <button
    class="btn btn-user"
    data-bs-toggle="popover"
    aria-label="Show menu for user"
  >
    <img v-if="userAvatar" :src="userAvatar" alt="avatar" class="avatar" />
    <font-awesome-icon icon="fa-solid fa-user" class="default-avatar" v-else />
  </button>
</template>

<style scoped src="./UserMenuButtonItem.css"></style>
