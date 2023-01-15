<script setup lang="ts">
import { ref, type Ref } from "vue";
import EmailInput from "../DefaultInputs/EmailInputItem.vue";
import PasswordInput from "../DefaultInputs/PasswordInputItem.vue";
import ErrorItem from "@/components/ErrorItem/ErrorItem.vue";

const isMailValid: Ref<boolean> = ref(false);
const isPasswordValid: Ref<boolean> = ref(false);
const isDefaultFormInvalid: Ref<boolean> = ref(true);
const isErrorDisplayed = ref(false);

const url = "/auth";
const errorMessage = "Failed to signin, please try again later.";

interface IUserData {
  email: string;
  password: string;
}

const userForm = <IUserData>{};

const onEmailChange = (isValid: boolean) => {
  isMailValid.value = isValid;
  isDefaultFormInvalid.value = !(isValid && isPasswordValid.value);
};

const onPasswordChange = (isValid: boolean) => {
  isPasswordValid.value = isValid;
  isDefaultFormInvalid.value = !(isValid && isMailValid.value);
};

const updateEmail = (newValue: string) => {
  userForm.email = newValue;
  console.log(userForm.email);
};

const updatePassword = (newValue: string) => {
  userForm.password = newValue;
  console.log(userForm.password);
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
  } catch {
    isErrorDisplayed.value = true;
  }
};
</script>
<template>
  <div class="signin-form_container">
    <h1 class="text-center page-title">Log in</h1>
    <form class="signin_form">
      <div class="inputs_container">
        <EmailInput
          @toggleMailValidity="onEmailChange"
          @updateMail="updateEmail"
        />
        <PasswordInput
          @togglePasswordValidity="onPasswordChange"
          @updatePassword="updatePassword"
        />
      </div>
      <div class="btn_container">
        <button
          class="btn btn-primary"
          :class="addClass(isDefaultFormInvalid)"
          :disabled="isDefaultFormInvalid"
          type="submit"
          @click.prevent="submitUserForm(userForm)"
        >
          Login
        </button>
      </div>
    </form>
    <div class="signup_link text-center">
      <p>New here ? :</p>
      <router-link class="not-active-link" to="/auth/signup"
        >Create accout</router-link
      >
    </div>

    <ErrorItem :message="errorMessage" :url="url" v-if="isErrorDisplayed" />
  </div>
</template>

<style scoped src="./SigninFormItem.css"></style>
