<script setup lang="ts">
const props = defineProps({
  message: String,
  url: String,
});
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h3>An error has occured</h3>
      <div>
        <p>{{ props.message }}</p>
        <p>
          Sorry for the inconvenience, if the problem persists, let us know.
        </p>
      </div>
      <span
        ><a :href="props.url">Refresh page</a> or
        <a href="/">Go to homepage</a></span
      >
    </div>
    <div class="close-btn">
      <button class="btn btn-danger" aria-label="Close error window">X</button>
    </div>
  </div>
</template>
