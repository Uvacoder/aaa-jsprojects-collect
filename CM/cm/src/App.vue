<template>
  <div>
    <form
      action="#"
      method="POST"
      class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <TheFirstName />
      <TheLastName />
      <TheEmail />
      <ThePhone />
      <TheSubject />
      <TheMessage />
      <TheButton />
    </form>
  </div>
</template>

<script>

import TheFirstName from './components/TheFirstName.vue'
import TheLastName from './components/TheLastName.vue'
import TheEmail from './components/TheEmail.vue'
import ThePhone from './components/ThePhone.vue'
import TheSubject from './components/TheSubject.vue'
import TheMessage from './components/TheMessage.vue'
import TheButton from './components/TheButton.vue'

export default {
  components: {
   TheFirstName,
    TheLastName,
    TheEmail,
    ThePhone,
    TheSubject,
    TheMessage,
    TheButton,
 },
  
};
</script>
