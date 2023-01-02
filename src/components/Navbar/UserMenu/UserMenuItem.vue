<script setup lang="ts">
import UserMenuButton from "./UserMenuButton/UserMenuButtonItem.vue";
import UserMenuList from "./UserMenuList/UserMenuListItem.vue";
const expanded = defineProps({
  isExpanded: Boolean,
});
</script>
<template>
  <div class="user-menu_container" :class="expanded.isExpanded && `expanded`">
    <UserMenuButton />
    <UserMenuList class="list" :class="!expanded.isExpanded && `hidden`" />
  </div>
</template>
<style scoped src="./UserMenuItem.css"></style>
