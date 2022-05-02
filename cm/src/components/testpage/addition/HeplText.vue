<template>
  <p class="mt-2 text-sm text-red-600" id="email-error">
    Your password must be less than 4 characters.
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
};
</script>
