<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">Country code plugin Maz-UI</h1>
    </div>
    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Library installation from NPM</h1>
      <p class="pt-2 px-2 lg:pl-8 text-base font-normal">"npm i maz-ui"</p>
      <p class="pt-2 px-2 lg:pl-8 text-base font-normal">"npm install libphonenumber-js"</p>
    </div>
    <div></div>

    <div class="pt-8 px-2 lg:px-8">
      <MazPhoneNumberInput
        v-model="phoneNumber"
        show-code-on-list
        color="info"
        :preferred-countries="['UK', 'UKR', 'DE', 'US', 'GB']"
        :ignored-countries="['AC']"
        @update="results = $event"
        :success="results?.isValid"
      />
    </div>
    <div>
      <code>
        {{ results }}
      </code>
    </div>
  </div>
</template>

<script>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
export default {
  components: {
    MazPhoneNumberInput,
  },
  data() {
    return {
      phoneNumber: "",
    };
  },
};
</script>
