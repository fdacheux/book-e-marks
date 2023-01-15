<script setup lang="ts">
import { ref, type Ref } from "vue";
import InputItem from "./InputItem.vue";

const emailLabel = "Email address :";
const emailPlaceholder = "franz.kafka@mail.com";
const inputType = "email";
const emailIcon = "fa-envelope";

interface IUserData {
  email: string;
}

const userForm = <IUserData>{};
userForm.email = "";

const isMailValid: Ref<boolean> = ref(false);
const MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
const SEVERAL_AT_SIGN = /(\w*@\w*){2,}/;

const emits = defineEmits<{
  (e: 'updateMail', value: string): void
  (e: 'toggleMailValidity', value: boolean): void
}>()

const controlEmailValidity = (e: any): boolean | undefined => {
  const value = e?.target?.value;
  isMailValid.value = MAIL_REGEX.test(value) && !SEVERAL_AT_SIGN.test(value);
  if (!value || value.length < 1) {
    return undefined;
  }
  return MAIL_REGEX.test(value) && !SEVERAL_AT_SIGN.test(value);
};

const onEmailChange = (e: any) => {
  const email = e?.target?.value;
  userForm.email = email;
  emits('updateMail', email)
  email && switchMailErrors(email);
};

const switchMailErrors = (email: string) => {
  if (!MAIL_REGEX.test(email)) {
    SEVERAL_AT_SIGN.test(email)
      ? (errMsg.value = "Only one @ at a time !")
      : (errMsg.value = "Mail format invalid.");
  }
};

const errMsg = ref("");
</script>
<template>
  <div class="input_container">
    <InputItem
      :labelTxt="emailLabel"
      :labelFor="inputType"
      :icon="emailIcon"
      :inputType="inputType"
      :inputName="inputType"
      :inputId="inputType"
      :placeholder="emailPlaceholder"
      required
      :vModel="userForm.email"
      :errorMsg="errMsg"
      :checkValidity="controlEmailValidity"
      @toggleValidity="emits('toggleMailValidity', isMailValid)"
      @update:modelValue="onEmailChange"
    />
  </div>
</template>

<style src="./DefaultInputsItem.css"></style>
