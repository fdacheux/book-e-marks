<script setup lang="ts">
import { ref, type Ref } from "vue";
import InputItem from "./InputItem.vue";

const labelTxt = "Password : ";
const inputType = "password";
const passwordIcon = "fa-lock";

const isPasswordHidden = ref(true);

interface IUserData {
  password: string;
}

const userForm = <IUserData>{};
userForm.password = "";

const isPasswordValid: Ref<boolean> = ref(false);
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

const emits = defineEmits<{
  (e: 'updatePassword', value: string): void
  (e: 'togglePasswordValidity', value: boolean): void
}>()

const controlPasswordValidity = (e: any): boolean | undefined => {
  const value = e?.target?.value;
  isPasswordValid.value = PASSWORD_REGEX.test(value) && value.length > 1 && value.length < 64;
  if (!value || value.length < 1) {
    return undefined;
  }
  return PASSWORD_REGEX.test(value) && value.length > 1 && value.length < 64;
};

const onPasswordChange = (e: any) => {
  const password = e?.target?.value;
  userForm.password = password;
  emits('updatePassword', password)
  password && switchPasswordErrors(password);
};

const switchPasswordErrors = (password: string) => {
  if (password.length < 8 || password.length > 64) {
    errMsg.value = "Password length must be between 8 to 64 characters !";
  } else if (!PASSWORD_REGEX.test(password)) {
    errMsg.value =
      "Password format invalid : password must contain at least one lower and upper case character, one digit, and one special characters";
  }
};

const errMsg = ref("");

</script>

<template>
  <div class="default-inputs_container">
    <div class="input_container">
      <InputItem
        :labelTxt="labelTxt"
        :labelFor="inputType"
        :icon="passwordIcon"
        :inputType="isPasswordHidden ? inputType : `text`"
        :inputName="inputType"
        :inputId="inputType"
        required
        :vModel="userForm.password"
        :errorMsg="errMsg"
        minLength="8"
        maxLength="64"
        :checkValidity="controlPasswordValidity"
        @toggleValidity="emits('togglePasswordValidity', isPasswordValid)"
        @update:modelValue="onPasswordChange"
      >
        <span
          class="input-group-text"
          @mousedown="isPasswordHidden = false"
          @mouseup="isPasswordHidden = true"
          @touchstart="isPasswordHidden = false"
          @touchend="isPasswordHidden = true"
          ><font-awesome-icon icon="fa-solid fa-eye"
        /></span>
      </InputItem>
    </div>
  </div>
</template>
<style scoped src="./DefaultInputsItem.css"></style>
