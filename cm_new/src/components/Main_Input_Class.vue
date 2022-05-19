<template>
  <div class="grid grid-cols-2 pt-8 px-6">
    <div></div>

    <!----------Select Input Component---------->

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
        :errors="{
          email: 'Not valid email',
          country_code: 'Country code doesn exist',
        }"
        :helpText="'Select Country'"
        @onSelect="selectedCountry"
      />
    </div>

    <div></div>

    <!----------Input 'First Name' Component---------->

    <div class="pt-8">
      <TheInput
        type="text"
        :name="'First_name'"
        id="first_name"
        placeholder="Your first name"
        label="First Name"
        :required="true"
        :selectedValue="Alex"
        v-model="selectedName"
        :helpText="false"
      />
    </div>

    <div></div>

    <!----------Input 'Last Name' Component---------->

    <div class="pt-8">
      <TheInput
        type="text"
        :name="'Last_name'"
        id="last_name"
        placeholder="Your last name"
        label="Last Name"
        :required="true"
        :selectedValue="Jordan"
        v-model="selectedName"
        :helpText="'Write your last name'"
      />
    </div>

    <div></div>
    <div class="pt-8">
      <ThePassword
        name="password"
        type="password"
        label="Password"
        :required="true"
        :helpText="false"
      />
    </div>
  </div>
</template>

<script>
import FormInput from "../Form/FormInput.vue";
import TheSelect from "../components/partials/TheSelect.vue";
import TheInput from "./partials/TheInput.vue";
import ThePassword from "./partials/ThePassword.vue";

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
      selectedName: "",
    };
  },

  components: {
    FormInput,
    TheSelect,
    TheInput,
    ThePassword,
  },
  methods: {},
};
</script>
