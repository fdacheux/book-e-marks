<script setup lang="ts">
const emit = defineEmits(["showMenu"]);
</script>
<template>
  <ul class="button-group">
    <li class="nav-item">
      <button class="btn btn-signup">Signup</button>
    </li>
    <li class="nav-item">
      <button class="btn btn-login" @click="emit('showMenu')">Login</button>
    </li>
  </ul>
</template>
<style scoped src="./ButtonsGroupItem.css"></style>
