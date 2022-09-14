<template>
  <fieldset class="space-y-5">
    <legend class="sr-only">Notifications</legend>
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          :type="type"
          :id="id"
          :name="name"
          :label="labe"
          :readonly="readonly"
          :value="value"
          aria-describedby="comments-description"    
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="comments" class="font-medium text-gray-700">Comments</label>
        <p id="comments-description" class="text-gray-500">
          Get notified when someones posts a comment on a posting.
        </p>
      </div>
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
 
    required: {
      Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: " ",
    },
  },
};
</script>
