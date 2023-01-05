<script setup lang="ts">
import ErrorItem from "../../ErrorItem/ErrorItem.vue";
import { postUser } from "@/stores/postUser";
import { ref, type Ref } from "vue";

const isEmailInvalid: Ref<undefined | boolean> = ref(undefined);
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

const MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
const SEVERAL_AT_SIGN = /(\w*@\w*){2,}/;

const controlEmailValidity = () => {
  if (userForm.email.length < 1) {
    isEmailInvalid.value = undefined;
  } else if (
    !MAIL_REGEX.test(userForm.email) ||
    SEVERAL_AT_SIGN.test(userForm.email)
  ) {
    isEmailInvalid.value = true;
  } else {
    isEmailInvalid.value = false;
  }
};

const addClass = (condition: boolean | undefined) => {
  if (condition === undefined) {
    return "";
  } else if (condition) {
    return "invalid";
  } else {
    return "valid";
  }
};

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
    <h1 class="text-center page-title">Create account</h1>
    <form class="signup_form form">
      <div class="label-error_container">
        <label for="email" class="form-label">Email address : </label>
        <div v-if="isEmailInvalid" class="error-alert">
          <p class="error-message">Email is invalid</p>
        </div>
      </div>

      <div class="input-group">
        <span class="input-group-text"
          ><font-awesome-icon
            icon="fa-solid fa-envelope"
            :class="addClass(isEmailInvalid)"
            class="icon"
        /></span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="franz.kafka@mail.com"
          class="form-control"
          :class="addClass(isEmailInvalid)"
          required
          v-model="userForm.email"
          @change="controlEmailValidity()"
          @keydown="controlEmailValidity()"
        />
      </div>

      <label for="password" class="form-label form-label--margin"
        >Password :
      </label>
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
          @touchstart="isPasswordHidden = false"
          @touchend="isPasswordHidden = true"
          ><font-awesome-icon icon="fa-solid fa-eye"
        /></span>
      </div>

      <div class="btn_container">
        <button
          class="btn btn-primary"
          :class="addClass(isEmailInvalid)"
          :disabled="isEmailInvalid || isEmailInvalid === undefined"
          type="submit"
          @click.prevent="submitUserForm(userForm)"
        >
          Create account
        </button>
      </div>
    </form>
    <div class="signup_link text-center">
      <p>Already have an account ? :</p>
      <router-link active-class="not-active-link" to="/auth"
        >Sign-in</router-link
      >
    </div>
    <ErrorItem :message="errorMessage" :url="url" v-if="isErrorDisplayed" />
  </div>
</template>
<style scoped src="./SignupFormItem.css"></style>
