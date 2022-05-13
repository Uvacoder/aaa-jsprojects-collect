<template>
  <div>
    <label v-if="label" class="text-sm text-slate-800">{{ label }}</label>
    <input
      
      :value="modelValue"
      :placeholder="placeholder"
      
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


