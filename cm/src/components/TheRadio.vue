<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      This is a Radio Page
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border-2 p-6 ">
        <RadioListRight />
      </div>
      <div class="border-2 p-6 ">
        <RadioSimpleList />
      </div>
      <div class="border-2 p-6 ">
        <Card />
      </div>
      <div class="border-2 p-6 ">
        <RadioListDescroption />
      </div>
      <div class="border-2 p-6 ">
        <Table />
      </div>
      <div class="border-2 p-6 ">
        <TablePanel />
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Card from "./Radio/Card.vue";
import RadioListDescroption from "./Radio/RadioListDescroption.vue";
import RadioListRight from "./Radio/RadioListRight.vue";
import RadioSimpleList from "./Radio/RadioSimpleList.vue";
import Table from "./Radio/Table.vue";
import TablePanel from "./Radio/TablePanel.vue";

export default {
  components: {
    Card,
    RadioListDescroption,
    RadioListRight,
    RadioSimpleList,
    Table,
    TablePanel,
  },
};
</script>
