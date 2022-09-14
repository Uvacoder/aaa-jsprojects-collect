<template>
  <label for="" :class="myLabel">{{ label }}</label>
    <div>
      <Datepicker v-model="date"></Datepicker>
    </div>
</template>

<script>


export default {

  data() {
    return {
      date: null,
    };
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
};
</script>
