<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4">
      Checkboxes
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border-2 p-6">
        <TheListDescription />
      </div>
      <div class="border-2 p-6">
        <TheInlineDescription />
      </div>
       <div class="border-2 p-6">
        <TheListHeadings />
      </div>
       <div class="border-2 p-6">
        <TheListRight />
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheListDescription from './Checkboxes/TheListDescription.vue';
import TheInlineDescription from './Checkboxes/TheInlineDescription.vue';
import TheListHeadings from './Checkboxes/TheListHeadings.vue';
import TheListRight from './Checkboxes/TheListRight.vue';


export default {
  components: {
   TheListDescription,
   TheInlineDescription,
   TheListHeadings,
    TheListRight
  },
};
</script>
