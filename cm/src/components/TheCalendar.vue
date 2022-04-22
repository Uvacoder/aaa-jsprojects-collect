<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      This is the Calendar
    </h1>
    <div class="pb-8">
          <TheCalendarSmall />
    </div>
    <hr>
    <div class="pt-8">
        <TheMonthView />
    </div>
    <hr>
    <div class="pt-8">
        <TheWeekView />
    </div>
    
 

    <router-view></router-view>
  </div>
</template>

<script>
import TheCalendarSmall from './Calendar/TheCalendarSmall.vue';
import TheMonthView from './Calendar/TheMonthView.vue';
import TheWeekView from './Calendar/TheWeekView.vue';

export default {
  components: {
   TheCalendarSmall,
   TheMonthView,
   TheWeekView
  },
};
</script>
