<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4 ">
      This is an Input Page
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border-2 p-6 ">
        <FormCardAdress />
      </div>
      <div class="border-2 p-6 ">
        <FormCurrency />
      </div>
      <div class="border-2 p-6 ">
        <FormInput 
          id="fname"
          label="First Name"
          type="text"
          placeholder="" />
      </div>
      <div class="border-2 p-6 ">
        <FormInput 
          id="mailIcon" label="Last Name" type="text" />
      </div>
      <div class="border-2 p-6 ">
        <FormInputError />
      </div>
      <div class="border-2 p-6 ">
        <FormNumber />
      </div>
      <div class="border-2 p-6 ">
        <FormSearch />
      </div>
      <div class="border-2 p-6 ">
        <FormTextArea />
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import FormCardAdress from "./Form/FormCardAdress.vue";
import FormCurrency from "./Form/FormCurrency.vue";
import FormInput from "./Form/FormInput.vue";
import FormInputError from "./Form/FormInputError.vue";
import FormNumber from "./Form/FormNumber.vue";
import FormSearch from "./Form/FormSearch.vue";
import FormTextArea from "./Form/FormTextArea.vue";

export default {
  components: {
    FormCardAdress,
    FormCurrency,
    FormInput,
    FormInputError,
    FormNumber,
    FormSearch,
    FormTextArea
  },
};
</script>

