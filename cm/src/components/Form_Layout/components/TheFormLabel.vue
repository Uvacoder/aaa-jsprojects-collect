<template>
  <label :for="id" v-bind:class="labelClass">{{ label }}</label>

</template>
<script>


export default {
  props: {
    id: {
      type: String,
    },
    label: {
      type: String
    },
    hideLabel: {
      type: Boolean
    },
  },
  computed: {
    labelClass: function() {
      if(this.hideLabel){
        return 'sr-only';
      }else{
        return 'block text-sm font-medium text-gray-700';
      }
    },
  }
}
</script>