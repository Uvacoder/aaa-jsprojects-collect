<template>
  <div>
    <label for="" :class="myLabel">{{ label }}</label>
    <div v-if="readonly">
      <p v-if="selectedValue">
        {{ options.find((option) => option.key == selectedValue).value }}
      </p>
    </div>
    <Multiselect
      v-model="value"
      mode="tags"
      :searchable="true"
      :createTag="true"
      :options="options"
    />
    <option :value="option.value" v-for="(option, i) in options" :key="i">
      {{ option.key }}
    </option>
    <div v-if="helpText">
      <small :class="myhelpText">{{ helpText }}</small>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    Multiselect,
  },
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
    errors: {
      type: Object,
      default: "",
    },
    selectedValue: {
      default: "",
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
      required: true,
    },
  },
  methods: {
    HandleChange(e) {
      console.log(e.target.value);
    },
  },
  // computed: {
  //   optionsType() {
  //     let ot = "string";
  //     if (this.options.length > 0 && typeof this.options[0] !== "string") {
  //       ot = "object";
  //     }
  //  }
  //   },
  
  data() {
    return {
      value: null,
      options: [
        { value: "kv", label: "Kyiv" },
        { value: "ln", label: "London" },
        { value: "ny", label: "New York" },
      ],
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
