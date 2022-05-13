<template>
  <!-- <div class="grid grid-cols-2 px-4 pt-8">
    <div>
      <h1>First Name:</h1>
    </div>
    <div class="mt-4">
      <FormInput
        type="text"
        id="fname"
        label="First Name"
        placeholder="First name"
      />
    </div>
    <div>
      <h1>First Name:</h1>
    </div>
    <div class="mt-4">
      <FormInput type="text" id="lname" label="Last Name" />
    </div>
    <div>
      <h1>First Name:</h1>
    </div>
    <div class="mt-4">
      <FormInput type="text" id="email" label="Email" />
    </div>
    <div>
      <h1>First Name:</h1>
    </div>
    <div class="mt-4">
      <FormInput type="password" id="password" label="Password" />
    </div>
  </div> -->
  <!-- <div class="grid grid-cols-2 px-4 pt-8">
  </div> -->

  <div class="grid grid-cols-2 pt-8 px-6">
    <div></div>

      <div class="pt-8">
        <TheSelect
          v-model="selectedCountries"
          :options="countries"
          label="Countries"
          placeholder="Select Countries"
          :selectedValue="ua"
          :name="'country_code'"
          :required="true"
          :readonly="true"
          :errors="{'email': 'Not valid email', 'country_code':'Country code doesn exist'}"
          :helpText="'Select Country'"
          @onSelect="selectedCountry"
        />
      </div>
  </div>
</template>

<script>
// import FormInput from "./Form/FormInput.vue";
import TheSelect from "../components/TheSelect.vue";

export default {
  data() {
    return {
      languages: ["English", "Ukraine", "Spanish"],
      selectedLanguages: "",
      countries: [
        { key: "ua", value: "Ukraine" },
        { key: "pl", value: "Poland" },
        { key: "uk", value: "United Kingdom" },
        { key: "usa", value: "United States" },
        { key: "ca", value: "Canada" },
      ],
      selectedCountries: "",
    };
  },

  components: {
    // FormInput,
    TheSelect,
  },
  methods: {},
};
</script>
