<template>
  <div>
    <FormLabel v-if="label" :id="id" :label="label" :hideLabel="hideLabel">
    </FormLabel>
    <Form>
      <Field
        :type="type"
        :name="name"
        :id="id"
        :class="inputClass"
        :placeholder="placeholder"
        :value="values"
        :rules="isRequired"
      />
    </Form>
    <ErrorMessage :class="classError" name="name" />
    <FormHelpText />
  </div>
</template>
<script>
import FormHelpText from "./Partials/FormHelpText.vue";
import FormLabel from "./Partials/FormLabel.vue";
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  components: {
    FormLabel,
    FormHelpText,
    Field,
    Form,
    ErrorMessage,
  },
  props:  {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    hideLabel: {
      type: Boolean,
    },
    type: {
      required: true,
      type: String,
    },
    helpText: {
      type: String,
    },
    placeholder: {
      type: String,
      required: true
    },
   
 
  },
  data() {
    return {
      types: ["text", "email", "password"],
    };
  },
  mounted() {
    if (!this.types.includes(this.type)) {
      alert(this.type + " NOT OK");
    }
  },
  computed: {
    inputClass: function () {
      return "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";
    },
    classError: function () {
      return "p-4 text-sm text-red-600";
    },
    labelClass: function () {
      if (this.hideLabel) {
        return "sr-only";
      } else {
        return "block text-sm font-medium text-gray-700";
      }
    },
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return "this is required";
    },
  },
};
</script>
