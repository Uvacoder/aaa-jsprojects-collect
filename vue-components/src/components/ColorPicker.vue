<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">
        Color picker plugin Vue3
      </h1>
    </div>

    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Color Picker</h1>
    </div>
    <div></div>
    <div class="pt-8 px-2 lg:px-8">
      <TheColorPicker
        :id="'colorpicker'"
        :label="'ColorPicker'"
        :name="'ColorPicker'"
        :required="true"
        
      />
    </div>
  </div>
</template>

<script>
import TheColorPicker from "./partials/TheColorPicker.vue";
export default {
  components: {
    TheColorPicker,
  },
};
</script>
