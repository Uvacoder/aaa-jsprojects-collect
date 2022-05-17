<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Basic Information
          </h3>
        </div>
        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="photo" class="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex items-center">
                <span
                  class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                >
                  <svg
                    class="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <label
                  for="file-upload"
                  class="relative cursor-pointer bg-white rounded-md font-medium p-2 border-2 m-2 text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:pt-5">
            <label>First name</label>
            <input
              name="FirstName"
              id="fname"
              type="text"
              required
              :class="inputClass"
              placeholder=""
            />
            <label>Surname</label>
            <input
              name="SurName"
              id="sname"
              type="text"
              required
              :class="inputClass"
              placeholder=""
            />
            <label>Email</label>
            <input
              name="email"
              id="email"
              type="email"
              required
              :class="inputClass"
              placeholder=""
            />
            <label>Your number</label>
            <div class="relative">
              <input
                class="pl-16"
                type="number"
                name="phone-number"
                id="phone-number"
                v-model="number"
                :class="inputClass"
              />
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="region" class="sr-only"></label>
                <select
                  id="region"
                  name="region"
                  :class="countryClass"
                >
                  <option>UK</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
            </div>

            <label>Status</label>
            <select name="status" id="dropdown" :class="inputClass">
              <option value="developer">Active</option>
              <option value="designer">Inactive</option>
            </select>
          </div>

        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          type="button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
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
      return "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm border-gray-300 rounded-md";
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
