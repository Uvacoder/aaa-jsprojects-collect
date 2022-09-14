<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">
        Table Input Component
      </h1>
    </div>
    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Table-input</h1>
    </div>
    <div class="pt-8 px-2 lg:px-2">
      <TheDynamicInput  />
    </div>
  </div>
</template>

<script>
import TheDynamicInput from "./partials/TheDynamicInput.vue";
export default {
  components: {
    TheDynamicInput,
  },
};
</script>
