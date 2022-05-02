<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4">
      Stacked Lists
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2  gap-4  ">
      <div class="border-2 p-6">
        <TheListAvatarActions />
      </div>
      <div class="border-2 p-6">
        <TheListRight />
      </div>
      <div class="border-2 p-6">
        <TheNarrowAvatar />
      </div>
      <div class="border-2 p-6">
        <TheNarrowAvatar2 />
      </div>
      <div class="border-2 p-6">
        <TheStickyHeadings />
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheListAvatarActions from "./StackedLists/TheListAvatarActions.vue";
import TheListRight from "./StackedLists/TheListRight.vue";
import TheNarrowAvatar from "./StackedLists/TheNarrowAvatar.vue";
import TheNarrowAvatar2 from "./StackedLists/TheNarrowAvatar2.vue";
import TheStickyHeadings from "./StackedLists/TheStickyHeadings.vue";

export default {
  components: {
    TheListAvatarActions,
    TheListRight,
    TheNarrowAvatar,
    TheNarrowAvatar2,
    TheStickyHeadings,
  },
};
</script>
