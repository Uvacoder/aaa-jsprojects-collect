<template>
  <div>
    <h1 class="text-xl font-semibold flex justify-center py-4">
      This is a Sidebar
    </h1>
    <div>
        <TheSidebar />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheSidebar from "./Sidebar/TheSidebar.vue";

export default {
  components: {
    TheSidebar
  },
};
</script>
