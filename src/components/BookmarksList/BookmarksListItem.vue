<script setup lang="ts">
const bookmarks = [
  { name: "test", description: "1loremipsum", url: "http://test.com" },
  { name: "test2", description: "2loremipsum", url: "http://test2.com" },
  { name: "test3", description: "3loremipsum", url: "http://test3.com" },
  { name: "test4", description: "4loremipsum", url: "http://test4.com" },
];
</script>
<template>
  <section class="bookmarks_section">
    <h2>Hey user, here are your bookmarks !</h2>
    <div class="card" :key="index" v-for="(bookmark, index) in bookmarks">
      <h3>{{ bookmark.name }}</h3>
      <div>
        <p>{{ bookmark.description }}</p>
      </div>
      <a :href="bookmark.url">Go to {{ bookmark.name }}</a>
    </div>
  </section>
</template>
