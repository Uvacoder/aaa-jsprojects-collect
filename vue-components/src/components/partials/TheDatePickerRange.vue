<template>
  <div class="pb-16">
      <p>multiCalendars</p>
    <Datepicker v-model="date" range multiCalendars />
  </div>
  <div class="pb-8">
      <p>Range usual 1 calendar</p>
    <Datepicker v-model="date" range />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const date = ref();

    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
    });

    return {
      date,
    };
  },
};
</script>
