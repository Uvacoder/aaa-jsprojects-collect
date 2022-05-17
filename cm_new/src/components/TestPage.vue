<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      Test inputs
    </h1>
   <div class="">
      <div class=" p-6 ">
          <TheTestComponent  />
      </div>
      
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheTestComponent from "./testpage/TheTestComponent.vue";

export default {
  components: {
    TheTestComponent,
  },
};
</script>
