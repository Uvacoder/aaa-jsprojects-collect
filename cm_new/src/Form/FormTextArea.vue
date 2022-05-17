<template>
  <div>
    <label for="comment" class="block text-sm font-medium text-gray-700">Add your comment</label>
    <div class="mt-1">
      <textarea
          :rows="rows"
          :name="id"
          :id="id"
          :class="textAreaClass"
      />
    </div>
    
  </div>
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
    helpText: {
      type: String
    },
    rows: {
      required: true,
      type: Number
    }
  },
  data(){
    return {
      types: [
        'text',
        'email'
      ]
    }
  },
  computed: {
    textAreaClass: function(){
      return 'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md';
    },
  }
}
</script>