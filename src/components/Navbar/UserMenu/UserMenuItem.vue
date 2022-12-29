<script setup lang="ts">
import { ref } from "vue";
import UserMenuButton from "./UserMenuButton/UserMenuButtonItem.vue";
import UserMenuList from "./UserMenuList/UserMenuListItem.vue";
const expanded = ref(false);
const toggleMenu = () => {
  expanded.value = !expanded.value;
};
</script>
<template>
  <div class="user-menu-container">
    <UserMenuButton @toggleMenu="toggleMenu()" />
    <UserMenuList v-if="expanded" class="list" />
  </div>
</template>
<style scoped src="./UserMenuItem.css"></style>
