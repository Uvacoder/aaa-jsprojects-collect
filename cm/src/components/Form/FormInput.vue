<template>
  <div>
    <FormLabel v-if="label" :id="id" :label="label" :hideLabel="hideLabel">
    </FormLabel>
    <div class="mt-1">
      <input
        :type="type"
        :name="id"
        :id="id"
        :class="inputClass"
        :placeholder="yourexample"
      
       
      />
    </div>
    <FormHelpText v-if="helpText" :id="id" :help-text="helpText"></FormHelpText>

   
  </div>
</template>
<script>
import FormHelpText from "./Partials/FormHelpText.vue";
import FormLabel from "./Partials/FormLabel.vue";



export default {
  components: {
    FormLabel,
    FormHelpText,
   
    
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
  data() {
    return {
      types: ["text", "email"],
    };
  },
  mounted() {
    if (!this.types.includes(this.type)) {
      alert(this.type + " NOT OK");
    }
  },
  computed: {
    inputClass: function () {
      return "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";
    },
    labelClass: function () {
      if (this.hideLabel) {
        return "sr-only";
      } else {
        return "block text-sm font-medium text-gray-700";
      }
    },
  },
};
</script>
