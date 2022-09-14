<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <!----------Input 'Date' Component---------->
    <div><h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold ">Datepicker plugin Vue3
        </h1></div>
    <div></div>
    <div><h1 class="pt-2 px-2 lg:pl-8 text-base font-normal ">Time Picker </h1></div>
    <div></div>
    <div class="pt-8 px-2 lg:px-8">
      <TheTimePicker
        label="Select Time"
        :name="'timepicker'"
        :id="'time_picker'"
        :helpText="'select your time please'"
      />
    </div>
  </div>
</template>

<script>
import TheTimePicker from "./partials/TheTimePicker.vue";
export default {
  components: {
    TheTimePicker,
  },
  data() {
    return {};
  },
};
</script>
