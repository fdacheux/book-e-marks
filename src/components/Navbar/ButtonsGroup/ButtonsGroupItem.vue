<script setup lang="ts">
const emit = defineEmits(["showMenu"]);
</script>
<template>
  <ul class="button-group">
    <li class="nav-item">
      <router-link to="/auth/signup" class="btn btn-signup">Signup</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/auth" class="btn btn-login" @click="emit('showMenu')"
        >Login</router-link
      >
    </li>
  </ul>
</template>
<style scoped src="./ButtonsGroupItem.css"></style>
