<template>
  <div>
    <h1 class="text-xl font-semibold flex justify-center py-4">Pagination</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border-2 p-6">
        <TheCardFooter />
      </div>
      <div class="border-2 p-6">
        <TheCenteredNumber />
      </div>

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheCardFooter from "./Pagination/TheCardFooter.vue";
import TheCenteredNumber from "./Pagination/TheCenteredNumber.vue";


export default {
  components: {
    TheCardFooter,
    TheCenteredNumber,
    
  },
};
</script>
