<template>
  <div>
    <h1 class="text-xl font-semibold flex justify-center py-4">
      This is the Descriptions List
    </h1>
    <div>
        <TheDescriptionsLeftaligned />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheDescriptionsLeftaligned from "./DescriptionLists/TheDescriptionsLeftaligned.vue"

export default {
  components: {
    TheDescriptionsLeftaligned
  },
};
</script>