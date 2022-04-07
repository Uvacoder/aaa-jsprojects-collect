<template>
    <div>
      <div class="flex justify-between">
        <label for="phone" class="block text-sm font-medium text-warm-gray-900"
          >Phone</label
        >
        <span id="phone-optional" class="text-sm text-warm-gray-500"
          >Optional</span
        >
      </div>
      <div class="mt-1">
        <input
          type="text"
          name="phone"
          id="phone"
          autocomplete="tel"
          class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
          aria-describedby="phone-optional"
        />
      </div>
    </div>
</template>
