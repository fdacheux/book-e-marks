<script setup lang="ts">
import ErrorItem from "../../ErrorItem/ErrorItem.vue";
import { postUser } from "@/stores/postUser";
import { ref } from "vue";

const isPasswordHidden = ref(true);
const isErrorDisplayed = ref(false);
const url = "/auth/signup";
const errorMessage =
  "Something went wrong during subscription, please try again later.";
interface IUserData {
  email: string;
  password: string;
}

const userForm = <IUserData>{};

const submitUserForm = (userForm: IUserData) => {
  try {
    console.log(userForm);
    postUser(userForm);
  } catch {
    isErrorDisplayed.value = true;
  }
};
</script>
<template>
  <div class="signup-form_container">
    <h2>Create account</h2>
    <form class="signup_form form m-5">
      <label for="email" class="form-label">Email address: </label>
      <div class="input-group">
        <span class="input-group-text"
          ><font-awesome-icon icon="fa-solid fa-envelope"
        /></span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="franz.kafka@mail.com"
          class="form-control"
          required
          v-model="userForm.email"
        />
      </div>
      <label for="password" class="form-label">Password: </label>
      <div class="input-group">
        <span class="input-group-text"
          ><font-awesome-icon icon="fa-solid fa-lock"
        /></span>
        <input
          minlength="8"
          maxlength="32"
          :type="isPasswordHidden ? `password` : `text`"
          name="password"
          id="password"
          class="form-control"
          required
          v-model="userForm.password"
        />
        <span
          class="input-group-text"
          @mousedown="isPasswordHidden = false"
          @mouseup="isPasswordHidden = true"
          ><font-awesome-icon icon="fa-solid fa-eye"
        /></span>
      </div>
      <div class="col-12">
        <button
          class="btn btn-primary"
          type="submit"
          @click.prevent="submitUserForm(userForm)"
        >
          Create account
        </button>
      </div>
    </form>
    <div class="signup_link">
      <p>Already have an account ? :</p>
      <router-link to="/auth">Log-in</router-link>
    </div>
    <ErrorItem :message="errorMessage" :url="url" v-if="isErrorDisplayed" />
  </div>
</template>
<style scoped></style>
