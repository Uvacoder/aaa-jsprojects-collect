<template>
  <form class="px-4 py-6">
      <div>
       <label>Adress line 1</label>
            <input
              name="AdressLine1"
              id="adress"
              type="text"
              required
              :class="inputClass"
              placeholder=""
            />
      </div>
      <div class="pt-4">
       <label>Adress line 2</label>
            <input
              name="AdressLine2"
              id="adress"
              type="text"
              required
              :class="inputClass"
              placeholder=""
            />
      </div>
       <div class="pt-4">
       <label>Town</label>
            <input
              name="AdressLine2"
              id="adress"
              type="text"
              required
              :class="inputClass"
              placeholder=""
            />
      </div>
       <div class="pt-4">
       <label>Country / State</label>
            <input
              name="AdressLine2"
              id="adress"
              type="text"
              required
              :class="inputClass"
              placeholder=""
            />
      </div>
       <div class="pt-4">
       <label>Postcode</label>
            <input
              name="AdressLine2"
              id="adress"
              type="text"
              required
              :class="inputClass"
              placeholder=""
            />
      </div>
  


  </form>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },
  computed: {
    helpText: function () {
      return "mt-2 text-sm text-red-600";
    },
    inputClass: function () {
      return "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md";
    },
    countryClass: function () {
      return "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md";
    },
    inputClassError: function () {
      return "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md";
    },
    textAreaClass: function () {
      return "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";
    },
    buttonClass: function () {
      return "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
    },
  },

  methods: {
    handleSubmit() {},
  },

  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    hideLabel: {
      type: Boolean,
    },
    type: {
      required: true,
      type: String,
    },
    helpText: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>
