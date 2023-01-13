<script setup lang="ts">
import { ref, type Ref } from "vue";
import InputItem from "./InputItem.vue";

const emailLabel = "Email address :";
const emailPlaceholder = "franz.kafka@mail.com";

const isMailValid: Ref<boolean> = ref(false);

const onEmailChange = (isValid: boolean) => {
  isMailValid.value = isValid;
  emit("toggleValidity", isValid);
};

const emit = defineEmits(["toggleValidity"]);

interface IUserData {
  email: string;
}

const userForm = <IUserData>{};
userForm.email = "";

const MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
const SEVERAL_AT_SIGN = /(\w*@\w*){2,}/;

const controlEmailValidity = (e: any): boolean | undefined => {
  const value = e?.target?.value;
  if (!value || value.length < 1) {
    return undefined;
  }
  return MAIL_REGEX.test(value) && !SEVERAL_AT_SIGN.test(value);
};

const switchMailErrors = () => {
  if (SEVERAL_AT_SIGN.test(userForm.email)) {
    return "Only one @ at a time !";
  } else if (!MAIL_REGEX.test(userForm.email)) {
    return "Mail format invalid.";
  }
};
const errMsg = switchMailErrors();
</script>
<template>
  <div class="input_container">
    <InputItem
      :labelTxt="emailLabel"
      labelFor="email"
      icon="fa-envelope"
      inputType="email"
      inputName="email"
      inputId="email"
      :placeholder="emailPlaceholder"
      required
      :vModel="userForm.email"
      :errorMsg="errMsg"
      :checkValidity="controlEmailValidity"
      @toggleValidity="onEmailChange"
    />
  </div>
</template>

<style src="./DefaultInputsItem.css"></style>
