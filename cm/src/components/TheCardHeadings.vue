<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      This is the Card Headings
    </h1>
    <div>
      <div class=" border-2 p-6 ">
        <TheCardSimple />
      </div>
      <div class="mt-8 border-2 p-6 ">
          <TheCardAvatar />
      </div>
    </div>
 

    <router-view></router-view>
  </div>
</template>

<script>
import TheCardSimple from "./CardHeadings/TheCardSimple.vue"
import TheCardAvatar from "./CardHeadings/TheCardAvatar.vue"

export default {
  components: {
   TheCardSimple,
   TheCardAvatar
  
  },
};
</script>
