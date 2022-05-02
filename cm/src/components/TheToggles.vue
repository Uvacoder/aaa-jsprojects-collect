<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4">Toggles</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h1 class="font-semibold pb-2">Simple toggle</h1>
        <div class="flex justify-center border-2 p-6">
          <TheSimpleToggle />
        </div>
      </div>
      <div>
        <h1 class="font-semibold pb-2">Short toggle</h1>
        <div class="flex justify-center border-2 p-6">
          <TheShortToggle />
        </div>
      </div>
        <div>
        <h1 class="font-semibold pb-2">Toggle with icon</h1>
        <div class="flex justify-center border-2 p-6">
          <TheToggleIcon />
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheSimpleToggle from "./Toggles/TheSimpleToggle.vue";
import TheShortToggle from "./Toggles/TheShortToggle.vue";
import TheToggleIcon from "./Toggles/TheToggleIcon.vue";

export default {
  components: {
    TheSimpleToggle,
    TheShortToggle,
    TheToggleIcon
  },
};
</script>
