<template>
  <div>
    <label v-if="label" class="text-sm text-slate-800">{{ label }}</label>
    <input
      type="text"
      class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {    
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
     email: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number,],
      default: " ",
    },
     type: {
      required: true,
      type: String,
    },
     placeholder: {
      type: String,
    }
  },
  data() {
    return {
      types: ["text", "email", "phone", "error"],
    };
  },
  computed: {},
};
</script>


