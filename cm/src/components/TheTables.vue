<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      Tables
    </h1>
    <div class="grid grid-cols-1 gap-8">
      <div class="border-2 p-6 ">
        <MainTable />
      </div>
      <div class="border-2 p-6 ">
        <TableSimple />
      </div>
      <div class="border-2 p-6 ">
        <TableAvatars />
      </div>
      <div class="border-2 p-6 ">
        <TableTransactions />
      </div>
        <div class="border-2 p-6 ">
        <TableInvoice />
      </div>
        <div class="border-2 p-6 ">
        <TablePlans />
      </div>
      
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TableAvatars from "./Tables/TableAvatars.vue";
import TableInvoice from "./Tables/TableInvoice.vue";
import TablePlans from "./Tables/TablePlans.vue";
import TableSimple from "./Tables/TableSimple.vue";
import TableTransactions from "./Tables/TableTransactions.vue";
import MainTable from './Tables/MainTable.vue';

export default {
  components: {
    TableAvatars,
    TableInvoice,
    TablePlans,
    TableSimple,
    TableTransactions,
    MainTable
   
  },
};
</script>
