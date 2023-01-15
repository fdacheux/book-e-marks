<script setup lang="ts">
import ErrorItem from "../../ErrorItem/ErrorItem.vue";
import { createUser } from "../../../services/auth.service";
import { ref, type Ref } from "vue";
import EmailInput from "../DefaultInputs/EmailInputItem.vue";
import PasswordInput from "../DefaultInputs/PasswordInputItem.vue";
import UserInput from "../DefaultInputs/UserInputItem.vue";
import SuccessfulSignup from "./SuccessfulSignupItem.vue";

const isMailValid: Ref<boolean> = ref(false);
const isPasswordValid: Ref<boolean> = ref(false);
const isUsernameValid: Ref<boolean> = ref(false);
const isDefaultFormInvalid: Ref<boolean> = ref(true);
const isErrorDisplayed = ref(false);
const successfullySignedup = ref(false);

const url = "/auth/signup";
const errorMessage =
  "Something went wrong during subscription, please try again later.";
interface IUserData {
  email: string;
  password: string;
  username: string;
}

const userForm = <IUserData>{};


const onEmailChange = (isValid: boolean) => {
  isMailValid.value = isValid;
  isDefaultFormInvalid.value = !(isValid && isPasswordValid.value && isUsernameValid.value);
};

const onPasswordChange = (isValid: boolean) => {
  isPasswordValid.value = isValid;
  isDefaultFormInvalid.value = !(isValid && isMailValid.value && isUsernameValid.value);
};

const onUsernameChange = (isValid: boolean) => {
  isUsernameValid.value = isValid;
  isDefaultFormInvalid.value = !(isValid && isMailValid.value && isPasswordValid.value);
};

const updateEmail = (newValue: string) => {
  userForm.email = newValue;
  console.log(userForm.email);
};

const updatePassword = (newValue: string) => {
  userForm.password = newValue;
  console.log(userForm.password);
};

const updateUsername = (newValue: string) => {
  userForm.username = newValue;
  console.log(userForm.username);
};

const addClass = (condition: boolean) => {
  console.log(condition);
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
    createUser(userForm);
    successfullySignedup.value = true;
  } catch {
    isErrorDisplayed.value = true;
  }
};

</script>

<template>
  <div class="signup-form_container">
    <h1 class="text-center page-title">Create account</h1>
    <form class="signup_form form" v-if="!successfullySignedup">
      <div class="inputs_container">
        <EmailInput
          @toggleMailValidity="onEmailChange"
          @updateMail="updateEmail"
        />
        <PasswordInput
          @togglePasswordValidity="onPasswordChange"
          @updatePassword="updatePassword"
        />

        <UserInput
        @toggleUsernameValidity="onUsernameChange"
        @updateUsername="updateUsername"
        />

        <div class="btn_container">
          <button
            class="btn btn-primary"
            :class="addClass(isDefaultFormInvalid)"
            :disabled="isDefaultFormInvalid"
            type="submit"
            @click.prevent="submitUserForm(userForm)"
          >
            Create account
          </button>
        </div>
      </div>
    </form>
    <div class="signup_link text-center" v-if="!successfullySignedup">
      <p>Already have an account ? :</p>
      <router-link active-class="not-active-link" to="/auth"
        >Sign-in</router-link
      >
    </div>
    <ErrorItem :message="errorMessage" :url="url" v-if="isErrorDisplayed" />
    <SuccessfulSignup v-if="successfullySignedup"/>
  </div>
</template>

<style scoped src="./SignupFormItem.css"></style>
