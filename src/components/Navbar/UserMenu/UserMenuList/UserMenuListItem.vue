<script setup lang="ts">
import { language } from "@/stores/languageState";
import { isAuthenticated } from "@/stores/authenticationState";
import frenchFlag from "../../../../assets/french-flag.svg";
import britishFlag from "../../../../assets/uk-flag.svg";
const changeToFrench = "Changer la langue à français";
const changeToEnglish = "Change language to english";
const id = "3";
const changeLanguageState = () => {
  language.languageState == "en"
    ? (language.languageState = "fr")
    : (language.languageState = "en");
  console.log(language.languageState);
};
const changeAuthenticationState = () => {
  isAuthenticated.isAuthenticated = false;
  console.log(isAuthenticated.isAuthenticated);
};
</script>
<template>
  <ul class="links-list user_links-list">
    <li class="user-menu_link underline">
      <router-link :to="`/users/${id}`">Profile</router-link>
    </li>
    <li class="user-menu_link underline">
      <router-link :to="`/users/${id}/edit`">Modify profile</router-link>
    </li>
    <li class="user-menu_link underline">
      <router-link to="/bookmarks">My bookmarks</router-link>
    </li>
    <li class="user-menu_link underline">
      <router-link to="/bookmarks/new-bookmark">Add bookmark</router-link>
    </li>
    <li class="user-menu_link underline">
      <router-link to="/" @click="changeAuthenticationState()"
        >Logout</router-link
      >
    </li>
    <li class="user-menu_link">
      <button
        class="btn language-btn"
        :aria-label="
          language.languageState == `en` ? changeToFrench : changeToEnglish
        "
        @click="changeLanguageState()"
      >
        <img
          :src="language.languageState == `en` ? frenchFlag : britishFlag"
          alt=""
          class="flag"
        />
        {{ language.languageState == `en` ? `Français` : `English` }}
      </button>
    </li>
  </ul>
</template>
<style scoped src="./UserMenuListItem.css"></style>
