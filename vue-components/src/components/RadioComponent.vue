<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">Radio component</h1>
    </div>
    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Radio</h1>
    </div>
    <div></div>
    <div class="pt-8 px-2 lg:pl-8">
      <div class="relative bg-white rounded-md -space-y-px">
        <label
          class="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
        >
          <span class="flex items-center text-sm">
            <input
              type="radio"
              name="radio"
              value="Startup"
              checked
              v-model="checked"
              :class="radioButton"
            />
            <span id="pricing-plans-0-label" class="ml-3 font-medium"
              >Startup</span
            >
          </span>
          <span
            id="pricing-plans-0-description-0"
            class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
          >
            <span class="font-medium">$29 / mo</span>

            <span>($290 / yr)</span>
          </span>

          <span
            id="pricing-plans-0-description-1"
            class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
            >Up to 5 active job postings</span
          >
        </label>
      </div>

      <div class="relative bg-white rounded-md -space-y-px">
        <label
          class="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
        >
          <span class="flex items-center text-sm">
            <input
              type="radio"
              name="radio"
              value="Business"
              checked
              v-model="checked"
              :class="radioButton"
            />
            <span id="pricing-plans-0-label" class="ml-3 font-medium"
              >Business</span
            >
          </span>
          <span
            id="pricing-plans-0-description-0"
            class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
          >
            <span class="font-medium">$99 / mo ($990 / yr)</span>
          </span>

          <span
            id="pricing-plans-0-description-1"
            class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
            >Up to 25 active job postings</span
          >
        </label>
      </div>

      <div class="relative bg-white rounded-md -space-y-px">
        <label
          class="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
        >
          <span class="flex items-center text-sm">
            <input
              type="radio"
              name="radio"
              value="Enterprise"
              checked
              v-model="checked"
              :class="radioButton"
            />
            <span id="pricing-plans-0-label" class="ml-3 font-medium"
              >Enterprise</span
            >
          </span>
          <span
            id="pricing-plans-0-description-0"
            class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
          >
            <span class="font-medium">$249 / mo ($2490 / yr)</span>
          </span>

          <span
            id="pricing-plans-0-description-1"
            class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
            >Unlimited active job postings</span
          >
        </label>
      </div>

      <p class="pt-8">Currently checked value: {{ checked }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: "",
    };
  },
  components: {},
  computed: {
    radioButton: function () {
      return "h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500";
    },
  },
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
