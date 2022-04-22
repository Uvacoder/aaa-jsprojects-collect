<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4">
      This is the Feeds
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border-2 p-6">
        <TheFeedsSimple/>
      </div>
      <div class="border-2 p-6">
        <TheFeedsStacked />
      </div>
    
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheFeedsSimple from './Feeds/TheFeedsSimple.vue';
import TheFeedsStacked from './Feeds/TheFeedsStacked.vue';


export default {
  components: {
   TheFeedsSimple,
   TheFeedsStacked

  },
};
</script>
