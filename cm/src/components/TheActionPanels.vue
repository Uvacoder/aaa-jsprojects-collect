<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      Action Panels
    </h1>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border-2 p-6 ">
          <TheSimpleAction />
      </div>
      <div class="border-2 p-6 ">
          <TheActionSimpleWell />
      </div>
      <div class="border-2 p-6 ">
          <TheActionToggle />
      </div>
      <div class="border-2 p-6 ">
          <TheActionPayment />
      </div>
      <div class="border-2 p-6 ">
          <TheActionInput />
      </div>
      <div class="border-2 p-6 ">
          <TheActionButton />
      </div>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheActionButton from './ActionPanels/TheActionButton.vue';
import TheActionInput from './ActionPanels/TheActionInput.vue';
import TheActionPayment from './ActionPanels/TheActionPayment.vue';
import TheActionToggle from './ActionPanels/TheActionToggle.vue';
import TheActionSimpleWell from './ActionPanels/TheActionSimpleWell.vue';
import TheSimpleAction from './ActionPanels/TheSimpleAction.vue';


export default {
  components: {
      TheActionButton,
        TheActionInput,
        TheActionPayment,
        TheActionToggle,
        TheActionSimpleWell,
        TheSimpleAction
  },
};
</script>
