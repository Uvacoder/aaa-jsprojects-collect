<template>
  <label for="" :class="myLabel">{{ label }}</label>
  <Datepicker v-model="time" timePicker />
  <div v-if="helpText">
    <small :class="myhelpText">{{ helpText }}</small>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const time = ref({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    });

    return {
      time,
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
    id: {
      type: String,
      default: "",
      required: true,
    },

    required: {
      Boolean,
      default: false,
    },
  },
};
</script>
