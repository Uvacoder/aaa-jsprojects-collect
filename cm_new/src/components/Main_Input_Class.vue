<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 py-6 px-4 sm:px-8 md:px-40 lg:px-56"
  >
    <div>
      <h1 class="pt-12">The "Select" component ---></h1>
    </div>

    <!----------Select Input Component---------->

    <div class="pt-8">
      <TheSelect
        v-model="selectedCountries"
        :options="countries"
        label="Countries"
        placeholder="Select Countries"
        selectedValue="ua"
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

    <div><h1 class="pt-12">The "Main Input" component ---></h1></div>

    <!----------Input 'First Name' Component---------->

    <div class="pt-8">
      <TheInput
        type="text"
        :name="'First_name'"
        id="first_name"
        placeholder="Your first name"
        label="First Name"
        :required="true"
        selectedValue="Alex"
        v-model="selectedName"
        :helpText="false"
      />
    </div>

    <div><h1 class="pt-12">The "Main Input" component ---></h1></div>

    <!----------Input 'Last Name' Component---------->

    <div class="pt-8">
      <TheInput
        type="text"
        :name="'Last_name'"
        id="last_name"
        placeholder="Your last name"
        label="Last Name"
        :required="true"
        selectedValue="Jordan"
        v-model="selectedName"
        :helpText="'Write your last name'"
      />
    </div>

    <div><h1 class="pt-12">The "Password" component ---></h1></div>

    <!----------Input 'Password' Component---------->

    <div class="pt-8">
      <ThePassword
        name="password"
        type="password"
        label="Password"
        :required="true"
        :helpText="false"
      />
    </div>

    <div><h1 class="pt-12">The "Email" component ---></h1></div>

    <!----------Input 'Email' Component---------->

    <div class="pt-8">
      <TheEmail
        name="email"
        type="email"
        label="Email"
        :required="true"
        :helpText="'Please write your email'"
        placeholder="Your email"
      />
    </div>

     <div><h1 class="pt-12">The "Text Area" component ---></h1></div>

    <!----------Input 'Text Area' Component---------->

    <div class="pt-8">
      <TheTextArea
        
      />
    </div>

    <div><h1 class="pt-12">The "Checkbox" component ---></h1></div>

    <!----------The 'Radio' Component---------->

    <div class="pt-8">
      <TheRadio
        
      />
    </div>
     


  </div>
</template>

<script>
import TheSelect from "../components/partials/TheSelect.vue";
import TheInput from "./partials/TheInput.vue";
import ThePassword from "./partials/ThePassword.vue";
import TheEmail from "./partials/TheEmail.vue";
import TheTextArea from "./partials/TheTextArea.vue"
import TheRadio from "./partials/TheRadio.vue"

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
      selectedTextArea:""
    };
  },

  components: {
    TheSelect,
    TheInput,
    ThePassword,
    TheEmail,
    TheTextArea,
    TheRadio
  },
  methods: {},
};
</script>
