<template>
  <div>
    <label for="" :class="myLabel">{{ label }}</label>
    <div v-if="readonly">
      <p v-if="selectedValue">
        {{ options.find((option) => option.key == selectedValue).value }}
      </p>
    </div>
    <select
      :name="name"
      :id="id"
      :label="label"
      :helpText="hepltext"
      :placeholder="placeholder"
      :class="mySelect"
      @change="HandleChange"
    >
      <option :value="option.value" v-for="(option, i) in options" :key="i">
        {{ option.key }}
      </option>
    </select>

    <div v-if="errors.hasOwnProperty(name)" class="text-warning">
      {{ errors[name] }}
    </div>

    <div v-if="helpText">
      <small :class="myhelpText">{{ helpText }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    id: {
      type: String,
      default: "",
      required: true,
    },
    label: {
      type: String,
      default: "",
      required: true,
    },
    helpText: "",
    errors: {
      type: Object,
      default: "",
    },
    selectedValue: {
      default: "",
    },
    multiple: {
      Boolean,
      default: false,
    },
    required: {
      Boolean,
      default: false,
    },
    readonly: {
      Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
      required: true
    },
  },
  methods: {
    HandleChange(e) {
      console.log(e.target.value);
    },
  },
  computed: {
    optionsType() {
      let ot = "string";
      if (this.options.length > 0 && typeof this.options[0] !== "string") {
        ot = "object";
      }
    },

    mySelect: function () {
      return "mt-1 block w-full pl-3 pr-8 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md";
    },
    myLabel: function () {
      return "block text-sm font-medium text-gray-700";
    },
    myhelpText: function () {
      return "mt-2 text-xs text-gray-500";
    },
  },
};
</script>
