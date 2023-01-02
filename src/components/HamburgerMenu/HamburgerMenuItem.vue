<script setup lang="ts">
import { ref } from "vue";
import NavbarItem from "../Navbar/NavbarItem.vue";
const isCollapsed = ref(true);
</script>
<template>
  <div class="mobile-menu-container">
    <div class="container-fluid">
      <button
        @click="isCollapsed = !isCollapsed"
        class="navbar-toggler"
        type="button"
        :data-mdb-toggle="isCollapsed ? 'collapse' : 'show'"
        data-mdb-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        :aria-expanded="isCollapsed ? 'false' : 'true'"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="fa-solid fa-bars" class="bars" />
      </button>
    </div>
    <NavbarItem
      id="navbarToggleExternalContent"
      v-if="isCollapsed == false"
      @toggle="isCollapsed = !isCollapsed"
    />
  </div>
</template>
<style scoped src="./HamburgerMenuItem.css"></style>
