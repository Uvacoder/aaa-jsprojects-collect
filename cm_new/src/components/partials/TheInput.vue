<template>
  <div>
    <Form>
      <div></div>
      <label for="" :class="myLabel">{{ label }}</label>
      <Field
        :type="type"
        :placeholder="placeholder"
        name="my-input"
        :rules="isRequired"
        :class="inputClass"
        id="input"
        :value="modelValue"
        :readonly="boolean"
      />
      
      <ErrorMessage :class="classError" name="my-input" />
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

  props: {
    name: "",
    helpText: "",
    label: "",
    type: {
      required: true,
      type: String,
    },
    id: {
      type: String,
      default: undefined
    },
  
    placeholder: {
      type: String,
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
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return "This is required";
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
