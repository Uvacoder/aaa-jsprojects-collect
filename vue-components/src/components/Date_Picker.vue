<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64">
     <div><h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold ">Datepicker plugin Vue3
        </h1></div>
    <div></div>
    <div><h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Style - @vuepic/vue-datepicker/dist/main.css </h1>
    <p class="pt-2 px-2 lg:pl-8 text-base font-normal">Plugin - @vuepic/vue-datepicker</p></div>
    <div></div>
    <div class="pt-8 px-2 lg:px-8">
      <TheDatePicker label="Select Date"/>
    </div>
  </div>
</template>

<script>
import TheDatePicker from './partials/TheDataPicker.vue'
export default {
  
  components: {
    TheDatePicker,
  },
};
</script>
