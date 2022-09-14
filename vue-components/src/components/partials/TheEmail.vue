<template>
  <div>
    <Form>
      
      <label for="" :class="myLabel">{{ label }}</label>
      <Field
        :class="inputClass"
        name="email"
        type="email"
        :rules="validateEmail"
        :placeholder="placeholder"
        :value="modelValue"
      />
      <ErrorMessage :class="classError" name="email" />

      <div v-if="helpText">
        <small :class="myhelpText">{{ helpText }}</small>
      </div>
    </Form>
  </div>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    validateEmail(value) {
      if (!value) {
        return "This field is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },
  },
  //   data() {
  //     return {
  //       emailRules: yup.string().required().email(),
  //     };
  //   },
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
    helpText: {
      type: String,
      default: "",
      required: true,
    },
    label: {
      type: String,
      default: "",
      required: true,
    },
    type: {
      required: true,
      type: String,
    },
    id: {
      type: String,
      default: "",
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
      required: true,
    },
    required: {
      Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: " ",
    },
  },

  computed: {
    classError: function () {
      return "pt-4 text-sm text-red-600";
    },
    inputClass: function () {
      return "shadow-sm block w-full sm:text-sm border-gray-300 rounded-md";
    },
    myLabel: function () {
      return "block text-sm font-medium text-gray-700 pb-2";
    },
  },
};
</script>
