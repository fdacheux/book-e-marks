<script setup lang="ts">
import { isAuthenticated } from "@/stores/authenticationState";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import UserMenuItem from "./UserMenu/UserMenuItem.vue";
import LinksGroup from "./LinksGroup/LinksGroupItem.vue";
import ButtonsGroup from "./ButtonsGroup/ButtonsGroupItem.vue";
import HomeBtn from "./HomeButton/HomeBtnItem.vue";
import { ref } from "vue";
// import usersAvatar from "../../assets/10509029_AV.jpg";
// const userAvatar = usersAvatar;
// const userAvatar = usersAvatar ? usersAvatar : undefined;

const expanded = ref(false);
const expandMenu = () => {
  expanded.value = true;
};
const collapseMenu = () => {
  expanded.value = false;
};

const changeAuthState = () => {
  isAuthenticated.isAuthenticated = !isAuthenticated.isAuthenticated;
};

const launchAnimation = ref(false);

const switchAnimation = () => {
  launchAnimation.value = true;
};

const emit = defineEmits(["toggle"]);
</script>
<template>
  <div class="nav-container">
    <div class="layer" @click="emit('toggle')">
      <button
        aria-label="click to close menu"
        class="close-btn"
        @mouseleave="switchAnimation()"
      >
        <font-awesome-icon
          icon="fa-solid fa-circle-xmark"
          class="xmark-icon"
          :class="launchAnimation && `reversed-rotation`"
        />
      </button>
    </div>
    <nav class="navbar">
      <div class="links-list">
        <LinksGroup class="links-group" @click="emit('toggle')" />
        <ButtonsGroup
          v-if="!isAuthenticated.isAuthenticated"
          @showMenu="changeAuthState()"
        />
        <div class="user-menu_container" v-if="isAuthenticated.isAuthenticated">
          <div class="nav-item">
            <UserMenuItem
              class="userMenu"
              :isExpanded="expanded"
              @mouseenter="expandMenu()"
              @mouseleave="collapseMenu()"
              @click="emit('toggle'), (expanded = !expanded)"
            />
          </div>
        </div>
        <HomeBtn v-if="!isAuthenticated.isAuthenticated" />
      </div>
    </nav>
  </div>
</template>
<style scoped src="./NavbarItem.css"></style>
