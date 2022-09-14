<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
     <div><h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold ">Email component
        </h1></div>
    <div></div>
    <div><h1 class="pt-2 px-2 lg:pl-8 text-base font-normal ">Email input </h1></div>
    <div></div>
    <div class="pt-8 px-2 lg:px-8">
      <TheEmail
        name="email"
        type="email"
        label="Email"
        :required="true"
        :helpText="'Please write your email'"
        placeholder="Your email"
        :value="selectedemail"
        @input="selectedemail = $event.target.value"
      />
    </div>
  </div>
</template>

<script>
import TheEmail from "./partials/TheEmail.vue";
export default {
  data() {
    return {
      selectedemail: "",
    };
  },
  components: {
    TheEmail,
  },
};
</script>
