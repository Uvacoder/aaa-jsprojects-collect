<template>
  <fieldset>
    <legend class="sr-only">Pricing plans</legend>
    <div class="relative bg-white rounded-md -space-y-px">
      <label class="rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none">
        <span class="flex items-center text-sm">
          <input
            :type="type"
            :name="name"
            :label="label"
            :value="value"
            class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            aria-labelledby="pricing-plans-0-label"
            aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1"
          />
          <span id="pricing-plans-0-label" class="ml-3 font-medium">Startup</span>
        </span>
        <span id="pricing-plans-0-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
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
  </fieldset>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
    label: {
      type: String,
      default: "",
      required: true,
    },
    type: {
      type: String,
      default: "",
      required: true,
    },
    readonly: {
      Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
      required: true,
    },
    required: {
      Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: " ",
    },
   }
}
</script>
