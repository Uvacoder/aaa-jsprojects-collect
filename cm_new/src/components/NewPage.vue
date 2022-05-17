<template>
  <div class="p-16">
    <div class="root">
      <h2>Create an Account</h2>

      <div>
        <label for="firstname">firstname</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="$v.firstname.$model"
          :class="{
            'is-invalid': $v.firstname.$error,
            'is-valid': !$v.firstname.$invalid,
          }"
        />
        <div class="valid-feedback">Your fname is valid</div>
        <div class="invalid-feedback">
          <span v-if="!$v.firstname.required">First name is required.</span>
          <span v-if="!$v.firstname.minLength"
            >First name must have at least
            {{ $v.firstname.$params.minLength.min }}letters</span
          >
          <span v-if="!$v.firstname.maxLength" 
            >First name must have at most
            {{ $v.firstname.$params.maxLength.max }}letters</span
          >
        </div>
        <label for="lasttname">lastname</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="$v.lastname.$model"
          :class="{
            'is-invalid': $v.lastname.$error,
            'is-valid': !$v.lastname.$invalid,
          }"
        />
        <div class="valid-feedback">Your fname is valid</div>
        <div class="invalid-feedback">
          <span v-if="!$v.lastname.required">Last name is required.</span>
          <span v-if="!$v.lastname.minLength"
            >Last name must have at least
            {{ $v.lastname.$params.minLength.min }}letters</span
          >
          <span v-if="!$v.lastname.maxLength"
            >First name must have at most
            {{ $v.firstname.$params.maxLength.max }}letters</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import useValidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  data() {
    return {
      // v$: useValidate(),
      firstname: "",
      lastname: "",
    };
  },
  validations: {
    firstname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    lastname: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(12),
    },
  },
};
</script>
