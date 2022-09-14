<template>
  <div>
    <Form>
      <div></div>
      <label for="" :class="myLabel">{{ label }}</label>
      <div v-if="readonly">
        <p v-if="selectedValue">
          {{ options.find((option) => option.key == selectedValue).value }}
        </p>
      </div>
      <Field
        :type="type"
        :placeholder="placeholder"
        name="my-input"
        :rules="isRequired"
        :class="inputClass"
        :id="id"
        :value="modelValue"
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
      type: String,
      default: "",
      required: true,
    },
    readonly: {
      Boolean,
      default: false,
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
    optionsType() {
      let ot = "string";
      if (this.options.length > 0 && typeof this.options[0] !== "string") {
        ot = "object";
      }
    },
  },
};
</script>
