<script setup lang="ts">
import { ref, type Ref } from "vue";
import InputItem from "./InputItem.vue";

const labelTxt = "Username :";
const inputName = "username";
const inputType = "text";
const usernameIcon = "fa-user";
const usernamePlaceholder = "franzK";

const isUsernameValid: Ref<boolean> = ref(false);

interface IUserData {
  username: string;
}

const userForm = <IUserData>{};
userForm.username = "";

const FORBIDDEN_CHARS = /^[^*|\":<>[\]{}`\\()';@&$^ ]+$/;

const controlUsernameValidity = (e: any): boolean | undefined => {
  const value = e?.target?.value;
  isUsernameValid.value = FORBIDDEN_CHARS.test(value) && value.length >= 3 && value.length < 15;
  value.trim();
  if (!value || value.length < 1) {
    return undefined;
  }
  return FORBIDDEN_CHARS.test(value) && value.length >= 3 && value.length < 15;
};

const onUsernameChange = (e: any) => {
  const username = e?.target?.value;
  userForm.username = username;
  username && switchUsernameErrors(username);
};


const switchUsernameErrors = (username: string) => {
  if (username.length < 3 || username.length > 15) {
    errMsg.value = "Username length must be between 3 to 15 characters !";
  } else if (!FORBIDDEN_CHARS.test(username)) {
    errMsg.value =
      "Username must not contain whitespaces or the following characters : *|\" :<>[\]{}`\\()';@&^$";
  }
};

const errMsg = ref("");

</script>
<template>
  <div class="input_container">
    <InputItem
      :labelTxt="labelTxt"
      :labelFor="inputName"
      :icon="usernameIcon"
      :inputType="inputType"
      :inputName="inputName"
      :inputId="inputName"
      :placeholder="usernamePlaceholder"
      pattern="\w{3,15}"
      required
      :vModel="userForm.username"
      :errorMsg="errMsg"
      :checkValidity="controlUsernameValidity"
      @toggleValidity="$emit('toggleValidity', isUsernameValid)"
      @update:modelValue="onUsernameChange"
    />
  </div>
</template>
<style scoped src="./DefaultInputsItem.css"></style>
