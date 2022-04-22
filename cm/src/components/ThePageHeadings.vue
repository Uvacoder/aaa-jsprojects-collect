<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4">
      This is a Page Headings
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border-2 p-6">
        <TheActions />
      </div>
      <div class="border-2 p-6">
        <TheActionsbreadcrumbs />
      </div>
    </div>
    <div class="border-2 p-6 my-4">
      <TheActionsMeta />
    </div>
    <div class="border-2 p-6 my-4">
        <TheActionsBanner />
    </div>
    <div class="border-2 p-6 my-4">
        <TheActionsAvatar />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheActions from "./PageHeadings/TheActions.vue";
import TheActionsbreadcrumbs from "./PageHeadings/TheActionsbreadcrumbs.vue";
import TheActionsMeta from "./PageHeadings/TheActionsMeta.vue";
import TheActionsBanner from "./PageHeadings/TheActionsBanner.vue";
import TheActionsAvatar from "./PageHeadings/TheActionsAvatar.vue";

export default {
  components: {
    TheActions,
    TheActionsbreadcrumbs,
    TheActionsMeta,
    TheActionsBanner,
    TheActionsAvatar
  },
};
</script>
