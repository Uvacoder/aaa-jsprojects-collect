<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      Text Areas
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div class="border-2 p-6 ">
        <TheSimpleArea />
      </div>
      <div class="border-2 p-6 ">
        <TheTextAreaAvatar />
      </div>
      <div class="border-2 p-6 ">
        <TheAreaTitlePill />
      </div>
      <div class="border-2 p-6 ">
        <TheTextPreview />
      </div>
      
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheSimpleArea from "./TextAreas/TheSimpleArea.vue";
import TheTextAreaAvatar from "./TextAreas/TheTextAreaAvatar.vue";
import TheAreaTitlePill from "./TextAreas/TheAreaTitlePill.vue";
import TheTextPreview from "./TextAreas/TheTextPreview.vue";

export default {
  components: {
    TheSimpleArea,
    TheTextAreaAvatar,
    TheAreaTitlePill,
    TheTextPreview
 
   
  },
};
</script>
