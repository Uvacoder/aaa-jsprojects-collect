<template>
  <p class="mt-2 text-sm text-gray-500" :id="helpTextId">{{ helpText }}</p>
</template>
<script>
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
    helpText: {
      required: true,
      type: String
    },
  },
  computed: {
    helpTextId: function() {
      return this.id + '-help-text';
    }
  }
}
</script>