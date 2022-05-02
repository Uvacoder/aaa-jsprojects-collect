<template>
  <div class="">
     <h1 class="text-xl font-semibold flex justify-center py-4 ">
      Select Menus
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
      <div class="border-2 p-6 ">
        <TheSimple />
      </div>
      <div class="border-2 p-6 ">
        <TheSCustom />
      </div>
      <div class="border-2 p-6 ">
        <TheMenuAvatar />
      </div>
 
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheSimple from './SelectMenus/TheSimple.vue';
import TheSCustom from './SelectMenus/TheSCustom.vue';
import TheMenuAvatar from './SelectMenus/TheMenuAvatar.vue';


export default {
  components: {
   TheSimple,
   TheSCustom,
   TheMenuAvatar
  },
};
</script>
