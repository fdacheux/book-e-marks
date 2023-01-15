<script setup lang="ts">
import type { icon } from "@fortawesome/fontawesome-svg-core";
import { ref, type Ref } from "vue";

const isInvalid: Ref<undefined | boolean> = ref(undefined);
const isDisplayed: Ref<boolean> = ref(false);
const inputProps = defineProps<{
  labelTxt: string;
  labelFor: string;
  icon: string;
  inputType: string;
  inputName: string;
  inputId: string;
  placeholder?: string;
  required?: true;
  vModel: string;
  errorMsg: string | undefined;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
  checkValidity: (value: string) => boolean | undefined;
}>();

const emit = defineEmits(["toggleValidity", "update:modelValue"]);
const inputActions = (modelValue: string) => {
  const valid = inputProps.checkValidity(modelValue);
  isDisplayed.value = valid === undefined ? true : !valid;
  emit("update:modelValue", modelValue);
  isInvalid.value = valid === undefined ? undefined : !valid;
  emit("toggleValidity", valid);
};

const errMsgDisplayed = () => {
  if (isInvalid.value) {
    return (isDisplayed.value = true);
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
</script>
<template>
  <div class="input_container">
    <label :for="labelFor" class="form-label">{{ labelTxt }} </label>
    <div class="input-group">
      <span class="input-group-text"
        ><font-awesome-icon
          :icon="icon"
          :class="addClass(isInvalid)"
          class="icon"
      /></span>
      <input
        :type="inputType"
        :name="inputName"
        :id="inputId"
        :placeholder="placeholder"
        class="form-control"
        :class="addClass(isInvalid)"
        :required="required"
        :v-model="vModel"
        @input="inputActions"
        @focus="errMsgDisplayed"
        @blur="isDisplayed = false"
      />
      <slot></slot>
    </div>
    <div class="error_container">
      <div v-if="isDisplayed" class="error-alert">
        <div class="arrow"></div>
        <p class="error-message">{{ errorMsg }}</p>
      </div>
    </div>
  </div>
</template>

<style src="./DefaultInputsItem.css"></style>
