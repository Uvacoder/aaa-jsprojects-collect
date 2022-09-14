<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">Select component</h1>
    </div>
    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Select</h1>
    </div>
    <div></div>
    <div class="pt-8 px-2 lg:px-8">
      <TheSelect
        :id="'Select'"
        :name="'country_code'"
        :options="countries"
        :label="'Countries'"
        v-model="selectedCountries"
        :placeholder="'Select Countries'"
        :selectedValue="'uk'"
        :required="true"
        :readonly="true"
        :errors="{
          email: 'Not valid email',
          country_code: 'Country code doesn exist',
        }"
        :helpText="'Select Country'"
        @onSelect="selectedCountry"
        :multiple="false"
      />
    </div>
    <div class="pt-8 px-2 lg:px-8">
      <div class="pb-8">
        <p>readonly = false</p>
        <p>required = false</p>
        <p>helpText = false</p>
      </div>

      <TheSelect
        :id="'Select_1'"
        :name="'country_code'"
        :options="countries"
        v-model="selectedCountries"
        :placeholder="'Select Countries'"
        :selectedValue="'ca'"
        :required="false"
        :readonly="false"
        :errors="{
          email: 'Not valid email',
          country_code: 'Country code doesn exist',
        }"
        :helpText="false"
        @onSelect="selectedCountry"
        :multiple="false"
      />
    </div>
  </div>
</template>

<script>
import TheSelect from "./partials/TheSelect.vue";

export default {
  data() {
    return {
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

  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
  components: {
    TheSelect,
  },
};
</script>
