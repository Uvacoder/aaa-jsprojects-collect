<template>
  <form
    @submit.prevent="handleSubmit"
    class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8"
  >
    <!-- -------First name input--------- -->

  
  </form>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      firstname: "",
    };
  },
  computed: {
    // helpText: function () {
    //   return "mt-2 text-sm text-red-600";
    // }
  },

  methods: {
    handleSubmit() {
      //   console.log("firstname: ", this.firstname);
    },
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
};
</script>
