<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
     <div><h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold ">Common Input
        </h1></div>
    <div></div>
    <div><h1 class="pt-2 px-2 lg:pl-8 text-base font-normal ">Input names </h1></div>
    <div></div>
    <div class="pt-8 px-2 lg:px-8">
      <TheInput
        type="text"
        :name="'First_name'"
        :id="'first_name'"
        placeholder="Your first name"
        label="First Name"
        :required="true"
        selectedValue="Alex"
        :helpText="false"
        :value="firstname"
        @input="firstname = $event.target.value"
      />
    </div>

  

    <!----------Input 'Last Name' Component---------->

    <div class="pt-8 px-2 lg:px-8">
      <TheInput
        type="text"
        :name="'Last_name'"
        :id="'last_name'"
        placeholder="Your last name"
        label="Last Name"
        :required="true"
        selectedValue="Jordan"
        :helpText="'Write your last name'"
        :value="lastname"
        @input="lastname = $event.target.value"
      />
    </div>
  </div>
</template>

<script>
import TheInput from "./partials/TheInput.vue";
export default {
  components: {
    TheInput,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
    };
  },
};
</script>
