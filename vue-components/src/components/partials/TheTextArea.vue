<template>
  <div>
    <label for="" :class="myLabel">{{ label }}</label>
    <textarea
      cols="30"
      rows="10"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :rules="isRequired"
      :class="inputClass"
      :id="id"
      :value="modelValue"
    />
    <div v-if="helpText">
      <small :class="myhelpText">{{ helpText }}</small>
    </div>
  </div>
</template>
<script>

export default {
  components: {
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
